import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="container notfound-error__container">
        <h2>Não Encontrado!</h2>
        <p>Não foi possível encontrar o recurso solicitado.</p>
        <Link href="/" className="btn">
          Voltar para página inicial
        </Link>
      </div>
    </div>
  );
}
