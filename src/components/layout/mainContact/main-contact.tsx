import "./main-contact.css";

export default function MainContact() {
  return (
    <section className="contact">
      <h2>Fale Conosco</h2>
      <h5>
        Quer saber mais sobre nossos serviços ou tem alguma ideia parar deixar
        nosso atendimento ainda mais incrível? <br />
        Conta para gente!
      </h5>
      <div className="container contact__container">
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="contact__form"
        >
          <input type="text" name="Name" placeholder="Nome Completo"></input>
          <input
            type="email"
            name="Email"
            placeholder="Endereço de Email"
          ></input>
          <textarea rows={7} name="Message" placeholder="Mensagem"></textarea>
          <div className="contact__btn-container">
            <button type="submit" className="btn lg">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
