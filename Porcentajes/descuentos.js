function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;

    return precioConDescuento;
}

const coupons = [
    {
        name: "Amarillo",
        discount: 15
    },
    {
        name: "Azul",
        discount: 30
    },
    {
        name: "Violeta",
        discount: 25
    }
]



function calcularDescuentoInputs(){
    const inputPrice = document.getElementById("inputPrice");
    const inputCoupon = document.getElementById("inputCoupon");

    const priceValue = inputPrice.value;
    const couponValue = inputCoupon.value;

    const isUserCouponValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isUserCouponValid);
    
    if (!userCoupon) {
        alert(`El cupon ${couponValue} no es valido.`)
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;    
    }

}
