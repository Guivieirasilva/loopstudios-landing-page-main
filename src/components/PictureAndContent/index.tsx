import { Box, Content, Picture } from "./styles";

import ImageInteractive from "../../assets/images/desktop/image-interactive.jpg"

export function PictureAndContent(){
   return(
      <Box>
         <Picture>
            <img src={ImageInteractive} alt="" />
         </Picture>
         <Content>
            <h3>O líder em realidade virtual interativa</h3>
            <p>Fundada em 2011, a Loopstudios vem produzindo projetos de realidade virtual de classe mundial para algumas das melhores empresas do mundo. Nossas criações premiadas transformaram os negócios por meio de experiências digitais que se vinculam à sua marca.</p>
         </Content>
      </Box>
   )
}