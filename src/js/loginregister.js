const form = document.getElementById('form');
const Surname = document.getElementById('Surname');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');

form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
});

function checkInputs(){
    const SurnameValue = Surname.value.trim();
    const NameValue = Name.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();

    if(SurnameValue === ''){
            setErrorFor(Surname, 'Surname cannot be blank');
    }else {
        setSuccessFor(Surname);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'control success';
}

if(EmailValue === '') {
    setErrorFor(Email, 'Email cannot be blank');
} else if (!isEmail(EmailValue)) {
    setErrorFor(Email, 'Not a valid email');
} else {
    setSuccessFor(Email);
}

if(PasswordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
} else {
    setSuccessFor(password);
}

if(NameValue === '') {
    setErrorFor(Name, 'Name cannot be blank');
}else{
    setSuccessFor(Name);
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'control success';
}

function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}








