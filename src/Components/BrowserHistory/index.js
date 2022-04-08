import {Component} from 'react'
import './index.css'
import '../HistoryItem'

class BrowserHistory extends Component {
  render() {
    const {initialHistoryList} = this.props
    return (
      <div>
        <h1>Browser History</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input type="search" placeholder="Search History" />
          </div>
        </div>
        <div>
          {initialHistoryList.map(eachObject => (
            <HistoryItem key={eachObject.id} historyItemDetails={eachObject} />
          ))}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
