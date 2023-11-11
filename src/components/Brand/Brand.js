import {
  StyledBrand,
  BannerLogo,
  BannerSpan,
  BannerTitle,
  BannerContent,
} from "../styles/Brand.styled";

import { Button } from "../styles/Button.styled";

export function Brand() {
  return (
    <>
      <StyledBrand bg="./images/brand-banner.webp">
        <BannerLogo src="https://efeataroglu-turknet-smartify-demo.vercel.app/images/logo.png" />
        <BannerSpan>Şimdilik Sadece GigaFiber’lilere Özel!</BannerSpan>
        <BannerTitle>
          TurkNet SmartyFi ile evinizin her odasında GigaFiber keyfi!
        </BannerTitle>
        <BannerContent>
          Uzak odada Wi-Fi çekmiyorsa, çözüm TurkNet SmartyFi! Evinizin her
          odasında maksimum hız! Faturanıza ek ₺50/Ay! Üstelik 200 TL’lik
          kurulum ücretsiz
        </BannerContent>
        <Button ml={"-38%"} bg={"transparent"} color={"white"} br={"2px"}>
          Hemen İncele
        </Button>
      </StyledBrand>
    </>
  );
}
