import logo from "./logo.svg";
import "./App.css";
import Temp from "./Temp";
import RightSection from "./RightSection";
import FileStorage from "./FileStorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllFiles from "./AllFiles";
import Login from "./components/Login";
import ProfilePage from "./ProfilePage";
import Profile from "./Profile";
import SavedFiles  from "./components/SavedFiles";
import EditRoles from "./EditRoles";
import ApproveMedicalFiles from "./components/ApproveMedicalFiles";
import Form from "./components/Form";
function App() {
  return ( 
    <div className="flex flex-row h-ful">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/Home" element={<Home />}/>
          <Route exact path="/All" element={<AllFiles />} />
          <Route exact path="/Saved" element={<SavedFiles />} />
          <Route exact path="/Form" element={<Form />} />
          <Route exact path="/CheckMedicalFiles" element={<ApproveMedicalFiles />} />
          <Route exact path="/EditRoles" element={<EditRoles />} />
        </Routes>
      </BrowserRouter>
      {/* <Temp/> */}
      {/* <RightSection/> */}
      {/* <FileStorage/> */}
    </div>
  );
}

export default App;
