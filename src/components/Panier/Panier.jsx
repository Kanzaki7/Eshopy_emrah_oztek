import './Panier.css';

export default function Panier(props) {
    return(
        <div className='monPanier'>
            {props.quantity > 0 && <div className='panier' id = {props.id}>
                <img src={props.img} alt="" />
                <p>{props.nom} {props.quantity}</p>
                <div className='btnRendre' onClick={()=> props.retirer(props.id)}>Rendre</div>
            </div>}
        </div>
    )
}