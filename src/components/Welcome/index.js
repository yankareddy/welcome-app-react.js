// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state={isSubscribed: false}

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribed : !prevState.isSubscribed}))
  }

  onButton = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? "subscribed" : "subscribe"
  }

  render() {
    const text = this.onButton()
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onSubscribed}>{text}</button>
      </div>
    )
  }
}

export default Welcome
