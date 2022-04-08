import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, onDeleteFn} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const onDeleteItem = () => {
    onDeleteFn(id)
  }

  return (
    <li className="bh-each-list-container">
      <p className="bh-time">{timeAccessed}</p>
      <div className="bh-history-item-container">
        <div className="bh-history-item">
          <img className="bh-domain-logo" src={logoUrl} alt="domain logo" />
          <div className="bh-title-container">
            <p className="bh-title">{title}</p>
            <p className="bh-domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          className="bh-delete-button"
          type="button"
          onClick={onDeleteItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
