import React, {useContext, useEffect, useState} from 'react'
import {Button, Card, Container} from "semantic-ui-react"
import {BeansRepublique, Darling, MobyDick, MrFoxx} from "../../services/BreakkyBlogService"
import '../../styles/blog-selection.css'
import {Link} from "../triddys-router/Link"
import {BlogContext} from "../../BlogContext/BlogContext"

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
  const {setBlog} = useContext(BlogContext)
  const [blogs, setBlogs] = useState<any[]>([])

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
            <Button content={<Link className={''} href={'/blog'} isBlogLink={true}>
                               Read More...
                             </Link>}
                    color={'blue'}
                    onClick={() => setBlog(blog)}
                    inverted
            />
          </Card.Content>
        </Card>
      )
    })
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
