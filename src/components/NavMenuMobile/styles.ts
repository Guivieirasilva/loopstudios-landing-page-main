
import styled, { css } from "styled-components";

interface Props {
   isVisible: any
}

export const MenuMobile = styled.section<Props>`
   position: absolute;
   display: none;
   flex-direction: column;
   width: 100%;
   height: 100%;
   align-items: center;
   color: white;
   background-color: #111111; 
   z-index: 10;

   @media screen and (max-width: 900px) {
      display: flex;
      opacity: ${({isVisible}) => isVisible === true ? 1 : 0};
      pointer-events: ${({isVisible}) => isVisible === true ? 'auto' : 'none'};
   }

   
  
   

   >div {
      width: 87%;
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 44px;
      margin-top: 30px;
      >button {
         background-color: transparent;
            border: none;
            width: 50px;
            height: 50px;
            transition-duration:.5s;
            &:hover{
               transform: scale(1.1,1.1);
            }
            >img { width: 100%;}
      }
   }
   >nav {
      margin-top: 30px;
      display: flex;
      width: 100%;
      >ul {
         list-style: none;
         display: flex;
         flex-direction: column;
         gap: 20px;
         font-family: 'Josefin Sans', sans-serif;
         font-size: 2rem;
         font-weight: 300;
         >li {
            transition-duration:.5s;
            &:hover{
               transform: scale(1.1,1.1);
            }
         }
      }
   }

   
   
   
`