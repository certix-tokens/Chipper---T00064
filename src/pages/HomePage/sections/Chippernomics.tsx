import back_board from '../../../assets/chippernimics_back.svg'
import chippernirmics from '../../../assets/chippernomics_egg.svg'
import rock from '../../../assets/rock.svg'

function Hero() {
  return (
    <section className='w-full -mt-[80px]' id='about'>
      <img src={back_board} alt="" className="absolute top-[1351px]"/>
      <div className='absolute w-[930px] h-[544px] top-[1073px] left-[887px] rounded-[20px] border-[5px] bg-white border-black flex flex-col items-center justify-center text-center'>
        <h1 className='font-wigglye text-[64px]'>Chippernomics</h1>
        <div className='font-Shantell mt-[47px] gap-[15px] flex felx-row justify-center'>
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
