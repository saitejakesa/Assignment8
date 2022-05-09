var request=new XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
data.forEach(element=>{
console.log("Name:",element.name);
console.log("Capital:",element.capital);
console.log("Flag:",element.flag);
})
}
