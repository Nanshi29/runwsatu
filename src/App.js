// import './App.css';
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import EmailService from "./components/EmailService/EmailService";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import PersonalTraining from "./components/PersonalTraining/PersonalTraining";
import RunnerGallery from "./components/RunnerGallery/RunnerGallery";
import TrainingPackages from "./components/TrainingPackages/TrainingPackages";
function App() {
  return (
    <div>
      <Home />
      <About />
      <PersonalTraining />
      <Achievements />
      <TrainingPackages />
      <RunnerGallery />
      <EmailService />
      <Footer />
    </div>
  );
}

export default App;
// <About />
//       <PersonalTraining />
//       <Achievements />
//       <TrainingPackages />
//       <RunnerGallery />
//       <EmailService />
//       <Footer />
