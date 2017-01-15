$(function(){
    var jiarongli=$('.jiarongli');
    var yunfu=$('.yunfu');
    var bys=$('.bys');
    for(var i=0;i<yunfu.length;i++){
        yunfu[i].index=i;
        yunfu[i].onmouseover=function(){
            bys[this.index].style.color="#B01F1F";
        }
    }
    for(var i=0;i<jiarongli.length;i++){
        aa(jiarongli[i])
    }
    function aa(bb){
        var sxnum=0;
        var sxt=setInterval(sxmove,1000)
        function sxmove(){
            sxnum++;
            if(sxnum==3){
                sxnum=0;
                bb.style.marginTop=0;
            }
            animate(bb,{marginTop:-16*sxnum},200)
        }

    }

})