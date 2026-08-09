import {
  Image as ImageIcon,
} from "lucide-react";

import Container from "../common/Container";

function GalleryGrid({
  categories,
  activeCategory,
  setActiveCategory,
  images,
  onImageClick,
}) {
  return (
    <section
      id="gallery"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>

        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
            Gallery Collection
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Moments Worth Remembering
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Browse moments from our institute, training sessions,
            student activities, seminars and practical projects.
          </p>

        </div>

        {/* Filters */}

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

          {categories.map((category) => {

            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  active
                    ? "bg-teal-700 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

        {/* Results */}

        {images.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 py-20 text-center">

            <ImageIcon
              size={40}
              className="mx-auto text-slate-300"
            />

            <p className="mt-4 text-sm font-semibold text-slate-500">
              No images available in this category.
            </p>

          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

            {images.map((item, index) => {

              const featured =
                index % 7 === 0;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onImageClick(item)}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left ${
                    featured
                      ? "col-span-2 row-span-2"
                      : ""
                  }`}
                >

                  <div
                    className={
                      featured
                        ? "aspect-square sm:aspect-[4/3]"
                        : "aspect-square"
                    }
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                      {item.category}
                    </span>

                    <p className="mt-1 text-sm font-black text-white">
                      {item.title}
                    </p>

                  </div>

                  {/* Expand Icon */}

                  <div className="absolute right-3 top-3 flex h-9 w-9 scale-90 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100">

                    <ImageIcon size={16} />

                  </div>

                </button>
              );
            })}

          </div>
        )}

      </Container>
    </section>
  );
}

export default GalleryGrid;