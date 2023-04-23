import '../Components/Table-style/styleCards.css'

 function Cards({title, desc}) {
  return (
    <div className="Cards">
      <h6 className="card-title">{title}</h6>
      <p className="card-desc">{desc}</p>

      <div className="btn-click">
        <a>EDIT</a>
      </div>
    </div>
  )
}

export default Cards;
