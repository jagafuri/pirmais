function colculateLinolium(){
    let roomwidth = parseFloat(document.getElementById("roomWidth").value);
    let roomLeght = parseFloat(document.getElementById("roomLength").value);
    let linoiumwidht = parseFloat(document.getElementById("linoliumWidth").value);
    let linoliumPrice = parseFloat(document.getElementById("linoliumPrice").value);



    let stripsNededCross = Math.ceil(roomwidth/linoiumwidht);
    let linoliumLeghtCross = stripsNededCross * roomLeght;
    let linoliumAreaCross = linoliumLeghtCross * linoiumwidht;
    let costCross = linoliumAreaCross * linoliumPrice
    let wasteCross = inoliumAreaCrss - (roomwidth*roomLeght);
    let wasteCoastCross = wasteCross * linoliumPrice;



    document.getElementById("lengthCross").value = linoliumLeghtCross.toFixed(2) + " m";
    document.getElementById("costCross").value = costCross.toFixed(2) + "  EUR";
    document.getElementById("wasteCross").value = wasteCross.toFixed(2) + "  m2";
    document.getElementById("wasteCostCross").value = wasteCostCross.toFixed(2) + "  EUR";


}