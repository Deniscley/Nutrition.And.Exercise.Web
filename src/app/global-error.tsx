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
        <div className="container notfound-error__container">
          <h2>Algo deu errado!</h2>
          <button className="btn" onClick={() => reset()}>
            Tente novamente
          </button>
        </div>
      </body>
    </html>
  );
}
