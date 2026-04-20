import MainDivider from "../../decorations/MainDivider";

export default function Hero3Header() {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-16 w-full text-center font-sans">
      <h2 className="text-brand-blue text-3xl md:text-5xl font-el-messiri tracking-[0.02em] font-semibold mb-0 md:mb-1">
        The INDIGO Story
      </h2>
      
      <MainDivider className="!my-3 md:!my-4" />

      <div className="flex flex-col items-center gap-2 md:gap-3 w-full max-w-2xl px-4 mt-0 md:mt-2">
        <p className="text-brand-yellow font-medium text-lg md:text-[22px] font-el-messiri tracking-wide">
          &ldquo;Zaiqa jo dil se nikle, woh sarhadon ka mohtaaj nahi hota.&rdquo;
        </p>
        <p className="text-brand-blue text-base md:text-xl font-medium tracking-wide">
          Flavour that comes from the heart is not bound by borders.
        </p>
      </div>
    </div>
  );
}
