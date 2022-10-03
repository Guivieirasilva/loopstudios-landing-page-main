import { ContainerHeader } from "./styles";

import IconMenu from '../../assets/images/icon-hamburger.svg'
import Logo from '../../assets/images/logo.svg'

export interface PropsNavMenu {
   MenuIsVisible?: any
}

export function NavMenu(props: PropsNavMenu) {
   return(
      
      <ContainerHeader>
         <section className="navbar">
            <a href="#"><img src={Logo} alt="Logo loopsstudios Web services" /></a>
            <nav className="navdesk">
               <button onClick={props.MenuIsVisible}><img src={IconMenu} alt="Icone de abrir o menu" /></button>
               <ul>
                  <li>Sobre</li>
                  <li>Carreiras</li>
                  <li>Eventos</li>
                  <li>Produtos</li>
                  <li>Suporte</li>
               </ul>
            </nav>
         </section>

         <div className="cont">
            <h3>EXPERIÊNCIAS IMERSIVAS QUE ENTREGAM</h3>
         </div>
      </ContainerHeader>
   )
}