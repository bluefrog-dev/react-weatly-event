import React, { Component } from 'react';
import { Button } from './components';
import './App.scss';

class App extends Component {
  componentDidMount(){
    window.Kakao.init('88d4f7e748615e03809e9f5d4f067fc5');
  }

  addKakaoFriend = () => {
    window.Kakao.PlusFriend.addFriend({plusFriendId: '_xmfxiTj'})
  }

  render() {
    return (
      <div className="App">
        <img className="slogan" alt='slogan' src='/images/slogan.svg'/>
        <img className="phone" alt='phone' src='/images/phone.png'/> 
        <Button text={["카카오톡 ", <span className="button__text">@위틀리</span>, " 추가하고 할인받기"]} onClick={this.addKakaoFriend}></Button>
        <a href="https://weatly.com" target="_blank" rel="noopener noreferrer" ><Button text={[<span className="button__text">위틀리 홈페이지</span>, "에서 할인받기"]}></Button></a>
      </div>
    );
  }
}

export default App;
