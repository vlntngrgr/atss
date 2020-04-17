import Axios from 'axios';

const bootstrap = () => {
    return new Promise((resolve, reject) => { 
        const http = Axios.create();
        resolve(http);
    });
}

export default bootstrap;