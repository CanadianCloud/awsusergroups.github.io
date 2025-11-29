export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gray-200 rounded-3xl py-16 px-8 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
            Looking to connect with AWS Usergroups around the world?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Visit the Global AWS Community site for tips, resources, and AWS usergroups worldwide.
          </p>
          <a
            href="https://aws.amazon.com/developer/community/usergroups/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-aws-orange hover:bg-aws-orange-dark text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go to Global Site →
          </a>
        </div>
      </div>
    </section>
  );
}

