import Button from "../components/Button"

const SpecialOffer = () => {
  return (
   <section
   id="about-us"
   className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" 
   >

    <div className="flex flex-1 flex-col">
 

        <h2 className='font-palanquin text-4xl capitalize max-sm:text-[72px] font-bold lg:max-w-lg'>
          Wr Provide You
          <span className='text-coral-red '> Super</span>
          <span className='text-coral-red '> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Ensuring premium comfort and style,our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and  a touch of elegance
        </p>

        <Button label='View details' />

    
    </div>

   </section>
  )
}

export default SpecialOffer
