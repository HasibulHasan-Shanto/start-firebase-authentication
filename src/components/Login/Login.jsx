import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider()
const Login = () => {
    const [user, setUser] = useState(null)
    const handleLogin = () => {
        console.log('login done');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('logout done');
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="font-extrabold text-5xl">
                    Please Login Here
                </h1>
                {user ? <button onClick={handleSignOut}>
                    Log Out
                </button> : <button onClick={handleLogin}>
                    login done
                </button>}


                <h1>
                    User Name: {user?.displayName}
                </h1>
                <p>
                    Email: {user?.email}
                </p>
            </div>
        </>
    );
};

export default Login;