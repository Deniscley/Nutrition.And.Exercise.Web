import "./whatsapp-button.css";

export default function WhatsappButton() {
  return (
    <div className="whatsapp-button">
      <a href="https://wa.me/55" target="_blank">
        <img
          src="/images/whatsapp.png"
          width={55}
          alt="Fale Conosco pelo WhatsApp"
          title="Fale Conosco pelo WhatsApp"
        />
      </a>
    </div>
  );
}
