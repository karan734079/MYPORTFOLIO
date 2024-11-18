import { useState } from 'react';
import Question from './Question';
import Qb from './Qb';

const QuestionList = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = Qb[currentQuestionIndex];

  const handleOptionChange = (Option) => {
    setSelectedOption(Option);
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    };

    if (currentQuestionIndex < Qb.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setIsFinished(true);
    }
  }

  return (
    <div className="container mx-auto p-4">
      {isFinished ? (
        <div className="text-center bg-gray-100 p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Quiz Finished</h1>
          <p className="text-lg text-gray-700">
            Your Score: <span className="text-black-600">{score}</span> / {Qb.length}
          </p>
        </div>
      ) : (
        <div>
          <Question
            questionId={currentQuestion.id}
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`mt-4 px-6 py-2 rounded-md text-white ml-60 ${selectedOption
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
              }`}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
