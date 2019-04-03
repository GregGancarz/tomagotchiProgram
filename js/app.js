class Toma {
	constructor(){
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		this.name = '';
	}
	feed(){
		if(this.hunger > 1 && game.lights == true){
			this.hunger -= 2;
		};
		$(`#hunger`).text(this.hunger);	
	}
	playWith(){
		if(this.boredom > 1 && game.lights == true){
			this.boredom -= 2
		};
		$(`#boredom`).text(this.boredom);	
	}
	changeName(){
		const $usersName = $(`#new-name-box`).val();
		this.name = $usersName;
		$(`#display-name`).text(this.name);
	}
	getRest(){
		if(this.sleepiness > 0){ 
			this.sleepiness -= 1
		};
		$(`#sleepiness`).text(this.sleepiness);
	}
	switchLights(){
		if(game.lights == true) {
			$(`body`).css('background-color', 'grey');
			game.lights = false;
		} else {
			$(`body`).css('background-color', 'yellow');
			game.lights = true;
		}
	}
	updateHunger(){
		if(this.age > 9) {
			this.hunger += 3;
		} else if(this.age > 4) {
			this.hunger += 2;
		} else if(this.age < 5) {
			this.hunger += 1;
		}
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
	currentPet: '',
	kill(){
		clearInterval(this.intervalId);
		$('img').attr('src', 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngonly.com%2Fwp-content%2Fuploads%2F2017%2F07%2FSkull-PNG-Danger-of-Death.png&f=1');
		console.log('Game over!');
	},
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
			if(this.time % 5 === 0){
				tomaOne.updateHunger();
			}	
			if(this.time % 3 === 0 && this.lights == true){
				tomaOne.updateSleep();
			}	
			if(this.time % 7 === 0){
				tomaOne.updateBored();
			}	
			if(this.time % 11 === 0){
				tomaOne.updateAge();
			}	
			$(`#clock`).text(this.time);
			
			if(this.lights == false) {
				tomaOne.getRest();
			}
			if(this.currentPet.age > 9) {
				$(`img`).attr("src", "https://openclipart.org/image/2400px/svg_to_png/110023/Monarch-Butterfly-by-Merlin2525.png")
			}
			else if(this.currentPet.age > 4) {
				$(`img`).attr("src", "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-OusdTQhBByc%2FTzEoV3sP11I%2FAAAAAAAAAQY%2FMYiK0pM5qdM%2Fs1600%2FCocoon01.png&f=1")
			}
			if (this.currentPet.hunger > 9 || this.currentPet.sleepiness > 9 || this.currentPet.boredom > 9){
				this.kill();
			}
			if(this.time % 2 == 0) {
				$(`img`).css("padding-top", 50);
				$(`img`).css("padding-bottom", 0);
			} else {
				$(`img`).css("padding-top", 0);
				$(`img`).css("padding-bottom", 50);
			}
		}, 500)
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

