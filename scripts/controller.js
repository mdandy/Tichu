/**
 * This is the User Controller
 */
var Controller =
{
	/**
	 * Enable or disable Bomb controller.
	 * @param {boolean} isEnabled True if it is enabled or false otherwise
	 */
	enableBomb: function(isEnabled)
	{
		if (isEnabled)
		{
			var image = "bomb.png";
			var tooltip = "Bomb!";
			var onclick = "";
			Controller.__drawController2(image, tooltip, onclick);
		}
		else
		{
			Controller.__removeController2();
		}
	},
	
	/**
	 * Enable or disable Pass controller.
	 * @param {boolean} isEnabled True if it is enabled or false otherwise
	 */
	enablePass: function(isEnabled)
	{
		if (isEnabled)
		{
			var image = "pass.png";
			var tooltip = "Pass!";
			var onclick = "Controller.clearGameArea()";
			Controller.__drawController1(image, tooltip, onclick);
		}
		else
		{
			Controller.__removeController1();
		}
	},
	
	/**
	 * Enable or disable Play controller.
	 * @param {boolean} isEnabled True if it is enabled or false otherwise
	 */
	enablePlay: function(isEnabled)
	{
		if (isEnabled)
		{
			var image = "play.png";
			var tooltip = "Play!";
			var onclick = "Controller.play()";
			Controller.__drawController2(image, tooltip, onclick);
		}
		else
		{
			Controller.__removeController2();
		}
	},
	
	/**
	 * Play!
	 */
	play: function()
	{
		GameState.active_player.playCards();
	},
	
	/**
	 * Enable or disable Tichu controller (during deal phase).
	 * @param {boolean} isEnabled True if it is enabled or false otherwise
	 */
	enableTichu: function(isEnabled)
	{
		if (isEnabled)
		{
			var image = "tichu.png";
			var tooltip = "Tichu!";
			var onclick = "";
			Controller.__drawController1(image, tooltip, onclick);
		}
		else
		{
			Controller.__removeController1();
		}
	},
	
	/**
	 * Enable or disable Tichu controller (when the game has started).
	 * @param {boolean} isEnabled True if it is enabled or false otherwise
	 */
	enableTichu2: function(isEnabled)
	{
		if (isEnabled)
		{
			var image = "tichu.png";
			var tooltip = "Tichu!";
			var onclick = "";
			Controller.__drawController3(image, tooltip, onclick);
		}
		else
		{
			Controller.__removeController3();
		}
	},
	
	/**
	 * Enable or disable Grand Tichu controller.
	 * @param {boolean} isEnabled True if it is enabled or false otherwise
	 */
	enableGrandTichu: function(isEnabled)
	{
		if (isEnabled)
		{
			var image = "grandtichu.png";
			var tooltip = "Grand Tichu!!";
			var onclick = "";
			Controller.__drawController2(image, tooltip, onclick);
		}
		else
		{
			Controller.__removeController2();
		}
	},
	
	/**
	 * Enable or disable Continue controller.
	 * @param {boolean} isEnabled True if it is enabled or false otherwise
	 */
	enableContinue: function(isEnabled)
	{
		if (isEnabled)
		{
			var image = "continue.png";
			var tooltip = "Continue!";
			var onclick = "";
			Controller.__drawController3(image, tooltip, onclick);
		}
		else
		{
			Controller.__removeController3();
		}
	},
	
	/**
	 * Draw Control 1.
	 * @param {string} image The control image to be drawn
	 * @param {string} tooltip The tooltip message of the control
	 * @param {string} onclick The onclick event
	 */
	__drawController1: function(image, tooltip, onclick)
	{
		var template = '<img src="images/' + image + '" title="' + tooltip + '" onclick="' + onclick + '" />';
		var control = $("#controller #controller1");
		$(control).html(template);
		Controller.__selectify(control);
	},
	
	/**
	 * Draw Control 2.
	 * @param {string} image The control image to be drawn
	 * @param {string} tooltip The tooltip message of the control
	 * @param {string} onclick The onclick event
	 */
	__drawController2: function(image, tooltip, onclick)
	{
		var template = '<img src="images/' + image + '" title="' + tooltip + '" onclick="' + onclick + '" />';
		var control = $("#controller #controller2");
		$(control).html(template);
		Controller.__selectify(control);
	},
	
	/**
	 * Draw Control 3.
	 * @param {string} image The control image to be drawn
	 * @param {string} tooltip The tooltip message of the control
	 * @param {string} onclick The onclick event
	 */
	__drawController3: function(image, tooltip, onclick)
	{
		var template = '<img src="images/' + image + '" title="' + tooltip + '" onclick="' + onclick + '" />';
		var control = $("#controller #controller3");
		$(control).html(template);
		Controller.__selectify(control);
	},
	
	/**
	 * Remove Control 1 form UI.
	 */
	__removeController1: function()
	{
		$("#controller #controller1").empty();
	},
	
	/**
	 * Remove Control 2 form UI.
	 */
	__removeController2: function()
	{
		$("#controller #controller2").empty();
	},
	
	/**
	 * Remove Control 3 form UI.
	 */
	__removeController3: function()
	{
		$("#controller #controller3").empty();
	},
	
	/**
	 * Animate the controller upon hover.
	 * @param {DOM} control The control to be zoomified
	 */
	__selectify: function(control)
	{
		$(control).hover(function() {
			$(this).children().addClass("selected");
		}, function() {
			$(this).children().removeClass("selected");
		});
	},
	
	/**
	 * Clear the game area
	 */
	clearGameArea: function()
	{
		var parent = $("#gamearea #center").empty();
	}
}