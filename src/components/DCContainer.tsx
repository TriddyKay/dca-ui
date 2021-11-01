import React from 'react'
import {Other} from "./Other"
import {Second} from "./Second"
import {RouteToComponent} from "./triddys-router/RouteToComponent"
import {RoutingHeaders} from "./triddys-router/RoutingHeaders"

export const DCContainer = () => {
  return (
    <div>
      <RoutingHeaders />
      <RouteToComponent path={'/'} location={<Other/>}/>
      <RouteToComponent path={'/second'} location={<Second/>}/>
    </div>
  )
}
