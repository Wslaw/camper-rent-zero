// import styles from "./app.modules.css";
import  "./styles/styles.css"
// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer';
import MainMenu from "./components/MainMenu/MainMenu";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import FavoritePage from "./Pages/FavoritePage/FavoritePage.jsx";
import CatalogPage from "./Pages/CatalogPage/CatalogPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";


function App() {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favorites" element={<FavoritePage/>}/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      {/* <Header />
      <Main className="app" />
      <Footer /> */}
    </>
  );
}

export default App;
