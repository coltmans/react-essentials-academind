import "./Header.css";
import coreConceptImg from "./../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max: number) => Math.floor(Math.random() * (max + 1));

export const Header = () => {
  const randWord = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={coreConceptImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randWord} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
};
