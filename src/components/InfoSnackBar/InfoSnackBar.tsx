import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { AppRootStateType } from '@/app/store';
import { appCommonActions } from '@/common/commonActions/AppCommonActions';
import { SyntheticEvent } from 'react';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});

export const InfoSnackBar = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector<string | null>((state: AppRootStateType) => state.app.error)
    const info = useAppSelector<string | null>((state: AppRootStateType) => state.app.info)

    const isOpen = (error !== null) || (info !== null);

    const handleClose = (event: Event | SyntheticEvent<Element, Event>, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return
        }
        error ? dispatch(appCommonActions.setError({ error: null })) : dispatch(appCommonActions.setInfo({ info: null }))
    };

    return (
        <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                {error || info}
            </Alert>
        </Snackbar>
    );
}