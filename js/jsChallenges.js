document.querySelector("#subscribe").addEventListener("click", function() {
    if (this.checked){
        document.querySelector("#emailDiv").style.display = "block";

    }
    else {
        document.querySelector("#emailDiv").style.display = "none";
    }
  });

document.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current time is " + currentTime);
});

document.addEventListener('click', function() {
    const sameAddressCheckbox = document.getElementById('sameAddress');
    const billingAddressTextarea = document.getElementById('bill');
    const homeAddressTextarea = document.getElementById('home');

    sameAddressCheckbox.addEventListener('change', function() {
        if (this.checked) {
            homeAddressTextarea.value = billingAddressTextarea.value;
            homeAddressTextarea.readOnly = true;
        } else {
            homeAddressTextarea.value = '';
            homeAddressTextarea.readOnly = false;
        }
    });
});


function challenge3() {
    const standingGroup = document.getElementsByName('standing');
    const gradDateGroup = document.getElementsByName('gradDate');

    function isAnyRadioButtonSelected(radioGroup) {
        for (let radio of radioGroup) {
            if (radio.checked) {
                return true;
            }
        }
        return false;
    }

    if (!isAnyRadioButtonSelected(standingGroup) || !isAnyRadioButtonSelected(gradDateGroup)) {
        alert('Please select an option from both groups before moving on.');
        return false;
    }

    return true;
}
