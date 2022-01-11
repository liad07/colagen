// Generated JS from Java: cocacola -----



    var num;
    var x;
    var y;
    var a;
    var b;
    let z=0;
    var base = "2480655";
    var max = 5;
    var min = 1;
    var range = max - min + 1;
    var achdot = 0;
    var asarot = 0;
    var meot = 0;
    var alfim = 0;
    console.log("how much codes you want");
const input = prompt(num);
console.log(`תקבל  ${input} פקקים`);


for (var i = 0; input >i; i++) {
    achdot = Math.floor(Math.random(Number) * range) + min;
    asarot = Math.floor(Math.random(Number) * range) + min;
    meot = Math.floor(Math.random(Number) * range) + min;
    alfim = Math.floor(Math.random(Number) * range) + min;

    //   achdot.toString();
       // asarot.toString();
       // meot.toString();
        //alfim.toString();

z=base+alfim+meot+asarot+achdot+"5";
console.log(z)
}
        /*asarot.toString();
       meot.toString();
        alfim.toString();
        while (achdot < 5 || asarot < 5 || meot < 5 || alfim < 5) {
            if (achdot > 5) {
                achdot=achdot-1;
            }
            if (asarot > 5) {
                asarot=asarot-1;
            }
            if (meot > 5) {
                meot=meot-1;
            }
            if (alfim > 5) {
                alfim=alfim-1;
            }

        }
        z = base + achdot + asarot + meot + alfim + "5";
        console.log(z)

    }
}


       /* else
            achdot = x % 10;
        x /= 10;
        asarot = x % 10;
        x /= 10;
        meot = x % 10;
        x /= 10;
        alfim = x % 10;
        x /= 10;
        achdot = achdot / 2;
        asarot = asarot / 2;
        meot = meot / 2;
        alfim = alfim / 2;


if (achdot>5)
{
    achdot/=2
}
    if (asarot>5)
    {
        asarot/=2
    }
    if (meot>5)
    {
        meot/=2
    }
    if (alfim>5)
    {
        alfim/=2
    }
        z = base + achdot + asarot + meot + alfim + "5";

    console.log(z)
}

*/

