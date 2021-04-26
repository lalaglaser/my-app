import React from 'react';
import './App.css';
import Chatbox from './Components/Chatbox';

class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    term: '',
    items:[]

  };
  

  }

onChange = (event) => {
  this.setState({term: event.target.value});
}


onSubmit = (event) => {

  event.preventDefault()
  this.setState({
    term:'',
    items: [...this.state.items, this.state.term]

  });


}


  render() {
    return(
      <div className="App"> 
      
      <h1>Chat App</h1>
      <Chatbox items={this.state.items}/>
      <form className="message-form" onSubmit={this.onSubmit}>
      <input value={this.state.term} onchange={this.onChange} />
        <button>Send</button>
      </form>
      
      </div>

    );



  }



}

export default App;
