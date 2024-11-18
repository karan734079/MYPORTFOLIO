import { useState } from "react";
import calculateWinner from "../utils/helper";
import SquareTable from "../components/Square";

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    const handleClick = (i) => {
        // Early returns
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    const winner = calculateWinner(squares);

    const status = winner
        ? "Winner: " + winner
        : "Next player: " + (xIsNext ? "X" : "O");

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500">
            <h1 className="mb-16 text-6xl font-bold text-white">Tic Tac Toe</h1>

            <div className="mb-2 text-2xl font-bold text-white">
                {status}
            </div>

            <div className="grid grid-cols-3 gap-0 border border-gray-400 bg-gray-50 p-5 rounded-lg shadow-lg">
                {squares.map((value, index) => (
                    <SquareTable
                        value={value}
                        key={index}
                        onSquareClick={() => handleClick(index)}
                    />
                ))}
            </div>

            {winner && (
                <button
                    onClick={resetGame}
                    className="mt-4 px-6 py-2 bg-red-500 text-white text-lg font-bold rounded hover:bg-red-600 transition"
                >
                    Reset Game
                </button>
            )}
        </div>
    );
};

export default Board;

