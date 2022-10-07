import styled from "styled-components";
import { PropsNavMenu } from "./";

import BackgoundHeader from "../../assets/images/desktop/image-hero.jpg"

export const ContainerHeader = styled.header<PropsNavMenu>`
   
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
   justify-content: space-between;
   color: white;

   >section.navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      >a{
         align-self: center;
      }

      >nav.navdesk {
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
            display: flex;
            gap: 30px;
            list-style: none;

            >li{
               font-family: 'Josefin Sans', sans-serif;
               font-weight: 300;
               font-size: 1.4rem;
               align-self: center;
               cursor: pointer;
               transition-duration:.5s;
               &:hover, &:focus{
                  transform: scale(1.1,1.1);
               }
            }
         }
         
      }

      
   }

   >div.cont {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      margin-left: 0;

      >h3{

         width: 550px;
         font-size: 3rem;
         padding: 2.5rem;
         border: 2px solid white;
         height: 230px;
         text-align: left;
         font-family: 'Josefin Sans', sans-serif;
         font-weight: 300;

      }
   }

   @media screen and (max-width: 900px) {
   padding: 3rem 1rem;

      >section.navbar {
         nav.navdesk {
            >ul { display: none; }
            >button { 
               display: block;
               z-index: 1;
            }
         }
      }

      >div.cont {
         align-self: center;
         >h3 {
            width: 500px;
            font-size: 2.9rem;
            padding: 2rem;
         }
      }
   }
   @media screen and (max-width: 630px) {
      >div.cont>h3{
         width: 290px;
         font-size: 1.9rem;
         padding: 1.7rem;
         height: 200px;


      }
   }
`

