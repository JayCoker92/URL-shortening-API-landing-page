import showcase from "../assets/illustration-working.svg";

const Showcase = () => {
  return (
    <>
    
    <section className='py-10 lg:py-20'>
      <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center'>
      <article className='text-center  md:text-left'>
        <h1 className='text-5xl lg:text-6xl mb-5 font-bold text-[var(--VeryDarkViolet)]'>More than just shorter links</h1>
        <p className='text-lg text-[var(--GrayishViolet)] mb-10 '>Build your brand recognition and get details insights on how your links are performing</p>
        <button className='btn-cta animate__animated animate__bounceIn rounded-full'>
         Get Started
        </button>
      </article>

      <article>
        <img src={showcase} alt="illustration-working-image" className="w-full  animate__animated animate__zoomInRight  max-w-[400px] md:max-w-[600px] lg:max-w-[1000px]"
        />
      </article>
      </div>
    </section>
    </>
  )
}

export default Showcase