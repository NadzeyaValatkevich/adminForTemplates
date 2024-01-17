import './App.css';
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/AdminPage/AdminPage";
import { appThunks } from "./index";
import { Router } from './router';
import { useAppSelector } from '../common/hooks/useAppSelector';
import { AppRootStateType } from './store';
import { useActions } from '../common/hooks/useActions';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { ErrorSnackBar } from '@/components/ErrorSnackBar/ErrorSnackBar';


function App() {
  const isInitialized = useAppSelector((state: AppRootStateType): boolean => state.app.isInitialized);

  const { initializeApp } = useActions(appThunks);

  // if (!isInitialized) {
  //   <Loader />
  // }



  useEffect(() => { initializeApp() }, []);

  if (!isInitialized) {
    return <div
      style={{ position: 'fixed', top: '50%', textAlign: 'center', width: '100%' }}
    >
      <CircularProgress />
    </div>
  }

  return (
    <>
      <Router />
      <ErrorSnackBar />
    </>
  )
}

export default App
