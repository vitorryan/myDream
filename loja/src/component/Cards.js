function Cards ({brand, modelo, ano, km, image}) {
  return (
    <div className="Card">
        <div className="imgMotorcycle">
        {image && <img src={image} alt={modelo} style={{ width: "250px", height: "auto" }} />}
        </div>
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