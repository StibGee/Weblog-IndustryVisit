const brands = ['honda', 'kawasaki', 'suzuki', 'vespa', 'yamaha'];

function hideBrands(){
    for (let i = 0; i < brands.length; i++) {
        let motor = document.getElementById(brands[i])
        motor.style.display = "none";
    }
}

function showBrands(){
    for (let i = 0; i < brands.length; i++) {
        let motor = document.getElementById(brands[i])
        motor.style.display = "flex";
    }
}

function hondaFilter(){
    hideBrands()
    document.getElementById('honda').style.display = "flex";
}

function kawaFilter(){
    hideBrands()
    document.getElementById('kawasaki').style.display = "flex";
    document.getElementById('honda').style.width = "100%";
}

function suzuFilter(){
    hideBrands()
    document.getElementById('suzuki').style.display = "flex";
    document.getElementById('honda').style.width = "100%";
}

function vespaFilter(){
    hideBrands()
    document.getElementById('vespa').style.display = "flex";
    document.getElementById('honda').style.width = "100%";
}

function yamaFilter(){
    hideBrands()
    document.getElementById('honda').style.width = "100%";
    document.getElementById('yamaha').style.display = "flex";
}