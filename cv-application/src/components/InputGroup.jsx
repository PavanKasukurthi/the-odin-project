import styled from 'styled-components'

const InputGroup = ({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  'data-key': dataKey,
}) => {
  return (
    <Wrapper>
      <div className="input-group">
        <label htmlFor={id}>
          <span className="label-text">{labelText}</span>
          {optional && <span className="optional-text">optional</span>}
          {recommended && <span className="recommended-text">recommended</span>}
        </label>

        {type === 'textarea' ? (
          <textarea
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            data-key={dataKey}
          ></textarea>
        ) : (
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            data-key={dataKey}
          />
        )}
      </div>
    </Wrapper>
  )
}
export default InputGroup

export const Wrapper = styled.main`
  .input-group input,
  .input-group textarea {
    border: 2px solid transparent;
    background-color: lightgrey;
    padding: 10px;
    border-radius: 12px;
    transition: border 0.25s, box-shadow 0.25s;
  }

  .input-group textarea {
    max-width: 100%;
    min-height: 42px;
    height: 65px;
  }

  .input-group input:focus,
  .input-group textarea:focus {
    border-color: rgb(59, 131, 246);
    outline: none;
    box-shadow: 0px 3px 15px rgba(59, 131, 246, 0.2);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
    flex-grow: 1;
  }

  .education-dates {
    display: flex;
    gap: 8px;
  }

  /* label > * {
    font-family: 'NotoSans-SemiBold';
  } */

  .optional-text,
  .recommended-text {
    margin-left: 8px;
    color: rgb(156, 163, 175);
    font-size: 10.5px;
  }
`
