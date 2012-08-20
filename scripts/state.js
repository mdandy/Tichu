var GameState =
{
	player1 : null,
	player2 : null,
	player3 : null,
	player4 : null,
	
	active_player : null,
	north_player : null,
	west_player : null,
	east_player : null,
	south_player : null,
	isDealer : false,
	
	/**
	 * Initialize the game state.
	 */
	init: function()
	{
		GameState.load();
	},

	/**
	 * Save the game state to the server.
	 */
	save: function()
	{
	
	},
	
	/**
	 * Load the game state.
	 * @param {int} game_id The game session ID
	 */
	load: function(game_id)
	{
		// Debug Load
		GameState.player1 = new Player("Jaakko", 1, $("#north"));
		GameState.player2 = new Player("Mandek", 2, $("#west"));
		GameState.player3 = new Player("Ravi ", 1, $("#south"));
		GameState.player4 = new Player("Cochise ", 2, $("#east"));
		
		GameState.isDealer = true;
		GameState.active_player = GameState.player3;
		
		GameState.north_player = GameState.player1;
		GameState.east_player = GameState.player2;
		GameState.south_player = GameState.active_player;		// Active player always sits in the South
		GameState.west_player = GameState.player4;
	}
}