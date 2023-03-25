

// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');
//
// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }
//
// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

const calculateBMI = () => {
  const wei = parseInt(document.getElementById("wei").value);
  const hei = parseInt(document.getElementById("hei").value);

  const bmi = (w, h) => {
    let hMet = h/100;
    return w / (hMet**2);
  };
  let resultB = bmi(wei, hei);
  let resultBfinal = resultB.toFixed(2);
  document.getElementById("resultBMI").innerHTML = `Your BMI= ${resultBfinal}`;
  if (resultBfinal < 18.5) {
    document.getElementById("resultBMImsg").innerHTML = `You are Underweight`;

    // blog card
    var blogCard = document.getElementById("blog-card1");
    if (blogCard.style.display === "none") {
      blogCard.style.display = "block";
    } else {
      blogCard.style.display = "none";
    }
    // blog card
  } else if (resultBfinal >= 18.5 && resultBfinal <= 24.99) {
    document.getElementById("resultBMImsg").innerHTML = `You are Normal Weight`;

  // blog card
  var blogCard = document.getElementById("blog-card2");
  if (blogCard.style.display === "none") {
    blogCard.style.display = "block";
  } else {
    blogCard.style.display = "none";
  }
  // blog card

  } else if (resultBfinal >= 25.0 && resultBfinal <= 29.99) {
    document.getElementById("resultBMImsg").innerHTML = `You are Over Weight`;

    // blog card
    var blogCard = document.getElementById("blog-card3");
    if (blogCard.style.display === "none") {
      blogCard.style.display = "block";
    } else {
      blogCard.style.display = "none";
    }
    // blog card
  } else if (resultBfinal >= 30.0 && resultBfinal <= 40.0) {
    document.getElementById("resultBMImsg").innerHTML = `You are Obese`;

    // blog card
    var blogCard = document.getElementById("blog-card4");
    if (blogCard.style.display === "none") {
      blogCard.style.display = "block";
    } else {
      blogCard.style.display = "none";
    }
    // blog card
  } else {
    document.getElementById("resultBMImsg").innerHTML = `You are Extreme Obese`;

    // blog card
    var blogCard = document.getElementById("blog-card5");
    if (blogCard.style.display === "none") {
      blogCard.style.display = "block";
    } else {
      blogCard.style.display = "none";
    }
    // blog card
  }
  document.getElementById("bmiImg").innerHTML = `
    <table border="1" cellpadding="6">
            <thead>
              <tr>
                <th colspan="6">BODY MASS INDEX (BMI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="3">CLASSIFICATION</th>
                <th colspan="3">BMI SCORE (kg/m2)</th>
              </tr>
              <tr>
                <td colspan="3">Underweight</td>
                <td colspan="3">< 18.5</td>
              </tr>
              <tr>
                <td colspan="3">Normal</td>
                <td colspan="3">18.5 - 24.9</td>
              </tr>
              <tr>
                <td colspan="3">Overweight</td>
                <td colspan="3">25.0 - 29.0</td>
              </tr>
              <tr>
                <td colspan="3">Obese</td>
                <td colspan="3">30.0 - 40.0</td>
              </tr>
              <tr>
                <td colspan="3">Extreme Obese</td>
                <td colspan="3">> 40.0</td>
              </tr>
            </tbody>
          </table>
    `;
};
const fun3 =()=>{
   document.getElementsByName('wei')[0].value = '';
   document.getElementsByName('hei')[0].value = '';
};

// BMR
function calculateBMR() {
  var gender = document.getElementById("gender").value;
  var age = parseInt(document.getElementById("age").value);
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);

  var bmr;
  if (gender === "male") {
    bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else {
    bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }

  document.getElementById("result").innerHTML = bmr.toFixed(2)+" Calories/day";
}
const fun4 =()=>{
   document.getElementsByName('gender')[0].value = '';
   document.getElementsByName('age')[0].value = '';
   document.getElementsByName('height')[0].value = '';
   document.getElementsByName('weight')[0].value = '';
   document.getElementsByName('bmr')[0].value = '';
};
