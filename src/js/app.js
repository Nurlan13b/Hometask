

// var userConfirmed = confirm("Do you want to change the background color to black?");
// if (userConfirmed) {
//   document.body.style.backgroundColor = "black";
//   var userAge = prompt("Please enter your age:")
//   if (userAge !== null &&!isNaN(userAge))
//   if (userAge > 18) {
//     //alert("You are over 18 years old. You may proceed.");
//   } else {
//     alert("You are under 18 years old. Access denied.");
//   }

// }
// else {
//     document.body.style.backgroundColor = "red";}
    
class User {
  constructor(ad, soyad, password) {
    this.ad = ad;
    this.soyad = soyad;
    this.password = password;
  }

  fullname() {
    return `${this.ad} ${this.soyad}`;
  }

  htmlFullname() {
    const fullname = this.fullname();
    const html_fullname = `<p>${fullname.toUpperCase()}</p>`;
    return html_fullname;
  }
}

const istifadeci = new User("Yashar","Guseynov","password");
const outputDiv = document.getElementById("output");
outputDiv.innerHTML=istifadeci.htmlFullname();


