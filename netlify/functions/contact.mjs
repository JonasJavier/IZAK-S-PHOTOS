import { getStore } from "@netlify/blobs";

// Netlify replacement for the Django `/api/contact/` endpoint. It keeps the same
// request/response contract so the React booking form works unchanged.

const RECEIVED_MESSAGE = "Your booking request has been received. I'll reply with availability shortly.";

// Field name -> [model field, max length, required]. Mirrors api/models.py.
const FIELDS = {
  name: ["name", 120, true],
  email: ["email", 254, true],
  phone: ["phone", 40, false],
  projectType: ["project_type", 120, false],
  date: ["preferred_date", 120, false],
  location: ["location", 160, false],
  referral: ["referral", 60, false],
  message: ["message", 5000, false],
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status) => Response.json(body, { status });

function validate(data) {
  const errors = {};
  const clean = {};
  for (const [key, [field, maxLength, required]] of Object.entries(FIELDS)) {
    const raw = data[key];
    if (raw !== undefined && raw !== null && typeof raw !== "string") {
      errors[key] = ["Not a valid string."];
      continue;
    }
    const value = (raw || "").trim();
    if (required && !value) errors[key] = ["This field may not be blank."];
    else if (value.length > maxLength) errors[key] = [`Ensure this field has no more than ${maxLength} characters.`];
    else clean[field] = value;
  }
  if (!errors.email && !EMAIL_PATTERN.test(clean.email)) errors.email = ["Enter a valid email address."];
  return { errors, clean };
}

export default async (req, context) => {
  if (req.method !== "POST") {
    return json({ detail: `Method "${req.method}" not allowed.` }, 405);
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return json({ status: "error", message: "Invalid JSON body." }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return json({ status: "error", message: "Invalid JSON body." }, 400);
  }

  // Honeypot: the form hides a `website` field from people. Bots that fill it
  // get the normal success response, but nothing is stored.
  if (String(data.website || "").trim()) {
    return json({ status: "received", message: RECEIVED_MESSAGE }, 201);
  }

  const { errors, clean } = validate(data);
  if (Object.keys(errors).length) {
    return json({ status: "error", message: "Please review the highlighted fields.", errors }, 400);
  }

  const createdAt = new Date().toISOString();
  const id = `${createdAt}-${crypto.randomUUID().slice(0, 8)}`;
  const inquiry = { id, ...clean, is_handled: false, created_at: createdAt };
  await getStore("booking-inquiries").setJSON(id, inquiry);

  return json({ status: "received", message: RECEIVED_MESSAGE, id, inquiry }, 201);
};

export const config = {
  path: ["/api/contact", "/api/contact/"],
  method: ["POST"],
  // Netlify answers 429 once a client exceeds this, like the Django throttle did.
  rateLimit: { windowLimit: 5, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
