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
	 * @param {int} game_id The game session ID
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
		GameState.init();
		if (GameState.isDealer)
		{
			CardHelper.initDeck();
			CardHelper.firstDeal();
			CardHelper.secondDeal();
		}
		 
		 CardHelper.drawHand($("#north"), GameState.north_player);
		 CardHelper.drawHand($("#east"), GameState.east_player);
		 CardHelper.drawHand($("#south"), GameState.south_player);
		 CardHelper.drawHand($("#west"), GameState.west_player);
		 
		 Score.update(GameState.player1, GameState.player2, GameState.player3, GameState.player4, 50);
		 Score.update(GameState.player1, GameState.player2, GameState.player3, GameState.player4, 125);
		 Score.update(GameState.player1, GameState.player2, GameState.player3, GameState.player4, 200, "T");
		 Score.update(GameState.player1, GameState.player2, GameState.player3, GameState.player4, 400, "GT");
		 
		 Controller.enablePlay(true);
		 Controller.enablePass(true);
		 Controller.enableTichu2(true);
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
		 
	}
}