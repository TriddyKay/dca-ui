import React, {useState} from 'react'
import {BlogContext} from './BlogContext'

export enum Route {
  HOME = 'home',
  SEARCH = 'search'
}

export const RouterProvider: React.FC = ({children}) => {
  const [route, setRoute] = useState<Route>(Route.HOME)

  const toggleRoute = (route: Route) => {
    setRoute(route)
  }

  return (
    <BlogContext.Provider value={{route: route, setRoute: toggleRoute}}>
      {children}
    </BlogContext.Provider>
  )
}
