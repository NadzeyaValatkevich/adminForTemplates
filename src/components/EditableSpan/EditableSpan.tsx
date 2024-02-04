import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useState } from "react";

type EditableSpanPropsType = {
    title: string,
    onChange: (title: string) => void
}

export const EditableSpan = React.memo(({ title, onChange }: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setTitle] = useState('');

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        onChange(newTitle)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    };

    return (
        editMode
            ? <TextField value={title} variant={'standard'} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus />
            : <span onDoubleClick={activateEditMode}>{title}</span>
    )
})