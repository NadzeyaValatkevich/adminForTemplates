import { appCommonActions } from '@/common/commonActions/AppCommonActions'

type ThunkAPIType = {
    dispatch: (action: any) => any
    rejectWithValue: Function
}

export const handleAsyncServerAppError = (data: any, thunkAPI: ThunkAPIType, showError = true) => {
    if (showError) {
        thunkAPI.dispatch(appCommonActions.setError({ error: data.messages.length ? data.messages[0] : 'Some error occurred' }))
    }
    thunkAPI.dispatch(appCommonActions.setStatus({ status: 'failed' }));
    return thunkAPI.rejectWithValue({ errors: data.messages })
};

export const handleAsyncServerNetworkError = (error: any, thunkAPI: ThunkAPIType, showError = true) => {
    if (showError) {
        // thunkAPI.dispatch(appCommonActions.setError({ error: error.message }))
        if (!error.response) {
            thunkAPI.dispatch(appCommonActions.setError({ error: error.message }))
        } else if (error.response.status === 400) {
            thunkAPI.dispatch(appCommonActions.setError({ error: error.response.data.detail }))
        }
        // else if (error.response.status === 422) {
        //     thunkAPI.dispatch(appCommonActions.setError({ error: error.response.data.detail[0].msg }))
        // }

    }
    thunkAPI.dispatch(appCommonActions.setStatus({ status: 'failed' }));
    return thunkAPI.rejectWithValue({ errors: [error.message] })
};


// error.response.status === 422 ? thunkAPI.dispatch(appCommonActions.setError({ error: error.response.data.detail[0].msg })) :
//     error.response.status === 400 ? thunkAPI.dispatch(appCommonActions.setError({ error: error.response.data.detail })) :
// error.response ? thunkAPI.dispatch(appCommonActions.setError({ error: error.message })) : null
// thunkAPI.dispatch(appCommonActions.setError({ error: error.response.data ? error.response.data.detail : error: error.response.data  'Some error occurred' }))