const Mission = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Mission Content */}
          <div className="bg-neutral-400 p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Mission Image */}
          <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">Mission Image</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission



