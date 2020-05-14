
import React, { useContext } from 'react';
import styled from 'styled-components';
import { HomeFeedContext } from './HomeFeedContext'
import { heart } from 'react-icons-kit/feather/heart'
import { Icon } from 'react-icons-kit'
import Tweet from './Tweet'
import MyForm from './PostTweetForm'


const Homefeed = () => {
    //const [newTweet, setNewTweet] = React.useState(null);
    let homefeedInfo = useContext(HomeFeedContext);
    let pageStatus = homefeedInfo.status;







    if (pageStatus === "loading") {

        return <div>loading</div>
    }

    if (MyForm.tweetStatus === "loaded") {


    }
    else {
        console.log("here is MyForm", MyForm.status)
        console.log("liked by array", homefeedInfo.homeFeed);

    }
    const items = [];

    homefeedInfo.homeFeed.tweetIds.forEach(id => items.push(


        <Tweet
            avatarLink={homefeedInfo.homeFeed.tweetsById[id].author.avatarSrc}
            displayNameSource={homefeedInfo.homeFeed.tweetsById[id].author.displayName}
            handleSource={homefeedInfo.homeFeed.tweetsById[id].author.handle}
            dateSource={homefeedInfo.homeFeed.tweetsById[id].timestamp}
            contentSource={homefeedInfo.homeFeed.tweetsById[id].status}
            isLiked={homefeedInfo.homeFeed.tweetsById[id].isLiked}
            tweetId={homefeedInfo.homeFeed.tweetsById[id]} />



    ))

    return (
        <div>
            <MyForm></MyForm>
            <ul>{items}</ul>
        </div>
    );
}


export default Homefeed;