import axios from "axios";


export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: '962eed4a305f4e6e8b2a1fe6349ef3d5'
    }
})