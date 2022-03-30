const axios = require('axios').default;

async function createAUser(){
    const data = {
        "name": "Nguyen Cong Hanh",
        "avatar": "https://cdn.fakercloud.com/avatars/lmjabreu_128.jpg"
    }
    let api = await axios.post('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users', data);
    console.log(api.data);
}

async function getAll(){
    let api = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users');
    console.log(api);
}

async function getAUserById(){
    const id = 95;
    let api = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/'+ id);
    console.log(api.data);
}

async function updateUser(){
    const data = {
        "name": "Nguyen Cong Khanh",
    }
    let api = await axios.patch('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/95', data)
    console.log(api.data);
}

async function deleteUser(){
    let api = await axios.delete('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/95')
    console.log(api.data)
}
createAUser();