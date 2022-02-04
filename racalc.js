// function SumCalc(){
//     var math1=parseInt(document.getElementById("math1").value);
//     var math2=parseInt(document.getElementById("math2").value);
//     var math3=parseInt(document.getElementById("math3").value);
//     // var mathtot=document.getElementById("mathtot").value;
//     var sci1=parseInt(document.getElementById("sci1").value);
//     var sci2=parseInt(document.getElementById("sci2").value);
//     var sci3=parseInt(document.getElementById("sci3").value);
//     // var scitot=document.getElementById("scitot").value;
//     var soc1=parseInt(document.getElementById("soc1").value);
//     var soc2=parseInt(document.getElementById("soc2").value);
//     var soc3=parseInt(document.getElementById("soc3").value);
//     // var soctot=document.getElementById("soctot").value;
//     var eng1=parseInt(document.getElementById("eng1").value);
//     var eng2=parseInt(document.getElementById("eng2").value);
//     var eng3=parseInt(document.getElementById("eng3").value);
//     // var engtot=document.getElementById("engtot").value;
//     var mal1=parseInt(document.getElementById("mal1").value);
//     var mal2=parseInt(document.getElementById("mal2").value);
//     var mal3=parseInt(document.getElementById("mal3").value);
//     // var maltot=document.getElementById("maltot").value;
//     document.getElementById("mathtot").value=math1+math2+math3;
//     document.getElementById("scitot").value=sci1+sci2+sci3;
//     document.getElementById("soctot").value=soc1+soc2+soc3;
//     document.getElementById("engtot").value=eng1+eng2+eng3;
//     document.getElementById("maltot").value=mal1+mal2+mal3;
//     document.getElementById("sub1").value=math1+sci1+soc1;
//     document.getElementById("sub2").value=math2+sci2+soc2;
//     document.getElementById("sub3").value=math3+sci3+soc3;
//     document.getElementById("lang1").value=mal1+eng1;
//     document.getElementById("lang2").value=mal2+eng2;
//     document.getElementById("lang3").value=mal3+eng3;
//     document.getElementById("lang1").value=mal1+eng1;
//     document.getElementById("subtot").value=math1+sci1+soc1+math2+sci2+soc2+math3+sci3+soc3;
//     document.getElementById("langtot").value=mal1+eng1+mal2+eng2+mal3+eng3;
//     document.getElementById("t1").value=math1+sci1+soc1+mal1+eng1;
//     document.getElementById("t2").value=math2+sci2+soc2+mal2+eng2;
//     document.getElementById("t3").value=math3+sci3+soc3+mal3+eng3;
//     document.getElementById("t_tot").value=math1+sci1+soc1+math2+sci2+soc2+math3+sci3+soc3+mal1+eng1+mal2+eng2+mal3+eng3;
// }
function calculate(){
    var math1=document.getElementById("math1").value;
    var math2=document.getElementById("math2").value;
    var math3=document.getElementById("math3").value;
    var sci1=document.getElementById("sci1").value;
    var sci2=document.getElementById("sci2").value;
    var sci3=document.getElementById("sci3").value;
    var soc1=document.getElementById("soc1").value;
    var soc2=document.getElementById("soc2").value;
    var soc3=document.getElementById("soc3").value;
    var eng1=document.getElementById("eng1").value;
    var eng2=document.getElementById("eng2").value;
    var eng3=document.getElementById("eng3").value;
    var mal1=document.getElementById("mal1").value;
    var mal2=document.getElementById("mal2").value;
    var mal3=document.getElementById("mal3").value;

    // -----------------MATHS----------------------
    // function fnc(value, min, max) 
    //     {
    //         if(parseInt(value) >50 || isNaN(value)) {
    //             return 0;
                
    //         }
                
    //         else {
    //             return value;
    //         }
    //     }
    if (math1=="" ) {
        // return alert("enter between 1 to 50");
        var math1= 0;
    }else{
        math1=parseInt(document.getElementById("math1").value);
        document.getElementById("mathtot").value= (math1+math2+math3);
        document.getElementById("sub1").value=math1+sci1+soc1;
        document.getElementById("t1").value=math1+sci1+soc1+mal1+eng1;
        document.getElementById("subtot").value=math1+math2+math3;
        document.getElementById("t_tot").value=math1+math2+math3;
    }
    if ( math2=="" ) {
        math2=0;
    }else{
        math2=parseInt(document.getElementById("math2").value);
        document.getElementById("mathtot").value= (math1+math2+math3);
        document.getElementById("sub2").value=math2+sci2+soc2;
        document.getElementById("t2").value=math2+sci2+soc2+mal2+eng2;
        document.getElementById("subtot").value=math1+math2+math3;
        document.getElementById("t_tot").value=math1+math2+math3;
    }
    if ( math3=="") {
        math3=0;
    }else{
        math3=parseInt(document.getElementById("math3").value);
        document.getElementById("mathtot").value= (math1+math2+math3);
        document.getElementById("sub3").value=math3+sci3+soc3;
        document.getElementById("t3").value=math3+sci3+soc3+mal3+eng3;
        document.getElementById("subtot").value=math1+math2+math3;
        document.getElementById("t_tot").value=math1+math2+math3;
    }

    // ---------------------SCIENCE-----------------------------
    if (sci1=="" ) {
        sci1=0;
   }else{
       sci1=parseInt(document.getElementById("sci1").value);
       document.getElementById("scitot").value= (sci1+sci2+sci3);
       document.getElementById("sub1").value=math1+sci1+soc1;
       document.getElementById("t1").value=math1+sci1+soc1+mal1+eng1;
       document.getElementById("subtot").value=math1+math2+math3+sci1+sci2+sci3;
       document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3;
   }
   if (sci2=="" ) {
    sci2=0;
    }else{
        sci2=parseInt(document.getElementById("sci2").value);
        document.getElementById("scitot").value= (sci1+sci2+sci3);
        document.getElementById("sub2").value=math2+sci2+soc2;
        document.getElementById("t2").value=math2+sci2+soc2+mal2+eng2;
        document.getElementById("subtot").value=math1+math2+math3+sci1+sci2+sci3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3;
    }
    if (sci3=="" ) {
        sci3=0;
    }else{
        sci3=parseInt(document.getElementById("sci3").value);
        document.getElementById("scitot").value= (sci1+sci2+sci3);
        document.getElementById("sub3").value=math3+sci3+soc3;
        document.getElementById("t3").value=math3+sci3+soc3+mal3+eng3;
        document.getElementById("subtot").value=math1+math2+math3+sci1+sci2+sci3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3;
    }

    // ----------------------SOCIAL----------------------------
    if (soc1=="" ) {
        soc1=0;
    }else{
        soc1=parseInt(document.getElementById("soc1").value);
        document.getElementById("soctot").value= (soc1+soc2+soc3);
        document.getElementById("sub1").value=math1+sci1+soc1;
        document.getElementById("t1").value=math1+sci1+soc1+mal1+eng1;
        document.getElementById("subtot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3;
    }
    if (soc2=="" ) {
        soc2=0;
    }else{
        soc2=parseInt(document.getElementById("soc2").value);
        document.getElementById("soctot").value= (soc1+soc2+soc3);
        document.getElementById("sub2").value=math2+sci2+soc2;
        document.getElementById("t2").value=math2+sci2+soc2+mal2+eng2;
        document.getElementById("subtot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3;
    }
    if (soc3=="" ) {
        soc3=0;
    }else{
        soc3=parseInt(document.getElementById("soc3").value);
        document.getElementById("soctot").value= (soc1+soc2+soc3);
        document.getElementById("sub3").value=math3+sci3+soc3;
        document.getElementById("t3").value=math3+sci3+soc3+mal3+eng3;
        document.getElementById("subtot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3;
    }

    // -----------------------ENGLISH----------------------------
    if (eng1=="" ) {
        eng1=0;
    }else{
        eng1=parseInt(document.getElementById("eng1").value);
        document.getElementById("engtot").value= (eng1+eng2+eng3);
        document.getElementById("lang1").value=mal1+eng1;
        document.getElementById("t1").value=math1+sci1+soc1+eng1+mal1;
        document.getElementById("langtot").value=eng1+eng2+eng3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3+eng1+eng2+eng3;
    }
    if (eng2=="" ) {
        eng2=0;
    }else{
        eng2=parseInt(document.getElementById("eng2").value);
        document.getElementById("engtot").value= (eng1+eng2+eng3);
        document.getElementById("lang2").value=mal2+eng2;
        document.getElementById("t2").value=math2+sci2+soc2+eng2+mal2;
        document.getElementById("langtot").value=eng1+eng2+eng3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3+eng1+eng2+eng3;
    }
    if (eng3=="" ) {
        eng3=0;
    }else{
        eng3=parseInt(document.getElementById("eng3").value);
        document.getElementById("engtot").value= (eng1+eng2+eng3);
        document.getElementById("lang3").value=mal3+eng3;
        document.getElementById("t3").value=math3+sci3+soc3+eng3+mal3;
        document.getElementById("langtot").value=eng1+eng2+eng3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3+eng1+eng2+eng3;
    }

    // -----------------------MALAYALAM--------------------------
    if (mal1=="" ) {
        mal1=0;
    }else{
        mal1=parseInt(document.getElementById("mal1").value);
        document.getElementById("maltot").value= (mal1+mal2+mal3);
        document.getElementById("lang1").value=mal1+eng1;
        document.getElementById("t1").value=math1+sci1+soc1+mal1+eng1;
        document.getElementById("langtot").value=eng1+eng2+eng3+mal1+mal2+mal3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3+eng1+eng2+eng3+mal1+mal2+mal3;
    }
    if (mal2=="" ) {
        mal2=0;
    }else{
        mal2=parseInt(document.getElementById("mal2").value);
        document.getElementById("maltot").value= (mal1+mal2+mal3);
        document.getElementById("lang2").value=mal2+eng2;
        document.getElementById("t2").value=math2+sci2+soc2+mal2+eng2;
        document.getElementById("langtot").value=eng1+eng2+eng3+mal1+mal2+mal3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3+eng1+eng2+eng3+mal1+mal2+mal3;
    }
    if (mal3=="" ) {
        mal3=0;
    }else{
        mal3=parseInt(document.getElementById("mal3").value);
        document.getElementById("maltot").value= (mal1+mal2+mal3);
        document.getElementById("lang3").value=mal3+eng3;
        document.getElementById("t3").value=math3+sci3+soc3+mal3+eng3;
        document.getElementById("langtot").value=eng1+eng2+eng3+mal1+mal2+mal3;
        document.getElementById("t_tot").value=math1+math2+math3+sci1+sci2+sci3+soc1+soc2+soc3+eng1+eng2+eng3+mal1+mal2+mal3;
    }
}