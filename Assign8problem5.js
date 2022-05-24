var request=new XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
var data=JSON.parse(request.response);

data.forEach(usd=>{
    if(usd.currencies[0].code=="USD"){
        console.log("Country Name:"+usd.name+">>Currency:"+usd.currencies[0].code)
    }
    })
}
