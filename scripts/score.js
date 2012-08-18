/**
 * This is the Scoreboard Controller
 */
var Score =
{
	team1Player : null,
	team2Player : null,
	team1Point : 0,
	team2Point : 0,
	
	 /**
	  * Update the players' score and the scoreboard.
	  * @param {Player} player1 The first player
	  * @param {Player} player2 The second player
	  * @param {Player} player3 The third player
	  * @param {Player} player4 The fourth player
	  * @param {int} team1point The point that team 1 earns in a game
	  * @param {string} extra [Optional] Any extra information such as T (Tichu) or GT (Grand Tichu)
	  */
	update: function(player1, player2, player3, player4, team1point, extra)
	{
		extra = (extra === undefined) ? "" : extra;
		var special = false;
		if (extra.length > 0)
			special = true;
		
		// Update players' score
		Score.__updateScore(player1, team1point, special);
		Score.__updateScore(player2, team1point, special);
		Score.__updateScore(player3, team1point, special);
		Score.__updateScore(player4, team1point, special);
		
		
		// Update scoreboard
		var team1score = Score.__niceScore(Score.team1Point);
		var team2score = Score.__niceScore(Score.team2Point);
		var template = '<tr>';
		template += '<td class="label">' + extra + '</td>';
		template += '<td>' + team1score + '</td>';
		template += '<td>' + Score.team1Player.point + '</td>';
		template += '<td>' + team2score + '</td>';
		template += '<td>' + Score.team2Player.point + '</td>';
		template += '</tr>';
		$("#scoreboard_container > table > tbody").append(template);
			
	},
	 
	/**
	 * Update a player's score
	 * @param {Player} player The player
	 * @param {int} team1point The point that team 1 earns in a game
	 * @param {boolean} special [Optional] Whether or not this is a special point calculation, i.e. T or GT
	 */
	__updateScore: function(player, team1point, special)
	{
		special = (special === undefined) ? false : special;
		
		if (player.team === 1)
		{
			Score.team1Point = team1point;
			Score.team1Player = player;
		 	player.addPoint(team1point);
		}
		else
		{
			var team2point = 100 - team1point;
			if (special)
				team2point = -1 * team1point;
			Score.team2Point = team2point;
			Score.team2Player = player;
			player.addPoint(team2point);
		}
	},
	
	/**
	 * Parse the point and give it a sign.
	 * @return {string} nice toString version of point
	 */
	__niceScore: function(point)
	{
		if (point > 0)
			return ("+" + point);
		return point;
	}
}