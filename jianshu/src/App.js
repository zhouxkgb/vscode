import React from 'react';
import { Provider } from "react-redux";
import { Globalstyle } from './style.js';
import { BrowserRouter, Route } from "react-router-dom";
import { IconFontStyle } from './statics/iconfont/iconfont'
import Header from './common/header';
import store from './store';
import Home from './pages/home'
import Detail from "./pages/detail";
function App() {
  return (
    <div>
      <Globalstyle />
      <IconFontStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
