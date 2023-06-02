import React, { useState } from 'react'
import { theme } from '../components/theme';
import { Button, TextField, ThemeProvider } from '@mui/material';
import style from '../styles/login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router';


export default function login() {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                router.push("/home")
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={style.window}>
                <form className={style.logincard} color="primary">
                    <div className={style.heading}>Login</div>
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
    )
}
