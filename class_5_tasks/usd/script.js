var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    console.log(data)
    data.filter((items)=>{
        items.currencies.filter((ele)=>{
            if(ele.code=="USD"){
                console.log(items.name+":"+ ele.code)
            }
        });
    });
}
