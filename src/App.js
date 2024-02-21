import './App.css';
import { useState } from 'react';
import Articles from './components/Articles/Articles';
import Panier from './components/Panier/Panier';
import data from './data.json';

function App() {

  const [argent, setargent] = useState(300);
  const [articles, setarticles] = useState(data);
  const [panier, setpanier] = useState([]);
 

  function achatBis(index) {
    setargent(argent-articles[index].prix)  
    let copieArticle = [...articles]
    copieArticle[index].stock -= 1
    setarticles(copieArticle)
    let nouvPanier = [...panier]
    let modifier = false
    for (let i = 0; i < nouvPanier.length; i++) {
      if (nouvPanier[i].nom === articles[index].nom) {
        nouvPanier[i].quantity += 1
        modifier = true;
      }
      
    }

    if (modifier === false) {
      let nouvProduit = copieArticle[index]
      nouvProduit.quantity = 1
      setpanier([...panier, nouvProduit])
    } else {
      setpanier(nouvPanier)
    }
    
  }
  
  function retirer(index) {
    let retirerPanier = [...panier]
    console.log(retirerPanier);
    let copieArticleBis = [...articles]
    retirerPanier[index].quantity -= 1
    setpanier(retirerPanier)
    copieArticleBis[index].stock += 1;
    setargent(argent+copieArticleBis[index].prix)
    setarticles(copieArticleBis);
  }

  return (
    <div className="App">
      <div className='divArgent'>
        <p className='titreArgent'>Mon argent : {argent}€</p>
      </div>
      <div className='divArticles'>
        {
          articles.map((champi, index) =>
              <Articles achatBis={achatBis} champi = {champi} img = {champi.img} nom = {champi.nom} prix = {champi.prix} id = {index} key = {index} argent = {argent} />
              )
        }
      </div>
      <div className='divPaniers'>
            <div className='panierTitre'>
                <p className='panierText'> 🛒 Panier :</p>
            </div>
        {
          panier.map((champi, index) =>
          {
            return(
              <Panier img = {champi.img} nom = {champi.nom} quantity = {champi.quantity} id = {index} retirer = {retirer}/>
            ) 
          })
        }
        </div>
    </div>
  );
}

export default App;
