// Constructors

var Player = function(attributes) {
	var attributes = attributes || {};
	this.name = attributes.name;
	this.nickname = attributes.nickname;
	this.ego = 100;
	this.attack = function(target) {
		attackResult(this, target);
	};
	this.element = $('.player');
};

var Enemy = function(attributes) {
	var attributes = attributes || {};
	this.name = attributes.name;
	this.ego = 100;
	this.element = attributes.element;
};

// Variables and player elements

var playerEgo = $('#playerEgo'),
		attackButton = $('#playerAttack'),
		fighter;

// Create player

	$('form').on('submit', function () {
		$('select').each(function () {
			  if ($(this).val() == 1) {
			    var fighter = new Player({
					name: '50 Cent',
					nickname: 'FITTY',
					});
			  }

			  if ($(this).val() == 2){
			    var fighter = new Player({
					name: 'Game',
					nickname: 'GAME',
					});
			  }  

			  if ($(this).val() == 3){
			    var fighter = new Player({
					name: 'Lloyd Banks',
					nickname: 'BANKS',
					});
			  }  

			  if ($(this).val() == 4){
			    var fighter = new Player({
					name: 'Tony Yayo',
					nickname: 'YAYO',
					});
			  }
		alert('OOOO KILL \'EM ' + fighter.nickname + '!');
	  window.open("game.html");
	})
});

// Create monster

var bawse = new Enemy ({
	name: 'Rick Ross',
	element: $('.monster')
});

// Player attack

attackButton.on('click', function () {
	fighter.attack(bawse);
});

var attackResult = function (attacker, attacked) {

	// Reset attack button

	var damage = _.random(5, 30);
	attackButton.prop('disabled', false).text('Attack!');
	attacked.ego -= damage;

	// If/Else function to lower ego if attacked is still alive

	if (attacked.ego > 0) {
		attacked.element.find('input').val(attacked.ego);

		// Monster attacks

		if (attacked instanceof Enemy) {
			console.log('Shots fired!!');
			attackButton.prop('disabled', true).text('Reeling...');
			_.delay(attackResult, 600, attacked, attacker);
		}
	} else {

		if (attacked instanceof Player) {
			$('body').empty().css('background', 'url(http://goo.gl/0fmNnb)');
		} else {
			$('body').empty().css('background', 'url(http://images.nymag.com/images/2/daily/2011/04/20_rickrosswheelchair.gif)');
		}
	}
};