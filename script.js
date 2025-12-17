function getFormvalue() {
    //Write your code here
const fname = document.querySelector("input[type='text' , name='fname']").value;
const lname = document.querySelector("input[type='text' ,name='lname']").value;

	const btn = document.querySelector("input[type='submit']").value;

	btn.addEventListener("click",() =>{
		alert(fname+" "+lname);
	});


}
