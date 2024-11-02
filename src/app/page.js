'use client'

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://flounder-viola-ph5k.squarespace.com'
  }, [])

  return (
    <div>
      Under Construction: You are being redirected!
    </div>
  )
}
