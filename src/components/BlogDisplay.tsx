import React, {useContext, useEffect, useState} from 'react'
import {BlogContext} from "../BlogContext/BlogContext"
import {dinnerBlogs} from "../services/DinnerClubService"
import {breakkyBlogs} from "../services/BreakkyBlogService"
import {Button, Card, Container, Icon} from "semantic-ui-react"
import {Link} from "./triddys-router/Link"
import '../styles/blog-selection.css'

export enum Meal {
  BREAKFAST = 'breakfast',
  DINNER = 'dinner'
}

export type Blog = {
  title: string
  restaurant: string
  blogText: string
}

type Props = {
  mealType: Meal
}

export const BlogDisplay = ({mealType}: Props) => {
  const { setBlog } = useContext(BlogContext)
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    mealType === Meal.BREAKFAST
      ? setBlogs(breakkyBlogs)
      : setBlogs(dinnerBlogs)
  }, [mealType])

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
            <Button content={
              <Link className={''} href={'/blog'} isBlogLink={true}>
                Read More...
              </Link>}
                    color={'blue'}
                    onClick={() => setBlog(blog)}
                    inverted/>
          </Card.Content>
        </Card>
      )
    })
  }

  return (
    <React.Fragment>
      <Container className={'blog-selection'}>
        <div className={'home-button-div'}>
          <Button className={'home-button'}
                  icon
                  content={
            <Link className={'home-button-link'} href={'/'} isBlogLink={false}>
              <Icon name='home'/>
            </Link>}>
          </Button>
        </div>
        <Card.Group itemsPerRow={2}>
          { getBlogCards() }
        </Card.Group>
      </Container>
    </React.Fragment>
  )
}
