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

$(document).ready(function(){

	Instagram.popular(function( response ) {
		var $instagram = $('#instagram');
		for ( var i = 0; i < response.data.length; i++ ) {
			imageUrl = response.data[i].images.low_resolution.url;
			$instagram.append('<img src="' + imageUrl + '" />' );
		}
	});

$('#form').on('submit', function( e ) {
	e.preventDefault();
	var tagName = $( '#search' ).val();
	Instagram.tagsByName( tagName, function( response ){
			var $instagram = $('#instagram');
			$instagram.html('');

			for ( var i = 0; i < response.data.length; i++ ) {
			imageUrl = response.data[i].images.low_resolution.url;
			$instagram.append('<img src="' + imageUrl + '" />' );

	});
});

});


// https://instagram.com/oauth/authorize/?client_id=214b851c9b9449eb8f3162ac981ce678&amp;redirect_uri=http://www.damienvignol.com/photography/&amp;response_type=token


// access_token=21447540.214b851.23a1d57c7103426d90738caa683e28e1


