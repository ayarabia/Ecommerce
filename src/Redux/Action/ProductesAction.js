import axios from 'axios'

export default function getProduct(){
let products=axios.get("https://ayarabia.github.io/jsonData/formatted.json").then((response)=>{
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