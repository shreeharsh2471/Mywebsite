function myfunction(){
    var name=frm1.nm.value;
    var des=frm1.desc.value;
            
            if(name=="")
            {
                alert("Enter your name")
                frm1.nm.focus()
            }
            
        if(name=="" && des=="")
            {
                alert("Enter your name and desc")

            }
            // else{
            //     window.open("home.html", "", "width=300,height=200"); 
            // }
            
    

}