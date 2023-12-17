import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './App.css';
import styles from "./App.module.css";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Loader } from '../components/Loader/Loader';

const isInitialized = false

if (!isInitialized) {
  <Loader />
}

function App() {

  return (
    // <div className={styles.appBlock}>

    <Container>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'*'} element={<h1>404: Page not found</h1>} />
      </Routes>
    </Container>
    // </div>
  )
}

export default App
