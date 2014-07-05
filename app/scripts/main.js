// Constructors

var Player = function(attributes) {
	var attributes = || {};
	this.name = attributes.name;
	this.health = 100;
	this.attack = function(target) {
		attackResult(this, target);
	};
	this.element = attributes.element;
};

var Enemy = function(attributes) {
	var attributes = attributes || {};
	this.name = attributes.name;
	this.health = 100;
	this.element = attributes.element;
};

// Variables and player elements

var playerHealth = $('#playerHealth')
		attackButton = $('#playerAttack'),
    damage;

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

