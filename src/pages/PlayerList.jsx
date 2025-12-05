import { Link } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard.jsx'

export default function PlayerList({ players }) {
  return (
    <>
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
      </>
  )
}