const tg = window.Telegram.WebApp;
tg.expand();

const Submitmouse = () => {
    event.preventDefault();
    const typeProduct = "mouse";
    const brand = document.getElementById("mouseBrand").value;
    const mousedpi = document.getElementById("mousedpi").value;
    const mouse_interface = document.getElementById("mouse-interface").value;
    const mouseconnection = document.getElementById("mouseconnection").value;
    const mousesensor = document.getElementById("mousesensor").value;
    const mousebuttons = document.getElementById("mousebuttons").value;
    if (!brand || !mousedpi || !mouse_interface || !mouseconnection || !mousesensor || !mousebuttons) {
        alert("Some fields are null");
        return;
     }
    tg.sendData(JSON.stringify({
        type_product: typeProduct,
        brand: brand,
        mouse_dpi: mousedpi,
        mouse_interface: mouse_interface,
        mouse_connection: mouseconnection,
        mouse_sensor: mousesensor,
        mouse_buttons: mousebuttons
    }));
    tg.close();
}




const buttonSubmitMouse = document.getElementById("submitMouse");
buttonSubmitMouse.addEventListener("click", Submitmouse);
