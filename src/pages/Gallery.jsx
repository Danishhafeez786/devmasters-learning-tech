import { useMemo, useState } from "react";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryStats from "../components/gallery/GalleryStats";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryLightbox from "../components/gallery/GalleryLightbox";
import GalleryVideos from "../components/gallery/GalleryVideos";
import GalleryCTA from "../components/gallery/GalleryCTA";

import {
  galleryCategories,
  galleryImages,
} from "../data/gallery";

function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) => image.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.id === selectedImage.id
      )
    : -1;

  const handlePrevious = () => {
    if (selectedIndex === -1) {
      return;
    }

    const previousIndex =
      selectedIndex === 0
        ? filteredImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(
      filteredImages[previousIndex]
    );
  };

  const handleNext = () => {
    if (selectedIndex === -1) {
      return;
    }

    const nextIndex =
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(
      filteredImages[nextIndex]
    );
  };

  return (
    <>
      <GalleryHero />

      <GalleryStats />

      <GalleryGrid
        categories={galleryCategories}
        activeCategory={activeCategory}
        setActiveCategory={(category) => {
          setActiveCategory(category);
          setSelectedImage(null);
        }}
        images={filteredImages}
        onImageClick={setSelectedImage}
      />

      <GalleryVideos />

      <GalleryCTA />

      <GalleryLightbox
        image={selectedImage}
        images={filteredImages}
        onClose={() => setSelectedImage(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  );
}

export default Gallery;