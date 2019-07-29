import apiUrl from '../apiConfig';
import Axios from 'axios'


export const analyze = (text, user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/analyze/' + text,
       headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const history = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/history',
       headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const destroyAll = (user) => {
    return  Axios({
        method:'DELETE',
        url: apiUrl + `/history`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const destroyById = (user,historyId) => {
    return  Axios({
        method:'DELETE',
        url: apiUrl + `/history/${historyId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const stt = (formData, user) => {
    return Axios({
        method:'POST',
        url:apiUrl + '/stt',
        headers:{
            "Authorization":`Bearer ${user.token}`,
            //'Content-Type': 'multipart/form-data',
        },
        data:formData
    })
}