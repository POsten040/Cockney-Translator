import React from 'react';
import Input from './Input';

class GameController extends React.Component {
  state = { 
    gameStart: false
  }
  handleGameStart = () => {
    console.log(this.state.gameStart)
    this.setState(prevState => ({
      gameStart: !prevState.gameStart
    }))
  }
  
  render() { 
    const gameContainer = {
      position: 'absolute', 
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '90%',
      backgroundColor: '#45ba67'
    }
    return ( 
      <>
        <div style={gameContainer}>
          <Input gameStart={this.state.gameStart} handleGameStart={this.handleGameStart}/>
        </div>
      </>
    );
  }
}

export default GameController;