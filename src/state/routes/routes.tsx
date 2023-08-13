import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Routes() {
  const isActive = usePathname();
  const activeNav = "active-nav";

  return (
    <ul className="nav__links">
      <li>
        <Link href="/" className={isActive === "/" ? activeNav : ""}>
          Página inicial
        </Link>
      </li>
      <li>
        <Link href="/about" className={isActive === "/about" ? activeNav : ""}>
          Sobre
        </Link>
      </li>
      <li>
        <Link
          href="/gallery"
          className={isActive === "/gallery" ? activeNav : ""}
        >
          Galeria
        </Link>
      </li>
      <li>
        <Link href="/plans" className={isActive === "/plans" ? activeNav : ""}>
          Planos
        </Link>
      </li>
      <li>
        <Link
          href="/trainers"
          className={isActive === "/trainers" ? activeNav : ""}
        >
          Treinos
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={isActive === "/contact" ? activeNav : ""}
        >
          Contato
        </Link>
      </li>
    </ul>
  );
}
