import TextField from '@mui/material/TextField';

type TextFieldComponentPropsType = {
    helperText: string,
}

export const TextFieldComponent = (props: TextFieldComponentPropsType) => {
    const { helperText } = props
    return (
        <TextField
            helperText={helperText}
            id="demo-helper-text-aligned"
            margin="dense"
            // label="Name"
            size="small"
        />
    )
}