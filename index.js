const scores = [6, 9.3, 4.5, 8, 9]
const players = ['Alvarez', 'Martinez', 'Molina', 'De Paul']

// filtrar puntaje mayor a 7
const filteredPlayersResult = (scores) => {
  return scores.filter(score => score > 7)
}

const outstandingPlayers = (scores, players) => {
  const outstandingScores = filteredPlayersResult(scores)
  return players.filter((_, index) => outstandingScores.includes(scores[index]))
}

const removeOutstandingScores = (scores) => {
  return scores.filter(score => score <= 7)
}
// 
// 
// function evalPerformance(scores, players) {
  // const outstandingPlayers = 
  // const regularPlayers =
// }


