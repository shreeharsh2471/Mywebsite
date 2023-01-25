
        function myClick()
        {
            // alert("Oh Done")
            var name=frm.t1.value;
            if(name=="")
            {
                alert("Enter your name")
            }
            else{
                alert("done")
            }
        }
        function markstotal(){
            var maths=parseInt(frm1.maths_m.value);
            var eng=parseInt(frm1.eng_m.value);
            var comp=parseInt(frm1.comp_m.value);
            var total=(maths+eng+comp)
            frm1.t4.value=total;
           
        }
        function percent(){
            var maths=parseInt(frm1.maths_m.value);
            var eng=parseInt(frm1.eng_m.value);
            var comp=parseInt(frm1.comp_m.value);
            var percent=(((maths+eng+comp)/300)*100);
            frm1.t5.value=percent;
           
        }
        function maximumMarks(){
            var maths=parseInt(frm1.maths_m.value);
            var eng=parseInt(frm1.eng_m.value);
            var comp=parseInt(frm1.comp_m.value);
            frm1.t6.value=Math.max(maths,eng,comp);

        }
        function minMarks(){
            var maths=parseInt(frm1.maths_m.value);
            var eng=parseInt(frm1.eng_m.value);
            var comp=parseInt(frm1.comp_m.value);
            frm1.t7.value=Math.min(maths,eng,comp);

        }


        

