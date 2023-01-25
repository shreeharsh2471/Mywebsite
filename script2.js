function myPerf(){
    var sal= parseInt(frm1.s1.value);
    if(frm1.per.value=="A"){
        var bon=parseInt(sal*0.30); 
        var tot=parseInt(sal+bon);
        frm1.bonus.value=bon;
        frm1.totsal.value=tot;

        window.open("home.html", "", "width=300,height=200"); 
        
    }
    else if(frm1.per.value=="B"){
        var bon=parseInt(sal*0.20); 
        var tot=parseInt(sal+bon);
        frm1.bonus.value=bon;
        frm1.totsal.value=tot;
        
    }
    else if(frm1.per.value=="C"){
        var bon=parseInt(sal*0); 
        var tot=parseInt(sal+bon);
        frm1.bonus.value=bon;
        frm1.totsal.value=tot;
        
    }
}