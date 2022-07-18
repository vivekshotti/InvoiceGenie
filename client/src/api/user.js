// const axios = require('axios');
import axios from 'axios';

export default {
    getAllUsers: () => axios.get("http://localhost:9000/api/user"),
    createNewUser: (data) => axios.post("http://localhost:9000/",data).then((response) => {console.log(response)}, (error) => {console.log(error);}),
}