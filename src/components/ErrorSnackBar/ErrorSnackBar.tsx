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
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackBar = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector<string | null>((state: AppRootStateType) => state.app.error)

    const isOpen = error !== null;

    const handleClose = (event: Event | SyntheticEvent<Element, Event>, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(appCommonActions.setError({ error: null }))
    };

    return (
        <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>
    );
}