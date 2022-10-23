import React from 'react';
import { useStore } from '../Store/Zustand';

// import { Container } from './styles';

const ScoreCard: React.FC = () => {
  const score = useStore(s => s.user.score)
  const updateUser = useStore(s => s.updateUser)
  return (
    <div>
      <input 
        type="number"
        value={score}
        onChange={ev => updateUser({score: parseInt(ev.target.value)})}
        placeholder="Score"
      />
    </div>
  )
}

export default ScoreCard;