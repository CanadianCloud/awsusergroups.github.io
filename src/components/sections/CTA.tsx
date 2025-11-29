export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="bg-gray-200 rounded-2xl sm:rounded-3xl py-10 sm:py-12 md:py-16 px-6 sm:px-8 text-center">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 max-w-4xl mx-auto px-2">
            Looking to connect with AWS Usergroups around the world?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Visit the Global AWS Community site for tips, resources, and AWS usergroups worldwide.
          </p>
          <a
            href="https://aws.amazon.com/developer/community/usergroups/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-aws-orange hover:bg-aws-orange-dark text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base min-h-[48px]"
          >
            Go to Global Site →
          </a>
        </div>
      </div>
    </section>
  );
}

