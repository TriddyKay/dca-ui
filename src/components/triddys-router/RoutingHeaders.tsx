import React from 'react'
import {Link} from "./Link"
import {Other} from "../Other"
import {Second} from "../Second"

export const RoutingHeaders = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className={''} href={'/'}>
        <Other/>
      </Link>
      <Link className={''} href={'/second'}>
        <Second/>
      </Link>
    </div>
  )
}
