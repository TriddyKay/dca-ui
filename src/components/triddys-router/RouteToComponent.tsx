import {useEffect, useState} from 'react'

type Props = {
  path: string
  location: JSX.Element
}

export const RouteToComponent = (props: Props) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    };
  }, [])



  return currentPath === props.path ? props.location : null
}
