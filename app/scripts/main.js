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