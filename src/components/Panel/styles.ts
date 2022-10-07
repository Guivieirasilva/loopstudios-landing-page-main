import styled from "styled-components";

export const Creations = styled.div`
   width: 100%;
   text-transform: uppercase;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   >div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      font-family: 'Josefin Sans', sans-serif;
      >h3{ font-size: 2rem; }

      >button{
         text-transform: uppercase;
         padding: 10px;
         width: 130px;
         height: 40px;
         font-family: 'Josefin Sans', sans-serif;
         background-color: ${props => props.theme.fontColor};
         color: ${props => props.theme.body};
         text-align: center;
         transition-duration:1s;
         &:hover{
            transform: scale(1.1,1.1);
            background-color: ${props => props.theme.body};
            color: ${props => props.theme.fontColor};
            border-color: ${props => props.theme.fontColor};
         }
      }
   }
   @media screen and (max-width: 1050px) {
      >div>h3{font-size:1.5rem;}
      >div>button{padding: 5px;
         font-size: 10px;
         width: 90px;
         height: 30px;}
   }
   @media screen and (max-width: 600px){
      >div>h3{font-size:.9rem;}

   }
`
export const ContentPanel = styled.section`

      max-width: 100%;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2rem;
      
      @media screen and (max-width: 1050px) {
         grid-template-rows: 1fr 1fr 1fr 1fr ;
         grid-template-columns: 1fr 1fr;
   }
`
