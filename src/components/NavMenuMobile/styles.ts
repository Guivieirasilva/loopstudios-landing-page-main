
import styled from "styled-components";

interface Props {
   isVisible: any
}

export const MenuMobile = styled.section<Props>`
   position: absolute;
   display: flex;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
   align-items: center;
   color: white;
   background-color: #111111; 
   z-index: 10;
   transition: .8s;
   opacity: ${({isVisible}) => isVisible === true ? 1 : 0};
   pointer-events: ${({isVisible}) => isVisible === true ? 'auto' : 'none'};
   box-sizing: border-box;
   padding-left: 10px;
   padding-right: 10px ;
   


   >div.mobile {
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 44px;
      box-sizing: border-box;
      padding: 3rem;

      >button {
         background-color: transparent;
            border: none;
            width: 40px;
            height: 40px;
            transition-duration:.5s;
            &:hover, &:focus{
               transform: scale(1.1,1.1);
            }
            >img { width: 100%;}
      }
   }
   >nav.navMobile {
      margin-top: 30px;
      display: flex;
      width: 100%;
      align-items: flex-start;
      padding-left: 44px;

      
      >ul {
         list-style: none;
         display: flex;
         flex-direction: column;
         gap: 20px;
         font-family: 'Josefin Sans', sans-serif;
         >li {
            font-size: 1.4rem;
            transition-duration:.5s;
            &:hover, &:focus{
               transform: scale(1.1,1.1);
            }
         }
      }
   }

   
   
   
`