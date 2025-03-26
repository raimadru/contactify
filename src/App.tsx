import './App.scss';
import { MainPage } from './pages/MainPage/MainPage';
import { Header } from './components/Headers/Header/Header';

function App() {
  return (
    <>
      <Header label={'Contactify'} />
      <MainPage />
    </>
  );
}

export default App;
