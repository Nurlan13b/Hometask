      
    //    setTimeout(function() {
    //     document.getElementById("loading-text").style.display = "none";
    // }, 5000); 



    const inputElement = document.getElementById("customInput");

    inputElement.addEventListener("keydown", function(event) {
        if (event.key === " ") {
            
            event.preventDefault();
            this.value = this.value.replace(/\s/g, "");
        } else if (event.key === "Backspace") {
            
            const cursorPosition = this.selectionStart;
            this.value = this.value.slice(0, cursorPosition) + " " + this.value.slice(cursorPosition);
            this.selectionStart = cursorPosition + 1;
            this.selectionEnd = cursorPosition + 1;
            event.preventDefault();
        }
    });