import {createAction} from "@reduxjs/toolkit";
import { RequestStatusType } from "../../utils/enums/enums";

const setStatus = createAction<{status: RequestStatusType}>('app/setStatus');
const setError = createAction<{error: string | null}>('app/setError');
const setInfo = createAction<{info: string | null}>('app/setInfo');

export const appCommonActions = {
    setStatus,
    setError,
    setInfo
};