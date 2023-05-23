const scores = [6, 9.3, 4.5, 8, 9]
const players = ['Alvarez', 'Martinez', 'Molina', 'De Paul', 'Paredes']

// filtrar puntaje mayor a 7
const filteredPlayersResult = (scores) => {
  return scores.filter(score => score > 7)
}
// filtrar puntaje igual menor a 7
const removeOutstandingScores = (scores) => {
  return scores.filter(score => score <= 7)
}

const outstandingPlayers = (scores, players) => {
  const outstandingScores = filteredPlayersResult(scores)
  return players
  .filter((_, index) => outstandingScores
  .includes(scores[index]))
}

const regularPlayers = (scores, players) => {
  const regularScores = removeOutstandingScores(scores)
  return players
  .filter((_, index) => regularScores
  .includes(scores[index]))
}

function evalPerformance(scores, players) {
  const getOutstandingScores = filteredPlayersResult(scores)
  const getOutstandingPlayers = outstandingPlayers(scores, players)
  const getRegularPlayers = regularPlayers(scores, players)
  const getRegularScores = removeOutstandingScores(scores)

  return {
    getOutstandingScores,
    getOutstandingPlayers,
    getRegularPlayers,
    getRegularScores,
  }
}

const performance = evalPerformance(scores, players) 

console.log('OutStanding Scores:', performance.getOutstandingScores);
console.log('OutStanding Playes:', performance.getOutstandingPlayers);
console.log('Regular Scores:', performance.getRegularScores);
console.log('Regular Players:', performance.getRegularPlayers);
