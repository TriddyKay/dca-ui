import React, {useContext} from 'react'
import {BlogContext} from "../BlogContext/BlogContext"
import {Container, Header} from "semantic-ui-react"

export const Blog = () => {
    const {blog} = useContext(BlogContext)

    return (
      <Container className={'blogContainer'}>
          <div className={'blogTitle'}>
            <Header as={'h1'}>{blog?.title ?? ''}</Header>
          </div>
          <div className={'blogRestaurant'}>
          </div>
          <p dangerouslySetInnerHTML={{ __html: `${blog?.blogText ?? ''}` }}/>
      </Container>
    )
}
