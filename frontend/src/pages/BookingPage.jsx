import BookingForm from "../components/BookingForm";
import Reveal from "../components/Reveal";
import { useLang } from "../i18n";

function BookingPage() {
  const { t } = useLang();

  return (
    <>
      <section className="page-hero">
        <Reveal className="page-hero-copy">
          <span className="section-label">{t({ en: "Reserve a Session", es: "Reserva una Sesión" })}</span>
          <h1>
            {t({
              en: "Tell me what you're building, and I'll shape the session around it.",
              es: "Cuéntame qué estás creando y daré forma a la sesión a tu alrededor.",
            })}
          </h1>
          <p>
            {t({
              en: "Choose a package, share your timeline, and send a booking request. Each inquiry is saved and answered personally.",
              es: "Elige un paquete, comparte tus fechas y envía una solicitud. Cada mensaje se guarda y se responde personalmente.",
            })}
          </p>
        </Reveal>
      </section>

      <section className="section-shell booking-section">
        <BookingForm />
      </section>
    </>
  );
}

export default BookingPage;
