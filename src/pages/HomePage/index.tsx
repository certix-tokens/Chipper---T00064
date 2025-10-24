import Hero from "./sections/Hero"
import Chippernomics from './sections/Chippernomics'
import Roadmap from './sections/Roadmap'
import Howtobuy from './sections/Howtobuy'
import Tokenomics from "./sections/tokenomics"

function HomePage() {
  return (
    <>
      <Hero />
      <Chippernomics />
      <Roadmap />
      <Howtobuy />
      <Tokenomics />
    </>
  );
}

export default HomePage;
