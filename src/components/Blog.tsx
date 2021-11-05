import React, {useContext} from 'react'
import {BlogContext} from "../BlogContext/BlogContext"
import {Container, Divider, Header} from "semantic-ui-react"
import '../styles/blog.css'

export const Blog = () => {
    const {blog} = useContext(BlogContext)

    return (
      <Container className={'blog-container'}>
          <div className={'blog-title-container'}>
            <Header as={'h1'} className={'title'} textAlign={'center'}>{blog?.title ?? ''}</Header>
          </div>
          <br/>
          <div className={'blog-title-container'}>
            <Header as={'h3'} className={'title'}>{blog?.restaurant ?? ''}</Header>
          </div>
        <Divider/>
          <p dangerouslySetInnerHTML={{ __html: `${blog?.blogText ?? ''}` }}/>
      </Container>
    )
}
