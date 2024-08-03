/*
1. Да се креира функција која прима еден параметар за години.
 Функцијата да врати Promise кој проверува дали годините се поголеми од 18, 
 доколку се поголеми од 18 да се направи resolve на тој Promise, 
 ако се помали од 18 да се направи reject на Promise-от. 
 Да се повика функцијата и да се испечати резултато во then или catch соодветно.

2. Креирајте профил на https://mockapi.io/ . Креирајте си проект "Homework API". 
Во проектот при клик на "New resource" ке ви се отвори дијалог за креирање на табела. 
Запишете име "users" како "Resource name" и потоа "Create". 
Веќе го имате првичното API од самиот сајт кој што е на почеток фиксно генерирано и имате линк до истото. 
На местото /:endpoint практично е името на вашиот "resource" што го ставивте (users).
 Земете ги овие податоци со fetch и прикажете ги во HTML.
*/

function ageValidaton(age) {
  let myPromise = new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("Imas povece od 18 godini");
    } else {
      reject("Imas pomalce od 18 godini");
    }
  });

  return myPromise;
}

document.getElementById("btnValue").addEventListener("click", showAge)

function showAge() {
    ageStr = document.getElementById("inputValue").value;
    if (ageStr){
        let ageValue = parseInt(ageStr);

        ageValidaton(ageValue)
            .then((response) => {alert(response);})
            .catch((error) => {alert(error);});
    } else {
        alert("Enter your age!")
    }
}


fetch("https://66ae1187b18f3614e3b6aa7e.mockapi.io/api/v1/users")
.then(response=>response.json())
.then(response=>showUsers(response));


function showUsers(users) {

    let usersStr = "";
    for(user of users) {
        usersStr += `<div class="col-3">
                <div class="card m-3 border" style="width: 18rem;">
                    <img src="${user.avatar}" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById("cards").innerHTML = usersStr;
}