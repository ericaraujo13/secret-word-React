import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>A sua pontução foi: <span>{score}</span></h2>
      <button onClick={retry}>Tentar Novamente</button>
    </div>
  )
}

export default GameOver
