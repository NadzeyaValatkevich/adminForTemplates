import {createAction} from "@reduxjs/toolkit";
import { RequestStatusType } from "../enums/enums";

const setStatus = createAction<{status: RequestStatusType}>('app/setStatus');
const setError = createAction<{error: string | null}>('app/setError');

export const appCommonActions = {
    setStatus,
    setError
};