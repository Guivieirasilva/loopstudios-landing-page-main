import styled from "styled-components";

export const FooterContainer = styled.footer`
   width: 100%;
   background-color: #111;
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 850px){
      align-items: center;
      justify-content: center;
      gap: 10px;
      >section{
         flex-direction: column;
         gap: 50px;
         >img{width:200px}
      }
      >div{
         flex-direction: column;
         gap: 50px;
      }
   }

   @media screen and (max-width: 450px) {
      >div>ul>li>a{ font-size:.8rem }
      >div>p{font-size:.8rem}
   }
   >section{
      display: flex;
      margin: 30px 50px;
      justify-content: space-between;
      >div{
         >img{
            margin-left: 20px;
            transition-duration: .5s;
            transition-timing-function:ease-in;
            &:hover, &:focus{
               transform:scale(1.2, 1.2) ;
            }
         }
      }
   }
   >div{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 100px;
      >ul{
         display: flex;
         gap: 20px;
         >li{
            font-size: .6rem;
            list-style: none;
            >a{
               text-decoration:none;
               color:white;
               font-family:'Josefin Sans', sans-serif;
               transition-duration: .8s;
               &:hover, &:focus {
                  transform: scale(1.1,1.1);
                  color: gray;
               }
            }
         }

      }
      >p{
         color: gray;
      }
   }
`