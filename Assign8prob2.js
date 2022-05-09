var request=new XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
let population=[]
population=data.filter((y)=>y.population>200000)
    console.log(population);
}
