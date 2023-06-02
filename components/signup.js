import React, { useState } from 'react'
import { theme } from './theme';
import { Button, TextField, ThemeProvider } from '@mui/material';
import style from '../styles/login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from "../contexts/AuthContext";

export default function logup() {
    const { signup } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginUser = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <div className={style.window}>
                    <form className={style.logincard} color="primary">
                        <div className={style.heading}>Signup</div>
                        <TextField
                            label="Email"
                            variant="outlined"
                            className={style.email}
                            type="email"
                            color="primary"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            className={style.password}
                            type="password"
                            color="primary"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <Button
                            color="secondary"
                            className={style.submit}
                            type="submit"
                            variant="contained"
                            onClick={loginUser}>
                            Submit</Button>
                    </form>
                </div>
            </ThemeProvider>
        </AuthProvider>
    )
}
