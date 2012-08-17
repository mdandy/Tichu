/**
 * This is the Game Controller
 */
 var Game =
 {
	 /**
	  * Create a game session.
	  */
	 create: function()
	 {
		 
	 },
	 
	 /**
	  * Join a game session.
	  */
	 join: function(game_id)
	 {
		 
	 },
	 
	 /**
	  * Retrieve existing game session ID.
	  * @return Game session ID
	  */
	 getGameSession: function()
	 {
		 
	 },
	 
	 /**
	  * Check if a game session exist.
	  */
	 isGameExist: function()
	 {
		 
	 },
	 
	 /**
	  * Start a game.
	  */
	 start: function()
	 {
		 var card = new Card("diamond", "A");
		 var parent = $("#gamearea");
		 CardHelper.drawCard(parent, card, 0, 0, 90, true);
	 },
	 
	 /**
	  * Pause the game
	  */
	 pause: function()
	 {
		 
	 },
	 
	 /**
	  * Save the state of the game.
	  */
	 saveState: function()
	 {
		 
	 },
	 
	 /**
	  * oad the state of the game.
	  */
	 loadState: function()
	 {
		 
	 },
 }