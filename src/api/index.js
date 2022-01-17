import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '05f2e67fd2msh0698d4bc40064bap1f3259jsn47f19dc12418'
  }
};


export const getPlacesData = async () => { 
    try{
        const {data: {data}} = await axios.get(URL, options);
        return data;
    }catch(error){
        console.log(error)
    }
 }