
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages//Homepage';
import ProjectContainer from './pages/ProjectContainer';
import Skill from './skill/skill';
import Contact from './contact/contact';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<ProjectContainer />} />
          <Route path="/Skills" element={<Skill />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <ProjectContainer />
        <Skill />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
