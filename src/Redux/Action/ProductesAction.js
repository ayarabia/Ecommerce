import axios from 'axios'

export default function getProduct(){
let products=axios.get("https://jsonkeeper.com/b/KBDB").then((response)=>{
    // console.log(response.data);
    return response.data

}).catch(e=>{
    console.log(e);
})
return{
 
    type:'FETCH-DATA',
    payload:products
}


}