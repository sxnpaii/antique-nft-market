// toggle function in small formats
function toggle() {
    let icon = document.querySelector("img");
    let menu = document.querySelector(`header`);
    let res = () => {
         menu?.classList.toggle("active")
    }

    icon?.addEventListener("click", res)

};

toggle()