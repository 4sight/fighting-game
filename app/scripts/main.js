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

// Create player

var 

'Name your fighter'