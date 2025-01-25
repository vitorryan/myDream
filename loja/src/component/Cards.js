function Cards ({brand, modelo, ano, km, image, preco}) {
  return (
    <div className="Card">
        <div className="imgMotorcycle">
        {image && <img src={image} alt={modelo} style={{ width: "100%", height: "auto" }} />}
        </div>
        <div className="motorcycle">
            <div className="modeloAndName">
            <h3 className="motoModelo">{brand} {modelo}</h3>
            <h3 className="motoDescricao">descrição</h3>
            </div>

            <div className="precoAnoKm">
              <div className="preco">
                <strong>
                  <p>R$ {preco}</p>
                </strong>
              </div>
              
              <div className="anoKm">
              <p>{ano}</p>
              <p>{km} Km</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cards