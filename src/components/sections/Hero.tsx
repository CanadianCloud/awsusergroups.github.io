import heroBg from '../../assets/hero_background.jpg'


export default function Hero() {
  return (
    <section id="about" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden text-white px-4 sm:px-6">
      <img
        src={heroBg}
        alt="Vancouver skyline and marina"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-source-sans-bold px-4" >
          <p className="leading-tight sm:leading-none">
            <span className="text-aws-orange">Connecting</span> <span>People</span> <br />
            <span className="text-aws-orange">Empowering</span> <span>Ideas</span>
          </p>
        </h1>

        <p className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg leading-relaxed text-white/90 px-4">
          We run regular meetups in downtown Vancouver and the annual Vancouver AWS Community Day. We also co-hosting Canada&apos;s largest Cloud and AI conference in Vancouver and Toronto <span className="font-semibold text-white">Cloud Summit</span>
        </p>

        <button className="cursor-pointer mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-aws-orange text-sm sm:text-base font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black transition-all hover:bg-aws-orange-dark hover:shadow-lg active:scale-95 min-h-[48px]">
          Join Our Discord Channel
        </button>
      </div>
    </section>
  )
}
