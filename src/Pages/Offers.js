import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";

const Offers = (props) => {
    const {offers} = props
    // console.log(icecreams)
    const loaded = () => (
      <>
      <Link to ='/menu'>
                <button className ='menu'>
                <AiOutlineArrowLeft />
                </button>
       </Link>
       <div className="offers" >
              
          
        {offers.map((offer) => (
            
            
           <article className = 'odisplay'>
            
             <h1>{offer.title}</h1>
             <img src={offer.img} />
             <p>{offer.description}</p>
             
            
          </article>
       ))}
     </div>
      </>
       
           )
       
           const loading = <h1>Loading...</h1>
           return offers.length > 0 ? loaded() : loading;
}

export default Offers