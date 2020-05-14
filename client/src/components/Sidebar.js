import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import { heart } from 'react-icons-kit/feather/heart'
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/feather/home'
import { user } from 'react-icons-kit/feather/user'
import { bell } from 'react-icons-kit/feather/bell'
import { bookmark } from 'react-icons-kit/feather/bookmark'
import HomeFeed from './Homefeed'
import Notifications from './Notifications'
import Bookmarks from './Bookmarks';
import Profile from './Profile';
import { CurrentUserContext, UserContext } from './CurrentUserContext';
import { HomeFeedContext } from './HomeFeedContext';
import { UserFeedContext } from './UserFeedContext'



function Sidebar() {

    const userInfo = useContext(UserContext);
    let userFeed = useContext(UserFeedContext);
    console.log("useFeedInfo", userFeed)
    console.log(userInfo);
    return (

        <div style={{ display: "flex" }}>
            <SideMenu>
                <Logo />

                <LinkWrapper> <StyledIcon icon={home} /><StyledLink to="/" > Home </StyledLink></LinkWrapper>


                <LinkWrapper> <StyledIcon icon={user} /> <StyledLink to={`/:profile`}> Profile</StyledLink></LinkWrapper>



                <LinkWrapper> <StyledIcon icon={bell} /><StyledLink to="/notifications">  Notifications </StyledLink></LinkWrapper>



                <LinkWrapper> <StyledIcon icon={bookmark} /><StyledLink to="/bookmarks"> Bookmarks</StyledLink></LinkWrapper>

            </SideMenu >


        </div>


    )
}

const SideMenu = styled.div`
            height: 100%;
            padding-left: 100px;
          
         
            background-color: white;
            padding-top: 20px;
            text-decoration: none;
            border-right: 2px solid rgba(0, 0, 0, 0.2);
            
        
        `;

const StyledLink = styled(Link)`
            text-decoration: none;
            font-size: 24px;
        `;

const StyledIcon = styled(Icon)`
            color: blue;
            
        `

const LinkWrapper = styled.div`
            padding: 12px 16px 12px 32px;
            text-decoration: none;
        width: max-content;
        
        `;


export default Sidebar;