import './App.css';
import Cards from './component/Cards';

import today125Image from './assets/cg-125-today.jpg';
import rd125Image from './assets/rd125.jpg';
import rd135Image from './assets/rd-135.jpg';
import cg125Image from './assets/cg-125.png';
import tutu250Image from './assets/tutu-250.jpg';
import cb300Image from './assets/cb-300.jpg';
import logo from './assets/logo.jpg';


const listMotorcycle = [
  {id:1, brand:"Honda", modelo:"Today 125", ano:1998, km:70000, image: today125Image},
  {id:2, brand:"Honda", modelo:"Rd 125", ano:1989, km:126700, image: rd125Image},
  {id:3, brand:"Honda", modelo:"Rd 135", ano:1995, km:20000, image: rd135Image},
  {id:4, brand:"Honda", modelo:"CG 125", ano:2003, km:98000, image: cg125Image},
  {id:5, brand:"Honda", modelo:"Twister 250", ano:2006, km:60000, image: tutu250Image},
  {id:6, brand:"Honda", modelo:"CB 300", ano:2009, km:12000, image: cb300Image}
]

function App() {
  return (
    <body >
      <header className="App-header">
        <div className="logoImg">
          <img src={logo} alt="" />
        </div>
        <h1>Menu e Opções</h1>
      </header>

      <div className="allCards">
        {listMotorcycle.map((moto) => (
          <Cards
            key={moto.id}
            brand={moto.brand}
            modelo={moto.modelo}
            ano={moto.ano}
            km={moto.km}
            image={moto.image}
          />
        ))}
      </div>
    </body>
  );
}

export default App;
