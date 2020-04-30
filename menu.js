        
        var id1 =0;
        var id2 =0;
        var id3 =0;
        var id4 =0;
        
        function plus(id){

            if(id==1){
                document.getElementById("minus1").disabled = false;
                id1++;
                document.getElementById(id).innerHTML = id1;
            }else if(id==2){
                document.getElementById("minus2").disabled = false;
                id2++;
                document.getElementById(id).innerHTML = id2;
            }else if(id==3){
                document.getElementById("minus3").disabled = false;
                id3++;
                document.getElementById(id).innerHTML = id3;
            }else if(id==4){
                document.getElementById("minus4").disabled = false;
                id4++;
                document.getElementById(id).innerHTML = id4;
            }
            
            
        }
    
        function minus(id){

            if(id==1){
                if(id1<=0){
                document.getElementById("minus1").disabled = true;
            }else{
                id1--;
                document.getElementById(id).innerHTML = id1;
            }
            }else if(id==2){
                if(id2<=0){
                document.getElementById("minus2").disabled = true;
            }else{
                id2--;
                document.getElementById(id).innerHTML = id2;
            }
            }else if(id==3){
                if(id3<=0){
                document.getElementById("minus3").disabled = true;
            }else{
                id3--;
                document.getElementById(id).innerHTML = id3;
            }
            }else if(id==4){
                if(id4<=0){
                document.getElementById("minus4").disabled = true;
            }else{
                id4--;
                document.getElementById(id).innerHTML = id4;
            }
            }
               
        }
        
        function  checkout()
        {
            var totalQuantity = 0;
            totalQuantity = id1 + id2 + id3 + id4;
            if(totalQuantity <= 0)
            {
                document.getElementById("cannotCheckout").innerHTML = "please select food items";
            }else{
                window.location.href = "summary.html";
                var id1=document.getElementById("id1").Value;
                localStorage.setItem("qnty1", id1);
                localStorage.setItem("qnty2", id2);
                localStorage.setItem("id3", id3);
                localStorage.setItem("id4", id4);  
                
            }
        }

        
