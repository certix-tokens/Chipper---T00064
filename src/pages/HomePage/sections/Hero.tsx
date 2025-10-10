import background from '../../../assets/home_back.svg'
import egg_hero from '../../../assets/egg_hero.svg'
import back_board from '../../../assets/chippernimics_back.svg'
import chippernirmics from '../../../assets/chippernomics_egg.svg'
import rock from '../../../assets/rock.svg'

function Hero() {
  return (
    <section className='relative' id='home'>
      <img src={background} alt="" className=''/>
      <h1 className='absolute font-wigglye font-normal text-[169.49px] leading-[1] tracking-[0] text-center top-[823px] left-[193px]'>Chipper</h1>
      <div className='absolute w-[693px] h-auto top-[266px] left-[103px] rounded-[20px] border-black border-[5px] bg-white py-[65px] px-[55.5px] text-[24px] font-Shantell font-semibold '>Welcome to Chipper world! A place full of fun, smiles, and endless adventure. Let’s crack open some joy together! Join Chipper as he bounces through life, spreading positivity wherever he goes. Whether you're a creator, a collector, or just someone looking for a new adventure, Chipper is all about connecting like-minded individuals through unique experiences. Get ready for a delightful journey with your new favorite character!</div>
      <img src={egg_hero} alt="" className='absolute top-[491px] left-[589px] w-[355px] h-[530.12px]' />
      <img src={back_board} alt="" className="absolute top-[1351px]"/>
      <div className='absolute w-[930px] h-[544px] top-[1073px] left-[887px] rounded-[20px] border-[5px] bg-white border-black flex flex-col items-center justify-center text-center'>
        <h1 className='font-wigglye text-[64px]'>Chippernomics</h1>
        <div className='font-Shantell mt-[47px] gap-[10px] flex felx-row justify-center'>
          <div className='w-[196px] h-[184px] rounded-[10px] py-[49px] px-[34px] bg-yellow-300 font-semibold text-[32px] text-center'>Token Supply 2m</div>
          <div className='w-[196px] h-[184px] rounded-[10px] py-[49px] px-[34px] bg-yellow-300 font-semibold text-[32px] text-center'>Buy/Sell tax 0%</div>
          <div className='w-[196px] h-[184px] rounded-[10px] py-[49px] px-[34px] bg-yellow-300 font-semibold text-[32px] text-center'>Burnt Liquidity</div>
        </div>
      </div>
      <img src={chippernirmics} alt="" className='absolute w-[512.11px] h-[478.94px] top-[1198px] left-[597.82px]' />
      <img src={rock} alt="" className='absolute w-[852px] h-[360.68px] top-[1333px] left-[1039px]' />
    </section>
  );
}

export default Hero;