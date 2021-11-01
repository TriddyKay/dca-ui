import React from 'react'

type Props = {
  className: string
  href: string
  children: any
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
    <a className={props.className} href={props.href} onClick={(e) => onClick(e as unknown as MouseEvent)}>
      {props.children}
    </a>
  )
}
