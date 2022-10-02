import styled from "styled-components";
import { PropsNavMenu } from "./";

import BackgoundHeader from "../../images/desktop/image-hero.jpg"

export const ContainerHeader = styled.div<PropsNavMenu>`
   background-image:linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BackgoundHeader});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   padding: 3rem 5.5rem;
   width: 100%;
   height: 600px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   color: white;
   box-sizing: border-box;

   >section{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      >a{
         align-self: center;
      }

      >nav{
         >button { 
            display: none;
            font-size: 1.5rem;
            background-color: transparent;
            border: none;
            width: 50px;
            height: 50px;
            transition-duration:.8s;
            >img {
               width: 100%;
            }
            &:hover, &:focus {
               transform: scale(1.1, 1.1);
            }
         }   
         >ul{
            font-size: 1.3rem;
            display: flex;
            gap: 30px;
            list-style: none;

            >li{
               cursor: pointer;
               transition-duration:.5s;
               &:hover{
                  transform: scale(1.1,1.1);
               }
            }
         }
         
      }

      
   }

   >div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      margin-left: 0;

      >h3{

         width: 600px;
         font-size: 72px;
         padding: 2.5rem;
         border: 2px solid white;
         height: 220px;
         text-align: left;
         font-family: 'Josefin Sans', sans-serif;
         font-weight: 300;

      }
   }

   @media screen and (max-width: 900px) {

      >section {
         nav {
            >ul { display: none; }
            >button { 
               display: block;
               visibility: ${({MenuIsVisible}) => MenuIsVisible === true ? 'hidden' : 'visible'};
               z-index: 1;
            }
         }
      }

      >div {
         align-self: flex-start;
         >h3 {
            margin-top: 150px;
            width: 280px;
            font-size: 40px;
            padding: 2rem;
            height: 150px;
         }
      }
   }
`

