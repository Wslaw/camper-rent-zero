// import styles from "./app.modules.css";
import  "./styles/styles.css"
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main className="app" />
      <Footer />
    </>
  );
}

export default App;
