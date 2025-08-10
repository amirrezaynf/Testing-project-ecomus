import Image from "next/image";

export default function ProductImageGallery({
  thumbnails,
  mainImage,
  setMainImage,
  zoomPosition,
  zoomVisible,
  setZoomVisible,
  handleMouseMove,
  imageRef,
  productName,
}) {
  const zoomFactor = 2.5;

  return (
    <div className="flex flex-col gap-4 md:flex-row lg:w-1/2 lg:flex-row">
      {/* Thumbnails */}
      <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:pb-0">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`relative h-20 w-20 flex-shrink-0 rounded-lg border-2 ${
              mainImage === thumb ? "border-stone-800" : "border-gray-200"
            } cursor-pointer overflow-hidden hover:border-stone-800`}
            onClick={() => setMainImage(thumb)}
          >
            <Image
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Image Container */}
      <div
        ref={imageRef}
        className="relative h-96 flex-grow overflow-hidden rounded-lg bg-white p-4 shadow-lg md:h-[500px] lg:h-[480px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoomVisible(true)}
        onMouseLeave={() => setZoomVisible(false)}
      >
        <Image
          src={mainImage}
          alt={productName}
          unoptimized
          fill
          className="rounded-4xl object-contain"
          priority
        />

        {/* Zoom Window */}
        {zoomVisible && (
          <div
            className="pointer-events-none absolute inset-0 hidden bg-no-repeat lg:block"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: `${zoomFactor * 100}% ${zoomFactor * 100}%`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transform: "scale(1.001)",
              zIndex: 10,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
