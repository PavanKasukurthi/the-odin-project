import styled from 'styled-components'
import ExpandSection from './ExpandSection'
import DisplayForms from './DisplayForms'
import CreateForm from './CreateForm'

const EducationInfoForm = ({
  educations,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) => {
  return (
    <EducationInfoFormWrapper>
      <div className="add-education-section section">
        <ExpandSection
          isOpen={isOpen}
          setOpen={setOpen}
          sectionName="Education"
          iconName="fa-solid fa-graduation-cap"
        />

        <div className={`section-content ${isOpen ? 'open' : ''}`}>
          <DisplayForms
            forms={educations}
            FormComponent={EducationInfoForm}
            onChange={onChange}
            onCancel={onCancel}
            onHide={onHide}
            onRemove={onRemove}
            toggleCollapsed={toggleCollapsed}
            titleKey="schoolName"
            arrayName="educations"
          />

          <CreateForm onClick={createForm} buttonText="Education" />
        </div>
      </div>
    </EducationInfoFormWrapper>
  )
}
export default EducationInfoForm

export const EducationInfoFormWrapper = styled.main`
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 12px;
  }

  .section-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    visibility: hidden;
    opacity: 0;
    transform: translateY(-25px);
    height: 0;
    transform-origin: top;
    z-index: 2;
  }

  .section-content.open {
    transition: opacity, transform, visibility;
    transition-duration: 0.25s;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    height: auto;
  }

  .chevron {
    transition: transform 0.3s;
    transform: rotate(-180deg);
  }

  .chevron.open {
    transform: rotate(0);
  }

  .section-form:not(.collapsed-form) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .forms-container {
    width: 100%;
  }

  .dates-group {
    display: flex;
    gap: 16px;
    width: 100%;
    flex-wrap: wrap;
  }
`
