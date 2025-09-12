import pcImage from '/app/pc.png'
import mobImage from '/app/mob.png'

export default function AppDesignFlowchart() {
  return (
    <div className='mt-28 lg:w-[80%] mx-auto w-full'>
  <h2 className="lg:text-4xl text-2xl font-bold text-center">Design Process
</h2>
      <div className='hidden mt-12   lg:block'>
        <img src={pcImage} alt="" />
      </div>
      <div className='lg:hidden block'>
        <img src={mobImage} alt="" />
      </div>
    </div>
  )
}
