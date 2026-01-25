import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MainPage } from "./pages/MainPage";
import { MiscPage } from "./pages/MiscPage";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/misc" element={<MiscPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;