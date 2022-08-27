// Pendiente aplicar la estructura de After class 9/8

/* Billing Information Form */

const userName    = document.getElementById("billName");
const userEmail   = document.getElementById("billEmail");
const userAddress = document.getElementById("billAddress");
const userZip     = document.getElementById("billZip");
const userCity    = document.getElementById("billCity");
const userCountry = document.getElementById("billCountry");


// Save info in local storage
const btnSaveBillInfo = document.getElementById("save-billing-info");

btnSaveBillInfo.addEventListener("click", saveInfo);

function saveInfo(e){
    e.preventDefault();
    const userInfo = [userName.value, userEmail.value, userAddress.value, userZip.value, userCity.value, userCountry.value];
    const userInfoJSON = localStorage.setItem('infoUser', userInfo); // Acá no está en JSON no? Solo lo guarde en local?

    console.log(userInfo)
}

// Show info in DOM

const userDetails = document.getElementById("detail-billing-info");

btnSaveBillInfo.addEventListener("click", showUserInfo)

function showUserInfo(e){
    e.preventDefault();
    userDetails.innerHTML = "<h4>Your billing information is: </h4><br/><ul><li>Name: " +userName.value+ "<li>E-mail: " +userEmail.value+ "</li><li>Address: " +userAddress.value+ "</li><li>ZIP Code: " +userZip.value+ "</li><li>City: " +userCity.value+ "</li><li>Country: " +userCountry.value+ "</li></ul>";
}

// Delete info local storage & DOM

const btnDeleteBillInfo = document.getElementById("delete-billing-info");

btnDeleteBillInfo.addEventListener("click", deleteInfo)

function deleteInfo(e){ 
    userDetails.innerHTML = "";
    localStorage.clear()
    //location.reload();
}