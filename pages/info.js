import { ThemeProvider } from '@emotion/react'
import { theme } from '../components/theme';
import React, { useState } from 'react'
import style from "../styles/info.module.css"
import { Checkbox, Fab, FormControl, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import axios from './api/axios';

export default function info() {

    const [name, setName] = useState('');
    const [collegename, setCollegeName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/test');
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={style.window}>
                <FormControl className={style.logincard} color="primary">
                    <div className={style.heading}>Enter details</div>
                    <div className={style.input}>
                        <TextField
                            id='margin-none'
                            label="Name"
                            className={style.email}
                            type="email"
                            size="small"
                            color="primary"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div className={style.input}>

                        <TextField
                            label="College Name"
                            variant="outlined"
                            className={style.password}
                            type="text"
                            color="primary"
                            size="small"
                            onChange={(e) => {
                                setCollegeName(e.target.value)
                            }}
                        />
                    </div>



                    <div className={style.interestCard}>
                        <h2>Your interests</h2>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Required" />
                            <FormControlLabel control={<Checkbox />} label="Disabled" />
                        </FormGroup>
                    </div>
                    <div className={style.submit}>
                        <Fab
                            variant="extended"
                            color="secondary"
                            type="submit"
                            onClick={handleSubmit}>
                            Continue</Fab>
                    </div>
                </FormControl>
            </div>

        </ThemeProvider>
    )
}
