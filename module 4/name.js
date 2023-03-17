var Array=["Haseeb","Jawad","Hazim","john","Badar"];
for (var i=0; i< Array.length; i++){
    if(Array[i].charAt(0)==="j" || Array[i].charAt(0)==="J"){
        console.log("Goodbye " + Array[i])
    }

    else{
        console.log("Hello " + Array[i])
    }
};