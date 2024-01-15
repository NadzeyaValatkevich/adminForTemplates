import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';

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
                {el.items.map((item: any, index: number) => (
                    <NavLink to={item.path}
                        style={{ textDecoration: 'none', color: 'black' }}
                        key={index}>
                        <ListItemButton sx={{ pl: 9 }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </NavLink>
                ))}
            </Collapse>}
            <Divider />
        </>
    )

}
