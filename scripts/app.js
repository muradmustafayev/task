$(function(){
	window.app = new function(){
		this.body = $('body');
		$('#lightSwitch').on('click',$.proxy(function(){
			this.body.toggleClass('dark');
		},this));
	}();



	/*****  Ticket Module  *****/
	var ticketModule = (function() {
		var ticket = $('.ticket');
		var minSymbolLength = 113;

		/* Show message box */
		var showMessage = function(text) {
			var ticketCopy = ticket.clone(); // create new ticket

			// if text length is less than minimum then run with a default template text
			//if(checkMinLength(text)) {
				ticketCopy.find('.ticket-rightSide p').text(text);
			//}

			// insert ticket to DOM and animate
			var a = ticket.before(ticketCopy.delay(1).queue(function() {
    			ticketCopy.addClass('ticket-move').dequeue();
    		}));
		}

		/* Check length of symbols in text */
		var checkMinLength = function(text) {
			return (text.length >= minSymbolLength) ? true : false;
		}

		return {
			showMessage: showMessage
		}

	})();

	/*****  End of Ticket Module  *****/

	
	window.app.getInputValue = new function(prototype) {
		this.button = document.getElementsByTagName('button');
		this.input 	= document.getElementById('MessageInput');

		$(this.button).on('click', $.proxy(function() {
			var inputText = this.input.value;

			ticketModule.showMessage(inputText);
		}, this));
	}();

});