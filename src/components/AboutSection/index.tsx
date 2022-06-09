import styles from "./styles.module.scss";

export function AboutSection() {
  return (
    <>
      <main className={styles.contentContainer}>
        <aside className={styles.aside}>
          <span>
            <img
              src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Girl coding"
            />
          </span>
        </aside>
        <section className={styles.hero}>
          <h1>Quem sou eu?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </main>
    </>
  );
}
