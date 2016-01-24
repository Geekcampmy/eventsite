angular.module('geekcampmy2016', []).controller('ScheduleController', function () {
    var scheduler = this;
    
    //Guys, please fill out the proper track 1 schedule here. Note the field names have to be intact,
    //even if there is no value. One curly bracket row is one table row...
    var track1schedule = [
        {timeslot: "8 a.m.", speaker: "", title: "Registration & Networking"},
        {timeslot: "9 a.m.", speaker: "Track 1 Speaker 1", title: "Track 1 Topic 1"},
        {timeslot: "10 a.m.", speaker: "Track 1 Speaker 2", title: "Track 1 Topic 2"},
        {timeslot: "11 a.m.", speaker: "Track 1 Speaker 3", title: "Track 1 Topic 3"},
        {timeslot: "12 p.m.", speaker: "Track 1 Speaker 4", title: "Track 1 Topic 4"},
        {timeslot: "1 p.m.", speaker: "", title: "Lunch break & Networking"},
        {timeslot: "2 p.m.", speaker: "Track 1 Speaker 5", title: "Track 1 Topic 5"},
        {timeslot: "3 p.m.", speaker: "Track 1 Speaker 6", title: "Track 1 Topic 6"},
        {timeslot: "4 p.m.", speaker: "", title: "Tea Break & Networking"},
        {timeslot: "5 p.m.", speaker: "Track 1 Speaker 7", title: "Track 1 Topic 7"},
        {timeslot: "6 p.m.", speaker: "Track 1 Speaker 8", title: "Track 1 Topic 8"}
    ];
    
    scheduler.slots = track1schedule; //Load by default the track 1 schedule.
    
    scheduler.track1 = function () {
        scheduler.slots = track1schedule; //This one in case the user clicks track 1 pill.
    };
    
    scheduler.track2 = function () { //User clicks track 2 pill...
    //Guys, please fill out the proper track 2 schedule here. Note the field names have to be intact,
    //even if there is no value. One curly bracket row equals one table row..
        scheduler.slots = [
            {timeslot: "8 a.m.", speaker: "", title: "Registration & Networking"},
            {timeslot: "9 a.m.", speaker: "Track 2 Speaker 1", title: "Track 2 Topic 1"},
            {timeslot: "10 a.m.", speaker: "Track 2 Speaker 2", title: "Track 2 Topic 2"},
            {timeslot: "11 a.m.", speaker: "Track 2 Speaker 3", title: "Track 2 Topic 3"},
            {timeslot: "12 p.m.", speaker: "Track 2 Speaker 4", title: "Track 2 Topic 4"},
            {timeslot: "1 p.m.", speaker: "", title: "Lunch break & Networking"},
            {timeslot: "2 p.m.", speaker: "Track 2 Speaker 5", title: "Track 2 Topic 5"},
            {timeslot: "3 p.m.", speaker: "Track 2 Speaker 6", title: "Track 2 Topic 6"},
            {timeslot: "4 p.m.", speaker: "", title: "Tea Break & Networking"},
            {timeslot: "5 p.m.", speaker: "Track 2 Speaker 7", title: "Track 2 Topic 7"},
            {timeslot: "6 p.m.", speaker: "Track 2 Speaker 8", title: "Track 2 Topic 8"}
        ];
    };
    
});