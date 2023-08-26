import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact-template.css";

export default function ContactTemplate() {
  return (
    <>
      <div className="contact">
        <div className="container contact__container">
          <h1 className="contact contact__h1">Fale Conosco</h1>
          <div className="contact__wrapper">
            <a
              href="mailto:support@xxx.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/xxxx"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+xxx"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
