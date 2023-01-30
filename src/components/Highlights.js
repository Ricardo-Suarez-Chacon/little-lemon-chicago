import Button from "./Button";
import HlCard from "./HlCard";

const Highlights = () => {

    return(
        <>
        <section className='Hl-container'>
            <article className='Hl-container-head1'>
                <h2 >This weeks specials!</h2>
            </article>
            <aside className='Hl-container-head2'>
                <Button >Online Menu</Button>
            </aside>
            <article className='Hl-container-cont1'>
                <HlCard />
            </article>
                <div className='Hl-container-cont2'>
                <HlCard />
            </div>
            <article className='Hl-container-cont3'>
                <HlCard />
            </article>
        </section>
        </>
    )
}
export default Highlights