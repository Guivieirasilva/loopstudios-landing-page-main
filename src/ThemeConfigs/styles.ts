import styled from "styled-components";

export const Container = styled.div`
   color: ${props => props.theme.fontColor};
   margin: 50px;
   text-align: center;
   transition-duration: .5s;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
   #toggle{
      display:none;
   }
   .button{
      display: inline-block;
      width: 65px;
      height: 25px;
      background-color: #f0f8ff;
      border-radius: 38px;
      position: relative;
      cursor: pointer;
      margin-bottom: 50px ;
   
   &::after{
      width: 30px;
      height: 30px;
      content:"☀️";
      background-color: #FEEBBF;
      border: 2px solid #222;
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(0, 0, 0, 25);
      position: absolute;
      top: -5px;
      left: 0;
      display: grid;
      place-content: center;
      line-height: 0;
      transition: background-color 1s,
      transform 1s ease-in;
   }
}
   #toggle:checked + .button::after{
      content: "🌙";
      background-color: #00008b;
      
      transform: translateX(40px) rotate(360deg);
   }
`