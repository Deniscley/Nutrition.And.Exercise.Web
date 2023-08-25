import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css";
import WhatsappButton from "../whatsappButton/whatsapp-button";

export default function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link href="/" className="logo">
            <img
              src="/logoSimbolo.png"
              alt="Footer Logo"
              width={90}
              height={90}
            />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            voluptas, sapiente ipsa itaque deleniti illo porro consequuntur modi
            unde ducimus ipsam!
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineYoutube />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Explore</h4>
          <Link href="/sobre">Sobre</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/treinos">Treinos</Link>
          <Link href="/contato">Contato</Link>
        </article>
        <article>
          <h4>Sobre nós</h4>
          <Link href="/s">FAQs</Link>
        </article>
        <article>
          <h4>Suporte</h4>
          <Link href="/contato">Contato</Link>
          <Link href="/treinos">Treinos</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          2023 Denis Laureano - Nutrição e Exercício &copy; Todos os Direitos
          Reservados
        </small>
      </div>
      <WhatsappButton />
    </footer>
  );
}
