"use client";

import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <>
      <NavbarStyleMinimal logoSrc="/images/logo.svg" logoWidth={100} logoHeight={32} buttonText="Learn Pog" onButtonClick={() => {}} />
      <SplitHero title="Welcome to PogCoin" subtitle="Join the fun and excitement of our community!" primaryButtonText="Get Started" secondaryButtonText="Learn More" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      <CtaAbout title="About PogCoin" descriptions={["PogCoin is your gateway to a playful cryptocurrency experience.", "We are dedicated to building a friendly and community-driven platform."]} />
      <HowToBuy3D title="How to Buy PogCoin" steps={{ title: "Buy steps", description: "Get started in three easy steps!", image: "/images/placeholder1.avif", position: "left", isCenter: true }} />
      <TextGridTokenomics title="Tokenomics" description="Understand the key aspects of PogCoin's economy." tokenData={[{ value: '1B', description: 'Total Supply' }, { value: '10%', description: 'Transaction Fee' }, { value: '25%', description: 'Community Rewards' }]} />
      <BentoFAQ items={[{ title: "What is PogCoin?", content: "PogCoin is a fun and community-driven cryptocurrency." }, { title: "How do I buy PogCoin?", content: "You can buy PogCoin through various exchanges or directly from our website." }]} />
      <FooterLogo logoSrc="/images/logo.svg" logoAlt="PogCoin Logo" logoText="PogCoin" />
    </>
  );
}