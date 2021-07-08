$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Provjeri unos!<br>"
);
$("#forma").validate({
    rules:{
        naslov:{
            required:true,
            regex:/^[A-Z][a-zA-Z ]+[a-zA-Z]$/
        },
        telefon:{
            required:true,
            regex:/^\+[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{4}$/
        }
    },
    messages:{
        naslov:{
            required:"Obavezno polje!",
            regex:"Minimalno dvije riječi. Prva riječ počinje velikim slovom.",
        }, 
        telefon:{
            required:"Obavezno polje!",
            regex:"Format +111-11-111-1111",
        },
        poruka:{
            required:"Obavezno polje!",
        }
    }
})

function podaci() {
    fetch("https://restapiexample.wrd.app.fit.ba/Ispit20210702/Get4Studenta")
        .then((r) => {
            if (r.status != 200) {

                return;
            }

            r.json().then((x) => {
                document.getElementById("radnik1").innerHTML=podaci.slikaPutanja;
            });

        })
        .catch((error) => {

        });
}


$("#IzbornikDugme").on("click", function(){
    $("#Izbornik").toggle();
})