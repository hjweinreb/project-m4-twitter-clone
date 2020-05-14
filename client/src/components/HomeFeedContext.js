import React from 'react';
import { user } from 'react-icons-kit/feather/user';
import MyForm from './PostTweetForm';

export const HomeFeedContext = React.createContext();

export const HomeFeedContextStuff = ({ children }) => {
    const [homeFeed, setHomeFeed] = React.useState(null);
    const [status, setStatus] = React.useState('loading');


    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`
    React.useEffect(() => {
        fetch('/api/me/home-feed')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setHomeFeed(data)
                setStatus("idle")
                //console.log("returned Data", data)

            })
    }, [homeFeed]);
    console.log("testing tweet status", MyForm.tweetStatus)
  /*   if (MyForm.tweetStatus === "loaded"){
        setHomeFeed(...MyForm.newData)
    } */

    return (
        <div>
            <HomeFeedContext.Provider value={{ homeFeed, status }}>
                {children}
            </HomeFeedContext.Provider>
        </div>
    )

};



