import { useState } from "react"

export const GameModeIndicator = () => {
  const [gameMode] = useState(localStorage.gamemode)
  return (
    <p>{gameMode}</p>
  )
}
