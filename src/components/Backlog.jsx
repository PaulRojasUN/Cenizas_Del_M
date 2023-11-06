import { useEffect } from 'react'
import { getBacklog } from '../api/game'
import { useGameStore } from '../store/game'

const Backlog = () => {
  const [backlog] = useGameStore((state) => [state.backlog])

  useEffect(() => {
    const getBacklogFunction = async () => {
      await getBacklog()
    }
    getBacklogFunction()
  }, [])

  return (
    <div>Backlog</div>
  )
}

export default Backlog
