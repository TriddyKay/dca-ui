import React, {useState} from 'react'
import {BlogContext} from './BlogContext'
import {BreakkyBlog} from "../components/breakky-blogs/BreakkyBlogs"

export const BlogProvider: React.FC = ({children}) => {
  const [blog, setBlog] = useState<BreakkyBlog | null>(null)

  const toggleBlog = (blog: BreakkyBlog) => {
    setBlog(blog)
  }

  return (
    <BlogContext.Provider value={{blog: blog, setBlog: toggleBlog}}>
      {children}
    </BlogContext.Provider>
  )
}
