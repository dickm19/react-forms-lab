import React from "react";

class TwitterMessage extends React.Component {
  

    state = {
      message: "",
      currentChars: this.props.maxChars
    }



  updateValue = event => {
    
    this.setState({
      message: event.target.value,
      currentChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateValue} type="text" name="message" id="message" value={this.state.message}/>
        <p>{this.state.currentChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
