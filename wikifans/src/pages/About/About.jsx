import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>
        WikiFans é um projeto de wiki para fãs de Harry Potter, onde os usuários
        podem visualizar informações detalhadas sobre personagens da série, como
        casa, patrono e uma breve descrição. Feito com React e focado em uma
        interface amigável e responsiva.
      </p>
    </div>
  );
};

export default About;
