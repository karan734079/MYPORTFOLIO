import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import TodoList from './pages/TodoList';
import Calculator from './pages/Calculator';
import CounterRedux from './pages/CounterRedux';
import CalculatorRedux from './pages/CalculatorRedux';
import TodoListRedux from './pages/TodoListRedux';
import Weather from './pages/Weather';
import Rps from './pages/Rps';
import GetStarted from './pages/GetStarted';
import Home from './pages/Home';
import NetflixGpt from './components/NetflixGpt';
import MyYoutube from './components/MyYoutube';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './store/appStore';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import QuizApp from './pages/QuizApp';
import Board from './pages/Board';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/my-projects" element={<Home />} />
        <Route path="/" element={<GetStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counterRedux" element={<CounterRedux />} />
        <Route path="/calculatorRedux" element={<CalculatorRedux />} />
        <Route path="/todolistRedux" element={<TodoListRedux />} />
        <Route path="/weatherApp" element={<Weather />} />
        <Route path="/rps" element={<Rps />} />
        <Route path="/netflixGpt" element={<NetflixGpt />} />
        <Route path="/my-youtube" element={<MyYoutube />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfService />} />
        <Route path="/quiz-app" element={<QuizApp />} />
        <Route path="/tic-tac-toe" element={<Board />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
    <Provider store={appStore}>
      <App />
      </Provider>
    </BrowserRouter>
  );
}
