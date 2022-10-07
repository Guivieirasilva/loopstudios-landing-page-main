import { DESKTOP, MOBILE, BannerContainer } from "./styles";

interface PanelProps {
   Desktop: string,
   Mobile: string,
   text: string,

}

export function Banner({Desktop,Mobile,text}:PanelProps){
   return(
      <BannerContainer href="#">
         <DESKTOP src={Desktop} alt="Ilustração das criações"/>
         <MOBILE src={Mobile} alt="Ilustração das criações"/>
         <p>{text}</p>
      </BannerContainer>
   )
}