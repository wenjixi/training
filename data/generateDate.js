/**
 * Created by Admin on 01.03.2016.
 */
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('vialotaions.json', 'utf8'));

obj.forEach(function (item) {
    var vialotaionTime = new Date();
    var threeMonthsInMsec = 7889238000;
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    vialotaionTime.setTime(vialotaionTime.getTime() - getRandomArbitrary(0,threeMonthsInMsec));
    item.vialotaionTime = vialotaionTime;
});

fs.writeFile("vialotaions.json", JSON.stringify(obj, null, 3), function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});