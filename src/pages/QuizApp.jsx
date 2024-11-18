import QuestionList from "../components/QuestionList"

const QuizApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
      <div className="w-full max-w-2xl p-4">
        <h1 className="text-3xl font-bold text-center text-white mb-6 mr-3">
          Quiz App
        </h1>
        <QuestionList />
      </div>
    </div>
  )
}

export default QuizApp

