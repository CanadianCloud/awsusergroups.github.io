import image1 from '../../assets/gallery/AWSDay24-050.jpg';
import image2 from '../../assets/gallery/AWSDay24-092.jpg';
import image3 from '../../assets/gallery/AWSDay24-110.jpg';
import image4 from '../../assets/gallery/1-65f8993a.jpeg';

export default function CommunityDay() {
  return (
    <section id="community-day" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Image Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="h-40 sm:h-52 md:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={image1} alt="AWS Community Day presentation" className="w-full h-full object-cover" />
              </div>
              <div className="h-40 sm:h-52 md:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={image2} alt="AWS Community Day networking" className="w-full h-full object-cover" />
              </div>
              <div className="h-40 sm:h-52 md:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={image3} alt="AWS Community Day crowd" className="w-full h-full object-cover" />
              </div>
              <div className="h-40 sm:h-52 md:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={image4} alt="AWS Community Day event" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AWS Community Day
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                AWS Community Day is an annual, community-led event that brings together cloud enthusiasts, builders, and professionals from across Canada to share knowledge, connect, and inspire innovation.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Learn about the event's history and stay connected with the community.
              </p>
            </div>
            <div className="pt-2">
              <button className="bg-aws-orange hover:bg-aws-orange-dark text-black font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 inline-flex items-center text-sm sm:text-base min-h-[48px]">
                Learn More about AWS Community Day
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




