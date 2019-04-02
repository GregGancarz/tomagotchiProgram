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
		this.hunger -= .750;
		$(`#hunger`).text(this.hunger);	
	}
	playWith(){
		console.log("Play with invoked");
		this.boredom -= .50;
		$(`#boredom`).text(this.boredom);	
	}
	changeName(){
		const $usersName = $(`#new-name-box`).val();
		this.name = $usersName;
		$(`#display-name`).text(this.name);
	}
	getRest(){
		console.log('catching Zzzz');
		this.sleepiness -= 1.25;
		$(`#sleepiness`).text(this.sleepiness);
	}
	switchLights(){
		if(game.lights == true) {
			$(`body`).css('background-color', 'grey');
			game.lights = false;
			toma1.getRest();	
			$(`#sleepiness`).text(this.sleepiness);

		} else if(game.lights == false) {
			$(`body`).css('background-color', 'yellow');
			game.lights = true;
		}
	}
	updateMets(){
		console.log("Metrics updated");
		this.hunger += .50;
		$(`#hunger`).text(this.hunger);
		this.sleepiness += .750;
		$(`#sleepiness`).text(this.sleepiness);
		this.boredom += .250;
		$(`#boredom`).text(this.boredom);
		this.age += .10
		$(`#age`).text(this.age);
		console.log(toma1);
	}
}








let toma1 = ''

const game = {
	lights: true,
	time: 0,
	gameInProgress: false,
	intervalId: null,
	startGame(){
		const tomaOne = new Toma();
		toma1 = tomaOne
		const $usersName = $(`#new-name-box`).val();
		toma1.name = $usersName;
		$(`#display-name`).text($usersName);
		this.gameInProgress = true;
		$('#name-button').text(`Change it's name`);
		$(`#hunger`).text(toma1.hunger);
		$(`#sleepiness`).text(toma1.sleepiness);
		$(`#boredom`).text(toma1.boredom);
		$(`#age`).text(toma1.age);
		this.intervalId = setInterval(()=>{
			this.time += 1;
			if this.time % 5 === 
			toma1.updateMets();	

		}, 1000)
	}
}



$('#feeder').on('click', () => {
	toma1.feed();
});
$('#player').on('click', () => {
	toma1.playWith();
});
$('#name-button').on('click', () => {
	if(game.gameInProgress == false){
		game.startGame();
	} els {
		toma1.changeName();
	}
});
$('#lightSwitch').on('click', () => {
	toma1.switchLights();
});