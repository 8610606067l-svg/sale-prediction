function prediction(){
    let previoussale=Number(document.getElementById("previous sale").value)
    let orders=Number(document.getElementById("orders").value)
    let customer=Number(document.getElementById("customers").value)
    let averageorder=Number(document.getElementById("averageorder").value)
    if(
        previoussale<=0 ||
        orders<=0 ||
        customer<=0||
        averageorders<=0
    ){
        alert("plese enter valid business value,")
        return;
    }
    let growfactor=1.10;
    let predictedsale=previoussale*growfactor;
    let growth= ((predictedsale-previoussale)/previoussale)*100
    let status;
    if(growth>0){
        status="Expected Growth";
    }
   else if (growth < 0) {
    interpretationtext = "Sales are decreased";
}
    else{
        status="stable";
    }
    let interpretationtext;
    if (growth>=10){
        interpretationtext="sale are expeted to increase significantly";
    }
    else if (growth>0){
    interpretationtext= "sale are expected to increase next month based on the courrent business inputs,";}
    else if (growth>0) {
        interpretationtext="sales are decreased";
    }
    else{
        interpretationtext="sale are expected to remain stable";
    }
    document.getElementById("predictionsale").textContent = "₹" + predictedsale.toLocaleString("en-IN");
document.getElementById("growth").textContent = growth.toFixed(2) + "%";
document.getElementById("status").textContent = status;

document.getElementById("interpretationText").textContent = interpretationtext;}