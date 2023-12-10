import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './App.css';
import styles from "./App.module.css";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";

function App() {

  return (
    // <div className={styles.appBlock}>


    <Container>
      <Routes>
        {/* <Route path={'/'} element={ } /> */}
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </Container>
    // </div>
  )
}

export default App
