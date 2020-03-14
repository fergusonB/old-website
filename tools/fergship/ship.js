"use strict";
exports.__esModule = true;
function initialize() {
    var zipdict = {
        '92882': '603',
        '92651': '571'
    };
    var zip = document.getElementById("zipcode").value;
    var weight = document.getElementById("weightlb").value;
    var pipe = document.getElementById("pipeon").checked;
    var heater = document.getElementById("heateron").checked;
    var china = document.getElementById("breakables").checked;
    var mapp = document.getElementById("mappgas").checked;
    var chemicals = document.getElementById("chemicalscements").checked;
    var incomp = document.getElementById("incompleteorder").checked;
    var jobsite = document.getElementById("jobsitebox").checked;
    var today = document.getElementById("todayheater").checked;
    //returns the main branch
    function zip_function() {
        if (zipdict[zip] === undefined) {
            return 'ENTER ZIPCODE';
        }
        else {
            return zipdict[zip];
        }
    }
    //returns what to do based on weight.
    function weight_function() {
        if (Number(weight) <= 55) {
            return 'Ship Direct UPS from the DC; if this is not possible, the ship hub is ' + zip_function();
        }
        else if (Number(weight) <= 140) {
            return 'Ship Direct from the DC UPS if in stock. Too heavy to UPS from branch. Ship hub is ' + zip_function();
        }
        else if (Number(weight) < 1500) {
            return 'Ship from ' + zip_function() + ' or Direct LTL if not in stock.';
        }
        else if (Number(weight) >= 1500)
            return 'Ship hub is ' + zip_function() + ', freight is free from the DC, ship LTL if possible.';
    }
    //returns function for if it is a jobsite.
    function jobsite_function() {
        return ' Since we are shipping to a jobsite, we need to ship from ' + zip_function();
    }
    //returns what to do if there is pipe
    function pipe_function() {
        return ' There is pipe on the order; ship from ' + zip_function() + ', or see if they can pick it up at a branch nearby.';
    }
    //returns what to do if there is a heater
    function heater_function() {
        return 'Ship from ' + zip_function() + '. There is a heater on the order.';
    }
    //returns what to do if there is china
    function china_function() {
        return 'There is breakable china on the order. Ship from ' + zip_function() + '. If only a lav or two-piece toilet, you may ship UPS from the DC.';
    }
    //returns what to do if there is mapp gas
    function mapp_function() {
        return 'There is mapp gas on the order. We can not ship this on OT or UPS. See if customer would like to willcall at a nearby branch. Otherwise - remove the mapp gas and run this again.';
    }
    //returns what to do if there are chemicals
    function chemical_function() {
        return ' There are chemicals like cement on this order which can not be UPSed. Have customer grab from a nearby branch or ship from ' + zip_function();
    }
    //returns what to do if we need to bring items in
    function incomplete_function() {
        return ' Incomplete order; instruction functionality under development.';
    }
    function today_function() {
        return 'Ship from ' + zip_function() + '. The customer needs a water heater today, call the branch to make sure they can do an express run. Add FDG line item and WHX to shipping instructions. If after hours add the afterhours code ($150)';
    }
    function format() {
        if (mapp === true) {
            return mapp_function();
        }
        if (today === true) {
            return today_function();
        }
        if (heater === true) {
            return heater_function();
        }
        if (jobsite === true) {
            if (Number(weight) < 50) {
                return 'The order is very light. See if the customer can pick it up. Otherwise, ' + jobsite_function();
            }
            else {
                return jobsite_function();
            }
        }
        if (pipe === true) {
            return pipe_function();
        }
        if (chemicals === true) {
            return chemical_function();
        }
        if (china === true) {
            return china_function();
        }
        else {
            return weight_function();
        }
    }
    document.getElementById("myspan").textContent = format();
}

