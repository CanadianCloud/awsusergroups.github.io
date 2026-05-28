import React from "react";

export default function PromoSection({
  id,
  title,
  description,
  ctaLabel,
  ctaHref,
  media,
  reverse = false,
  bgClassName = "bg-white",
  titleClassName = "",
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 md:py-28 ${bgClassName}`}>
      <div className="w-full max-w-[1180px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12 lg:gap-20`}
        >
          <div className="flex w-full justify-center lg:w-[330px] lg:flex-none">
            {media}
          </div>

          <div className="w-full space-y-6 text-center lg:max-w-[560px] lg:text-left">
            <h2 className={`section-title leading-tight text-[32px] sm:text-[35px] lg:w-[400px] ${titleClassName}`}>
              {title}
            </h2>
            <p className="body-text mx-auto max-w-[530px] leading-[1.28] lg:mx-0">
              {description}
            </p>
            <div className="flex justify-center pt-1 lg:justify-start">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#ff9800] px-6 py-3 text-[15px] font-medium text-gray-900 transition hover:bg-[#e68a00]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}