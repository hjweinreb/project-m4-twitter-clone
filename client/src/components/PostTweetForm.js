import React from 'react';
import { HomeFeedContextStuff } from './HomeFeedContext';

const MyForm = () => {
    const [tweetStatus, setTweetStatus] = React.useState('loading');
    const [newData, setNewData] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = event.target

        var status = document.getElementById('tweet')
        const sendObject = {
            status: status.value
        }
        var myJSON = JSON.stringify(sendObject);


        fetch('/api/tweet', {
            method: 'POST',
            body: myJSON,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

        }).then(returnTweet => {
            setTweetStatus("loaded")
            console.log(returnTweet)
            setNewData(returnTweet)
            //HomeFeedContextStuff.setHomeFeed(...returnTweet)
            //setStatus("idle")
            //console.log("returned Data", data)

        }, [newData])


        //HomeFeedContextStuff.setHomeFeed(...res)
        //console.log("Here is the data", sendObject)
        //console.log(JSON.stringify(Response))



    }



    return (
        <form onSubmit={handleSubmit}>
            <input id='tweet' type='text' name='tweet' placeholder="What's happening?" />


            <button>Send Tweet!</button>
        </form>


    );

}


export default MyForm;