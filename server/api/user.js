// Dead File

const axios = require("axios");

module.exports = {
    getAllUsers: () => axios.get("http://localhost:9000/api/user"),
    createNewUser: (data) => axios.post("http://localhost:9000/",data).then((response) => {console.log(response)}, (error) => {console.log(error);}),
}