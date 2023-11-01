import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "/src/css/profile.css"
import { useEffect, useState } from "react";
import { createUser } from "../../db/user-collection";

const Profile = () => {
    const auth = useAuth();
    const user = auth.userLogged;
    const { displayName, email, photoUrl } = user;
    const navigate = useNavigate();

    // firestore
    const [valuesUser, setValuesUser] = useState(null);

    const onHandleLogout = async (e) => {
        e.preventDefault();
        const result = await auth.logout();
        if (result.success) {
            navigate("/");
        } else {
            console.log(result.error);
        }
    }

    const saveDataUser = async (valuesUser) => {
        const result = await createUser(valuesUser);
    }

    const getUser = async(email) => {
        const result = await getUser(email);
    }
    
    const EditDataUser = async (email, newValue) => {
        setValuesUser({
            ...valuesUser,
            displayName: newValue,
        })
        const result = await editUser(email, valuesUser)
    }

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/");
    //     }
    // }, [])

    useEffect(() => {
        setValuesUser({
            email: email,
            name: displayName,
            photoUrl: photoUrl,
        });
    }, [email, displayName]);

    useEffect(() => {
        if (valuesUser) {
            saveDataUser(valuesUser);
        }
    }, [valuesUser])

    return (
        <div>

            { user ? <>
                <div>
                    <h1>Profile</h1>
                    <span>Name: {displayName}</span>
                    <span>Email: {email}</span>
                </div>

                <button onClick={onHandleLogout}>
                    Logout
                </button>
            </>
            :
            <><h1>Please, log in</h1></>
            }
        </div>
    )
}

export default Profile;