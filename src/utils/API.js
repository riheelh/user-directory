import axios from 'axios'

const obj = {
    searchEmployee: () => {
        return axios.get("https://randomuser.me/api/?results=20")
    }
}

export default obj;