import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route index element={<MainPage/>}/>
              <Route path="one" element={<PageOne/>}/>
              <Route path="two" element={<PageTwo/>}/>
              <Route path="three" element={<PageThree/>}/>
              <Route path="users" element={<UsersPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
