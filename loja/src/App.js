import './App.css';
import Cards from './component/Cards';
import SidebarWithDrawer from './component/SidebarWithDrawer';
import Header from './component/Header'



import today125Image from './assets/cg-125-today.jpg';
import rd125Image from './assets/rd125.jpg';
import rd135Image from './assets/rd-135.jpg';
import cg125Image from './assets/cg-125.png';
import tutu250Image from './assets/tutu-250.jpg';
import cb300Image from './assets/cb-300.jpg';




const listMotorcycle = [
  {id:1, brand:"Honda", modelo:"Today 125", preco:"6.000", ano:1998, km:"70.000", image: today125Image},
  {id:2, brand:"Honda", modelo:"Rd 125", preco:"9.000", ano:1989, km:"126.700", image: rd125Image},
  {id:3, brand:"Honda", modelo:"Rd 135", preco:"14.000", ano:1995, km:"20.000", image: rd135Image},
  {id:4, brand:"Honda", modelo:"CG 125", preco:"6.900", ano:2003, km:"98.000", image: cg125Image},
  {id:5, brand:"Honda", modelo:"Twister 250", preco:"14.500", ano:2006, km:"60.000", image: tutu250Image},
  {id:6, brand:"Honda", modelo:"CB 300", preco:"10.300", ano:2009, km:"12.000", image: cb300Image},
  {id:7, brand:"", modelo:"", preco:"", ano:"", km:"", image: ""},
  {id:8, brand:"", modelo:"", preco:"", ano:"", km:"", image: ""},
  {id:9, brand:"", modelo:"", preco:"", ano:"", km:"", image: ""},
  {id:10, brand:"", modelo:"", preco:"", ano:"", km:"", image: ""},
  {id:11, brand:"", modelo:"", preco:"", ano:"", km:"", image: ""},
  {id:12, brand:"", modelo:"", preco:"", ano:"", km:"", image: ""}
]

const filteredMotorcycles = listMotorcycle.filter(moto => moto && moto.brand);

function App() {
  return (
    <body >
      <header className="App-header">
        <Header/>
      </header>

      <div className="allCards">
        {filteredMotorcycles.map((moto) => (
          moto && (
            <Cards
              key={moto.id}
              brand={moto.brand}
              modelo={moto.modelo}
              preco={moto.preco}
              ano={moto.ano}
              km={moto.km}
              image={moto.image}
            />
          )
        ))}
      </div>

      <div>
        <SidebarWithDrawer/>
        
      </div>
    </body>
  );
}

export default App;
