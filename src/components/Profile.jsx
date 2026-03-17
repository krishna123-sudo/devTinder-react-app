import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

function Profile() {
    const data = useSelector(store => store?.user?.user)

    return (
        <EditProfile userData={data} />
    )
}

export default Profile;