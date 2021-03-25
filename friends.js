let names = [];
    
   

    const loadDiv = () => {
       let divCtrl = document.getElementById("input");
        divCtrl.innerHTML= "";
       for(let name of names){ //js foreach loop
        let p = `<p>${insert.name}</p>`; //used back tick
        divCtrl.innerHTML += p;
        ctrl.style.color = "blue";
        ctrl.style.fontsize = "14pt";
       }
    }



}     