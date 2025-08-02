
const Features = ({title, description, icon}) => {
  return (
    <div className='bg-[#00B6B8] md:w-[400px] py-2 md:py-4 px-8 text-white m-1 md:m-4 rounded-md shadow flex flex-col justify-center items-center border-1 border-[#FF5400]'>
      <p className='text-2xl md:text-4xl p-2 bg-[#0A2735] my-2 rounded-full'>{icon}</p>
      <h3 className="font-medium text-xl text-center">{title}</h3>
      <p className="text-md text-center">{description}</p>
    </div>
  )
}

export default Features
