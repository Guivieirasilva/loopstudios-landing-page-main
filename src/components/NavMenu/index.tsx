import { ContainerHeader } from "./styles";

import IconMenu from '../../images/icon-hamburger.svg'
import Logo from '../../images/logo.svg'

export function NavMenu() {
   return(
      <ContainerHeader>
         <section>
            <a href="#"><img src={Logo} alt="Logo loopsstudios Web services" /></a>
            <nav>
               <button><img src={IconMenu} alt="" /></button>
               <ul>
                  <li>Sobre</li>
                  <li>Carreiras</li>
                  <li>Eventos</li>
                  <li>Produtos</li>
                  <li>Suporte</li>
               </ul>
            </nav>
         </section>

         <div>
            <h3>EXPERIÊNCIAS IMERSIVAS QUE ENTREGAM</h3>
         </div>
      </ContainerHeader>
   )
}