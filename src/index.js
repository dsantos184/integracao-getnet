const aPath = __dirname.split("\\") 
const localhost = aPath.indexOf("htdocs8")
import axios from 'axios'


REACT_APP_APIGETNET_URL = "http://localhost/apigetnet/"

if(localhost !== -1 )
{
    REACT_APP_APIGETNET_URL = "https://www.salud.com.br/apigetnet/"
}

export const tokenAcessoGentNet = async (clientName, url) =>{
    const req = await axios.get(url, {headers:{clientName: clientName}})
    return req
}

export const cadastroCliente = async (dadosCliente, sellerId, url, clientName) =>{
    
    const headers = {
        sellerId: sellerId,
        clientName: clientName,
        Authorization: token
    }

    await axios.post(url,dadosCliente,{headers}).then(resp=>{
        return resp
    })
}