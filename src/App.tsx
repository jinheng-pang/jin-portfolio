import "./App.css";
import Header from "./components/header/Header";
import Experience from "./components/experiences/Experience";
import DashBoard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <hr className="seperator" />
      <div className="main-content">
        <Experience />
        <DashBoard />
      </div>
      <hr className="seperator" />
    </>
  );
}

export default App;
