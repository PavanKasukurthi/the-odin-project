import styled from 'styled-components'

const CollapsedForm = (props) => {
  const { onClick, hideForm, title, arrayName } = props
  const { isHidden, id } = props.form
  return (
    <CollapsedFormWrapper>
      <button
        className="collapsed-form section-form"
        id={id}
        onClick={onClick}
        data-array-name={arrayName}
      >
        <p className="collapsed-form-title">{title}</p>
        <i
          className={`fa-regular ${isHidden ? 'fa-eye-slash' : 'fa-eye'} eye`}
          onClick={(e) => {
            e.stopPropagation()
            hideForm(e)
          }}
        ></i>
      </button>
    </CollapsedFormWrapper>
  )
}
export default CollapsedForm

export const CollapsedFormWrapper = styled.main`
  .collapsed-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    border-top: 5px solid rgb(243, 244, 246);
    padding: 12px 14px 12px 24px;
    width: 100%;
    background-color: white;
  }

  .collapsed-form:last-of-type {
    border-bottom: 5px solid rgb(243, 244, 246);
  }

  .collapsed-form-title {
    font-family: 'NotoSans-semibold';
    font-size: 17px;
  }

  .eye {
    color: rgb(77, 77, 77);
    transition: 0.2s;
    font-size: 18px;
    width: 42.5px;
    padding: 10px;
  }

  .eye:hover {
    color: black;
  }
`
