import React from 'react'
import {Home} from "./Home"
import {RouteToComponent} from "./triddys-router/RouteToComponent"
import {RoutingHeaders} from "./triddys-router/RoutingHeaders"
import '../styles/dc-container.css'
import {DCTitle} from "./DCTitle"
import {Blog} from "./Blog"
import {BlogsDisplay, Meal} from "./BlogsDisplay"

export const DCContainer = () => {
  return (
    <div className={'dc-container'}>
      <DCTitle />
      <RoutingHeaders />
      <RouteToComponent path={'/'} location={<Home/>}/>
      <RouteToComponent path={'/breakky-blogs'} location={<BlogsDisplay mealType={Meal.BREAKFAST}/>}/>
      <RouteToComponent path={'/dinner-dramas'} location={<BlogsDisplay mealType={Meal.DINNER}/>}/>
      <RouteToComponent path={'/blog'} location={<Blog/>}/>
    </div>
  )
}
