import './App.css';
import Cards from './component/Cards';

const listMotorcycle = [
  {id:1, brand:"Honda", modelo:"Today 125", ano:1998, km:70000},
  {id:2, brand:"Honda", modelo:"Rd 125", ano:1989, km:126700},
  {id:3, brand:"Honda", modelo:"Rd 135", ano:1995, km:20000},
  {id:4, brand:"Honda", modelo:"CG 125", ano:2003, km:98000},
  {id:5, brand:"Honda", modelo:"Twister 250", ano:2006, km:60000},
  {id:6, brand:"Honda", modelo:"CB 300", ano:2009, km:12000}
]

function App() {
  return (
    <body >
      <header className="App-header">
        <h1>Logo, Menu e Opções</h1>
      </header>

      <div className="allCards">
        {listMotorcycle.map((moto) => (
          <Cards
            key={moto.id}
            brand={moto.brand}
            modelo={moto.modelo}
            ano={moto.ano}
            km={moto.km}
          />
        ))}
      </div>
    </body>
  );
}

export default App;
