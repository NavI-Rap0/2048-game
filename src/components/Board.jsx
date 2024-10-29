import React, { useState, useCallback, useMemo } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";
import useEvent from "../hooks/useIvent";
import useSwipe from "../hooks/useSwipe";
import GameOverlay from "./GameOverlay";

const BoardView = () => {
  const [board, setBoard] = useState(() => new Board());

  const handleMove = useCallback((direction) => {
    if (board.hasWon()) return;

    const boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
    const newBoard = boardClone.move(direction);
    setBoard(newBoard);
  }, [board]);

  const handleKeyDown = useCallback((event) => {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      const direction = event.keyCode - 37;
      handleMove(direction);
    }
  }, [handleMove]);

  useEvent("keydown", handleKeyDown);

  useSwipe(
    useCallback((swipeDirection) => {
      const DIRECTION_KEYS = {
        up: 1,
        right: 2,
        down: 3,
        left: 0,
      };
      const direction = DIRECTION_KEYS[swipeDirection.toLowerCase()]; // Використовуємо toLowerCase для коректності
      if (direction !== undefined) {
        handleMove(direction);
      }
    }, [handleMove]) 
  );

  const resetGame = useCallback(() => {
    setBoard(() => new Board());
  }, []);

  const cells = useMemo(() => (
    board.cells.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((col, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} />
        ))}
      </div>
    ))
  ), [board.cells]);

  const tiles = useMemo(() => (
    board.tiles
      .filter((tile) => tile.value !== 0)
      .map((tile, index) => <Tile tile={tile} key={tile.id || index} />)
  ), [board.tiles]);

  return (
    <div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          NEW GAME
        </div>
        <div className="score-box">
          <div className="score-header">SCORE</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
        <div className="how_to_play">
        To play the 2048 game, follow these simple rules:
        <br />
        You have a 4x4 grid.
        <br />
        Use your arrow keys to move the tiles left, right, up, or down.
        <br />
        When two tiles with the same number touch, they combine and grow.
        <br />
        The goal is to reach the elusive 2048 tile.
        </div>
      </div>
    </div>
  );
};

export default BoardView;




