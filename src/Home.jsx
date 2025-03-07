import Content from "./home/content/Content.jsx";
import Header from "./home/header/Header.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="app-container">
      <Header />
      <Content />
    </div>
  );
};

export default Home;