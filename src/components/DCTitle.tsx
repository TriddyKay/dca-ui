import React from 'react'
import {Header} from "semantic-ui-react"
import '../styles/dc-title.css'

export const DCTitle = () => {
  return (
    <div className={'dc-title-container'}>
      <Header className={'dc-title'} as={'h1'}>Dinner Club Adventures</Header>
    </div>
  )
}
