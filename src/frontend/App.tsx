import "./App.css";
import Header from "./components/header/Header";
import Experience from "./components/experiences/Experience";
import DashBoard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <hr className="seperator" />
      <div className="main-content">
        <DashBoard />
        <Experience />        
      </div>
      <hr className="seperator" />
      <Footer />

    </>
  );
}

export default App;
