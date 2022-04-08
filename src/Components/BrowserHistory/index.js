import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  browseHistory = event => {
    const {historyList} = this.state
    this.setState({
      searchInput: event.target.value,
      historyList, // shorthand notation key-value pair
    })
  }

  onDeleteHistoryItem = id => {
    const {searchInput, historyList} = this.state
    this.setState({
      searchInput, // shorthand key-value pair
      historyList: historyList.filter(eachObject => eachObject.id !== id),
    })
  }

  searchResults = searchResultsArray => {
    if (searchResultsArray.length === 0) {
      return (
        <div className="empty-history-container">
          <p className="no-history-msg">There is no history to show</p>
        </div>
      )
    }
    return (
      <ul className="bh-history-list-container">
        {searchResultsArray.map(eachObject => (
          <HistoryItem
            key={eachObject.id}
            historyItemDetails={eachObject}
            onDeleteFn={this.onDeleteHistoryItem}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchResultsArray = historyList.filter(eachObject =>
      eachObject.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bh-bg">
        <div className="bh-browser-bar">
          <img
            className="bh-app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="outer-adjust">
            <div className="bh-search-container">
              <img
                className="bh-search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                className="bh-input-search"
                onChange={this.browseHistory}
                type="search"
                placeholder="Search History"
              />
            </div>
          </div>
        </div>
        {this.searchResults(searchResultsArray)}
      </div>
    )
  }
}

export default BrowserHistory
