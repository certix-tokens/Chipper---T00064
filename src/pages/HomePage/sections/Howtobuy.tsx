import soil from '../../../assets/soil.svg'
import soil2 from '../../../assets/soil2.svg'
import egg from '../../../assets/howtobuyegg.svg'

function Hero() {
  return (
    <section className="relative items-center justify-center w-full" id="howtobuy">
      {/* Top soil image */}
      <img src={soil} alt="Soil top" className="w-full" />

      {/* Grid Section */}
      <div className="relative w-full bg-[#B87646] flex items-center justify-center py-20 flex-col">
        <h2 className='font-wigglye text-[64px]'>How To Buy</h2>
        <br/><br/>
        <div className="grid grid-cols-4 gap-1">
        <div className="mt-10 flex items-center justify-center text-2xl font-bold"><img className='w-[424.87px] h-[590.66px]' src={egg} alt=""/></div>
          <div className="border-5 rounded-[20px] px-[44px] py-[48px] font-Shantell bg-white border-black h-[505px] w-[387px] flex flex-col items-center justify-center text-2xl font-bold">
            <h3 className='font-semibold text-[32px] text-center'>Set Up a Crypto Wallet</h3>
            <br/>
            <p className=' text-[20px]'>First, you'll need a crypto wallet to store your Chipper tokens. You can use popular wallets like MetaMask. Ensure your wallet supports Ethereum-based tokens (ERC-20) for easy transactions.</p>
          </div>
          <div className="border-5 rounded-[20px] px-[44px] py-[48px] font-Shantell bg-white border-black h-[505px] w-[387px] flex flex-col items-center justify-center text-2xl font-bold">
            <h3 className='font-semibold text-[32px] text-center'>Purchase Ethereum (ETH)</h3>
            <br/>
            <p className=' text-[20px]'>Buy Ethereum (ETH) on a crypto exchange like Binance, Coinbase, or Kraken. Ethereum is required to swap for Chipper tokens.You can buy ETH using your preferred payment method</p>
          </div>
          <div className="border-5 rounded-[20px] px-[44px] py-[48px] font-Shantell bg-white border-black h-[505px] w-[387px] flex flex-col items-center justify-center text-2xl font-bold">
            <h3 className='font-semibold text-[32px] text-center'>Swap Ethereum for Chipper</h3>
            <br/>
            <p className=' text-[20px]'>Once you have ETH in your wallet, head to a decentralized exchange (DEX) like Uniswap or SushiSwap. Connect your wallet, search for "Chipper" token, and swap your ETH for Chipper.</p>
          </div>
        </div>
      </div>

      {/* Bottom soil image */}
      <img src={soil2} alt="Soil bottom" className="w-full" />
    </section>
  )
}

export default Hero
