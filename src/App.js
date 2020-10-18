import React from 'react';
import {   BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Shop from './Shop';
// import Checkout from './Checkout';


const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

.page-title {
  font-size: 60px;
  font-weight: bold;
  font-family: 'Nixie One', cursive;
  padding: 20px;
}
`

function App() {

  return (
    <AppWrapper>
       <div className="page-title">Plants Store</div>
       <Router>
       <Switch>
         <Route exact path="/" component={Shop}/>
         {/* <Route exact path="/checkout" component={Checkout} /> */}
       </Switch>
       </Router>
    </AppWrapper>
  );
}

export default App;
