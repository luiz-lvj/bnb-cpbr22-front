import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Start from "./components/Start";
import Dash from "./components/Dash";
import Search from "./components/Search";
import Exams from "./components/Exams";
import ExamEx from "./components/ExamEx";
import Req from "./components/Req";
import { useState } from "react";


function App() {
  const [hospital, setHospital] = useState({});
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/"  element={<Login   setHospital={setHospital} />} />
        <Route path="/start"  element={<Start/>} />
        <Route path="/search"  element={<Search/>} />
        <Route path="/dashboard"  element={<Dash/>} />
        <Route path="/exams"  element={<Exams/>} />
        <Route path="/examex"  element={<ExamEx/>} />
        <Route path="/req"  element={<Req/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
