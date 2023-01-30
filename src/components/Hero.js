import Button from './Button';
import Food from '../img/food.jpg';

const Hero = () => {
    return(
        <>
            <section className='Hero-container'>
                <article className='Hero-Title'>
                    <h1 className='Hero-Lemon'>Little Lemon</h1>
                    <h3 className='Hero-Chicago'>Chicago</h3>
                    <p className='Hero-Paragraph'>
                        We are a family owned <br/>
                        Mediterranean restaurant,<br/>
                        focused on traditional<br/>
                        recipes served with a modern<br/>
                        twist</p>
                    <Button>Reserve a Table</Button>
                </article>
                <picture className='Hero-photo'>
                    <img src={Food}></img>
                </picture>
                <div className='Hero-White'></div>
            </section>
        </>
    )
}
export default Hero