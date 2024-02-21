import './Articles.css';

export default function Articles(props) {
    return(
        <div className='divArticles'>
            <div className='divArticle'>
                <div className='divImage'>
                    <img src={process.env.PUBLIC_URL + props.img} alt="" />
                </div>
                <div className={(props.id === 0 && props.stock1 === 1) ? `divImageContent-orange${props.id}`: (props.id === 0 && props.stock1 === 0) ? `divImageContent-red${props.id}` : (props.id === 1 && props.stock2 === 1) ? `divImageContent-orange${props.id}`: (props.id === 1 && props.stock2 === 0) ? `divImageContent-red${props.id}` : (props.id === 2 && props.stock3 === 1) ? `divImageContent-orange${props.id}` : (props.id === 2 && props.stock3 === 0) && `divImageContent-red${props.id}` && "divImgContent" }>
                    <p className='boisson'>{props.nom}</p>
                    <p className='prix'>Prix : {props.prix}€</p>
                    <p className='stock'>Stock : {props.champi.stock} unités</p>
                    {props.argent >= props.champi.prix && props.champi.stock > 0 ? <div className={`btnAcheter${props.id}`} onClick={()=>props.achatBis(props.id)}>Acheter</div> : null}
                </div>
            </div>
        </div>
    )
}