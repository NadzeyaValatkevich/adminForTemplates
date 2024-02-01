import './App.css';
import { Router } from './router';
import { useAppSelector } from '../common/hooks/useAppSelector';
import { AppRootStateType } from './store';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { initializeApp } from './appThunks';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { InfoSnackBar } from '@/components/InfoSnackBar/InfoSnackBar';


function App() {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector((state: AppRootStateType): boolean => state.app.isInitialized);

  // const { initializeApp } = useActions(appThunks);

  // if (!isInitialized) {
  //   <Loader />
  // }

  useEffect(() => { dispatch(initializeApp()) }, []);

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
      <InfoSnackBar />
    </>
  )
}

export default App
