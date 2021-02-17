

var doc = new jsPDF();

function saveDiv(a,b) {
doc.fromHTML(document.getElementById(a).innerHTML+document.getElementById(b).innerHTML,10,10);
doc.save('div.pdf');
}


function calculate(){
        
    var cmf = parseInt($('#cmf').val()); 
    var mtrrf = parseInt($('#mtrrf').val()); 
    var cmi = parseInt($('#cmi').val()); 
    var mtrri = parseInt($('#mtrri').val()); 
    var epr = parseInt($('#epr').val()); 
    var epl = parseInt($('#epl').val()); 
    var mcb = parseInt($('#mcb').val()); 
    var tmrc = parseInt($('#tmrc').val()); 
    var tmc = parseInt($('#tmc').val()); 
    var nemc = parseInt($('#nemc').val()); 

    

    
}
