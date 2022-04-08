import './index.css'

const HistoryItem = props => {
  const {historyItemDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyItemDetails
  return (
    <div>
      <h1>{timeAccessed}</h1>
      <div>
        <div>
          <img src={domainUrl} alt="domain logo" />
          <div>
            <h1>{title}</h1>
            <p>{logoUrl}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </div>
  )
}

export default HistoryItem
