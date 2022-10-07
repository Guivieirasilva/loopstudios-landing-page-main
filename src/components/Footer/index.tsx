import { FooterContainer } from "./styles";

import Logo from "../../assets/images/logo.svg"

import Facebook from "../../assets/images/icon-facebook.svg"
import Twitter from "../../assets/images/icon-twitter.svg"
import Pinterest from "../../assets/images/icon-pinterest.svg"
import Instagram from "../../assets/images/icon-instagram.svg"


export function Footer(){
   return(
      <FooterContainer>
         <section>
            <img src={Logo} alt="Icone Loopstudios" />
            <div>
               <img src={Facebook} alt="Icone de Facebook" />
               <img src={Twitter} alt="Icone de Twitter" />
               <img src={Pinterest} alt="Icone de Pinterest" />
               <img src={Instagram} alt="Icone de Instagram" />
            </div>
         </section>
         <div>
            <ul>
               <li><a href="#">Sobre</a></li>
               <li><a href="#">Carreiras</a></li>
               <li><a href="#">Eventos</a></li>
               <li><a href="#">Produtos</a></li>
               <li><a href="#">Suporte</a></li>
            </ul>
            <p>&copy; 2021 Loopstudios. Todos os direitos reservados.</p>
         </div>
      </FooterContainer>
   )
}