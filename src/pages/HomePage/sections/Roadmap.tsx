import rock_path from '../../../assets/rock_path.svg'
import hero_egg from '../../../assets/hero_egg.svg'
import soil from '../../../assets/soil.svg'

function Hero() {
  return (
    <section className='bg-[#297a0d] h-[1514px] top-[1834px]' id='roadmap'>
      <img src={rock_path} alt="" className='absolute w-[1284px] h-[918px] top-[1738px] -left-[48px]'/>
      <img src={rock_path} alt="" className='absolute w-[1284px] h-[456px] top-[2496px] left-[488px]'/>

      <div className='absolute w-[554px] h-[295px] top-[1856px] left-[288px] rounded-[20px] border-[5px] border-black bg-white font-Shantell text-center py-[29px] px-[51px]' >
        <h1>Phase 01 </h1>
        <p className='mt-[23px] text-[20px]'>In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.</p>
      </div>
      <div className='absolute w-[554px] h-[295px] top-[2166px] left-[878px] rounded-[20px] border-[5px] border-black bg-white font-Shantell text-center py-[29px] px-[51px]' >
        <h1>Phase 01 </h1>
        <p className='mt-[23px] text-[20px]'>In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.</p>
      </div>
      <div className='absolute w-[554px] h-[295px] top-[2321px] left-[62px] rounded-[20px] border-[5px] border-black bg-white font-Shantell text-center py-[29px] px-[51px]' >
        <h1>Phase 01 </h1>
        <p className='mt-[23px] text-[20px]'>In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.</p>
      </div>
      <div className='absolute w-[554px] h-[295px] top-[2576px] left-[837px] rounded-[20px] border-[5px] border-black bg-white font-Shantell text-center py-[29px] px-[51px]' >
        <h1>Phase 01 </h1>
        <p className='mt-[23px] text-[20px]'>In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.</p>
      </div>

      <img src={hero_egg} alt="" className='absolute w-[278px] h-[489.52px] top-[2069px] left-[648px]'/>
      <img src={soil} alt="" className='abolute w-[1953px] h-[307px] top-[2889px]'/>
    </section>
  );
}

export default Hero;
