/**
 * This is the Menu Controller
 */
var Menu = 
{
	root : "modules/",
	
	show: function()
	{
		$("#overlay").load(Menu.root + 'menu.html', function() {
			var title = "Tichu - Menu";
			var width = $(document).width() * (3/5);
			var height = $(document).height() * (5/6);
			$("#overlay").dialog({
				width: width,
				height: height,
				modal: true,
				show: 'fade',
				hide: 'fade',
				position: ['center','center'],
				title: title,
				dialogClass: 'dialog_menu'
			});
		});
	}
}