/**
 * This class represents a Player object
 * @param {string} name The name of the player
 * @param {int} team The team of the player. It is one of these:
 *		- 1 = North and South team
 *		- 2	= West and East team
 * @param {DOM} sit The postion where the player sits
 */
function Player (name, team, sit)
{
	this.name = name;
	this.team = team;
	this.hand = new Array();
	this.point = 0;
	this.sit = sit;
	
	this.addPoint = addPoint;
	this.addCardsToHand = addCardsToHand;
	this.getNumberOfCards = getNumberOfCards;
	this.playCards = playCards;
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

/**
 * Play the player's selected cards.
 */
function playCards()
{
	var selectedCardsIndex = __getSelectedCardsIndex();
	var selectedCards = new Array();
	for (var i = (selectedCardsIndex.length - 1); i >=0 ; i--)
	{
		var handIndex = selectedCardsIndex[i];
		selectedCards.push(this.hand[handIndex]);
		this.hand.splice(handIndex,1);
	}
	
	CardHelper.drawPlayedCards(selectedCards);
	CardHelper.drawHand(this.sit, this);
}

/**
 * Get the selected cards' index.
 * @return {int[]} The selected cards' index
 */
function __getSelectedCardsIndex()
{
	var selectedCardsIndex = new Array();
	$("#gamearea #south ul.player_hand").children().each(function(index) {
		var selected = $(this).hasClass("selected");
		if (selected)
			selectedCardsIndex.push(index);		
	});
	return selectedCardsIndex;
}

