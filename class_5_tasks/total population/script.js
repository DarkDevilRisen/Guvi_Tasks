var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    //console.log(data)
    var totalpop= data.reduce((acc,ele)=>{
       return acc+ele.population;
    },0);
    console.log(totalpop)
}
