import React from 'react'
import '../../styles/link-style.css'
import {Button} from "semantic-ui-react"

type Props = {
  className: string
  href: string
  children: any
  isBlogLink: boolean
}

export const Link = (props: Props) => {

  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    window.history.pushState({}, "", props.href)

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <>
      {!props.isBlogLink &&
        <Button className={props.className} content={
          <a className={props.className} href={props.href} onClick={(e) => onClick(e as unknown as MouseEvent)}>
            {props.children}
          </a>
        }/>
      }
      {props.isBlogLink &&
        <a className={props.className} href={props.href} onClick={(e) => onClick(e as unknown as MouseEvent)}>
          {props.children}
        </a>
      }
    </>
  )
}
