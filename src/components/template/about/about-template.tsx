import "./about-template.css";

export default function AboutTemplate() {
  return (
    <>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img
              src="/pexels-alesia-kozik.jpg"
              width={1000}
              height={480}
              alt="Our Story Image"
            />
          </div>
          <div className="about__section-content">
            <h1>Nossa História</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab
              accusantium autem, itaque est adipisci dolores corrupti sequi
              tempore velit molestias reprehenderit ducimus quisquam excepturi
              vel laudantium fugiat eaque. Quasi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              consequatur perspiciatis facilis iure. Illum ducimus id iusto nisi
              adipisci nesciunt, debitis, possimus maiores blanditiis magni, nam
              suscipit minus illo esse.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              facilis est temporibus veritatis! Enim repellendus odit voluptates
              aut laboriosam. Quia, architecto. Necessitatibus optio sit
              praesentium alias quia excepturi modi quas?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Nossa Visão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              nulla quaerat expedita in amet iusto quas. Sequi ratione
              doloremque earum amet facere impedit illum voluptate eum doloribus
              nihil. Enim, eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos provident odio repudiandae enim officiis sapiente
              tenetur doloremque veritatis voluptatem. Recusandae harum,
              praesentium porro dolores minus ex perferendis quos officia. Ex!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sed, molestiae veritatis consectetur similique ducimus deleniti
              illum consequuntur modi delectus hic. Molestias minus earum, harum
              velit quasi saepe cum a!
            </p>
          </div>
          <div className="about__section-image">
            <img
              src="/ivan-samkov.jpg"
              alt="Our Vision Image"
              width={1000}
              height={480}
            />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img
              src="/jesper-aggergaard.jpg"
              alt="Our Mission Image"
              width={1000}
              height={480}
            />
          </div>
          <div className="about__section-content">
            <h1>Nossa Missão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab
              accusantium autem, itaque est adipisci dolores corrupti sequi
              tempore velit molestias reprehenderit ducimus quisquam excepturi
              vel laudantium fugiat eaque. Quasi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              consequatur perspiciatis facilis iure. Illum ducimus id iusto nisi
              adipisci nesciunt, debitis, possimus maiores blanditiis magni, nam
              suscipit minus illo esse.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              facilis est temporibus veritatis! Enim repellendus odit voluptates
              aut laboriosam. Quia, architecto. Necessitatibus optio sit
              praesentium alias quia excepturi modi quas?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
