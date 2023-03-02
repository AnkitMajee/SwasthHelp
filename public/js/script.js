let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
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
  } else if (resultBfinal >= 18.5 && resultBfinal <= 24.99) {
    document.getElementById("resultBMImsg").innerHTML = `You are Normal Weight`;
  } else if (resultBfinal >= 25.0 && resultBfinal <= 29.99) {
    document.getElementById("resultBMImsg").innerHTML = `You are Over Weight`;
  } else if (resultBfinal >= 30.0 && resultBfinal <= 40.0) {
    document.getElementById("resultBMImsg").innerHTML = `You are Obese`;
  } else {
    document.getElementById("resultBMImsg").innerHTML = `You are Extreme Obese`;
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
