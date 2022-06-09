import styles from "./styles.module.scss";
import {
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  FacebookLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <div className={styles.container}>
      <footer>
        <div className={styles.content}>
          <p>©️ 2022 Williamis Vieira</p>
          <p>Todos os direitos reservados</p>
          <p>Gabriel Auzier</p>
        </div>
        <div className={styles.icons}>
          <InstagramLogo size={32} color="white" />
          <TwitterLogo size={32} color="white" />
          <YoutubeLogo size={32} color="white" />
          <FacebookLogo size={32} color="white" />
        </div>
      </footer>
    </div>
  );
}
