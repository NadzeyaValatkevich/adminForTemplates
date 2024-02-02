import React, { ReactNode } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { ListItemComponent } from '../../../components/ListItemComponent/ListItemComponent';
import { KITCHEN_PAGE, MAIN_PAGE, NEW_PASSWORD, FORGOT_PASSWORD, MAIN_MENU_MANAGEMENT } from '@/common/routesPages/routes';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
// const pages = ['Главная', 'О нас', 'Кухня', 'Развлечения', 'Галерея', 'Контакты', 'Правила'];


// const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            width: '300px',
            position: 'relative'
        },
    }),
);

export type ItemType = {
    id: number,
    title: string,
    path: string
};

export type MenuItemType = {
    id: number,
    title: string,
    icon?: ReactNode,
    path?: string,
    items?: ItemType[]
};


export const Sidebar = () => {

    const classes = useStyles();
    const theme = useTheme();
    // const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };

    const menuItems: MenuItemType[] = [
        {
            id: 1, title: "Главная", icon: <HomeIcon />, items: [
                // { id: 1, title: "Логотип", path: LOGO },
                // { id: 2, title: "Фоновые фотографии", path: LOGO },
                // { id: 3, title: "Заявки", path: LOGO },
                // { id: 4, title: "Политика и соглашение", path: LOGO },
            ]
        },

        {
            id: 2, title: "Администрирование", icon: <SupervisorAccountIcon />, items: [
                { id: 1, title: "Смена пароля", path: NEW_PASSWORD },
                { id: 2, title: "Забыли пароль", path: FORGOT_PASSWORD },
            ]
        },

        {
            id: 3, title: "Управление главным меню", icon: <MenuIcon />, path: MAIN_MENU_MANAGEMENT
        },

        {
            id: 4, title: "Страницы сайта", items: [
                { id: 1, title: "Главная", path: MAIN_PAGE },
                // { id: 2, title: "Об усадьбе", path: LOGO },
                // { id: 3, title: "Наши фомики", path: LOGO },
                { id: 4, title: "Кухня", path: KITCHEN_PAGE },
                // { id: 5, title: "Развлечения", path: LOGO },
                // { id: 6, title: "Места рядом", path: LOGO },
                // { id: 7, title: "Свадьбы", path: LOGO },
                // { id: 8, title: "Галерея", path: LOGO },
                // { id: 9, title: "Правила", path: LOGO },
                // { id: 10, title: "Контакты", path: LOGO },
            ]
        },
    ]


    return (
        <Drawer
            classes={{
                paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
        >
            {/* {drawer} */}
            {/* <div className={classes.toolbar} /> */}
            <Divider />
            <List>
                {menuItems.map((el: MenuItemType, index: number) => {
                    return (

                        el.path ?
                            <NavLink to={el.path}
                                style={{ textDecoration: 'none', color: 'black' }}
                                key={index}>
                                <ListItemComponent el={el} key={index} />
                            </NavLink> :
                            <ListItemComponent el={el} key={index} />
                    )
                })}
            </List>
        </Drawer>

    );
}