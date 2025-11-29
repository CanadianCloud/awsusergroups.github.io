export default function Slider() {
  const phrases = [
    'Lead Globally',
    'Connect Communities',
    'Grow Togetheter',
    'Cloud Innovation',
    'Share Knowledge',
  ];

  return (
    <section className="py-6 bg-aws-orange overflow-hidden">
      <div className="relative flex">
        {/* First set of phrases */}
        <div className="flex animate-scroll whitespace-nowrap">
          {phrases.map((phrase, index) => (
            <div key={`first-${index}`} className="flex items-center px-8">
              <span className="text-[18px] text-black">
                {phrase}
              </span>
              <span className="text-[18px] text-black mx-8">✱</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
          {phrases.map((phrase, index) => (
            <div key={`second-${index}`} className="flex items-center px-8">
              <span className="text-[18px] text-black">
                {phrase}
              </span>
              <span className="text-[18px] text-black mx-8">✱</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

