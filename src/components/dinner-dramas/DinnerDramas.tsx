import React, {useContext, useEffect, useState} from 'react'
import {Button, Card, Container, Label} from "semantic-ui-react"
import '../../styles/blog-selection.css'
import {Link} from "../triddys-router/Link"
import {BlogContext} from "../../BlogContext/BlogContext"
import {Blog} from "../breakky-blogs/BreakkyBlogs"
import {
  dinnerBlogs,
} from "../../services/DinnerClubService"

export const DinnerDramas = () => {
  const {setBlog} = useContext(BlogContext)
  const [blogs, setBlogs] = useState<any[]>([])

  useEffect(() => {
    setBlogs(dinnerBlogs)
  }, [])

  const getBlogCards = () => {
    return blogs.map((blog: Blog, index) => {
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
            {index === 0 && <Label className={'new-label'} color={'red'} content={'new!!'}/>}
          </Card.Content>
        </Card>
      )
    })
  }

  return (
    <React.Fragment>
      <Container className={'blog-selection'}>
        <Card.Group itemsPerRow={2}>
          { getBlogCards() }
        </Card.Group>
      </Container>
    </React.Fragment>
  )
}
