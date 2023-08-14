import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Não Encontrado!</h2>
      <p>Não foi possível encontrar o recurso solicitado.</p>
      <Link href="/">Voltar para página inicial</Link>
    </div>
  );
}
