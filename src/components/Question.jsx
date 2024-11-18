/* eslint-disable react/prop-types */

const Question = ({questionId, question, options, selectedOption, handleOptionChange }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">{questionId} {question}</h2>
      <ul className="space-y-3">
        {options.map((option, index) => (
          <li key={index} className="flex items-center">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
