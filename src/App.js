import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Shop from './Shop';
import Checkout from './Checkout';

//#region styles
const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'Nixie One', cursive;
`
//#endregion

function App() {

  return (
    <AppWrapper>
       <h1>Plants Store</h1>
       <Router>
       <Switch>
         <Route exact path="/" component={Shop}/>
         <Route exact path="/checkout" component={Checkout} />
       </Switch>
       </Router>
    </AppWrapper>
  );
}

export default App;
