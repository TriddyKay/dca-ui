import React from "react";
import {Blog} from "../components/BlogsDisplay"

export type BlogContextType = {
  blog: Blog | null
  setBlog: (blog: Blog) => void
}

export const BlogContext = React.createContext<BlogContextType>({
  blog: null,
  setBlog: () => undefined
});
