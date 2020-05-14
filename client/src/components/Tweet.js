
import React, { useContext } from 'react';
import Profile from './Profile'
import { userInfo } from 'os'
import styled from 'styled-components';
import { heart } from 'react-icons-kit/feather/heart'
import { Icon } from 'react-icons-kit'
import { repeat } from 'react-icons-kit/feather/repeat'
import { messageCircle } from 'react-icons-kit/feather/messageCircle'

const Tweet = ({ avatarLink, displayNameSource, handleSource, dateSource, contentSource, isLiked, tweetId }) => {

    //const [likeBoolean, setLikeBoolean] = React.useState(null);

    //'/api/tweet/:tweetId/like'
    let likeBoolean;

    const clickLike = (isLiked) => {

        likeBoolean = true

        console.log(tweetId.id)

        if (!isLiked) {

            likeBoolean = true;

        } else if (isLiked) {

            likeBoolean = false;

        }

        const sendObject = {
            like: likeBoolean
        }
        var myJSON = JSON.stringify(sendObject);


        fetch(`/api/tweet/${tweetId.id}/like`, {
            method: 'PUT',
            body: myJSON,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

        }).then(returnTweet => {
            returnTweet.json()

            //HomeFeedContextStuff.setHomeFeed(...returnTweet)
            //setStatus("idle")
            //console.log("returned Data", data)

        }, [isLiked])


    }


    return (

        <TweetDiv>
            <Avatar src={avatarLink} />
            <DisplayWrapper>
                <DisplayName href={`/${handleSource}`}> {displayNameSource}</DisplayName>
                <Handle>@{handleSource}</Handle>
                <TweetDate> · {(Date(dateSource).slice(4, 10))}</TweetDate>
            </DisplayWrapper>
            <Content>{contentSource}</Content>
            <TweetMenuBar>
                <LikeButton onClick={() => clickLike(isLiked, tweetId)}> {isLiked ? <StyledIcon icon={heart} /> : <Icon icon={heart} />}</LikeButton>
                <RetweetButton><Icon icon={repeat} /></RetweetButton>
                <ReplyButton><Icon icon={messageCircle} /></ReplyButton></TweetMenuBar>


        </TweetDiv>

    )
}

const TweetDiv = styled.div`
    font-size: 12px;
    padding: 25px;
    border-radius: 1px;
    max-width: 600px;
    margin-left: -40px;
    
    border: solid 0.5px grey 
`;

const DisplayName = styled.a`
    font-size: 20px;
    font-weight: bold;
    margin-top: -40px;
    margin-left: 50

`;

const Handle = styled.span`
    font-size: 15px;
    color: grey;
    margin-left: 5px;
`;

const DisplayWrapper = styled.div`
    margin-top: -40px;
    margin-left: 55px;

`;

const Avatar = styled.img`
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



const LikeButton = styled.button`
color: grey;
float: right;
background: none;
border: none;
box-shadow: 0px 0px 0px transparent;
border: 0px solid transparent;
text-shadow: 0px 0px 0px transparent;
 
`

const RetweetButton = styled.button`
color: grey;
margin-left: 250px;
background: none;
border: none;
box-shadow: 0px 0px 0px transparent;
border: 0px solid transparent;
text-shadow: 0px 0px 0px transparent;

}
 
 
 &:focus {
    color: green;
    
 }`

const ReplyButton = styled.button`
color: grey;
float: left;
background: none;
border: none;
box-shadow: 0px 0px 0px transparent;
border: 0px solid transparent;
text-shadow: 0px 0px 0px transparent;

 
 
 &:focus {
    color: blue;
 }`;

const TweetMenuBar = styled.div`
    margin-top: 30px;
`;


const StyledIcon = styled(Icon)`
    color: red;
    border: none;

`;


export default Tweet; 