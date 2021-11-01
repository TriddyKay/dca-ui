import React from 'react'
import {Link} from "./Link"

export const RoutingHeaders = () => {
  return (
    <div className="blog-buttons">
      <Link className={''} href={'/breakky-blogs'} isBlogLink={false}>
        Breakky Blogs
      </Link>
      <Link className={''} href={'/dinner-drama'} isBlogLink={false}>
        Dinner Drama
      </Link>
    </div>
  )
}
