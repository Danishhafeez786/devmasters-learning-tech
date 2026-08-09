import Container from "../common/Container";

function StudentGallery({ gallery }) {
  return (
    <section
      id="student-gallery"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Student Gallery
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Learning In Action
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A glimpse into our practical training sessions,
            workshops, seminars and student activities.
          </p>

        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >

              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <span className="text-xs font-bold uppercase tracking-wide text-teal-700">
                  {item.category}
                </span>

                <h3 className="mt-2 text-base font-black text-slate-950">
                  {item.title}
                </h3>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default StudentGallery;