import Preloader from "./components/Preloader/Preloader";
import LogoImage from "./components/Logo/LogoImage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <LogoImage />
        <h1>
          TEAM ZAPSPEED
          <br />
          <br />
          <br />
        </h1>
        <h2>
          Launching Soon
          <br />
          Stay Tuned
        </h2>
        <Preloader />
        <p>An initiative by</p>
        <p>Shajin Mohamed</p>
        <p>shajinmohamed@hotmail.com</p>
        <p>+91-7034355888</p>
      </div>
    </div>
  );
}

export default App;
