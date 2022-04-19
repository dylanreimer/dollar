
// Display time
// t = clock;
// function clock(args) {
//     var today = new Date();
//     block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
// }

// Clear the terminal
c = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

function neofetch(args) {

    block_log("dylan@chrome");
    block_log("------------");
    block_log("OS: Chrome Extension OS");
    block_log("Host: MacBook Pro");
    block_log("Kernel: 7.77.77");
    block_log("Uptime: 69 days, 4 hours, 20 mins");
    block_log("Packages: 191 (chrome extension store)");
    block_log("Shell: csh 5.7.1");
    block_log("Terminal: iChrome2");
    block_log("CPU: Intel i5-8279U (8) @ 2.40GHz");
    block_log("GPU: Intel Iris Plus Graphics 655");
    block_log("Memory: 11024MiB / 16384MiB");

}



// -------------------------
// common
// -------------------------


// "" = google;
function google(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    }
}

r = reddit;
function reddit(args) {
    if (args != "") {
        
        first = args.split(" ")[0];

        
        search = args.replace(first, "").trim()
        search = search.replace(" ", "+")

        console.log(search)

        if (search != "") {
            window.open("http://www.reddit.com/r/" + first + "/search?q=" + search + "&restrict_sr=1&sr_nsfw=");
        } else {
            window.open("http://www.reddit.com/r/" + first);
        }
        
    } else {
        window.open("https://www.reddit.com/");
    }
}

a = amazon;
function amazon(args) {
    console.log(args)
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.amazon.com/s?k=" + search);
    } else {
        window.open("https://www.amazon.com/");
    }
}

sc = soundcloud;
function soundcloud(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://soundcloud.com/search?q=" + search);
    } else {
        window.open("https://soundcloud.com/cellofellooo/sets");
    }
}

gh = github;
function github(args) {
    window.open("https://github.com/dylanreimer?tab=repositories");
}




// -------------------------
// school
// -------------------------

cal = calcentral;
function calcentral(args) {
    window.open("https://calcentral.berkeley.edu/academics");
}

gr = gradescope;
function gradescope(args) {
    window.open("https://www.gradescope.com/");
}




// -------------------------
// chrome
// -------------------------


// function restart(args) {
//     window.open("chrome://restart");
// }


// function settings(args) {
//     window.open("chrome://settings");
// }


// function ext(args) {
//     window.open("chrome://extensions");
// }

// function history(args) {
//     window.open("chrome://history");
// }




