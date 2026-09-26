import { CalendarCheck, Check, Mail, MapPin } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../i18n";
import { services } from "../data/portfolio";

const apiUrl = import.meta.env.VITE_API_URL || "/api";

// Stable (English) value used for storage/submission; label is localized.
const referralOptions = [
  { value: "Instagram", label: { en: "Instagram", es: "Instagram" } },
  { value: "Referral", label: { en: "Referral", es: "Recomendación" } },
  { value: "Google", label: { en: "Google", es: "Google" } },
  { value: "Event", label: { en: "Event", es: "Evento" } },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: services[0].title.en,
  date: "",
  location: "",
  referral: "Instagram",
  message: "",
  // Honeypot: hidden from people, filled in by naive bots. The API ignores such posts.
  website: "",
};

const fieldMessages = {
  name: { en: "Add your name so I know who to reply to.", es: "Agrega tu nombre para saber a quién responder." },
  email: { en: "Enter a valid email address.", es: "Escribe un correo válido." },
  message: { en: "Tell me a little about the session.", es: "Cuéntame un poco sobre la sesión." },
};

function BookingForm() {
  const { t } = useLang();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const panelRef = useRef(null);
  const headingRef = useRef(null);

  const isConfirmed = status === "success";
  const submitting = status === "submitting";
  // After sending, the summary shows what was sent, not the (reset) form.
  const summary = isConfirmed && submitted ? submitted : form;

  const selectedService = useMemo(
    () => services.find((s) => s.title.en === summary.projectType) || services[0],
    [summary.projectType],
  );

  // On narrow screens the confirmation sits below the form: bring it into view.
  useEffect(() => {
    if (!isConfirmed || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [isConfirmed]);

  const update = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
    if (fieldErrors[name]) setFieldErrors(({ [name]: _removed, ...rest }) => rest);
    if (status !== "idle" && status !== "submitting") setStatus("idle");
  };

  const handleChange = (event) => update(event.target.name, event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setFieldErrors({});
    try {
      const response = await fetch(`${apiUrl}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(form);
        setStatus("success");
        setForm((current) => ({ ...initialForm, projectType: current.projectType }));
      } else if (response.status === 400) {
        const body = await response.json().catch(() => ({}));
        setFieldErrors(Object.fromEntries(Object.keys(body.errors || {}).map((key) => [key, true])));
        setStatus("invalid");
      } else if (response.status === 429) {
        setStatus("throttled");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("offline");
    }
  };

  const errorFor = (name) =>
    fieldErrors[name] ? (
      <span className="field-error" id={`${name}-error`}>
        {t(fieldMessages[name] || { en: "Please check this field.", es: "Revisa este campo." })}
      </span>
    ) : null;

  const invalidProps = (name) =>
    fieldErrors[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

  return (
    <div className="booking-experience">
      <section className="package-column" aria-labelledby="packages-label">
        <span className="section-label" id="packages-label">
          {t({ en: "Choose a Package", es: "Elige un Paquete" })}
        </span>
        <div className="package-list">
          {services.map((service) => (
            <button
              className={service.title.en === form.projectType ? "is-selected" : ""}
              type="button"
              key={service.number}
              aria-pressed={service.title.en === form.projectType}
              onClick={() => update("projectType", service.title.en)}
            >
              <span>
                <strong>{t(service.title)}</strong>
                <small>{t(service.duration)}</small>
              </span>
              <em>{service.price}</em>
            </button>
          ))}
        </div>
        <div className="booking-note">
          <CalendarCheck size={18} strokeWidth={1.7} aria-hidden="true" />
          <p>
            {t({
              en: "I usually shoot Tuesday through Saturday. A 30% deposit holds your date.",
              es: "Suelo fotografiar de martes a sábado. Un anticipo del 30% reserva tu fecha.",
            })}
          </p>
        </div>
      </section>

      <form className="booking-form" onSubmit={handleSubmit}>
        <span className="section-label">{t({ en: "Session Details", es: "Detalles de la Sesión" })}</span>
        <label>
          {t({ en: "Full Name", es: "Nombre Completo" })}
          <input name="name" value={form.name} onChange={handleChange} placeholder="Alex Morgan" autoComplete="name" required {...invalidProps("name")} />
          {errorFor("name")}
        </label>
        <label>
          {t({ en: "Email", es: "Correo" })}
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@example.com" autoComplete="email" required {...invalidProps("email")} />
          {errorFor("email")}
        </label>
        <label>
          {t({ en: "Phone (optional)", es: "Teléfono (opcional)" })}
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (809) 555-0123" autoComplete="tel" />
        </label>
        <label>
          {t({ en: "Session Type", es: "Tipo de Sesión" })}
          <select name="projectType" value={form.projectType} onChange={handleChange}>
            {services.map((service) => (
              <option value={service.title.en} key={service.number}>
                {t(service.title)}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t({ en: "Preferred Date", es: "Fecha Preferida" })}
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder={t({ en: "Jul 15 or flexible", es: "15 jul. o flexible" })}
          />
        </label>
        <label>
          {t({ en: "Location", es: "Ubicación" })}
          <input name="location" value={form.location} onChange={handleChange} placeholder="Santo Domingo" />
        </label>
        <label className="form-wide">
          {t({ en: "How did you hear about me?", es: "¿Cómo me encontraste?" })}
          <select name="referral" value={form.referral} onChange={handleChange}>
            {referralOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {t(option.label)}
              </option>
            ))}
          </select>
        </label>
        <label className="form-wide">
          {t({ en: "Tell me about your session", es: "Cuéntame sobre tu sesión" })}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t({
              en: "Share your vision, timeline, mood, people, and any references...",
              es: "Comparte tu visión, fechas, mood, personas y cualquier referencia...",
            })}
            rows="5"
            required
            {...invalidProps("message")}
          />
          {errorFor("message")}
        </label>
        <label className="form-honeypot" aria-hidden="true">
          Website
          <input name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </label>
        <button className="button button-primary form-wide" type="submit" disabled={submitting}>
          {submitting ? t({ en: "Sending...", es: "Enviando..." }) : t({ en: "Send Booking Request", es: "Enviar Solicitud" })}
        </button>

        <div className="form-wide" aria-live="assertive">
          {status === "invalid" && (
            <p className="form-status error">
              {t({ en: "Please check the highlighted fields and try again.", es: "Revisa los campos marcados e intenta de nuevo." })}
            </p>
          )}
          {status === "throttled" && (
            <p className="form-status error">
              {t({
                en: "Too many requests from this connection. Please wait a little and try again.",
                es: "Demasiadas solicitudes desde esta conexión. Espera un poco e inténtalo de nuevo.",
              })}
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">
              {t({ en: "Something went wrong. Please try again in a moment.", es: "Algo salió mal. Inténtalo de nuevo en un momento." })}
            </p>
          )}
          {status === "offline" && (
            <p className="form-status error">
              {t({
                en: "Couldn't reach the server. Check your connection and try again — your details are still here.",
                es: "No pude conectar con el servidor. Revisa tu conexión e inténtalo de nuevo: tus datos siguen aquí.",
              })}
            </p>
          )}
        </div>
      </form>

      <aside
        className={`confirmation-panel ${isConfirmed ? "is-confirmed" : ""}`}
        aria-live="polite"
        ref={panelRef}
      >
        <div className="confirmation-icon" aria-hidden="true">
          {isConfirmed ? <Check size={34} strokeWidth={1.6} /> : <CalendarCheck size={30} strokeWidth={1.6} />}
        </div>
        <span className="section-label">{t({ en: "Confirmation", es: "Confirmación" })}</span>
        <h2 ref={headingRef} tabIndex={-1}>
          {isConfirmed ? t({ en: "You're all set.", es: "¡Listo!" }) : t({ en: "Ready when you are.", es: "Cuando quieras." })}
        </h2>
        <p>
          {isConfirmed
            ? t({ en: "Got it — your request is in. I'll reply with availability very soon.", es: "¡Listo, recibí tu solicitud! Te escribo con la disponibilidad muy pronto." })
            : t({ en: "Choose a package, share a few details, and I'll reply with availability.", es: "Elige un paquete, comparte algunos detalles y te responderé con disponibilidad." })}
        </p>
        <dl>
          <div>
            <dt>{t({ en: "Session", es: "Sesión" })}</dt>
            <dd>{t(selectedService.title)}</dd>
          </div>
          <div>
            <dt>{t({ en: "Starting at", es: "Desde" })}</dt>
            <dd>{selectedService.price}</dd>
          </div>
          <div>
            <dt>{t({ en: "Date", es: "Fecha" })}</dt>
            <dd>{summary.date || t({ en: "Flexible", es: "Flexible" })}</dd>
          </div>
        </dl>
        <div className="confirmation-contact">
          <span>
            <MapPin size={15} strokeWidth={1.7} aria-hidden="true" />
            {summary.location || t({ en: "Santo Domingo or on location", es: "Santo Domingo o en locación" })}
          </span>
          {summary.email && (
            <span>
              <Mail size={15} strokeWidth={1.7} aria-hidden="true" />
              {t({ en: "Reply to", es: "Respuesta a" })} {summary.email}
            </span>
          )}
        </div>
        {isConfirmed && (
          <p className="form-status success">
            {t({ en: "Saved to the studio inbox.", es: "Guardado en la bandeja del estudio." })}
          </p>
        )}
      </aside>
    </div>
  );
}

export default BookingForm;
