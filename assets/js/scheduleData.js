var geekcampmy2016 = angular.module('geekcampmy2016', [])

geekcampmy2016.controller('ScheduleController', function () {
    var scheduler = this;
    
    //Guys, please fill out the proper track 1 schedule here. Note the field names have to be intact,
    //even if there is no value. One curly bracket row is one table row...
    var track1schedule = [
        {timeslot: "8 a.m.", speaker: " ", title: "Introductions"},
        {timeslot: "9 a.m.", speaker: " ", title: " "},
        {timeslot: "10 a.m.", speaker: " ", title: " "},
        {timeslot: "11 a.m.", speaker: " ", title: " "},
        {timeslot: "12 p.m.", speaker: " ", title: " "},
        {timeslot: "1 p.m.", speaker: "", title: " "},
        {timeslot: "2 p.m.", speaker: " ", title: " "},
        {timeslot: "3 p.m.", speaker: " ", title: " "},
        {timeslot: "4 p.m.", speaker: " ", title: "Tea Break & Networking"},
        {timeslot: "5 p.m.", speaker: " ", title: " "},
        {timeslot: "6 p.m.", speaker: " ", title: " "}
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
            {timeslot: "9 a.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"},
            {timeslot: "10 a.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"},
            {timeslot: "11 a.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"},
            {timeslot: "12 p.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"},
            {timeslot: "1 p.m.", speaker: "", title: "Lunch break & Networking"},
            {timeslot: "2 p.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"},
            {timeslot: "3 p.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"},
            {timeslot: "4 p.m.", speaker: "", title: "Tea Break & Networking"},
            {timeslot: "5 p.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"},
            {timeslot: "6 p.m.", speaker: "TBA", speakerUrl: "#", title: "TBA"}
        ];
    };
    
});
