import React from 'react'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../slices/UserSlice';
import { useNavigate } from 'react-router-dom';

export const Page1 = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();
    return (
        <div className=''>
            <div>
                {JSON.stringify(user)}
            </div>
            <Button variant="contained" onClick={() => {
                dispatch(setUser({username: 'abc'}))
            }}>set user</Button>
            <Button variant="contained" onClick={() => {
                navigate('/b')
            }}>nav b</Button>
        </div>
    )
}