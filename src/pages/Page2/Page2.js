import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useStyles from './page2-jss';

export const Page2 = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);
    const { classes } = useStyles();

    return (
        <Box className={classes.content}>
            <div className={classes.userText}> {JSON.stringify(user)} </div>
            <Button variant="contained" onClick={() => navigate('/a')} >Go to a</Button>
        </Box>
    )
}