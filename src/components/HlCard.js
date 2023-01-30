import Salad from '../img/Greek-salad-900px.jpg';
import Bike from '../img/bike.svg';

const HlCard = () => {

    return(
        <div className="Hl-card-container">
            <img className="Hl-card-photo" src={Salad} alt='text photo'/>
            <h1 className="Hl-card-title">Greek salad</h1>
            <h1 className="Hl-card-price">$12.99</h1>
            <p className="Hl-card-text">
                The famous greek salad of crispy lettuce,
                peppers, olives and our Chicago style feta cheese,
                garnished with crunchy garlic and rosemary croutons.
            </p>
            <h2 className="Hl-card-foot1">
                Order a delivery
            </h2>
            <img className="Hl-card-bike" src={Bike} alt='delivery icon' />
        </div>
    )
}
export default HlCard