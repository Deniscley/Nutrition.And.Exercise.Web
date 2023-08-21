import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link href="/" className="logo">
            <Image
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
              <FaFacebook />
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
          <h4>Permalinks</h4>
          <Link href="/sobre"></Link>
          <Link href="/galeria"></Link>
          <Link href="/planos"></Link>
          <Link href="/treinos"></Link>
          <Link href="/contato"></Link>
        </article>
        <article>
          <h4>Insights</h4>
          {/* <Link href="/sobre"></Link>
          <Link href="/galeria"></Link>
          <Link href="/planos"></Link>
          <Link href="/treinos"></Link> */}
          <Link href="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link href="/contato">Contact Us</Link>
          <Link href="/treinos">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          2023 Denis Laureano - Nutrição e Exercício &copy; Todos os Direitos
          Reservados
        </small>
      </div>
    </footer>
  );
}
