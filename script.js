
function myfunction(val){
    document.getElementById('text1').value+=val;
}
function clr(){
    document.getElementById('text1').value='';
}
function equals(){
    let val=document.getElementById('text1').value;
    if(val.indexOf("%")!=-1){
        persentage(val);
    }
    
    let eqal=eval(document.getElementById('text1').value)
    document.getElementById('text1').value=eqal;
}
function back_space(){
    let back=document.getElementById('text1').value;
    let length=back.length-1;
    let result=back.substring(0,length);
    document.getElementById('text1').value=result;
}
function persentage(val){
        let value=val;
        let arr=value.split("%");
        let result=arr[0]*(arr[1]/100);
        document.getElementById('text1').value=result;
}