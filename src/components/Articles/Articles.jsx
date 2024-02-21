import './Articles.css';

export default function Articles(props) {
    return(
        <div className='divArticles'>
            <div className='divArticle'>
                <div className='divImage'>
                    <img src={process.env.PUBLIC_URL + props.img} alt="" />
                </div>
                <div className={props.champi.stock === 1 ? 'divCouleurOrange' : props.champi.stock === 0 ? 'divCouleurRed' : null}>
                    <p className='boisson'>{props.nom}</p>
                    <p className='prix'>Prix : {props.prix}€</p>
                    <p className='stock'>Stock : {props.champi.stock} unités</p>
                    {props.argent >= props.champi.prix && props.champi.stock > 0 ? <div className="btnAcheter" onClick={()=>props.achatBis(props.id)}>Acheter</div> : null}
                </div>
            </div>
        </div>
    )
}