import { CalendarCheck, Check, Mail, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
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
};

function BookingForm() {
  const { t } = useLang();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const selectedService = useMemo(
    () => services.find((s) => s.title.en === form.projectType) || services[0],
    [form.projectType],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch(`${apiUrl}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("success");
        setForm((current) => ({ ...initialForm, projectType: current.projectType }));
      } else if (response.status === 400) {
        setStatus("invalid");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("offline");
    }
  };

  const isConfirmed = status === "success";
  const submitting = status === "submitting";

  return (
    <div className="booking-experience">
      <section className="package-column" aria-label="Packages">
        <span className="section-label">{t({ en: "Choose a Package", es: "Elige un Paquete" })}</span>
        <div className="package-list">
          {services.map((service) => (
            <button
              className={service.title.en === form.projectType ? "is-selected" : ""}
              type="button"
              key={service.number}
              onClick={() => setForm((c) => ({ ...c, projectType: service.title.en }))}
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
          <CalendarCheck size={18} strokeWidth={1.7} />
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
          <input name="name" value={form.name} onChange={handleChange} placeholder="Alex Morgan" required />
        </label>
        <label>
          {t({ en: "Email", es: "Correo" })}
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@example.com" required />
        </label>
        <label>
          {t({ en: "Phone", es: "Teléfono" })}
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (809) 123-4567" />
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
            placeholder={t({ en: "July 15, 2026 or flexible", es: "15 de julio, 2026 o flexible" })}
          />
        </label>
        <label>
          {t({ en: "Location", es: "Ubicación" })}
          <input name="location" value={form.location} onChange={handleChange} placeholder="Santo Domingo" />
        </label>
        <label>
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
          />
        </label>
        <button className="button button-primary form-wide" type="submit" disabled={submitting}>
          {submitting ? t({ en: "Sending...", es: "Enviando..." }) : t({ en: "Send Booking Request", es: "Enviar Solicitud" })}
        </button>

        {status === "invalid" && (
          <p className="form-status error form-wide">
            {t({ en: "Please check your name and email, then try again.", es: "Revisa tu nombre y correo, e intenta de nuevo." })}
          </p>
        )}
        {status === "error" && (
          <p className="form-status error form-wide">
            {t({ en: "Something went wrong. Please try again in a moment.", es: "Algo salió mal. Inténtalo de nuevo en un momento." })}
          </p>
        )}
        {status === "offline" && (
          <p className="form-status error form-wide">
            {t({
              en: "Couldn't reach the server. Please try again, or email me at hello@izaksphotos.com.",
              es: "No pude conectar con el servidor. Vuelve a intentarlo o escríbeme a hello@izaksphotos.com.",
            })}
          </p>
        )}
      </form>

      <aside className={`confirmation-panel ${isConfirmed ? "is-confirmed" : ""}`} aria-live="polite">
        <div className="confirmation-icon" aria-hidden="true">
          {isConfirmed ? <Check size={34} strokeWidth={1.6} /> : <CalendarCheck size={30} strokeWidth={1.6} />}
        </div>
        <span className="section-label">{t({ en: "Confirmation", es: "Confirmación" })}</span>
        <h2>{isConfirmed ? t({ en: "You're all set.", es: "¡Listo!" }) : t({ en: "Ready when you are.", es: "Cuando quieras." })}</h2>
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
            <dd>{form.date || t({ en: "Flexible", es: "Flexible" })}</dd>
          </div>
        </dl>
        <div className="confirmation-contact">
          <span>
            <Mail size={15} strokeWidth={1.7} />
            {form.email || "hello@izaksphotos.com"}
          </span>
          <span>
            <MapPin size={15} strokeWidth={1.7} />
            {form.location || "Santo Domingo"}
          </span>
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
