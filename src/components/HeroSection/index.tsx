import styles from "./styles.module.scss";

export function HeroSection() {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, seja bem-vindo</span>
          <h1>
            Saiba as novidades de <span>Williamis</span> pelo Brasil
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <aside className={styles.aside}>
          <span>
            <img
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Girl coding"
            />
          </span>
        </aside>
      </main>
    </>
  );
}
