
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

    return(
        <>
            <section className='Testimonial-container'>
                <article className='Testimonial-container-head'>
                    <h2 >Testimonials</h2>
                </article>
                <article className='Testimonial-container-cont1'>
                    <TestimonialCard person={{ name : 'Sophie'}}/>
                </article>
                <article className='Testimonial-container-cont2'>
                    <TestimonialCard />
                </article>
                <article className='Testimonial-container-cont3'>
                    <TestimonialCard />
                </article>
            </section>
        </>
    )
}
export default Testimonials