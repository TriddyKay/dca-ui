import React from "react";
import { Route } from "./RouterProvider";
import {BreakkyBlog} from "../components/breakky-blogs/BreakkyBlogs"

export type BlogContextType = {
  blog: BreakkyBlog | null
  setBlog: (blog: BreakkyBlog) => void
}

export const BlogContext = React.createContext<BlogContextType>({
  blog: null,
  setBlog: () => undefined
});
