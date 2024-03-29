import React, { useState } from 'react'
import { theme } from '../components/theme';
import { Button, Fab, TextField, ThemeProvider, Typography } from '@mui/material';
import style from '../styles/login.module.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth'
import { initFirebase } from '../firebase/firebaseApp'

export default function login() {
    initFirebase();
    const router = useRouter();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Loading</div>
    }
    if (user) {
        router.push("/home");
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const result = await signInWithEmailAndPassword(auth, email, password)
        console.log(result.user);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={style.window}>
                <form className={style.logincard} color="primary">
                    <div className={style.heading}>Login</div>
                    <div className={style.input}>
                        <TextField
                            id='margin-none'
                            label="Email"
                            className={style.email}
                            type="email"
                            size="small"
                            color="primary"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className={style.input}>

                        <TextField
                            label="Password"
                            variant="outlined"
                            className={style.password}
                            type="password"
                            color="primary"
                            size="small"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>

                    <div className={style.submit}>
                        <Fab
                            variant="extended"
                            color="secondary"
                            type="submit"
                            onClick={loginUser}>
                            Login</Fab>
                    </div>
                    <div className={style.link}>
                        <Typography variant="subtitle">
                            <a href="/signup">Don't have an account?</a>
                        </Typography>
                    </div>
                </form>
            </div>

        </ThemeProvider>
    )
}
