import styled from 'styled-components'
import PersonalInfoForm from './FormComponents/PersonalInfoForm'

const Form = ({ handlePersonalInfoChange, personalInfo, sections }) => {
  const { fullName, email, phoneNumber, address } = personalInfo
  return (
    <Wrapper>
      <PersonalInfoForm
        onChange={handlePersonalInfoChange}
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
    </Wrapper>
  )
}
export default Form

export const Wrapper = styled.main`
  background-color: white;
  padding: 0rem 2rem;
`
