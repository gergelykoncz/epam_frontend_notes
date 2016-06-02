/* The below function seems to be broken */
/* The correct behavior should be writing the text delayed. Fix it! */

var remindMeBot = {
	message: 'remind you!',
	remindMeIn: function(seconds){
		setTimeout(this.doRemind.call(), seconds * 1000);
	},
	doRemind: function(){
		console.log('You asked me to:', this.message);
	}
};

remindMeBot.remindMeIn(2); //Instantly writes You asked me to:  undefined