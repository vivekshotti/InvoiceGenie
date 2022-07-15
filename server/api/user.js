// Dead File

import axios from "axios";

export default {
    createNewUser: (data) => axios.post("http://localhost:9000/",data).then((response) => {console.log(response)}, (error) => {console.log(error);}),
}