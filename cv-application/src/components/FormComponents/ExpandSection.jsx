import styled from 'styled-components'

const ExpandSection = ({ isOpen, setOpen, sectionName, iconName }) => {
  return (
    <ExpandSectionWrapper>
      <button
        className="expand-section"
        onClick={() => setOpen(isOpen ? '' : sectionName)}
      >
        <h2 className="expand-section-header">
          <i className={`${iconName}`} />
          {sectionName}
        </h2>
        <i
          className={`fa-solid fa-chevron-up chevron ${isOpen ? 'open' : ''}`}
        />
      </button>
    </ExpandSectionWrapper>
  )
}
export default ExpandSection

export const ExpandSectionWrapper = styled.main`
  .expand-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 24px;
  }

  .expand-section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0;
  }
`
