import React, {Component} from 'react';
import './App.css';
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lapse: 0,
      running: false,
      minute: 0,
      second: 0,
      msecond: 0,
      minten: '0',
      secten:'0'
    }
    this.handleRunClick = this.handleRunClick.bind(this)
    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleLapClick = this.handleLapClick.bind(this)
    this.pad = this.pad.bind(this)

  }
  handleRunClick = () => {
    let ms = this.state.msecond;
    let s = 1;
    let m = 1;
    if (this.state.running) {
      //StopWatch stoop
      clearInterval(this.timer);
      this.setState({running: false});
    } else {
      // StopWatch staart
      this.setState({running: true});
      this.timer = setInterval(() => {
  if(ms<=1000)
        this.setState({msecond: ms++})
  else {
    ms=0
    this.setState({msecond:0})
    if(this.state.second<60){
          this.setState({second: s++})
        }
    else {
      this.setState({second:0})
      s = 1;
      this.setState({minute: m++})
      if(this.state.minute==60){
        clearInterval(this.timer)
      }
    }


        }
      }, );
    }
  }

  handleClearClick = () => {
    clearInterval(this.timer);
    this.setState({running: false, minute: 0, second: 0, msecond: 0});
    document.getElementById('lap').innerHTML = '';
  }
handleLapClick = () =>{
  let timelap = `${this.state.minute}:${this.state.second}:${this.state.msecond}`;
  document.getElementById('lap').innerHTML += '</br>' + timelap;
}
pad = (number) =>{

    return (number < 10 ? '0' : '') + number
}
  render() {
    return (
      <div className='Sw'>
        <div className='controlBoard'>
      <label>{this.pad(this.state.minute)}:{this.pad(this.state.second)}:{this.pad(this.state.msecond)}</label>
    </div>
    <div className='LapBoard'>
    <label id='lap'></label>
  </div>
      <div className='Buttons'>
      <button onClick={this.handleRunClick} className="start">{
          this.state.running
            ? 'Stop'
            : 'Start'
        }</button>
      <button onClick={this.handleClearClick} className='clear'>Clear</button>
      <button onClick={this.handleLapClick} className='lap'>Lap</button>
    </div>

  </div>
  )
  }
}
export default StopWatch;
