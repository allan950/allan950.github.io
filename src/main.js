/* Form Validation */
var form = document.getElementsByClassName("form")[0];

var firstName = formSelector("input[name='first_name']");
var lastName = formSelector("input[name='last_name']");
var message = formSelector("textarea[name='message']");
var email = formSelector("input[name='email']");

var textInput = document.getElementById("contact-form").querySelectorAll("input[type='text']");
var emailInput = document.getElementById("contact-form").querySelectorAll("input[type='email']");
var textArea = document.getElementById("contact-form").querySelectorAll("textarea");

var error = document.getElementById('error-message');

function formSelector(input) {
    return document.getElementById("contact-form").querySelector(input);
}

document.getElementById("form-submit-btn").addEventListener("click", function (event) {
    event.preventDefault();

    var submitable = false;
    let checkValue = 0;

    const arr = [textInput, emailInput, textArea];
    //console.log(arr)

    for (var i = 0; i < textInput.length; i++) {
        arr[i] = textInput[i];
        arr[textInput.length] = emailInput[0];
        arr[textInput.length + 1] = textArea[0];
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i];
        if (arr[i].value.length > 0) {
            checkValue += 1;
        }
    }


    /* try {
        if (email.value == '') {
            throw 'Email should be entered';
        } else if (message.value == '') {
            throw 'Message text area should be filled up';
        }
    } catch(e) {
        document.getElementById('error-message').innerHTML = e;
    } */

    if (checkValue == arr.length) {
        //alert("valid");
        submitable = true;
        //emailRequest();
    } else {
        //alert("All of the text boxes have to be filled in");
        inputCheck();
        form.classList.add("error");
    }

    //submitable = true;

    if (submitable === true) {
        form.classList.add("successfully-submitted");
        var submitWindow = document.getElementsByClassName("submit-success-window")[0];
        // submitWindow.style.transform = "translateY(0)";
        // submitWindow.style.display = "block";
    }

});


function inputCheck() {

    var emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    error.innerHTML = '';

    if (email.value == '' || message.value == '' || lastName.value == '' || firstName.value == '') {
        error.innerHTML += 'All text boxes should be filled in <br/>';
    }

    console.log(emailExp.test(email.value));

    if (emailExp.test(email.value) === false) {
        error.innerHTML += 'Email format is not correct <br/>';
    }
}

function emailRequest() {
    let formData = {
        fname: firstName.value,
        lname: lastName.value,
        email: email.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/formsubmission', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    console.log(xhr);
    setTimeout(xhr.onload = () => {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email sent!');
            console.log('great');
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            message.value = "";
        }
        else if (xhr.responseText == '') {
            console.log('Email has not been sent!');
        }
        else {
            alert('Something went wrong');
        }
    }, 3000);

    xhr.send(JSON.stringify(formData));
}