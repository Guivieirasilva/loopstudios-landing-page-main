import { MenuMobile } from "./styles";

import IconClose from "../../assets/images/icon-close.svg"
import Logo from "../../assets/images/logo.svg"
import { useEffect } from "react";

interface Props {
   menuIsVisible: any,
   setMenuIsVisible: any,

}

export function NavMenuMobile({menuIsVisible, setMenuIsVisible }: Props) {

   useEffect(() => {
      document.body.style.overflowY = menuIsVisible ? "hidden" : "auto" ;
   }, [menuIsVisible])

   return(
      <MenuMobile isVisible={menuIsVisible} >
         <div className="mobile">
            <a href="#"><img src={Logo} alt="" /></a>
            <button onClick={() => setMenuIsVisible(false)}><img src={IconClose} alt="Icone de X para fechamento do menu mobile" /></button>
            
         </div>
         <nav className="navMobile">
            <ul>
               <li>Sobre</li>
               <li>Carreiras</li>
               <li>Eventos</li>
               <li>Produtos</li>
               <li>Suporte</li>
            </ul>
         </nav>
      </MenuMobile>
   )
}