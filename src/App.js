import { useState, useEffect, useCallback } from 'react'

import ScoreBoard from './components/ScoreBoard'
import BlueCandy from './images/blue-candy.png'
import GreenCandy from './images/green-candy.png'
import OrangeCandy from './images/orange-candy.png'
import PurpleCandy from './images/purple-candy.png'
import RedCandy from './images/red-candy.png'
import YellowCandy from './images/yellow-candy.png'
import blank from './images/blank.png'

const WIDTH = 8

const CANDY_COLORS = [BlueCandy, GreenCandy, OrangeCandy, PurpleCandy, RedCandy, YellowCandy]

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const [squaredBeingDragged, setSquaredBeingDragged] = useState(null)

  const [squaredBeingReplaced, setSquaredBeingReplaced] = useState(null)

  const [scoreDisplay, setScoreDisplay] = useState(0)

  const checkForColumnOfThree = useCallback(
    () => {
      for (let i = 0; i <= 47; i++) {
        const columnOfThree = [i, i + WIDTH, i + WIDTH * 2]

        const decidedColor = currentColorArrangement[i]

        const isBlank = currentColorArrangement[i] === blank

        if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
          setScoreDisplay((prevState) => prevState + 3)
          columnOfThree.forEach(square => currentColorArrangement[square] = blank)
          return true
        }
      }
    },
    [currentColorArrangement],
  )

  const checkForRowOfThree = useCallback(
    () => {
      for (let i = 0; i < 64; i++) {
        const rowOfThree = [i, i + 1, i + 2]

        const decidedColor = currentColorArrangement[i]

        const isBlank = currentColorArrangement[i] === blank

        const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

        if (notValid.includes(i)) continue

        if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
          setScoreDisplay((prevState) => prevState + 3)
          rowOfThree.forEach(square => currentColorArrangement[square] = blank)
          return true
        }
      }
    },
    [currentColorArrangement],
  )

  const checkForColumnOfFour = useCallback(
    () => {
      for (let i = 0; i <= 39; i++) {
        const columnOfFour = [i, i + WIDTH, i + WIDTH * 2, i + WIDTH * 3]

        const decidedColor = currentColorArrangement[i]

        const isBlank = currentColorArrangement[i] === blank

        if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
          setScoreDisplay((prevState) => prevState + 4)
          columnOfFour.forEach(square => currentColorArrangement[square] = blank)
          return true
        }
      }
    },
    [currentColorArrangement],
  )

  const checkForRowOfFour = useCallback(
    () => {
      for (let i = 0; i < 64; i++) {
        const rowOfFour = [i, i + 1, i + 2, i + 3]

        const decidedColor = currentColorArrangement[i]

        const isBlank = currentColorArrangement[i] === blank

        const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

        if (notValid.includes(i)) continue

        if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
          setScoreDisplay((prevState) => prevState + 4)
          rowOfFour.forEach(square => currentColorArrangement[square] = blank)
          return true
        }
      }
    },
    [currentColorArrangement],
  )

  const moveIntoSquareBelow = useCallback(
    () => {
      for (let i = 0; i <= 55; i++) {
        const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]

        const isFirstRow = firstRow.includes(i)

        if (isFirstRow && currentColorArrangement[i] === blank) {
          let randomNumberFrom0To5 = Math.floor(Math.random() * CANDY_COLORS.length)

          currentColorArrangement[i] = CANDY_COLORS[randomNumberFrom0To5]
        }

        const squareBelow = i + WIDTH

        if (currentColorArrangement[squareBelow] === blank) {
          currentColorArrangement[squareBelow] = currentColorArrangement[i]
          currentColorArrangement[i] = blank
        }
      }
    }
    ,
    [currentColorArrangement],
  )

  const dragStart = (e) => {
    setSquaredBeingDragged(e.target)
  }

  const dragDrop = (e) => {
    setSquaredBeingReplaced(e.target)
  }

  const dragEnd = () => {
    const squareBeingReplacedId = parseInt(squaredBeingReplaced.getAttribute('data-id'))

    const squareBeingDraggedId = parseInt(squaredBeingDragged.getAttribute('data-id'))

    currentColorArrangement[squareBeingReplacedId] = squaredBeingDragged.getAttribute('src')

    currentColorArrangement[squareBeingDraggedId] = squaredBeingReplaced.getAttribute('src')

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - WIDTH,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + WIDTH,
    ]

    const isValidMove = validMoves.includes(squareBeingReplacedId)

    const isAColumnOfFour = checkForColumnOfFour()
    const isARowOfFour = checkForRowOfFour()

    const isAColumnOfThree = checkForColumnOfThree()
    const isARowOfThree = checkForRowOfThree()

    if (squareBeingReplacedId && isValidMove && (isAColumnOfFour || isARowOfFour || isAColumnOfThree || isARowOfThree)) {
      setSquaredBeingDragged(null)
      setSquaredBeingReplaced(null)
    } else {
      currentColorArrangement[squareBeingReplacedId] = squaredBeingReplaced.getAttribute('src')

      currentColorArrangement[squareBeingDraggedId] = squaredBeingDragged.getAttribute('src')

      setCurrentColorArrangement([...currentColorArrangement])
    }
  }

  const createBoard = () => {
    const randomColorArrangement = []

    for (let i = 0; i < WIDTH * WIDTH; i++) {
      const randomNumberFrom0To5 = Math.floor(Math.random() * CANDY_COLORS.length)

      const randomColor = CANDY_COLORS[randomNumberFrom0To5]

      randomColorArrangement.push(randomColor)
    }

    setCurrentColorArrangement(randomColorArrangement)
  }

  useEffect(() => {
    createBoard()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour()
      checkForRowOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      moveIntoSquareBelow()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100);

    return () => clearInterval(timer);
  }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])

  return (
    <div className='app'>
      <ScoreBoard score={scoreDisplay} />

      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            src={candyColor}
            alt={candyColor}
            key={index}
            data-id={index}
            draggable={true}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDragStart={dragStart}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
