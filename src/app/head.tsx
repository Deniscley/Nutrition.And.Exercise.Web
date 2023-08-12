import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Denis Laureano - Nutrição e Exercício</title>
        <meta
          property="og:title"
          content="Denis Laureano - Nutrição e Exercício"
          key="title"
        />
      </Head>
      <Head>
        <meta property="og:type" content="website" key="type" />
      </Head>
      <p>
        Bem-vindo(a) a melhor plataforma para sua saúde e qualidade de vida!
      </p>
    </div>
  );
}

export default IndexPage;
