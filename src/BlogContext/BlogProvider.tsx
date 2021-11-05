import React, {useState} from 'react'
import {BlogContext} from './BlogContext'
import {Blog} from "../components/BlogsDisplay"

export const BlogProvider: React.FC = ({children}) => {
  const [blog, setBlog] = useState<Blog | null>(null)

  const toggleBlog = (blog: Blog) => {
    setBlog(blog)
  }

  return (
    <BlogContext.Provider value={{blog: blog, setBlog: toggleBlog}}>
      {children}
    </BlogContext.Provider>
  )
}
