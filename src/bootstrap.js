import Axios from 'axios';

const bootstrap = () => {
    return new Promise((resolve, reject) => { 
        Axios.get('https://atsserrurier.be/api/atss/items/article').then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error)
        });
        // Axios.post('https://atsserrurier.be/api/public/admin/atss/auth/authentication',{
        //     identifier: 'valentin.gregoire91@gmail.com',
        //     password: 'ValouTheBest9064!',
        // }).then((response) => {
        //     const http = Axios.create({
        //         headers: {
        //             Authorization: 'Bearer ' + response.data.jwt
        //         }, 
        //         baseURL: 'http://localhost:1337'
        //     });
        //     resolve(http);
        // }).catch((error) => {
        //     console.error('Failed to bootstrap', error);
        //     reject(error);
        // });

        // fetch('https://atsserrurier.be/api/public/admin/atss/auth/authentication', { mode: 'no-cors'}).then((response) => {
        //     console.log(response);
        // })
    });
}

export default bootstrap;