import React, {useEffect, useState} from 'react'
import {Button, Card, Container} from "semantic-ui-react"
import {BeansRepublique, Darling, MobyDick, MrFoxx} from "../../services/BreakkyBlogService"
import '../../styles/blog-selection.css'
import _ from 'lodash'
import {Link} from "../triddys-router/Link"

export type BreakkyBlog = {
  title: string
  restaurant: string
  blogText: string
  image: string
}

export type FileType = {
  name: string
  base64: string
}

export const BreakkyBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([])
  const [presentingBlog, setPresentingBlog] = useState<BreakkyBlog | null>(null)

  useEffect(() => {
    const blogs = [BeansRepublique, MrFoxx, Darling, MobyDick]
    setBlogs(blogs)
  }, [])

  const getBlogCards = () => {
    return blogs.map((blog: BreakkyBlog, index) => {
      return (
        <Card key={index}>
          <Card.Content>
            <Card.Header>{blog.title}</Card.Header>
            <Card.Description>
              {blog.restaurant}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button content={<Link className={''} href={`/blog/${_.kebabCase((blog.title))}`} isBlogLink={true}>
                               Read More...
                             </Link>}
                    color={'blue'}
                    onClick={() => selectBlog(blog)}
                    inverted
            />
          </Card.Content>
        </Card>
      )
    })
  }

  const selectBlog = (blog: BreakkyBlog) => {
    setPresentingBlog(blog)
    // props.handleIsBlogPicked()
  }

  return (
    <React.Fragment>
        <Container className={'blog-selection'}>
          <Card.Group itemsPerRow={3}>
            { getBlogCards() }
          </Card.Group>
        </Container>
    </React.Fragment>
  )
}
