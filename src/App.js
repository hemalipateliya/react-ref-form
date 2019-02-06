import React, { Component } from 'react';

import './App.css';


class App extends Component {


state={

    name:'',
    age:'',
    city:'',
    student:[],

  }

  /*changeName=(event)=>
  {

      const name=this.state.name;
      this.setState({
        name:event.target.value
      })

  }

changeAge=(event)=>
{
 const age=this.state.age;

this.setState({
    age:event.target.value
})


}

changeCity=(event)=>
{

 const city=this.state.city;
  this.setState({

    city:event.target.value
  })
}*/

onKeyHandle=(target,e)=>
  {

      if(e.keyCode===13)
      {
          switch(target)
          {

              case 'name':
                this.age.focus();
                console.log(target, this.age)
                break;

              case 'age':
                this.city.focus();
                break;

              case 'city':
              this.submit.focus();
              break;

              default:
              this.name.focus();




          }

      }



  }

  showData=(event)=>
  {
    const s_name=this.name.value;
    console.log(s_name);
    const s_age=this.age.value;

    const s_city=this.city.value;
    const  student =this.state.student;
    student.push({name:s_name,age:s_age,city:s_city});
   
//student.concat(this.name.value);

    this.setState({
       student

    })
    event.preventDefault()
  }

  render() 
  {
    let list =this.state.student.map((s,index)=> (<li key={index}>{s.name}</li>));


    return (
      <div className="App">
        <form>
        <span> Name:</span><input type="text" ref={(input)=>{this.name=input}} onKeyUp={this.onKeyHandle.bind(this,'name')} /><br/>
        <span> Age:</span><input type="text" ref={(input)=>{this.age=input}} onKeyUp={this.onKeyHandle.bind(this,'age')}/><br/>
        <span> City:</span><input type="text" ref={(input)=>{this.city=input}} onKeyUp={this.onKeyHandle.bind(this,'city')}/><br/>
        <input type="submit" onClick={this.showData}/>
        </form>
        <ul>
        {list}
        </ul>
        

      </div>
    );
  }
}

export default App;
