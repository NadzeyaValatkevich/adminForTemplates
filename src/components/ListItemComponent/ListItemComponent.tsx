import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import { List } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

type ListItemComponentPropsType = {
    el: any
}


export const ListItemComponent = ({ el }: ListItemComponentPropsType) => {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick} key={el.id}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={el.title} />
                {el.items ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItemButton>
            {el.items && <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItemButton sx={{ pl: 9 }}>
                    <ListItemText primary="Starred" />
                </ListItemButton>
            </Collapse>}
            <Divider />
        </>
    )

}
