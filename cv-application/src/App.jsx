import { useState } from 'react'

import sampleData from '../sample-data'

import { Form, Resume } from './components'

import styled from 'styled-components'

function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo)
  const [sections, setSections] = useState(sampleData.sections)

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

  return (
    <Wrapper>
      <Form
        handlePersonalInfoChange={handlePersonalInfoChange}
        personalInfo={personalInfo}
        sections={sections}
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
