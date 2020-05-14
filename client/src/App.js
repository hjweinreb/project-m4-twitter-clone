import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeFeed from './components/Homefeed';
import Notifications from './components/Notifications';
import Bookmarks from './components/Bookmarks';
import TweetDetails from './components/TweetDetails';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import { CurrentUserContext, UserContext } from './components/CurrentUserContext';
import { HomeFeedContextStuff } from './components/HomeFeedContext';
import styled from 'styled-components';
import { UserFeedContextStuff, UserFeedContext } from './components/UserFeedContext';




const App = (props) => {

  let userInfo = useContext(UserContext);
  console.log("testing adsfasdfasdf testing", userInfo)
  return (

    <BrowserRouter>
      <UserFeedContextStuff>
        <CurrentUserContext>
          <HomeFeedContextStuff>
            <span> <StyledSidebar />

              <Wrapper>
                <Switch>
                  <Route path="/feedtest">

                  </Route>
                  <Route path="/notifications">
                    <Notifications />
                  </Route>
                  <Route exact path="/">
                    <HomeFeed />
                  </Route>

                  <Route path="/bookmarks">
                    <Bookmarks />
                  </Route>
                  <Route path={`/:profile`}>
                    <Profile />
                  </Route>


                </Switch>
              </Wrapper>
            </span>

          </HomeFeedContextStuff>
        </CurrentUserContext>
      </UserFeedContextStuff>
    </BrowserRouter>



  )
}

const StyledSidebar = styled(Sidebar)`
    float: right;
    z-index: 1;
`;

const Wrapper = styled.div`
    margin-left: 306px;
    z-index: 5;
    margin-top: -340px;
`;


export default App;