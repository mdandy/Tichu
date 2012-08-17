/**
 * This class represents a Card object
 * @param {string} suit The suit of the card. It is either:
 *		- "spade" 
 *		- "heart"
 *		- "diamond"
 *		- "club"
 *		- "mahjong"
 *		- "dog"
 *		- "dragon"
 *		- "phoenix"
 * @param {string} value The face value of the card (2 to 10, J, Q, K, and A).
 *		This value can be null for special cards.
 */
function Card (suit, value)
{
	this.suit = suit;
	this.value = value;
	this.point = CardHelper.getPoint(this);
	this.image = CardHelper.getImage(this);
}

/**
 * This is a helper object to manipulate Card object.
 * @require jQuery SVG (http://keith-wood.name/svg.html)
 */
var CardHelper = 
{
	deck_src : "images/deck/",
	
	/**
	 * Get the point of a card based on these specifications:
	 *		- 5 = 5 points
	 *		- 10 = 10 points
	 *		- K = 10 points
	 *		- dragon = 25 points
	 *		- phoenix = -25 points
	 * @param {Card} card The card to be evaluated
	 * @return {int} The value of the card
	 */
	getPoint: function(card)
	{
		if (card.value != null)
		{
			if (card.value == "5")
				return 5;
			if (card.value == "10")
				return 10;
			if (card.value.toString().toUpperCase() == "K")
				return 10;
		}
		else
		{
			if (card.suit.toLowerCase() == "dragon")
				return 25;
			if (card.suit.toLowerCase() == "phoenix")
				return -25;
		}
		
		return 0;
	},
	
	/**
	 * Get an SVG metadata of a card.
	 * @param {Card} card The card to be evaluated
	 * @return {CardSVG} The SVG metadata of the card
	 */	 
	getImage: function(card)
	{
		var image = CardHelper.deck_src;
		if (card.suit.toLowerCase() == "spade")
		{
			image += "spade/" + card.value.toString().toUpperCase() + ".png";
		}
		else if (card.suit.toLowerCase() == "heart")
		{
			image += "heart/" + card.value.toString().toUpperCase() + ".png";
		}
		else if (card.suit.toLowerCase() == "diamond")
		{
			image += "diamond/" + card.value.toString().toUpperCase() + ".png";
		}
		else if (card.suit.toLowerCase() == "club")
		{
			image += "club/" + card.value.toString().toUpperCase() + ".png";
		}
		else if (card.suit.toLowerCase() == "mahjong")
		{
			
		}
		else if (card.suit.toLowerCase() == "dog")
		{
			
		}
		else if (card.suit.toLowerCase() == "dragon")
		{
			
		}
		else if (card.suit.toLowerCase() == "phoenix")
		{
			
		}

		return image;
	},
	
	/**
	 * Draw the card on a canvas.
	 * @param {svg} parent The parent ode where the image will be drawn
	 * @param {Card} card The card to be drawn
	 * @param {int} x The x-coordinate where the card will be drawn
	 * @param {int} y The y-coordinate where the card will be drawn
	 * @param {int} angle The angle of the card
	 * @param {boolean} isFlipped Whether the card is flipped or not
	 */
	drawCard: function(parent, card, x, y, angle, isFlipped)
	{
		var src = card.image;
		if (isFlipped)
			src = CardHelper.deck_src + "back.png";
		var img = '<img src="' + src + '" />';
		$(parent).html(img);
	}
}