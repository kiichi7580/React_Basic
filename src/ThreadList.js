import React from "react"
import { useState, useEffect } from "react"
import { TitleList } from "./TitleList"
//  Base URL: '2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com'


export const ThreadList = () => { 
  const [thread, setThread] = useState([])
  async function getThreads () {
    await fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {method: 'Get'})
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((data) => {
      setThread(data)
      console.log(data)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  }

  useEffect(() => {
    getThreads()
  }, [])

  return (
  <div className="thread">
    <TitleList thread={thread} />
  </div>
  )
  }
  