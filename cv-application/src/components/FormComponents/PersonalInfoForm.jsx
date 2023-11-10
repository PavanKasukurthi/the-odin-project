import styled from 'styled-components'
import InputGroup, { Wrapper } from '../InputGroup'

const PersonalInfoForm = ({
  onChange,
  email,
  fullName,
  phoneNumber,
  address,
}) => {
  return (
    <PersonalInfoWrapper>
      <form className="personal-details">
        <h2>Personal Details</h2>
        <InputGroup
          id="fullName"
          placeholder="Enter your full name"
          type="text"
          labelText="Full name"
          onChange={onChange}
          value={fullName}
          data-key="fullName"
        />

        <InputGroup
          id="email"
          placeholder="Enter your email address"
          type="text"
          labelText="Email"
          onChange={onChange}
          value={email}
          data-key="email"
        />

        <InputGroup
          id="phoneNumber"
          placeholder="Phone number"
          type="tel"
          labelText="Phone number"
          onChange={onChange}
          value={phoneNumber}
          data-key="phoneNumber"
        />

        <InputGroup
          type="text"
          id="address"
          labelText="Address"
          placeholder="City, Country"
          value={address}
          onChange={onChange}
          data-key="address"
        />
      </form>
    </PersonalInfoWrapper>
  )
}
export default PersonalInfoForm

export const PersonalInfoWrapper = styled.main`
  padding: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #071952;

  h2{
    margin-bottom: 1rem;
  }
`
