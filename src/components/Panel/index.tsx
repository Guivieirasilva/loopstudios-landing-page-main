import { ContentPanel, Creations } from "./styles";
import { Banner } from "./Banners";

import ImageDesktopEarth from "../../assets/images/desktop/image-deep-earth.jpg"
import ImageMobileEarth from "../../assets/images/mobile/image-deep-earth.jpg"

import ImageDesktopArcade from "../../assets/images/desktop/image-night-arcade.jpg"
import ImageMobileArcade from "../../assets/images/mobile/image-night-arcade.jpg"

import ImageDesktopSoccer from "../../assets/images/desktop/image-soccer-team.jpg"
import ImageMobileSoccer from "../../assets/images/mobile/image-soccer-team.jpg"

import ImageDesktopGrid from "../../assets/images/desktop/image-grid.jpg"
import ImageMobileGrid from "../../assets/images/mobile/image-grid.jpg"

import ImageDesktopAbove from "../../assets/images/desktop/image-from-above.jpg"
import ImageMobileAbove from "../../assets/images/mobile/image-from-above.jpg"

import ImageDesktopBorealis from "../../assets/images/desktop/image-pocket-borealis.jpg"
import ImageMobileBorealis from "../../assets/images/mobile/image-pocket-borealis.jpg"

import ImageDesktopCuriosity from "../../assets/images/desktop/image-curiosity.jpg"
import ImageMobileCuriosity from "../../assets/images/mobile/image-curiosity.jpg"

import ImageDesktopFisheye from "../../assets/images/desktop/image-fisheye.jpg"
import ImageMobileFisheye from "../../assets/images/mobile/image-fisheye.jpg"

export function Panel(){
   return(
      <Creations>
         <div>
            <h3>Nossas Criações</h3>
            <button>Ver tudo</button>
         </div>
         <ContentPanel>
            <Banner Desktop={ImageDesktopEarth} Mobile={ImageMobileEarth}
               text="Terra Profunda"
            />
            <Banner Desktop={ImageDesktopArcade} Mobile={ImageMobileArcade}
            text="Noite de Jogos"
            />
            <Banner Desktop={ImageDesktopSoccer} Mobile={ImageMobileSoccer}
            text="Futebol em Realidade Virtual"
            />
            <Banner Desktop={ImageDesktopGrid} Mobile={ImageMobileGrid}
            text="A Grade"
            />
            <Banner Desktop={ImageDesktopAbove} Mobile={ImageMobileAbove}
            text="Realidade Virtual de Cima"
            />
            <Banner Desktop={ImageDesktopBorealis} Mobile={ImageMobileBorealis}
            text="Bolso Boreal"
            />
            <Banner Desktop={ImageDesktopCuriosity} Mobile={ImageMobileCuriosity}
            text="A curiosidade"
            />
            <Banner Desktop={ImageDesktopFisheye} Mobile={ImageMobileFisheye}
            text="Faça o olho de peixe"
            />
         </ContentPanel>
      </Creations>
   )
}

