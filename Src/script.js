const inputField = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
inputField.addEventListener("input", function() {
        if (inputField.value.trim() === "") {
            submitBtn.disabled = true;
            submitBtn.classList.remove("bg-primary");
            submitBtn.classList.add("bg-secondary");
            submitBtn.textContent = "Form incomplete";
        } else {
            submitBtn.disabled = false;
            submitBtn.classList.remove("bg-secondary");
            submitBtn.classList.add("bg-primary");
            submitBtn.textContent = "Submit";
        }

    });
    submitBtn.addEventListener("click",function(){
        document.getElementById("Name").textContent = "Hyy"+ " " + inputField.value + " " + "!";
       
    })