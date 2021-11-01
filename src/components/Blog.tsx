import React from 'react';
import {BreakkyBlog} from "./breakky-blogs/BreakkyBlogs"

type Props = {
  blog: BreakkyBlog
}

export class Blog extends React.Component<Props> {

  render() {
    const { blog } = this.props

    return (
      <div className={'blogContainer'}>
        <div className={'blog'}>
          <div className={'blogTitle'}>
            <p>{blog.title}</p>
          </div>
          <div className={'blogRestaurant'}>
          </div>
          <p dangerouslySetInnerHTML={{ __html: `${blog.blogText}` }}/>
        </div>
      </div>
    )
  }
}
