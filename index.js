const scores = [6, 9.3, 4.5, 8, 9]
const players = ['Alvarez', 'Martinez', 'Molina', 'De Paul']

// filtrar puntaje mayor a 7
const filteredPlayersResult = (scores) => {
  return scores.filter(score => score > 7)
}

const removeOutstandingScores = (scores) => {
  return scores.filter(score => score <= 7)
}

const outstandingPlayers = (scores, players) => {
  const outstandingScores = filteredPlayersResult(scores)
  const outstandingScoresFiltered = players.filter((_, index) => outstandingScores.includes(scores[index]))

  return outstandingScoresFiltered
}


const regularPlayers = (scores, players) => {
  const regularScores = removeOutstandingScores(scores)
  const regularScoresFiltered = players.filter((_, index) => regularScores.includes(scores[index]))

  return regularScoresFiltered
}
// 
// 
// function evalPerformance(scores, players) {
  // const outstandingPlayers = 
  // const regularPlayers =
// }


