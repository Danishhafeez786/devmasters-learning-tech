import { useMemo, useState } from "react";

import {
  ArrowRight,
  Camera,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../common/Container";
import GalleryCard from "./GalleryCard";

import {
  galleryCategories,
  galleryImages,
} from "../../data/gallery";

function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages.filter(
        (image) => image.featured
      );
    }

    return galleryImages.filter(
      (image) =>
        image.category === activeCategory &&
        image.featured
    );
  }, [activeCategory]);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        {/* =================================
            HEADER
        ================================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
              <Sparkles size={14} />

              Our Gallery
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              See Learning
              <span className="text-teal-700">
                {" "}in Action
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore moments from our training sessions,
              seminars, student activities, practical learning
              and institute environment.
            </p>

          </div>

          {/* Desktop Gallery Link */}

          <Link
            to="/gallery"
            className="hidden shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-700 shadow-sm transition-all hover:border-teal-200 hover:text-teal-700 lg:inline-flex"
          >
            <Camera size={17} />

            View Full Gallery

            <ArrowRight size={17} />
          </Link>

        </div>

        {/* =================================
            CATEGORY FILTER
        ================================== */}

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

          {galleryCategories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-teal-700 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:text-teal-700"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

        {/* =================================
            GALLERY GRID
        ================================== */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {filteredImages.length > 0 ? (
            filteredImages.slice(0, 6).map(
              (item, index) => (
                <div
                  key={item.id}
                  className={
                    index === 0
                      ? "sm:col-span-2 lg:col-span-2"
                      : ""
                  }
                >
                  <GalleryCard
                    item={item}
                    large={index === 0}
                  />
                </div>
              )
            )
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-200 py-16 text-center">

              <Camera
                size={32}
                className="mx-auto text-slate-300"
              />

              <p className="mt-4 font-bold text-slate-600">
                No images available in this category yet.
              </p>

            </div>
          )}

        </div>

        {/* =================================
            MOBILE / BOTTOM CTA
        ================================== */}

        <div className="mt-8 flex justify-center">

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-teal-700"
          >
            Explore Full Gallery

            <ArrowRight size={18} />
          </Link>

        </div>

      </Container>
    </section>
  );
}

export default GalleryPreview;