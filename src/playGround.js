const offers = document.getElementById('Offers');
const chkboxs = offers.getElementsByTagName('input');
for (var i = 0; i < chkboxs.length; i++) {
    chkboxs[i].addEventListener('click', Get_Offer, false);
}
function Get_Offer(){
    let myarr = [];
    let price =0;
    for(var i=0;i<chkboxs.length;i++){
        if(chkboxs[i].checked == true){
            myarr.push(chkboxs[i].id);
            price += parseInt(chkboxs[i].value);
        }
    }
    document.getElementById('total_price').innerText = price;
    document.getElementById('total').innerText = myarr
}

