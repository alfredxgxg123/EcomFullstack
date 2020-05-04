import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component.jsx';
import ShopPage from './pages/shopPage/shop.component.jsx';
import Header from './components/Header/Header.component.jsx';
import Registration from './pages/RegistrationPage/Registration.component.jsx';
import { auth } from './firebase/firebase';

const App = () => {

  const [ user, setUser ] = useState({
    currentUser: null
  })
  const { currentUser } = user;
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      setUser({ currentUser: user });
      console.log(user)
    })
    return () => { 
      unsubscribeFromAuth() };
  }, [])


  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
