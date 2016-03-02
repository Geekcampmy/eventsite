/**
* geekcampmy2016 Module
*
* Description
*/
geekcampmy2016.controller('SpeakerInfoController', function(){
	var speakerInfo = this;

	speakerInfo.speakers = [
		{name: "Kevin H. A. Tan", picture: "https://media.licdn.com/media/AAEAAQAAAAAAAAVhAAAAJDljNDVlZGM2LWZhMzAtNDZjNS04ZmVkLWEzYmM5NDM5ZDA5Yw.jpg", position: "Android Developer", website: "https://about.me/kevintanhongann", speechtitle:"Groovy and Android (as of 2016)"},
		{name: "Ruben Tan", picture: "https://media.licdn.com/media/p/1/000/125/353/3fa8e21.jpg", position: "Co-Founder, Javascript Developers Malaysia", description: "Ruben Tan lived through the dark ages of Javascript and is currently a co-founder and primary custodian of the Javascript Developers Malaysia user group. Ex-CTO of Bookya, he is currently figuring out how to upload his consciousness into a robot to live forever.", speechtitle: "Deep Dive Into Javascript"},
		{name: "Khairil Yusof", picture: "https://farm8.staticflickr.com/7261/7606252186_96900955b6.jpg", position: "Coordinator, Sinar Project", website: "http://sinarproject.org/en/about/team", speechtitle: "Debugging & Hacking Democracy"},
		{name: "Ng Boo Jiun", picture: "https://upload.wikimedia.org/wikipedia/commons/1/14/Lightsaber,_silver_hilt,_blue_blade.png", position: "One of Golang Facebook group administrators.", website: "https://socketloop.com/", speechtitle: "Golang - Optimise for developers' health and happiness"},
		{name: "Micheal Leow", picture: "https://farm9.staticflickr.com/8739/17009459621_2bca81ca47.jpg", position: "Freedom of Information Initiatives", website: "http://sinarproject.org/en/about/team", speechtitle: "DAO? (*Docker, Ansible or Otto?)"},
		{name: "Chow Chee Leong", picture: "https://avatars3.githubusercontent.com/u/411259?v=3&s=460", position: "Software Developer", website: "https://github.com/klrkdekira", speechtitle: "DAO? (*Docker, Ansible or Otto?)"},
		{name: "Stan Feldman", picture: "http://www.geekcamp.my/assets/images/speakers/stan-01.png", position: "Founder of LinkedChat and Senior Mobile Developer at VLT", website: "http://vltlabs.com/", speechtitle: "Kotlin: what it is and why you should use it in your next Android project"},
		{name: "Akmal Fikri Abdul Rahman", picture: "http://www.geekcamp.my/assets/images/speakers/akmal-fikri.jpg", position: "COO at ABSOFT PLT", website: "https://www.linkedin.com/in/akmalfikri", speechtitle: "The rise of Drupal 8"},
		{name: "Leong Hean Hong", picture: "http://www.geekcamp.my/assets/images/speakers/brown_shirt.png", position: "Technopreneur, Engineer, Geek", website: "http://www.mrleong.net", speechtitle: "GO Serving: Building server app with Go"},
                {name: "Stanley Seow", picture: "http://www.geekcamp.my/assets/images/speakers/Stanley-A4G 2015.jpg", position: "9W2SVT", website: "http://arduino-for-beginners.blogspot.my/", speechtitle: "Building an open source APRS (ham radio) Tracker - SVTrackR"},
                {name: "Chua Chee Seng", picture: "http://www.geekcamp.my/assets/images/speakers/cheeseng.jpg", position: " Scala Developer", website: "https://www.linkedin.com/in/chuacheeseng", description:"Founder of AmaSeng Software Sdn. Bhd. Founder of Scala User Group Malaysia. Active Contributor of ScalaTest (https://github.com/scalatest/scalatest) since 2011.", speechtitle: "Programming in Scala"},
                {name: "Mohd Faiz Hasim", picture: "http://www.geekcamp.my/assets/images/speakers/12548942_10208007244916900_2646344527519410903_n.jpg", position: "Architect / Developer in ServiceRocket", website: "http://www.faizhasim.com/", description:"Mohd Faiz is an agile developer with architect role in ServiceRocket. He is currently part of the fullstack team working on the Learndot platform. Working as a team, he maintains and deliver SaaS-based Learning Management System for mainly enterprise users. He is working migrating Learndot from bare metal hosting into AWS Cloud for scaling, elasticity and business alignment purposes.", speechtitle: "Moving Learndot.com from Pet Computing to Cattle Computing"},

	];
});
