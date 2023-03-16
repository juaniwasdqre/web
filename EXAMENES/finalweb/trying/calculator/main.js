document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#calcular').addEventListener('click', function(){
        let articulo = document.querySelector('#articulo').value;
        let cantidad = document.querySelector('#cantidad').value;
        let precioArticulo, descuento;

        if(articulo == 'promo') {
            precioArticulo = 500;
            descuento = 20;
        } else if(articulo == 'pizza') {
            precioArticulo = 200;
            descuento = 0;
        } else {
            precioArticulo = 300;
            descuento = 0;
        }

        let precio = precioArticulo*cantidad;
        let totalDisc = precio*descuento/100;

        document.querySelector('#precio').innerHTML = '$'+precio;
        document.querySelector('#descuento').innerHTML = '$'+totalDisc;
        document.querySelector('#total').innerHTML = '$'+(precio - totalDisc);
    })
})