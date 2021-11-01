import React, {useEffect, useState} from 'react'

export const Other = () => {
  const [boobs, setBoobs] = useState<string>('boobs')

  useEffect(() => {
  }, [])
  console.log('back in here')
  return (
    <div>
      boobs
    </div>
  )
}
