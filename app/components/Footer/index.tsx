/*import { TechLogo } from "../Techlogo";*/

import Link from "next/link";
import footerStyles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
      {/* <TechLogo /> descomente esta linha se for usar o componente */}
      <p>
        Developed by {""}<Link href="https://www.linkedin.com/in/carlos-henrique-silva-dev/" target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.link}>Carlos Henrique</Link>
          </p>
  </footer>
  )
}