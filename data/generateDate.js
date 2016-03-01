/**
 * Created by Admin on 01.03.2016.
 */
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('vialotaions.json', 'utf8'));

obj.forEach(function (item) {
    var vialotaionTime = new Date();
    var days = Math.random()*1000;
    while(days > 90){
        days = Math.random()*1000;
    }
    vialotaionTime.setDate(vialotaionTime.getDate() - days);
    vialotaionTime.setDate(vialotaionTime.getDate() - days);
    item.vialotaionTime = vialotaionTime;
});

fs.writeFile("vialotaions.json", JSON.stringify(obj, null, 3), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});