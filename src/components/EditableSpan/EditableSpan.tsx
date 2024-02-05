import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useState } from "react";

type EditableSpanPropsType = {
    title: string,
    onChange: (title: string) => void
}

export const EditableSpan = React.memo(({ title, onChange }: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const activateEditMode = () => {
        setEditMode(true)
        setNewTitle(title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        onChange(newTitle)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    };

    return (
        editMode
            ? <TextField value={newTitle} variant={'standard'} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus />
            : <span onDoubleClick={activateEditMode}>{title}</span>
    )
})