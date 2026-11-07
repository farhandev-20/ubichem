export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

// Gallery images are dynamically loaded from /public/gallery/
// TODO: add gallery images to /public/gallery/ directory
export const galleryConfig = {
  basePath: "/gallery",
  placeholder: "Gallery images will be displayed here. Add images to the /public/gallery/ directory.",
};
