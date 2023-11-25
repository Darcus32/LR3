function generate() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;
    
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    

    var block = document.getElementById('block');
    var cssCode = document.getElementById('cssCode'); // Додано посилання на textarea

    block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    // Оновити значення textarea з CSS-кодом
    cssCode.value = "border-radius: " + rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px;";

    var trdr = document.getElementById('trdr').value;
    var ttd = document.getElementById('ttd');
    var butom = document.getElementById('butom');
    butom.style.transitionDuration = trdr +"px";
    var cssCodee = document.getElementById('cssCodee'); // Додано посилання на textarea
    ttd.value = trdr;
    cssCodee.value = "transition-duration: " + trdr + "px";
}

// Викликати функцію generate, щоб встановити початкові значення
generate();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    // Встановити початкове значення Transition-duration при виборі вкладки
    if (cityName === 'Transition-duration') {
        generate(); // Викликати функцію generate() для встановлення початкового значення Transition-duration
    }
    }
