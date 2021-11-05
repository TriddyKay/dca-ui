import React from 'react'
import {Link} from "./Link"

export const RoutingHeaders = () => {
  return (
    <div className="blog-buttons">
      <Link className={'blog-button'} href={'/breakky-blogs'} isBlogLink={false}>
        Breakky Blogs
      </Link>
      <Link className={'blog-button'} href={'/dinner-dramas'} isBlogLink={false}>
        Dinner Dramas
      </Link>
    </div>
  )
}
