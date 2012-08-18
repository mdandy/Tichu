/**
 * This class represents a Player object
 * @param {string} name The name of the player
 * @param {int} team The team of the player. It is one of these:
 *		- 1 = North and South team
 *		- 2	= West and East team
 */
function Player (name, team)
{
	this.name = name;
	this.team = team;
	this.hand = new Array();
	this.point = 0;
	
	this.addPoint = addPoint;
	this.addCardsToHand = addCardsToHand;
	this.getNumberOfCards = getNumberOfCards;
}

/**
 * Add points to a player.
 * @param {int} points The points to be added
 */
function addPoint(points)
{
	this.point += points;
}

/**
 * Add cards to player's hand.
 * @param {Card} card The card to be added to player's hand
 */
function addCardsToHand(card)
{
	this.hand.push(card);
}

/**
 * Get the number of card in a player's hand.
 * @return {int} The number of card in a player's hand
 */
function getNumberOfCards()
{
	return this.hand.length;
}