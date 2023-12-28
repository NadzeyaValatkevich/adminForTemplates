import './App.css';
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home/Home";
import { appThunks } from "./index";
import { useAppSelector } from '../common/hooks/useAppSelector';
import { AppRootStateType } from './store';
import { useActions } from '../common/hooks/useActions';
import { useEffect } from 'react';

function App() {

  // const isInitialized = useAppSelector((state: AppRootStateType): boolean => state.app.isInitialized);

  const { initializeApp } = useActions(appThunks);

  // if (!isInitialized) {
  //   <Loader />
  // }

  useEffect(() => { initializeApp() }, []);

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
