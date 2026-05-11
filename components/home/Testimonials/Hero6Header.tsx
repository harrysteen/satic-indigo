import MainDivider from "../../decorations/MainDivider";

export default function Hero6Header() {
  return (
    <div className="flex flex-col items-center mb-6 md:mb-8 w-full text-center font-sans">
      <h2 className="text-brand-white text-3xl md:text-5xl font-el-messiri tracking-[0.02em] mb-0 md:mb-1">
        Stories from Our Tables
      </h2>
      
      <MainDivider className="!my-3 md:!my-4" />
      
      <p className="text-brand-yellow font-medium text-base md:text-[20px] font-serif tracking-wide mt-1 md:mt-2">
        Hear from our loyal patrons-the true essence of our food and space.
      </p>
    </div>
  );
}
