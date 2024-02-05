import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { MainMenuItemType, MainMenuItemsType } from '@/common/types/mainMenuTypes';
import { FC, useCallback } from 'react';
import { EditableSpan } from '@/components/EditableSpan';
import { changeMainMenuTitle } from '../mainMenuReducer';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';

type MenuNamesProps = {
    mainMenuItems: MainMenuItemsType
}

export const MenuNames: FC<MenuNamesProps> = ({ mainMenuItems }) => {
    const dispatch = useAppDispatch();


    return (
        <Box sx={{ width: "100%", marginBottom: "50px" }}>
            <Typography variant='h5'>Названия разделов сайта</Typography>
            <Divider />
            <Typography sx={{ marginBottom: "30px" }} >Кликните два раза по названию раздела сайта, чтобы его изменить</Typography>
            <Grid container spacing={2} >
                {Object.entries(mainMenuItems).map((el: [string, MainMenuItemType], index) => {

                    const onChangeMainMenuTitle = (newTitle: string) => {
                        dispatch(changeMainMenuTitle({ title: newTitle, keyItem: el[0] }))
                    }

                    return (
                        <Grid item xs={4} key={index}>
                            <EditableSpan title={el[1].title} onChange={onChangeMainMenuTitle} />
                        </Grid>
                    )
                })}
                {/* <Grid item xs={4}>
                    <Paper>{mainMenuItems["home"].title}</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Об усадьбе</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Развлечения</Paper>
                </Grid> */}
            </Grid>
        </Box>
    )
}