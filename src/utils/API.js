import axios from 'axios'

const obj = {
    searchEmployee: () => {
        return axios.get("https://randomuser.me/api/?results=25&nat=us")
    }
}

export default obj;