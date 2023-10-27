/* partlist 
const partlist = require('./codewars/7kyu/part-list')
const list_input = ["I", "wish", "I", "hadn't", "come"]// ["az", "toto", "picaro", "zone", "kiwi"]
console.log(partlist(list_input)) */

/* isSatorSquare
const isSatorSquare = require('./codewars/7kyu/is-sator-square')
const list_input = [
    ['B', 'A', 'T', 'S'],
    ['A', 'B', 'U', 'T'],
    ['T', 'U', 'B', 'A'],
    ['S', 'T', 'A', 'B'],
]
isSatorSquare(list_input) 
*/

/* 2D cellularNeighbourhood
const cellularNeighbourhood = require('./codewars/7kyu/2D-cellular-neighbourhood')
const list_input = [
  // 0    1    2    3    4    5    6    7    8    9    10  
    [28,  50,  29,  49,  0,   32,  29,  14,  25,  44,  52], //0
    [42,  55,  26,  30,  37,  41,  54,  13,  28,  17,  18], //1
    [49,  5,   22,  32,  37,  9,   28,  22,  31,  55,  14], //2
    [41,  44,  14,  31,  13,  54,  9,   11,  26,  1,   8], //3
    [27,  27,  29,  54,  53,  41,  12,  14,  32,  26,  44] // 4
]

console.log( cellularNeighbourhood("moore", list_input, [0, 7]) )
*/

/* Count Languages
const higherOrderFunctionsSeriesPrepareCountLanguages = require('./codewars/7kyu/higherOrderFunctionsSeriesPrepareCountLanguages')
const list_input = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Cesar', lastName: 'R.', country: 'Colombia', continent: 'Americas', age: 28, language: 'JavaScript' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'Andres', lastName: 'M.', country: 'Colombia', continent: 'Americas', age: 19, language: 'JavaScript' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
console.log( higherOrderFunctionsSeriesPrepareCountLanguages(list_input) )
*/

/* Count Winners
const countWins = require('./codewars/7kyu/countWinsChampions')

const winnerList1 = [
  { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
  { season: '1997–98', team: 'Real Madrid', country: 'Spain' },
  { season: '1998–99', team: 'Manchester United', country: 'England' },
  { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
  { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
  { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
  { season: '2002–03', team: 'Milan', country: 'Italy' },
  { season: '2003–04', team: 'Porto', country: 'Portugal' },
  { season: '2004–05', team: 'Liverpool', country: 'England' },
  { season: '2005–06', team: 'Barcelona', country: 'Spain' },
  { season: '2006–07', team: 'Milan', country: 'Italy' },
  { season: '2007–08', team: 'Manchester United', country: 'England' },
  { season: '2008–09', team: 'Barcelona', country: 'Spain' },
  { season: '2009–10', team: 'Internazionale', country: 'Italy' },
  { season: '2010–11', team: 'Barcelona', country: 'Spain' },
  { season: '2011–12', team: 'Chelsea', country: 'England' },
  { season: '2012–13', team: 'Bayern', country: 'Germany' },
  { season: '2013–14', team: 'Real Madrid', country: 'Spain' },
  { season: '2014–15', team: 'Barcelona', country: 'Spain' },
  { season: '2015–16', team: 'Real Madrid', country: 'Spain' }
]

console.log(countWins(winnerList1, 'Portugal'))
*/