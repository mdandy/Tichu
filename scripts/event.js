/**
 * This is the Event Controller
 */
 var Event =
 {
	 startGame: function()
	 {
		 var card = new Card("diamond", "A");
		 var parent = $("#gamearea");
		 CardHelper.drawCard(parent, card, 0, 0, 90, true);
	 }
 }