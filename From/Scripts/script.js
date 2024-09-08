const tg = window.Telegram.WebApp;
tg.expand();
const formMouse = document.getElementById("mouseForm");
const buttonSubmitMouse = document.getElementById("submitMouse");

const checkFields = () => {
    const brand = document.getElementById("mouseBrand").value;
    const mousedpi = document.getElementById("mousedpi").value;
    const mouse_interface = document.getElementById("mouse-interface").value;
    const mouseconnection = document.getElementById("mouseconnection").value;
    const mousesensor = document.getElementById("mousesensor").value;
    const mousebuttons = document.getElementById("mousebuttons").value;
    const mousePrice = document.getElementById("priceMouse").value;

 if (brand && mousedpi && mouse_interface && mouseconnection && mousesensor && mousebuttons && mousePrice) {
        buttonSubmitMouse.disabled = false; 
    } else {
        buttonSubmitMouse.disabled = true; 
}
         
 };
const Submitmouse = () => {
    const typeProduct = "mouse";
    const brand = document.getElementById("mouseBrand").value;
    const mousedpi = document.getElementById("mousedpi").value;
    const mouse_interface = document.getElementById("mouse-interface").value;
    const mouseconnection = document.getElementById("mouseconnection").value;
    const mousesensor = document.getElementById("mousesensor").value;
    const mousebuttons = document.getElementById("mousebuttons").value;
    const mousePrice = document.getElementById("priceMouse").value;
    tg.sendData(JSON.stringify({
        type_product: typeProduct,
        brand: brand,
        mouse_dpi: mousedpi,
        mouse_interface: mouse_interface,
        mouse_connection: mouseconnection,
        mouse_sensor: mousesensor,
        mouse_buttons: mousebuttons,
        mouse_price: mousePrice
    }));
    tg.close();
}ж


 formMouse.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('input', checkFields);
        element.addEventListener('change', checkFields);
    });

buttonSubmitMouse.addEventListener("click", Submitmouse);
