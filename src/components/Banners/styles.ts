import styled from "styled-components";

export const BannerContainer = styled.a`
   position: relative;
   display: inline-block;
   text-decoration: none;
   transition-duration: .6s;
   transition-timing-function: ease-in;
   &:hover, &:focus{
         transform: scale(1.1,1.1);
      }
   
   &::after{
      content: "";
      background-image: linear-gradient(to top, ${props => props.theme.fontColor}, transparent);
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 4;
      left: 0;
      top: 0px;
      opacity: 0.3;
      
   }
   >p{
      text-align: left;
      position: absolute;
      bottom: 5%;
      left: 5%;
      font-size: 1rem;
      z-index: 5;
      color: ${props => props.theme.body};
     
   }

   @media screen and (max-width: 1050px) {
      >p{font-size:.9rem;}
   }
   @media screen and (max-width: 500px){
      >p{font-size:.5rem;}
      
   }
`
export const DESKTOP = styled.img`
      z-index: 1;
      width: 100%;
      height: 100%;
      @media screen and (max-width: 1050px) {
      display: none;
      
   }
      
`
export const MOBILE = styled.img`
   z-index: 1;
   display: none;
   width: 100%;
   height: 100%;

   @media screen and (max-width: 1050px) {
      display: block;
      
   }
`