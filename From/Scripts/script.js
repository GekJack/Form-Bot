const tg = window.Telegram.WebApp;
tg.expand();
const formMouse = document.getElementById("mouseForm");
const buttonSubmitMouse = document.getElementById("submitMouse");
const buttonSubmitSystem = document.getElementById("submitSystem");

const SubmitSystem = () =>{
    const type = "system_unit"
    const brand = document.getElementById("brand").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const in_stock = document.getElementById("in_stock").value;
    const description = document.getElementById("description").value;
    const CPU = document.getElementById("CPU").value;
    const cooler = document.getElementById("cooler").value;
    const motherboard = document.getElementById("motherboard").value;
    const RAM = document.getElementById("RAM").value;
    const GPU = document.getElementById("GPU").value;
    const SSD = document.getElementById("SSD").value;
    const HDD = document.getElementById("HDD").value;
    const Power_supply_unit = document.getElementById("Power_supply_unit").value;
    const hull = document.getElementById("hull").value;
    // Отправка данных в Telegram
    tg.sendData(JSON.stringify({ type_product: type, brand: brand,Name: name,price:price,in_stock:in_stock, description:description, CPU:CPU, cooler:cooler ,motherboard:motherboard,RAM:RAM, GPU:GPU, SDD:SSD, HDD:HDD, Power_supply_unit:Power_supply_unit,hull:hull }));
    tg.close();
}

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
}

buttonSubmitMouse.addEventListener("click", Submitmouse);
buttonSubmitSystem.addEventListener("click", SubmitSystem);
