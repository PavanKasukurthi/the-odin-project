import styled from 'styled-components'
import PersonalInfoForm from './FormComponents/PersonalInfoForm'
import EducationInfoForm from './FormComponents/EducationInfoForm'

const Form = ({
  handlePersonalInfoChange,
  personalInfo,
  sectionOpen,
  sections,
  handleSectionChange,
  setOpen,
  removeForm,
  cancelForm,
  toggleCollapsed,
  toggleHidden,
  createEducationForm,
}) => {
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

      <EducationInfoForm
        educations={sections.educations}
        isOpen={sectionOpen === 'Education'}
        onChange={handleSectionChange}
        createForm={createEducationForm}
        setOpen={setOpen}
        onCancel={cancelForm}
        toggleCollapsed={toggleCollapsed}
        onHide={toggleHidden}
        onRemove={removeForm}
      />
    </Wrapper>
  )
}
export default Form

export const Wrapper = styled.main`
  background-color: white;
  padding: 0rem 2rem;
`
