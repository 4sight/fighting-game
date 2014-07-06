// Constructors

var Player = function(attributes) {
	var attributes = attributes || {};
	this.name = attributes.name;
	this.ego = 100;
	this.attack = function(target) {
		attackResult(this, target);
	};
	this.element = attributes.element;
};

var Enemy = function(attributes) {
	var attributes = attributes || {};
	this.name = attributes.name;
	this.ego = 100;
	this.element = attributes.element;
};

// Variables and player elements

var playerEgo = $('#playerEgo'),
		attackButton = $('#playerAttack');

// Create player

var fitty = new Player({
	name: '50 Cent',
	element: $('.player')
});

// Create monster

var bawse = new Enemy ({
	name: 'Rick Ross',
	element: $('.monster')
});

// Player attack

attackButton.on('click', function () {
	fitty.attack(bawse);
});

var attackResult = function (attacker, attacked) {

	// Reset attack button

	attackButton.prop('disabled', false).text('Attack!');
	var damage = _.random(5, 30);
	atacked.health -= damage;

	// If/Else function to lower health if attacked is still alive

	if (attacked.health > 0) {
		attacked.element.find('input').val(attacked.health);

		// Monster attacks

		if (attacked instanceof Monster) {
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