import { TechLogo } from "../Techlogo";
import footerStyles from "./footer.module.css";

export function Footer(){
  return(
    <footer className={footerStyles.footer}>
          <TechLogo />
          <p >
           Ogrulhosamente criado por <br />Carlos Henrique
          </p>
  </footer>
  )  
    
}