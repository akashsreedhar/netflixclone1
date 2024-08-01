import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div >
     
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="/>
      <Row/>
    
      

    </div>
  );
}

export default App;
