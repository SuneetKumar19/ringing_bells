 var lolo=[],mark=[];
 for(var i=0;i<100;i++)
 {
    mark[i]=0;
 }
 var xdose,lol;
 audi=function(lol,lolo)
{
    var xpose=document.getElementById(lol);
    xpose.textContent=lolo;  
    console.log(xpose.textContent);
    // console.log(xdose.textContent);
    console.log("changed");
};
window.addEventListener('keydown',function(e)
{
var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
console.log(audio);
if(!audio)
{
    console.log("Not a valid key");
    return;
}
else
{ 
    audio.currentTime=0;
    audio.play();
     if(audio.play())
    {
        var j=e.keyCode;
        var xpose=document.getElementById(j);
        xdose=document.getElementById(j);
        if(mark[j]===0)
        {
            lolo[j]=xpose.textContent;
            mark[j]=1;
        }
        console.log("xpose");
        console.log(xdose.textContent);
        console.log("start"); 
        xpose.textContent="Playing";
        // console.log(xdose.textContent);
        setTimeout(audi,300*audio.duration,e.keyCode,lolo[j]);
    }   
}
});  