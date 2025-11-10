import background from '../../../assets/tokenomicsback.svg'
import boat from '../../../assets/boat.gif'
import rocks from '../../../assets/rocks.svg'

function Tokenomics() {
  return (
    <section className="relative h-[2052px] -top-[700px] w-full bg-cover md:bg-center" id='tokenomics'
      style={{ backgroundImage: `url(${background})` }}>
        <div className='absolute border-[5px] border-black bg-white  rounded-[20px] right-[51px] top-[800px] w-[834px] h-[123px] flex items-center justify-between  px-[53px] py-[35px]'><div className='font-bold text-[32px] leading-tight'>0x71297312753EA7A2570a5a3278eD</div><div className='text-[53px] cursor-pointer'><i className="uil uil-copy"></i></div></div>

        <div className='absolute w-[804px] h-[794.28px] top-[1025px] left-[42px]'><img src={boat} alt=""/></div>

        <img src={rocks} className='absolute w-[1176px] h-[398.48px] top-[1755px] -left-[40px] z-50' alt=""/>

        <div className='absolute top-[2040px] bg-[#D5A962] w-[1920px] h-[376px] z-0'></div>
    </section>
  )
}

export default Tokenomics
