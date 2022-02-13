import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      time: 10,
      timer: null,
    };
  }

  componentDidMount() {
    let temp = setInterval(() => {
      console.log("hi pradeep");
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));
    }, 1000);
    this.setState({
      timer: temp,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <span>Please wait for {this.state.time} second to resend OTP</span>
      </div>
    );
  }
}

export default Timer;
