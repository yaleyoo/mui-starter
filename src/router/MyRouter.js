import React from 'react';
import { Route, Outlet, Routes, useNavigate, useLocation, Navigate, useSearchParams } from 'react-router-dom';
import { Page1 } from '../pages/Page1/Page1';
import { Page2 } from '../pages/Page2/Page2';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container'
import useStyles from './router-jss';
import Box from '@mui/material/Box';
import { NavBar } from '../components/Navbar/NavBar';

export const MyRouter = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <Container className={classes.content}>
                <Routes>
                    <Route path="/a" element={<Outlet />}>
                        <Route path="" element={<Page1 />}></Route>
                    </Route>
                    <Route path="/b" element={<Outlet />}>
                        <Route path="" element={<Page2 />}></Route>
                    </Route>
                    <Route path='/' element={<Page1 />}> </Route>
                </Routes>
            </Container>
        </div>
    )
}