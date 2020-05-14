
import React, { useContext } from 'react';
import styled from 'styled-components';
import { user } from 'react-icons-kit/feather/user';
import { UserContext } from './CurrentUserContext'
import { UserFeedContext } from './UserFeedContext'
import Tweet from './Tweet';




const Profile = () => {

    let userInfo = useContext(UserContext);
    let userTweets = useContext(UserFeedContext)
    let myTweets = userTweets.userFeed
    let myTweetStatus = userTweets.status

 console.log("*** UserInfo: ", userInfo)
    console.log("*** UserTweets: ", userTweets)
    const isReady = !(Object.keys(userInfo) === 0 || userInfo === undefined || Object.keys(userTweets) === 0 || userTweets === undefined);
    //console.log("1st loading of my Tweets", myTweets)
    // if ((!isReady) || (pageStatus === "loading" && userInfo.status === "loading")) {
    if ((!isReady)) {
        return <div>loading</div>
    }
    else if (userInfo.status === "loading" || userTweets.userFeed === null) {
        return <div>loading</div>
    }


    //console.log("2nd loading of my Tweets", myTweets)
    //userInfo = userInfo.currentUser.profile
    let profile = userInfo.currentUser.profile
    const items = [];
    //console.log(`${userInfo.handle}`)
    console.log(" my Tweets", myTweets)
    myTweets.tweetIds.forEach(id => items.push(

        < Tweet
            avatarLink={myTweets.tweetsById[id].author.avatarSrc}
            displayNameSource={myTweets.tweetsById[id].author.displayName}
            handleSource={myTweets.tweetsById[id].author.handle}
            dateSource={myTweets.tweetsById[id].timestamp}
            contentSource={myTweets.tweetsById[id].status}
            isLiked={myTweets.tweetsById[id].isLiked}
            isRetweeted={myTweets.tweetsById[id].isRetweeted}
            numLikes={myTweets.tweetsById[id].numLikes}
            numRetweets={myTweets.tweetsById[id].numRetweets}
        />



    ))








    return <div>
        <Cover src={profile.bannerSrc} /><Avatar src={profile.avatarSrc} />

        <DisplayName> {profile.displayName}</DisplayName>
        <Handle>@{profile.handle}</Handle>
        <Bio>{profile.bio}</Bio>

        <ul>{items}</ul>


    </div >;



};

const Cover = styled.img`
    width: 600px;
    height: 170px;
    border-radius: 10px;
    z-index: 0; 
`;
const Avatar = styled.img`
    margin-top: 100px;
    border-radius: 500px;
    border: solid white 3px;
    width: 150px;
    height: 150px;
    z-index: 1;
    float: left;
    margin-right: -100%;
    position: relative;
    margin-left: 25px;
    

`;

const DisplayName = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 80px;
    margin-left: 25px;
`;

const Handle = styled.div`
    font-size: 15px;
    margin-left: 25px;
    color: grey;
`;

const Bio = styled.div`
    margin-top: 10px;
    font-size: 14px;
    margin-left: 25px;
    max-width: 600px;

`;


const DisplayNameTweet = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-top: -40px;
    margin-left: 50

`;

const HandleTweet = styled.span`
    font-size: 15px;
    color: grey;
    margin-left: 5px;
`;

const DisplayWrapper = styled.div`
    margin-top: -40px;
    margin-left: 55px;

`;

const AvatarTweet = styled.img`
    display: inline-block;
    max-height: 50px;
    max-width: 50px;
    border-radius: 80px;
`;

const Content = styled.div`
    font-size: 18px;
    margin-top: 18px;

`;

const TweetDate = styled.span`
    font-size: 15px;
    color: grey;

`;

export default Profile;