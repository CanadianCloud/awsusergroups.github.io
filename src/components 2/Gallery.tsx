const Gallery = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Large Image - Left */}
          <div className="md:row-span-2 aspect-square md:aspect-auto bg-neutral-300 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">Gallery Image 1</span>
          </div>

          {/* Top Right Images */}
          <div className="grid grid-cols-1 gap-6">
            <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
              <span className="text-neutral-500">Gallery Image 2</span>
            </div>
            <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
              <span className="text-neutral-500">Gallery Image 3</span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">Gallery Image 4</span>
          </div>
          <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">Gallery Image 5</span>
          </div>

          {/* Large Image - Bottom Right */}
          <div className="md:col-start-2 md:row-span-2 aspect-square md:aspect-auto bg-neutral-300 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">Gallery Image 6</span>
          </div>

          {/* Bottom Left Image */}
          <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">Gallery Image 7</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery



