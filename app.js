window.Instagram = {

	config : {},

	BASE_URL: 'https://api.instagram.com/v1',

	init : function(opt) {
		opt = opt || {};

		this.config.access_token = opt.access_token;
	},

	popular: function() {
	},

	tagsByName: function( name, callback ) {
		var endpoint = this.BASE_URL + '/tags/' + name + '/media/recent?access_token=' + this.config.access_token;
		$.ajax({
			type: 'GET',
			url: endpoint,
			dataType: 'jsonp',
			success: function( response ) {
				if ( typeof callback === 'function' ) callback( response );
			}
		});

	}

};

Instagram.init({
	access_token:'21447540.214b851.23a1d57c7103426d90738caa683e28e1'
});

