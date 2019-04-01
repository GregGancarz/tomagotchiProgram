class Toma {
	constructor(){
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		this.name = '';
	}
	feed(){
		console.log("feed invoked");
	}
	playWith(){
		console.log("Play with invoked");
	}
	changeName(){
		const $usersName = $(`#new-name`).val();
		this.name = $usersName;
		$(`#name`).text(this.name);
	}
}

const toma1 = new Toma();

$(`#hunger`).text(toma1.hunger);
$(`#sleepiness`).text(toma1.sleepiness);
$(`#boredom`).text(toma1.boredom);
$(`#age`).text(toma1.name);






const game = {
	lights: true,
	time: 0
}






$('#name-button').on('click', () => {
	toma1.changeName();
});