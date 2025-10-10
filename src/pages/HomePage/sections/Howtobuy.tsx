import soil from '../../../assets/soil.svg'
import soil2 from '../../../assets/soil2.svg'
import wave_egg from '../../../assets/egg_wave.svg'

function Hero() {
  return (
    <section className='' id='howtobuy'>
      <img src={soil} alt="" className='abolute w-[1953px] h-[307px] '/>
      <div className='bg-[#B87646] h-[836px] relative'></div>
      <img src={wave_egg} alt="" className='absolute w-[424.87px], h-[590.66px]  left-[82.17px]' />
      <h1 className='absolute font-wigglye w-[245.5px] h-[49px] top-[3110px] left-[936.92px] font-normal text-[64px]'> How to Buy</h1>
      <div className='absolute w-[1291.65px] h-[505px] top-[323px] left-[523.07px] gap-[64px]'>
        <div className='absolute w-[387px] h-[505px] rounded-[20px] border-[5px] border-black'>
          <h1 className='font-wigglye text-[32px] text-center mt-[24px]'>First, you'll need a crypto wallet to store your Chipper tokens. You can use popular wallets like MetaMask. Ensure your wallet supports Ethereum-based tokens (ERC-20) for easy transactions.</h1>
        </div>
        <div className='w-[387px] h-[505px] rounded-[20px] border-[5px] border-black'>
          <h1 className='font-wigglye text-[32px] text-center mt-[24px]'>First, you'll need a crypto wallet to store your Chipper tokens. You can use popular wallets like MetaMask. Ensure your wallet supports Ethereum-based tokens (ERC-20) for easy transactions.</h1>
        </div>
        <div className='w-[387px] h-[505px] rounded-[20px] border-[5px] border-black'>
          <h1 className='font-wigglye text-[32px] text-center mt-[24px]'>First, you'll need a crypto wallet to store your Chipper tokens. You can use popular wallets like MetaMask. Ensure your wallet supports Ethereum-based tokens (ERC-20) for easy transactions.</h1>
        </div>
      </div>
      <img src={soil2} alt="" className='abolute w-[1953px] h-[307px] top-[2889px]'/>
    </section>
  );
}

export default Hero;
