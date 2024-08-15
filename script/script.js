const input = document.querySelectorAll("input");
for (let index = 0; index < input.length; index++) {
    const element = input[index];


    element.addEventListener("blur", function updateValue(e) {
        if (e.target.value) {



        } else {
            let Fspan = document.createElement("span");
            Fspan.textContent = "this field is required";
            e.currentTarget.parentNode.append(Fspan)

        }
    });
}
