import React from 'react'
import {Home} from "./Home"
import {RouteToComponent} from "./triddys-router/RouteToComponent"
import {RoutingHeaders} from "./triddys-router/RoutingHeaders"
import '../styles/dc-container.css'
import {DCTitle} from "./DCTitle"
import {BreakkyBlogs} from "./breakky-blogs/BreakkyBlogs"
import {Blog} from "./Blog"
import {DinnerDramas} from "./dinner-dramas/DinnerDramas"

export const DCContainer = () => {
  return (
    <div className={'dc-container'}>
      <DCTitle />
      <RoutingHeaders />
      <RouteToComponent path={'/'} location={<Home/>}/>
      <RouteToComponent path={'/breakky-blogs'} location={<BreakkyBlogs/>}/>
      <RouteToComponent path={'/dinner-dramas'} location={<DinnerDramas/>}/>
      <RouteToComponent path={'/blog'} location={<Blog/>}/>
    </div>
  )
}
