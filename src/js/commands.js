
// -------------------------
// emulation
// -------------------------

c = clear;
async function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

async function neofetch(args) {


    await clear();

    var versionraw = navigator.userAgent.match(/Chrome\/([0-9]+[\.]*)+/)[0];
    var version = versionraw.split('\/')[1];

    var hostsplit = navigator.userAgent.split('Macintosh; ')[1]
    var host = hostsplit.split(')')[0]
    
    const eself = async () => {
      await chrome.management.getSelf()
        .then(function (result) {
            block_log("Terminal: dollar " + result.version);
        })
        .catch(function (error) {
          return error;
        })
    };

    const ecount = async () => {
        await chrome.management.getAll()
          .then(function (result) {
              block_log("Extensions: " + result.length);
          })
          .catch(function (error) {
            return error;
          })
    }; 

    var meminfo = window.performance.memory
    var memlimit = Math.round(meminfo.jsHeapSizeLimit / 10**6)
    var memused = Math.round(meminfo.usedJSHeapSize / 10**6)

    block_log("<br />");

    block_log("dylan@chrome");
    block_log("------------");
    block_log("Browser: Chrome");
    block_log("Version: " + version);
    block_log("Host: " + host);
    block_log("Uptime: 69 days, 4 hours, 20 mins");
    await eself()
    await ecount()
    // block_log("CPU: Intel i5-8279U (8) @ 2.40GHz");
    // block_log("GPU: Intel Iris Plus Graphics 655");
    // block_log("Memory: " + memused + "MB / " + memlimit + "MB");
    
    block_log("<br />");

}

function echo(args) {
    block_log(args)
}

function time(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}


// -------------------------
// websites
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


// res = restart
// function restart(args) {
//     window.open("chrome://restart");
// }

// set = settings
// function settings(args) {
//     window.open("chrome://settings");
// }

// ext = extensions
// function extensions(args) {
//     window.open("chrome://extensions");
// }

// his = userhistory
// function userhistory(args) {
//     window.open("chrome://history");
// }


