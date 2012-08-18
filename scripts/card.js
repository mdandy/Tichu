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
 * @param {string} value [Optional] The face value of the card (2 to 10, J, Q, K, and A).
 *		This value can be null for special cards.
 */
function Card (suit, value)
{
	value = (typeof value === undefined) ? null : value;
	
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
	deck : [],
	
	/**
	 * Initialize the deck and shuffle it.
	 */
	initDeck: function()
	{
		// Init Spade cards
		for (var i = 2; i <= 10; i++)
		{
			CardHelper.deck.push(new Card("spade", i));
		}
		CardHelper.deck.push(new Card("spade", "J"));
		CardHelper.deck.push(new Card("spade", "Q"));
		CardHelper.deck.push(new Card("spade", "K"));
		CardHelper.deck.push(new Card("spade", "A"));
		
		// Init Heart cards
		for (var i = 2; i <= 10; i++)
		{
			CardHelper.deck.push(new Card("heart", i));
		}
		CardHelper.deck.push(new Card("heart", "J"));
		CardHelper.deck.push(new Card("heart", "Q"));
		CardHelper.deck.push(new Card("heart", "K"));
		CardHelper.deck.push(new Card("heart", "A"));
		
		// Init Diamond cards
		for (var i = 2; i <= 10; i++)
		{
			CardHelper.deck.push(new Card("diamond", i));
		}
		CardHelper.deck.push(new Card("diamond", "J"));
		CardHelper.deck.push(new Card("diamond", "Q"));
		CardHelper.deck.push(new Card("diamond", "K"));
		CardHelper.deck.push(new Card("diamond", "A"));
		
		// Init Club cards
		for (var i = 2; i <= 10; i++)
		{
			CardHelper.deck.push(new Card("club", i));
		}
		CardHelper.deck.push(new Card("club", "J"));
		CardHelper.deck.push(new Card("club", "Q"));
		CardHelper.deck.push(new Card("club", "K"));
		CardHelper.deck.push(new Card("club", "A"));
		
		// Init special cards
		CardHelper.deck.push(new Card("mahjong"));
		CardHelper.deck.push(new Card("dog"));
		CardHelper.deck.push(new Card("dragon"));
		CardHelper.deck.push(new Card("phoenix"));
		
		// Shuffle the cards
		CardHelper.shuffle();
	},
	
	/**
	 * Shuffle the deck using Fisher-Yates shuffle algorithm.
	 * @see http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
	 */
	shuffle: function()
	{
		var m = CardHelper.deck.length;
		var temp;
		var i;
		
		// While there remain elements to shuffle
		while (m)
		{
			// Pick a remaining element
			i = Math.floor(Math.random() * m--);
			
			// And swap it with the current element
			temp = CardHelper.deck[m];
			CardHelper.deck[m] = CardHelper.deck[i];
			CardHelper.deck[i] = temp;
		}
	},
	
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
			image += "mahjong.png";
		}
		else if (card.suit.toLowerCase() == "dog")
		{
			image += "dog.png";
		}
		else if (card.suit.toLowerCase() == "dragon")
		{
			image += "dragon.png";
		}
		else if (card.suit.toLowerCase() == "phoenix")
		{
			image += "phoenix.png";
		}

		return image;
	},
	
	/**
	 * Deal the first half of the deck.
	 */
	firstDeal: function()
	{
		var firstDeal = 8;
		for (var i = 0; i < firstDeal; i++)
		{
			var card = CardHelper.deck.pop();
			GameState.player1.addCardsToHand(card);
			
			card = CardHelper.deck.pop();
			GameState.player2.addCardsToHand(card);
			
			card = CardHelper.deck.pop();
			GameState.player3.addCardsToHand(card);
			
			card = CardHelper.deck.pop();
			GameState.player4.addCardsToHand(card);
		}
	},
	
	/**
	 * Deal the second half of the deck.
	 */
	secondDeal: function()
	{
		while (CardHelper.deck.length)
		{
			var card = CardHelper.deck.pop();
			GameState.player1.addCardsToHand(card);
			
			card = CardHelper.deck.pop();
			GameState.player2.addCardsToHand(card);
			
			card = CardHelper.deck.pop();
			GameState.player3.addCardsToHand(card);
			
			card = CardHelper.deck.pop();
			GameState.player4.addCardsToHand(card);
		}
	},
	
	/**
	 * Draw a player's hand.
	 * @param {DOM} parent The parent node where the image will be drawn
	 * @param {Player} player The player's hand to be drawn
	 */
	drawHand: function(parent, player)
	{
		if (player === GameState.active_player)
		{
			var hand = $('<ul class="player_hand" />');
			var cards = player.hand;
			for (var index in cards)
			{
				$(hand).append('<li><img src="' + cards[index].image + '" /></li>');
			}
			$(parent).append(hand);
		}
		else
		{
			var hand = $('<ul class="player_hand" />');
			var cards = player.hand;
			for (var index in cards)
			{
				// $(hand).append('<li><img src="' + CardHelper.deck_src + 'back.png" /></li>');
				$(hand).append('<li><img src="' + cards[index].image + '" /></li>');
			}
			$(parent).append(hand);
		}
		
		// Stackify
		var width = $(parent).width();
		var cardWidth = 100;
		var effectiveWidth = width - cardWidth;
		var numCards = player.getNumberOfCards();
		var offset = Math.round(effectiveWidth / (numCards - 1));
		$(hand).children().each(function(index) {
			var lefty = index * offset;
			$(this).css("left", lefty);
		});
		
		// Active player events
		if (player === GameState.active_player)
		{
			
			var zoom = -60;
			$(hand).children().each(function(index) {
				// Hover event
				$(this).hover(function() {
					var borderWidth = parseInt($(this).css("border-width"), 10);
					if (borderWidth === 0)
						$(this).css("top", zoom);
				}, function() {
					var borderWidth = parseInt($(this).css("border-width"), 10);
					if (borderWidth === 0)
						$(this).css("top", 0);
				});
				
				// Select event
				$(this).click(function() {
					var borderWidth = parseInt($(this).css("border-width"), 10);
					if (borderWidth === 0)
					{
						$(this).css("top", zoom);
						$(this).css("border", "2px solid #2F74D0");
					}
					else
					{
						$(this).css("top", 0);
						$(this).css("border", "0");
					}
				});
			});
		}
	}
}