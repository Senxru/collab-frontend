import Logo from "@/app/assets/whiteLogo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center overflow-x-hidden justify-center bg-[#e44100] text-white px-10">
    <div className="text-center ">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 scale-150 sm:scale-175 md:scale-200 mb-8">
        <Image src={Logo} alt="Logo" width={80} height={80} />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
        Undergoing Transformation
      </h1>
    </div>
  </div>
  );
}
