var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    var county=data.filter((items)=>{
        if(items.region==="Asia"){
           console.log(items.name);
        }
    });
}
