import React from 'react';
import { user } from 'react-icons-kit/feather/user';

export const UserFeedContext = React.createContext();

export const UserFeedContextStuff = ({ children }) => {
    const [userFeed, setUserFeed] = React.useState(null);
    const [status, setStatus] = React.useState('loading');

    let handle = (window.location.pathname)
    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

    React.useEffect(() => {
        fetch(`/api${handle}/feed`)
            .then(res => res.json())
            .then(data => {
                console.log('DATA GOOD', data)
                setUserFeed(data)
                setStatus("idle")

            })
    }, []);



    return (
        <div>
            <UserFeedContext.Provider value={{ userFeed, status }}>
                {children}
            </UserFeedContext.Provider>
        </div>
    )

};