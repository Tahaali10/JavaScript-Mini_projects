function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function formValidate() {
    const returnVal = true;
    var name = document.forms['myForm']['name'].value;
    if (name.length < 5) {
        setError("name", "*Name Should Be At Least 5 Character Long");
        returnVal = false;
    }

    var email = document.forms['myForm']['email'].value;
    if (email.length > 25) {
        setError("email", "*Email Can Only Be 25 Characters Long");
        returnVal = false;
    }

    var phone = document.forms['myForm']['phone'].value;
    if (phone.length != 11) {
        setError("phone", "*Length of Phone Must Be Equal To 11");
        returnVal = false;
    }
    var pass = document.forms['myForm']['password'].value;
    if (pass.length < 8) {
        setError("pass", "*Password Should Be At Least 8 Character Long");
        returnVal = false;
    }
    var cpass = document.forms['myForm']['cpassword'].value;
    if (cpass != pass) {
        setError("cpass", "*Password Should Be Same");
        returnVal = false;
    }
    return returnVal;
}
