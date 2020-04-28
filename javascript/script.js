function myFunction() {
                 var x = document.getElementById("input");
                var text = "";
                var i;
                for (i = 0; i < x.length ;i++) {
                text += x.elements[i].value + "<br>";
                text += x.elements[i].value*2 + "<br>";
                text += x.elements[i].value*3 + "<br>";
                text += x.elements[i].value*4 + "<br>";
                }
                document.getElementById("ats").innerHTML = text;
                }