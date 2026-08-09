import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

function GalleryLightbox({
  image,
  images,
  onClose,
  onPrevious,
  onNext,
}) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >

      {/* Close */}

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close image"
      >
        <X size={22} />
      </button>

      {/* Previous */}

      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Image */}

      <div
        className="relative max-h-[90vh] max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >

        <img
          src={image.image}
          alt={image.title}
          className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
        />

        <div className="mt-4 text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-400">
            {image.category}
          </p>

          <h3 className="mt-1 text-lg font-black text-white">
            {image.title}
          </h3>

        </div>

      </div>

      {/* Next */}

      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      )}

    </div>
  );
}

export default GalleryLightbox;