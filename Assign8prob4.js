var request=new XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
let totalpop=data.reduce((old,current)=>old+current.population,0);
console.log(totalpop) //O/p:7349137231
}