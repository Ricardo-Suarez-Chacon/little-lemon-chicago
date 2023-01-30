import Carlo from '../img/carlo.jpg';
import Karen from '../img/karen.jpg';
import Sophie from '../img/sophie.jpg';
import Stars from './Stars'


const TestimonialCard = (props) => {
    console.log(props.person)
    return(
        <article className="Testimonial-card-container">
            <figure className='Testimonial-card-stars'>
                <Stars />
            </figure>
            <figure className="Testimonial-card-photo-container">
                <img className="Testimonial-card-photo" src={Sophie} alt='text photo'/>
            </figure>
            <blockquote className="Testimonial-card-text1">
            “Sed ut perspiciatis unde omnis iste 
            natus error sit voluptatem 
            accusantium doloremque laudantium”
            </blockquote>
            <h2 className="Testimonial-card-name">
                Carlo
            </h2>
            <p className="Testimonial-card-text2">
            Quis autem vel eum iure reprehenderit 
            qui in ea voluptate velit
            </p>
        </article>
    )
}
export default TestimonialCard