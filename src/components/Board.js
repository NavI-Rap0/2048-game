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
      const directions = {
        up: 1,
        right: 2,
        down: 3,
        left: 0,
      };
      if (directions[swipeDirection] !== undefined) {
        handleMove(directions[swipeDirection]);
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
          <Cell key={rowIndex * board.size + colIndex} />
        ))}
      </div>
    ))
  ), [board.cells, board.size]);

  const tiles = useMemo(() => (
    board.tiles
      .filter((tile) => tile.value !== 0)
      .map((tile, index) => <Tile tile={tile} key={index} />)
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
      </div>
    </div>
  );
};

export default BoardView;
