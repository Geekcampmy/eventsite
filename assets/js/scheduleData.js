var geekcampmy2016 = angular.module('geekcampmy2016', [])

geekcampmy2016.controller('ScheduleController', function () {
    var scheduler = this;
    
    //Guys, please fill out the proper track 1 schedule here. Note the field names have to be intact,
    //even if there is no value. One curly bracket row is one table row...
    var track1schedule = [
        {timeslot: "9:30 a.m.", speaker: " ", title: "Introductions & Housekeeping"},
        {timeslot: "10 a.m.", speaker: " ", title: "Sponsors' slot"},
        {timeslot: "11 a.m.", speaker: " ", title: "Get BDD with Cucumber"},
        {timeslot: "12 p.m.", speaker: " ", title: "Moving Learndot.com from Pet Computing to Cattle Computing"},
        {timeslot: "1 p.m.", speaker: "", title: "Lunch & Networking"},
        {timeslot: "2 p.m.", speaker: " ", title: "GO Serving: Building server app with Go"},
        {timeslot: "3 p.m.", speaker: " ", title: "Building an open source APRS (ham radio) Tracker - SVTrackR"},
        {timeslot: "4 p.m.", speaker: " ", title: "The rise of Drupal 8"},
        {timeslot: "5 p.m.", speaker: " ", title: "Groovy and Android (as of 2016)"}
    ];
    
    scheduler.slots = track1schedule; //Load by default the track 1 schedule.
    
    scheduler.track1 = function () {
        scheduler.slots = track1schedule; //This one in case the user clicks track 1 pill.
    };
    
    scheduler.track2 = function () { //User clicks track 2 pill...
    //Guys, please fill out the proper track 2 schedule here. Note the field names have to be intact,
    //even if there is no value. One curly bracket row equals one table row..
        scheduler.slots = [
        {timeslot: "9:30 a.m.", speaker: " ", title: "Introductions & Housekeeping"},
        {timeslot: "10 a.m.", speaker: " ", title: "Programming in Scala"},
        {timeslot: "11 a.m.", speaker: " ", title: "Debugging & Hacking Democracy"},
        {timeslot: "12 p.m.", speaker: " ", title: "Consensus in Distributed Computing"},
        {timeslot: "1 p.m.", speaker: "", title: "Lunch & Networking"},
        {timeslot: "2 p.m.", speaker: " ", title: "Golang - Optimise for developers' health and happiness"},
        {timeslot: "3 p.m.", speaker: " ", title: "DAO? (*Docker, Ansible or Otto?)"},
        {timeslot: "4 p.m.", speaker: " ", title: "Kotlin: what it is and why you should use it in your next Android project"},
        {timeslot: "5 p.m.", speaker: " ", title: "Free slot, Networking, Lightning Talks :)"}
        ];
    };
    
});
