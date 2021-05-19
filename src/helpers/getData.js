
export const getData = async (value) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d6092cbc3f811a0d667555db72e0d8ce`;
    const resp = await fetch(url);
    const  data  = await resp.json();
   return data;
}