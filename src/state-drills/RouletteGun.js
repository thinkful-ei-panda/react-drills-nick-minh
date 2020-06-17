import React from 'react';

class RouletteGun extends React.Component {

  

  state = {
    chamber : null,
    spinningTheChamber : false,
    message : ''
  };

  checkChamber() {
    let tempMessage = '';

    if(this.state.spinningTheChamber) {
      tempMessage = 'spinning the chamber and pulling the trigger! ...';
    }

    else {        
      if(this.props.bulletInChamber === this.state.chamber) {
        tempMessage = 'BANG!!!!';
      }
      else {
        tempMessage = 'you\'re safe!!';
      }
    }
    console.log('chamber: ' + this.state.chamber);
    console.log(tempMessage);
    this.setState(
      {
        message : tempMessage
      }
    );
  }

  handleClick() {
    let randomNumber;
    this.setState(
      {
        spinningTheChamber : true,
      }
    ,
    () => setTimeout(() => {
      //random integer between 1 and 8... i think
      console.log('setTimeout is working');
      this.checkChamber();
      randomNumber = Math.floor(Math.random()*8)+1;
      this.setState(
        {
          chamber : randomNumber,
          spinningTheChamber : false
        },
        () => this.checkChamber()
      );

    


    }, 2000)
    );
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.handleClick()}>Pull the trigger!</button>
      </div>
    )
  }

}

export default RouletteGun;