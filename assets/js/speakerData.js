/**
* geekcampmy2016 Module
*
* Description
*/
geekcampmy2016.controller('SpeakerInfoController', function(){
	var speakerInfo = this;

	speakerInfo.speakers = [
		{name: "Kevin H. A. Tan", picture: "https://media.licdn.com/media/AAEAAQAAAAAAAAVhAAAAJDljNDVlZGM2LWZhMzAtNDZjNS04ZmVkLWEzYmM5NDM5ZDA5Yw.jpg", position: "Android Developer", website: "https://about.me/kevintanhongann"},
		{name: "Ruben Tan", picture: "https://media.licdn.com/media/p/1/000/125/353/3fa8e21.jpg", position: "Co-Founder, Javascript Developers Malaysia", description: "Ruben Tan lived through the dark ages of Javascript and is currently a co-founder and primary custodian of the Javascript Developers Malaysia user group. Ex-CTO of Bookya, he is currently figuring out how to upload his consciousness into a robot to live forever."},
		{name: "Khairil Yusof", picture: "https://farm8.staticflickr.com/7261/7606252186_96900955b6.jpg", position: "Coordinator, Sinar Project", website: "http://sinarproject.org/en/about/team"},
		{name: "Ng Boo Jiun", picture: "https://upload.wikimedia.org/wikipedia/commons/1/14/Lightsaber,_silver_hilt,_blue_blade.png", position: "One of Golang Facebook group administrators.", website: ""}
	];
});
