import React, { Component } from 'react';
import { Button } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="slogan" alt='slogan' src='/images/slogan.svg'/>
        <img className="phone" alt='phone' src='/images/phone.png'/> 
        <Button text={["카카오톡 ", <span className="button__text">@위틀리</span>, " 추가하고 할인받기"]}></Button>
        <Button text={[<span className="button__text">위틀리 홈페이지</span>, "에서 할인받기"]}></Button>
      </div>
    );
  }
}

export default App;
