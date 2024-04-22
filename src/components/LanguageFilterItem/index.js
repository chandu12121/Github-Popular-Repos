// Write your code here

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickLanguageFilter}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
