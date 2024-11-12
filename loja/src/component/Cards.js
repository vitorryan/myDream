function Cards ({brand, modelo, ano, km}) {
  return (
    <div className="Card">
        <div className="imgMotorcycle">imagem aqui</div>
        <div className="descriptionMotorcycle">
            <h4>{modelo}</h4>
            <p>Marca: {brand}</p>
            <p>Ano: {ano}</p>
            <p>Kilometragem: {km}</p>
        </div>
    </div>
  )
}

export default Cards