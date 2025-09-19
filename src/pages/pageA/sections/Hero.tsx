import hero_img from "../../../assets/hero.svg";

function Hero() {
  return (
    <section className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#C89EB8] to-[#B59ABF] z-0"></div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <h2 className="font-lobster text-[500px] text-white text-center">NEKO</h2>
        <img src={hero_img} alt="Hero image" className="w-[626.6px] h-[650px] top-[430px]"/>
      </div>
    </section>
  );
}

export default Hero;