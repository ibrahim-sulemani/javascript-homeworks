/*
Dizajnot za stranata e na vas. 

- Prvicno na homepage koga ke stigneme treba da ima samo nekoj "welcome" sreen 
i kopcinja za register i login. Za korisnikot pri register zapisuvate: ime, prezime, telefonski broj,
 email i password i za sekoe pole napravete soodvetna validacija. 

- Od kako ke se logira uspesno korisnikot gi prikazuvame site koli sto se vo nizata. 
Za sekoja kola kreirajte karticka koja sto ke gi ima informaciite: make, model, year, price,
features, image(ovoj parametar e so example.com vo nizata). 

- Dodadete funkcionalnosti za prebaruvanje na modelite: 
- Sortirajte po cena (asc, dsc) 
- Search bar po model ili po proizvoditel
- Filter po feature
*/
const cars = [
  {
    id: 1,
    make: "Tesla",
    model: "Model S",
    year: 2022,
    color: "Red",
    price: "$89,990",
    features: ["Electric", "Autopilot", "Ludicrous Mode"],
    image: "https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg",
  },
  {
    id: 2,
    make: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Blue",
    price: "$55,300",
    features: ["V8 Engine", "Rear-Wheel Drive", "Convertible"],
    image: "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/3e7dbe41afea4891a15e05034e6360e1.jpg",
  },
  {
    id: 3,
    make: "Chevrolet",
    model: "Corvette",
    year: 2023,
    color: "Yellow",
    price: "$60,000",
    features: [
      "Mid-Engine",
      "8-Speed Dual-Clutch",
      "Performance Traction Management",
    ],
    image: "https://media.ed.edmunds-media.com/chevrolet/corvette/2024/oem/2024_chevrolet_corvette_coupe_e-ray_fq_oem_1_1280.jpg",
  },
  {
    id: 4,
    make: "BMW",
    model: "M3",
    year: 2022,
    color: "Black",
    price: "$70,895",
    features: [
      "Twin-Turbo Inline-6",
      "All-Wheel Drive",
      "M Sport Differential",
    ],
    image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
  },
  {
    id: 5,
    make: "Audi",
    model: "R8",
    year: 2022,
    color: "White",
    price: "$142,700",
    features: [
      "V10 Engine",
      "Quattro All-Wheel Drive",
      "Carbon Fiber Exterior",
    ],
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*",
  },
  {
    id: 6,
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2021,
    color: "Silver",
    price: "$110,850",
    features: ["Luxury Interior", "V8 Engine", "4MATIC All-Wheel Drive"],
    image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-mercedes-benz-s-class-2022-road-test-review-tracking-front.jpg",
  },
  {
    id: 7,
    make: "Porsche",
    model: "911",
    year: 2022,
    color: "Green",
    price: "$99,200",
    features: ["Twin-Turbo Flat-6", "Rear-Wheel Drive", "Sport Chrono Package"],
    image: "https://cdn.motor1.com/images/mgl/Oo3xke/s3/mansory-p9lm-evo-900-porsche-911-turbo-s.jpg",
  },
  {
    id: 8,
    make: "Lamborghini",
    model: "Huracan",
    year: 2022,
    color: "Orange",
    price: "$261,274",
    features: ["V10 Engine", "All-Wheel Drive", "Lamborghini Dynamic Steering"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_hUNJ5FuVoGDnRf2oMlWbv7exBlaysduTA&s",
  },
  {
    id: 9,
    make: "Ferrari",
    model: "488 GTB",
    year: 2021,
    color: "Red",
    price: "$262,647",
    features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Magnetic Suspension"],
    image: "https://o.aolcdn.com/images/dims3/GLOB/crop/1920x1081+0+178/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/2b3a8ca836babfeedb4d2d1a2673166e/201637145/01-ferrari-488-gtb-geneva.jpg",
  },
  {
    id: 10,
    make: "Jaguar",
    model: "F-Type",
    year: 2022,
    color: "Blue",
    price: "$73,400",
    features: ["Supercharged V8", "All-Wheel Drive", "Convertible"],
    image: "https://hips.hearstapps.com/hmg-prod/images/jagftype20mychequeredflagimage291018040-1563396192.jpeg?crop=0.725xw:0.817xh;0.137xw,0.130xh&resize=768:*",
  },
  {
    id: 11,
    make: "Aston Martin",
    model: "DB11",
    year: 2022,
    color: "Silver",
    price: "$205,600",
    features: ["Twin-Turbo V12", "Rear-Wheel Drive", "Luxury Interior"],
    image: "https://images.pistonheads.com/nimg/44059/dc11d.jpg",
  },
  {
    id: 12,
    make: "McLaren",
    model: "720S",
    year: 2022,
    color: "Purple",
    price: "$299,000",
    features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Active Aerodynamics"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAWNdDGzQS-QN7MiELUqUbrinDzNfCTOODA&s",
  },
  {
    id: 13,
    make: "Bentley",
    model: "Continental GT",
    year: 2022,
    color: "Gold",
    price: "$231,800",
    features: ["W12 Engine", "All-Wheel Drive", "Luxury Interior"],
    image: "https://hips.hearstapps.com/hmg-prod/images/2025-bentley-continental-gtc-107-6679d250e62a7.jpg?crop=0.647xw:0.727xh;0.221xw,0.182xh&resize=768:*",
  },
  {
    id: 14,
    make: "Rolls-Royce",
    model: "Phantom",
    year: 2022,
    color: "Black",
    price: "$450,000",
    features: ["V12 Engine", "Luxury Interior", "Rear-Wheel Drive"],
    image: "https://hips.hearstapps.com/hmg-prod/images/2024-rolls-royce-phantom-102-64bad70ba7661.jpg?crop=0.498xw:0.446xh;0.300xw,0.332xh&resize=640:*",
  },
  {
    id: 15,
    make: "Mazda",
    model: "MX-5 Miata",
    year: 2022,
    color: "Red",
    price: "$26,830",
    features: ["SkyActiv-G Engine", "Rear-Wheel Drive", "Convertible"],
    image: "https://imageio.forbes.com/specials-images/imageserve/65453b222c9a987c0834029a/Miata-is-available-in-traditional-sports-car-colors-/960x0.jpg?format=jpg&width=960",
  },
  {
    id: 16,
    make: "Subaru",
    model: "WRX STI",
    year: 2021,
    color: "Blue",
    price: "$37,245",
    features: [
      "Turbocharged Boxer Engine",
      "All-Wheel Drive",
      "Sport-Tuned Suspension",
    ],
    image: "https://redriven.com/wp-content/uploads/2022/11/Subaru-WRX-STI-1-1024x683.jpg",
  },
  {
    id: 17,
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2021,
    color: "White",
    price: "$28,695",
    features: [
      "Turbocharged Inline-4",
      "Front-Wheel Drive",
      "Sport Suspension",
    ],
    image: "https://vehicle-images.dealerinspire.com/212d-210010229/WVWHA7CD6RW148560/31e8bfd189478ee8a0d5179fa7f11a76.jpg",
  },
  {
    id: 18,
    make: "Nissan",
    model: "GT-R",
    year: 2021,
    color: "Silver",
    price: "$113,540",
    features: ["Twin-Turbo V6", "All-Wheel Drive", "Launch Control"],
    image: "https://www.topgear.com/sites/default/files/images/news-article/2023/01/433359fa83ecb52496df67cb8323313d/NISSAN%20GT-R%20NISMO%20MY2024_19.jpg",
  },
  {
    id: 19,
    make: "Toyota",
    model: "Supra",
    year: 2022,
    color: "Yellow",
    price: "$43,540",
    features: [
      "Turbocharged Inline-6",
      "Rear-Wheel Drive",
      "Adaptive Suspension",
    ],
    image: "https://www.ronbrooks.co.uk/wp-content/uploads/2023/06/toyota-supra-mk4.png",
  },
  {
    id: 20,
    make: "Honda",
    model: "Civic Type R",
    year: 2021,
    color: "Red",
    price: "$37,895",
    features: [
      "Turbocharged Inline-4",
      "Front-Wheel Drive",
      "Sport Suspension",
    ],
    image: "https://www.motortrend.com/uploads/sites/5/2020/05/2020-Honda-Civic-Type-R-front-three-quarter-hero.jpg",
  },
];

let users = [];

function registerForm(event) {
  event.preventDefault();

  // Input fields values
  let firstName = document.getElementById("exampleName").value;
  let lastName = document.getElementById("exampleLastName").value;
  let phoneNumber = document.getElementById("examplePhoneNumber").value;
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;

  // Error message paragraphs
  const errorName = document.getElementById("errorName");
  const errorLastName = document.getElementById("errorLastName");
  const errorPhoneNumber = document.getElementById("errorPhoneNumber");
  const errorEmail = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPassword");

  let allInputSuccess = true;

  if (firstName.length < 3) {
    errorName.innerText = "Name too short!";
    errorName.style.border = "1px solid red";
    allInputSuccess = false;
  } else {
    errorName.innerText = "";
    errorName.style.border = "0";
  }

  if (lastName.length < 3) {
    errorLastName.innerText = "Last name too short!";
    errorLastName.style.border = "1px solid red";
    allInputSuccess = false;
  } else {
    errorLastName.innerText = "";
    errorLastName.style.border = "0";
  }

  if (
    !phoneNumber.startsWith("+3897") ||
    phoneNumber.length != 12 ||
    /\D/.test(phoneNumber.slice(5))
  ) {
    errorPhoneNumber.innerText = "Invalid phone number";
    errorPhoneNumber.style.border = "1px solid red";
    allInputSuccess = false;
  } else {
    errorPhoneNumber.innerText = "";
    errorPhoneNumber.style.border = "0";
  }

  // Pravime pomosni stringovi za validacija na email (nasa costum validacija);
  let indexOfAt = email.indexOf("@");
  let beforeAt = email.slice(0, indexOfAt);
  let afterAt = email.slice(indexOfAt + 1);



  if (!email.includes("@") || !afterAt.includes(".") || beforeAt.length < 3) {
    errorEmail.innerText = "Invalid email!";
    errorEmail.style.border = "1px solid red";
    allInputSuccess = false;
  } else {
    errorEmail.innerText = "";
    errorEmail.style.border = "0";
  }

  if (password.length < 8) {
    errorPassword.innerText = "Invalid password";
    errorPassword.style.border = "1px solid red";
    allInputSuccess = false;
  } else {
    errorPassword.innerText = "";
    errorPassword.style.border = "0";
  }

  if (allInputSuccess) {
    document.getElementById("successMessage").innerText =
      "Thank you for your registration!";
    
    let userInfo = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };

    users.push(userInfo);
   
    document.getElementById("exampleName").value = "";
    document.getElementById("exampleLastName").value = "";
    document.getElementById("examplePhoneNumber").value = "";
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputPassword1").value = "";

    
  }
  console.log(users);
}

function loginForm(event) {
  event.preventDefault();

  const loginEmail = document.getElementById("inputEmailLogin").value;
  const loginPassword = document.getElementById("inputPasswordLogin").value;
  const loginMessage = document.getElementById("successLogin");

  const loginUser = users.find(
    (user) => user.email === loginEmail && user.password === loginPassword
  );

  if (loginUser) {
    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".modal-backdrop").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
    document.getElementById(
      "welcomeMessage"
    ).innerText = `Welcome ${loginUser.firstName} `;
    document.getElementById("myCars").style.display = "flex";
    document.getElementById("controls").classList.remove("d-none");
    displayCars(cars);
  } else {
    loginMessage.innerText = `Wrong email or password!`;
    loginMessage.style.color = "red";
  }


}



function displayCars(carsParam) {
  let myCars = document.getElementById("myCars");

  myCars.innerHTML="";

  carsParam.forEach((car) => {
    myCars.innerHTML += `
    <div class="col-md-3">
        <div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="car image">
        <div class="card-body">
            <h5 class="card-title">${car.make} ${car.model} - ${car.year}</h5>
            <p class="card-text">${car.price}</p>
            <p>${car.features}</p>
        </div>
        </div>
    </div>
    `;
  });
}

function sortByPrice() {
  document.getElementById("featureCars").value = "";
  document.getElementById("searchInput").value = "";

  const sort = document.getElementById("sort").value;

  if (sort == "asc") {
    cars.sort((a, b) => {
      let aPrice = parseInt(a.price.slice(1).replace(",", ""));
      let bPrice = parseInt(b.price.slice(1).replace(",", ""));

      return aPrice - bPrice;
    });
  } else {
    cars.sort((a, b) => {
      let aPrice = parseInt(a.price.slice(1).replace(",", ""));
      let bPrice = parseInt(b.price.slice(1).replace(",", ""));

      return bPrice - aPrice;
    });
  }

  displayCars(cars);
}

function searchInput() {
  document.getElementById("sort").value="-";
  document.getElementById("featureCars").value = "";

  const carInput = document.getElementById("searchInput").value;
  
  let carArray = cars.filter(car => car.make.toLowerCase().includes(carInput.toLowerCase()) 
  || car.model.toLowerCase().includes(carInput.toLowerCase()));

  displayCars(carArray);
}

function featureFilter(){
  document.getElementById("sort").value="-";
  document.getElementById("searchInput").value="";

  const featureFilter = document.getElementById("featureCars").value;
  let carArray = cars
    .filter(car => car.features
        .some(feature => feature.toLowerCase().includes(featureFilter.toLowerCase()))
  ); 

  displayCars(carArray);
}
