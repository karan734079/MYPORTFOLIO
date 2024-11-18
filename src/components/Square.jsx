/* eslint-disable react/prop-types */

const SquareTable = ({ value, onSquareClick }) => {
    return (
        <button
            onClick={onSquareClick}
            className="w-16 h-16 text-5xl p-11 font-bold flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-100 transition duration-200"
        >
            {value}
        </button>
    );
};

export default SquareTable;
