import Button from './Button';
import Food from '../img/food.jpg';

const Hero = () => {
    return(
        <>
            <div className='Hero-container'>
                <div className='Hero-Title'>
                    <h1 className='Hero-Lemon'>Little Lemon</h1>
                    <h3 className='Hero-Chicago'>Chicago</h3>
                    <p className='Hero-Paragraph'>
                        We are a family owned <br/>
                        Mediterranean restaurant,<br/>
                        focused on traditional<br/>
                        recipes served with a modern<br/>
                        twist</p>
                    <Button>Reserve a Table</Button>
                </div>
                <div className='Hero-photo'>
                    <img src={Food}></img>
                </div>
                <div className='Hero-White'></div>
            </div>
        </>
    )
}
export default Hero