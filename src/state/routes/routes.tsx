import Link from "next/link";

export default function Routes() {
  return (
    <ul className="nav_links">
      <li>
        <Link href="/">Página inicial</Link>
      </li>
      <li>
        <Link href="/about">Sobre</Link>
      </li>
      <li>
        <Link href="/contact">Contato</Link>
      </li>
      <li>
        <Link href="/gallery">Galeria</Link>
      </li>
      <li>
        <Link href="/plans">Planos</Link>
      </li>
      <li>
        <Link href="/trainers">Treinos</Link>
      </li>
      <li>
        <Link href="/notFound">Não encontrado</Link>
      </li>
    </ul>
  );
}
