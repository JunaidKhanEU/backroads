import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subTitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className='title'>{title}</span>
        <span>{subTitle}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size:2.3rem;
  margin-bottom:2rem;
  h4{
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title{
    color: var(--mainBlack);
  }
  span{
    display: block;
  }
  @media (min-width:576px){
    span{
    display: inline-block;
    margin: 0 0.35rem;
  }
  }
`

export default Title
