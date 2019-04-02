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
		if(this.hunger > 0){
			this.hunder -= .750;
		};
		$(`#hunger`).text(this.hunger);	
	}
	playWith(){
		console.log("Play with invoked");
		if(this.boredom > 0){
			this.boredom -= .50
		};
		$(`#boredom`).text(this.boredom);	
	}
	changeName(){
		const $usersName = $(`#new-name-box`).val();
		this.name = $usersName;
		$(`#display-name`).text(this.name);
	}
	getRest(){
		console.log('catching Zzzz');
		if(this.sleepiness > 0){ 
			this.sleepiness -= 1
		};
		$(`#sleepiness`).text(this.sleepiness);
	}
	switchLights(){
		if(game.lights == true) {
			$(`body`).css('background-color', 'grey');
			game.lights = false;
		} else if(game.lights == false) {
			$(`body`).css('background-color', 'yellow');
			game.lights = true;
		}
	}
	updateHunger(){
		this.hunger += 1;
		$(`#hunger`).text(this.hunger);
	}
	updateSleep(){
		this.sleepiness += 1;
		$(`#sleepiness`).text(this.sleepiness);
	}
	updateBored(){
		this.boredom += 1;
		$(`#boredom`).text(this.boredom);
	}		
	updateAge(){
		this.age += 1
		$(`#age`).text(this.age);
	}
}








let tomaOne = ''

const game = {
	lights: true,
	time: 0,
	gameInProgress: false,
	intervalId: null,
	startGame(){
		const tomaOne = new Toma();
		this.currentPet = tomaOne
		const $usersName = $(`#new-name-box`).val();
		tomaOne.name = $usersName;
		$(`#display-name`).text($usersName);

		this.gameInProgress = true;

		$('#name-button').text(`Change it's name`);

		$(`#hunger`).text(tomaOne.hunger);
		$(`#sleepiness`).text(tomaOne.sleepiness);
		$(`#boredom`).text(tomaOne.boredom);
		$(`#age`).text(tomaOne.age);

		this.intervalId = setInterval(()=>{
			this.time += 1;
			if(this.time % 10 === 0){
				tomaOne.updateHunger();
			}	
			if(this.time % 5 === 0 && this.lights == true){
				tomaOne.updateSleep();
			}	
			if(this.time % 15 === 0){
				tomaOne.updateBored();
			}	
			if(this.time % 60 === 0){
				tomaOne.updateAge();
			}	
			if(this.time % 1 === 0){
				$(`#clock`).text(this.time);
			}
			if(this.time % 1 === 0 && this.lights == false) {
				tomaOne.getRest();
			}
		}, 200)
	}
}



$('#feeder').on('click', () => {
	game.currentPet.feed();
});
$('#player').on('click', () => {
	game.currentPet.playWith();
});
$('#name-button').on('click', () => {
	if(game.gameInProgress == false){
		game.startGame();
	} else {
		game.currentPet.changeName();
	}
});
$('#lightSwitch').on('click', () => {
	game.currentPet.switchLights();
});