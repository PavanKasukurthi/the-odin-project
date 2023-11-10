import styled from 'styled-components'
import PersonalInfo from './ResumeComponents/PersonalInfo'

const Resume = ({ personalInfo, sections }) => {
  const { fullName, email, phoneNumber, address } = personalInfo
  return (
    <Wrapper>
      <PersonalInfo
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
      <div></div>
    </Wrapper>
  )
}
export default Resume

export const Wrapper = styled.main`
  width: 100%;

`
