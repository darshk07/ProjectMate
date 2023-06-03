import React, { useEffect } from 'react'
import { getAuth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from "next/router";
import { initFirebase } from "../firebase/firebaseApp"
import { Button } from '@mui/material';

export default function home() {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Loading ....</div>
    }
    if (!user) {
        router.push("/login");
        return <div>Please sign in to continue.</div>
    }
    if(user) {
        console.log(user);
    }




    return (
        <div>
            {user ? <>{user.uid}</> : null}
            <Button onClick={() => auth.signOut()}>Sign out</Button>
            hello
        </div>
    )
}


//https://youtu.be/BQrE98bP6m4