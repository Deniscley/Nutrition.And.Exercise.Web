import "./gallery-template.css";

export default function GalleryTemplate() {
  const galleryLength = 8;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push({ id: i });
  }

  return (
    <>
      <div className="gallery">
        <div className="container gallery__container">
          {images.map(({ id }, index) => {
            return (
              <article key={index}>
                <img
                  src={`/gallery/${id}.jpg`}
                  alt={`Gallery Image ${id}`}
                  width={460}
                  height={350}
                />
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
