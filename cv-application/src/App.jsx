import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import sampleData from '../sample-data'

import { Form, Resume } from './components'

import styled from 'styled-components'

function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo)
  const [sections, setSections] = useState(sampleData.sections)
  const [sectionOpen, setSectionOpen] = useState(null)
  const [prevState, setPrevState] = useState(null)

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.dataset
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }

  const clearPersonalInfo = () => {
    setPersonalInfo({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
    })
  }

  const handleSectionChange = (e) => {
    const { key } = e.target.dataset
    const inputValue = e.target.value
    const form = e.target.closest('.section-form')
    const { id } = form
    const { arrayName } = form.dataset
    const section = sections[arrayName]
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue
        return obj
      }),
    })
  }

  const setOpen = (sectionName) => {
    setSectionOpen(sectionName)
  }

  const removeForm = (e) => {
    const form = e.target.closest('.section-form')
    const { arrayName } = form.dataset
    const section = sections[arrayName]
    const { id } = form

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    })
  }

  const cancelForm = (e) => {
    // if no prevState found remove form
    if (prevState == null) {
      removeForm(e)
      return
    }

    const sectionForm = e.target.closest('.section-form')
    const { id } = sectionForm
    const { arrayName } = sectionForm.dataset
    const section = sections[arrayName]

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          // Revert back to previous state
          form = prevState
          form.isCollapsed = true
        }

        return form
      }),
    })
  }

  const createEducationForm = () =>
    createForm('educations', {
      degree: '',
      schoolName: '',
      location: '',
      startDate: '',
      endDate: '',
      isCollapsed: false,
      isHidden: false,
      id: uuidv4(),
    })

  const toggleValue = (e, key) => {
    const sectionForm = e.target.closest('.section-form')
    const { id } = sectionForm
    const { arrayName } = sectionForm.dataset
    const section = sections[arrayName]
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form))
          form[key] = !form[key]
        }

        return form
      }),
    })
  }

  const toggleCollapsed = (e) => toggleValue(e, 'isCollapsed')
  const toggleHidden = (e) => toggleValue(e, 'isHidden')

  return (
    <Wrapper>
      <Form
        handlePersonalInfoChange={handlePersonalInfoChange}
        personalInfo={personalInfo}
        sectionOpen={sectionOpen}
        sections={sections}
        handleSectionChange={handleSectionChange}
        setOpen={setOpen}
        removeForm={removeForm}
        cancelForm={cancelForm}
        toggleValue={toggleValue}
        toggleCollapsed={toggleCollapsed}
        toggleHidden={toggleHidden}
        createEducationForm={createEducationForm}
      />
      <Resume personalInfo={personalInfo} sections={sections} />
    </Wrapper>
  )
}

export default App

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  justify-content: center;

  padding: 1rem;
`
