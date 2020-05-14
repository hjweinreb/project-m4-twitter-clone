import React from 'react';
import { user } from 'react-icons-kit/feather/user';

export const UserContext = React.createContext();

export const CurrentUserContext = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState('loading');


    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`
    React.useEffect(() => {
        fetch('/api/me/profile')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setCurrentUser(data)
                setStatus("idle")
                //console.log("mydata", data)

            })
    }, []);
    // console.log(currentUser)
    if (status === "loading") {
        


        return (

            <div>loading</div>
        )

    }
    return (
        <div>
            <UserContext.Provider value={{ currentUser, status }}>
                {children}
            </UserContext.Provider>
        </div>
    )

};



