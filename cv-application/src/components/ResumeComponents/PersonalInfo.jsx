import styled from 'styled-components'

import { IoMdMail } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

const PersonalInfo = ({ fullName, email, phoneNumber, address }) => {
  return (
    <Wrapper>
      <p className="name">{fullName}</p>

      <div className="contact">
        <p>
          <IoMdMail className="icon" />
          {email}
        </p>

        <p>
          <BsFillTelephoneFill className="icon" />
          {phoneNumber}
        </p>
        <p>
          <FaLocationDot className="icon" />
          {address}
        </p>
      </div>
    </Wrapper>
  )
}
export default PersonalInfo

export const Wrapper = styled.main`
  background-color: #071952;
  color: white;
  font-weight: 300;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 1rem;

  .contact {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .name {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 0.5rem;
  }
`
