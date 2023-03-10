import Announcements from './Announcements'
const Rightbar = () => {
  return (
    <div className='flex-[0.75]'>
        <div>
            <Announcements />
            <Announcements feed />
        </div>
    </div>
  )
}
export default Rightbar