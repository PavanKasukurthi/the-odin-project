import styled from 'styled-components'

const CreateForm = ({ onClick, buttonText }) => {
  return (
    <CreateFormWrapper>
      <button className="create-form" onClick={onClick}>
        <h4 className="button-content">
          <i className="fa-solid fa-plus" />
          {buttonText}
        </h4>
      </button>
    </CreateFormWrapper>
  )
}
export default CreateForm
export const CreateFormWrapper = styled.main`
  .create-form {
    background-color: transparent;
    padding: 8px 18px;
    border-radius: 69420px;
    border: 4px solid rgb(238, 240, 244);
    font-family: 'NotoSans-SemiBold';
    margin: 18px 0;
  }

  .create-form .fa-plus {
    margin-right: 8px;
  }
`
