import styles from "./styles.module.scss";
import {
  InstagramLogo,
  WhatsappLogo,
  MapPin,
  EnvelopeSimple,
} from "phosphor-react";

export function ContactSection() {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>
            Entre em <span>contato</span> comigo!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <aside className={styles.box}>
          <div>
            <WhatsappLogo size={32} />
            <p>(99) 99999-9999</p>
          </div>
          <div>
            <MapPin size={32} />
            <p>Manaus - Amazonas</p>
          </div>
          <div>
            <EnvelopeSimple size={32} />
            <p>meuemail@gmail.com</p>
          </div>
        </aside>
      </main>
    </>
  );
}
