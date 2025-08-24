import pcImage from '/app/pc.png'
import mobImage from '/app/mob.png'

export default function AppDesignFlowchart() {
  return (
    <div className='mt-12 lg:w-[90%] w-full'>
      <div className='hidden lg:block'>
        <img src={pcImage} alt="" />
      </div>
      <div className='lg:hidden block'>
        <img src={mobImage} alt="" />
      </div>
    </div>
  )
}
