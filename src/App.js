import Allroutes from './routes/AllRoutes';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App dark:bg-slate-900">
      <Header />
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
