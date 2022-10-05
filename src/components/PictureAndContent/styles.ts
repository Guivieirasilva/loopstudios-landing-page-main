import styled from "styled-components";

export const Box = styled.section`
   display: grid;
   grid-template-columns: 3fr 2fr;
   max-width: 1400px;
   margin: 0 auto;

   @media screen and (max-width:1050px) {
      display: flex;
      flex-direction: column;
   }

`
export const Picture = styled.div`
   width: 100%;
   >img{
      width: 100%;
      border-radius: .2rem;
   }
   @media screen and (max-width:1050px) {
      width: 90%;
      margin: auto;
   }


`
export const Content = styled.div`
   font-family: 'Josefin Sans', sans-serif;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   height: 50%;
   align-self: end;
   padding: 6rem 0 0 6rem;
   width: 140%;
   margin-left: -10rem;
   background-color:${props => props.theme.body} ;
   text-align: left;
   height: 350px;
   >h3 {
      font-size: 2.5rem;
    }
    >p{
      max-width: 80%;
    }
    @media screen and (max-width:1050px) {
      justify-content: center;
      gap: .5rem;
      width: 90%;
      margin: auto;
      padding: 1rem;
      text-align: center;
      >p{
         margin: 20px auto;
      }
   }
   @media screen and (max-width:600px) {
      >h3 {font-size: 1.5rem }
      >p {font-size: .8rem}
   }

`