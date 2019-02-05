import React, { Component } from 'react';

import './App.css';

class App extends Component {


  state={

    name:'',
    age:''
  }


  showData=()=>
  {

    this.setState({
        name:this.name.value,
        age:this.age.value

    })
  }
  render() {
    return (
      <div className="App">
        <form>
        <span> Name:</span><input type="text" ref={(input)=>{this.name=input}}/>
        <span> Age:</span><input type="text" ref={(input)=>{this.age=input}}/>
        <input type="submit" onClick={this.showData}/>
        </form>
        <h4>Name :{this.state.name} Age:{this.state.age}</h4>

      </div>
    );
  }
}

export default App;
