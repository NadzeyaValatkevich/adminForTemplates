import {createAction} from "@reduxjs/toolkit";

const setStatus = createAction<{status: 'idle' | 'loading' | 'succeeded' | 'failed'}>('');
const setError = createAction<{error: string | null}>('');

export const appActions = {
    setStatus,
    setError
};