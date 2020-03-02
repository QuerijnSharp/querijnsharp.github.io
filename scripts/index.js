const Version = "0.1.3";
const CurrentRaidBoss = "Armored Mewtwo";

function Init() {
    if (!localStorage.getItem("currentVersion")) {
        localStorage.setItem("currentVersion", Version);
    } else if (localStorage.getItem("currentVersion") != Version) {
        localStorage.removeItem("currentRaidBoss");
        localStorage.setItem("currentVersion", Version);
    }

    if (!localStorage.getItem("currentRaidBoss")) {
        localStorage.setItem("currentRaidBoss", CurrentRaidBoss);
        document.getElementById("currentRaidboss").value = localStorage.getItem("currentRaidBoss");
    } else {
        document.getElementById("currentRaidboss").value = localStorage.getItem("currentRaidBoss");
    }

    var d = new Date(),
        h = d.getHours(),
        m = d.getMinutes();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    document.getElementById("hatchTime").value = `${h}:${m}`;;

    for (var i of RaidLocations) {
        var option = document.createElement('option');
        option.value = i.name;
        document.getElementById('locations').appendChild(option);
    }
}

function setRaidboss() {
    localStorage.setItem("currentRaidBoss", document.getElementById("currentRaidboss").value);
}

function share() {
    if (document.getElementById("result").value != "")
        location.href = "whatsapp://send?text=" + encodeURIComponent(document.getElementById("result").value);
}

function reset() {
    document.getElementById("location").value = "";
}

function copy() {
    var el = document.getElementById("result");
    // resolve the element
    el = (typeof el === 'string') ? document.querySelector(el) : el;

    // handle iOS as a special case
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {

        // save current contentEditable/readOnly status
        var editable = el.contentEditable;
        var readOnly = el.readOnly;

        // convert to editable with readonly to stop iOS keyboard opening
        el.contentEditable = true;
        el.readOnly = true;

        // create a selectable range
        var range = document.createRange();
        range.selectNodeContents(el);

        // select the range
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        el.setSelectionRange(0, 999999);

        // restore contentEditable/readOnly to original state
        el.contentEditable = editable;
        el.readOnly = readOnly;
    } else {
        el.select();
    }

    // execute copy command
    document.execCommand('copy');
}

function CreateMessage() {
    if (document.getElementById("startTime").value == "" || document.getElementById("hatchTime").value == "") {
        return;
    } else if (document.getElementById("location").value == "") {
        alert("No location entered");
        return;
    }
    var hatchTime = document.getElementById("hatchTime").value;
    var hatchDate = new Date(`0`);
    hatchDate.setHours(parseInt(hatchTime.split(":")[0]));
    hatchDate.setMinutes(parseInt(hatchTime.split(":")[1]));

    var msg = Construct(document.getElementById("location").value, hatchDate, parseInt(document.getElementById("startTime").value));
    if (!msg) {
        alert("Invalid location or invalid start time");
        return;
    }
    document.getElementById("result").value = msg
    document.getElementById("result").style.height = document.getElementById("result").scrollHeight + "px";
}

function fixTime(i) {
    var h = i.getHours(),
        m = i.getMinutes();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    return `${h}.${m}`;
}

function Construct(location, raidAvailableTime, addMin) {
    if (RaidLocations.filter(s => s.name == location).length <= 0)
        return false;

    var targetLocation = RaidLocations.find(s => s.name == location);
    var endTime = new Date(raidAvailableTime.getTime() + parseInt(document.getElementById("raidTime").value) * 60000);
    var startTime = new Date(raidAvailableTime.getTime() + addMin * 60000);

    if (startTime > endTime) {
        return false;
    }
    var message = `*${localStorage.getItem("currentRaidBoss")}* _${targetLocation.name}_${targetLocation.exraid == true ? " *EX RAID LOCATIE*" : ""}
*Locatie* ${targetLocation.location}
*Raidboss Available* ${fixTime(raidAvailableTime)} - ${fixTime(endTime)}
*Start* ${fixTime(startTime)}
*Voor Deelname* ${targetLocation.reaction}
*Deelnemers*`;
    return message;
}


window.addEventListener('load', (e) => {
    this.Init();
});