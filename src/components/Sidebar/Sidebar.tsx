import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { ListItemComponent } from '../ListItemComponent/ListItemComponent';
// const pages = ['Главная', 'О нас', 'Кухня', 'Развлечения', 'Галерея', 'Контакты', 'Правила'];


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            marginTop: 64
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}


export const Sidebar = (props: Props) => {

    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems: any = [
        {
            id: 1, title: "Главная", items: [
                { id: 1, title: "Логотип" },
                { id: 2, title: "Фоновые фотографии" },
                { id: 3, title: "Заявки" },
                { id: 4, title: "Политика и соглашение" },
            ]
        },

        { id: 2, title: "Общая информация" },

        {
            id: 3, title: "Страницы сайта", items: [
                { id: 1, title: "Главная" },
                { id: 2, title: "Об усадьбе" },
                { id: 3, title: "Наши фомики" },
                { id: 4, title: "Кухня" },
                { id: 5, title: "Развлечения" },
                { id: 6, title: "Места рядом" },
                { id: 7, title: "Свадьбы" },
                { id: 8, title: "Галерея" },
                { id: 9, title: "Првила" },
                { id: 10, title: "Контакты" },
            ]
        },
    ]

    // const drawer = (
    //     <div>
    //         <div className={classes.toolbar} />
    //         <Divider />
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
    //                 <ListItem button key={text}>
    //                     {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
    //                     <ListItemText primary={text} />
    //                 </ListItem>
    //             ))}
    //         </List>
    {/* <Divider /> */ }
    {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text) => (
                    <ListItem button key={text}> */}
    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */ }
    {/* <ListItemText primary={text} />
        </ListItem>
    ))
}
            </List >  */}
    {/* </div >
    ); */}

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            {/* <AppBar position="fixed" className={classes.appBar}> */}
            {/* <Toolbar> */}
            {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    > */}
            {/* <MenuIcon /> */}
            {/* </IconButton> */}
            {/* <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography> */}
            {/* </Toolbar > */}
            {/* </AppBar > */}
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                {/* <Hidden smUp implementation="css"> */}
                {/* <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer> */}
                {/* </Hidden> */}
                {/* <Hidden xsDown implementation="css"> */}
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
                        {menuItems.map((el: any) => (

                            <ListItemComponent el={el} />
                        ))}
                    </List>
                </Drawer>
                {/* </Hidden> */}
            </nav >
        </div >
    );
}