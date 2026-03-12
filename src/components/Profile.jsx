import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

function Profile() {
    const data = useSelector(store => store?.user?.user?.data)

    return (
        <div className='flex justify-center my-10'><EditProfile userData={data} /></div>
    )
}

export default Profile;