const password = document.querySelector('#password')
const confirm = document.querySelector('#password2')
const rules = document.querySelectorAll('.pass-rule');
const changePassBtn = document.querySelector('#moveBtn')
console.log(rules.length);

function handleTypePass(){
   if(password.value.length < 6) rules[0].style.color = 'red'
    else rules[0].style.color = 'green'
  
}
function handleConfirmPass(){
	if(password.value == confirm.value){
		changePassBtn.disabled = false;
		rules[3].style.color = 'green';

	}
	else{
		changePassBtn.disabled = true;
		rules[3].style.color = 'black';
	}
}
function handleValid(){
	let mistakes = [false,false,false,false];
	const numbericRegex = new RegExp("^(?=.*[0-9])");
	const specialSymbolRegex = new RegExp("^(?=.*[!@#\$%\^&\*])");
	changePassBtn.disabled = false;
	// const fullvalidRegex = new RegExp("^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*{6,})");
	if(password.value.length >= 6 ){
		rules[0].style.color = 'green'
		
	}else{
		rules[0].style.color = 'black';
		mistakes[0] = true;
	}

	if(numbericRegex.exec(password.value) != null){
		rules[1].style.color = 'green'
		
	}else{
		rules[1].style.color = 'black';
		mistakes[1] = true
	}

	if(specialSymbolRegex.exec(password.value) != null){
		rules[2].style.color = 'green'
		
	}else{
		rules[2].style.color = 'black';
		mistakes[2] = true;
		
	}
	
	if(password.value == confirm.value){
		rules[3].style.color = 'green';
	}
	else{
		rules[3].style.color = 'black';
		mistakes[3] = true;
	}

	for(let i = 0; i < 4; i++){
		if(mistakes[i] == true) return changePassBtn.disabled = true;
	}
	// console.log("false")
	
}