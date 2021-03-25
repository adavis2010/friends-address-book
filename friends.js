
    
   
let friends = []; //array with no data in it
    

const addFriend = () => {
    let fname = document.getElementById("iname").value; 
    let femail = document.getElementById("iemail").value;
    let fphone = document.getElementById("iphone").value;
    let friend = { //friend variable
        name:fname, email:femail, phone:fphone
    }
    friends.push(friend); //push friend into the array
    display();
}
   
const display = () => { // create display function
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let friend of friends){
        let tr = "<tr>";
        tr +=`<td>${friend.name}</td>`;
        tr +=`<td>${friend.email}</td>`;
        tr +=`<td>${friend.phone}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr; //Append tr tag to what is currently in the body
    }
}
        
        
       
    



    