"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Algo deu errado!</h2>
        <button onClick={() => reset()}>Tente novamente</button>
      </body>
    </html>
  );
}
