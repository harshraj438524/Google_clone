import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />

      {/* body of home page */}

      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="/google-image2.png"
        />
        <HomeSearch/>
      </div>
    </>
  );
}
