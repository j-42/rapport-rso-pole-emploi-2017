$(function() {

	// Get content and display it
	function getContent(input,output){

// ------------------------------------------------------ >
			// ZEN VARIABLES FROM DATA
// ------------------------------------------------------ >

		// Zen row DATA from $input
 		var content;

        // Zen Page Element - DOM
       	var zenPageElement = {};

       	// Zen Page Content - HTML content
        var zenPageContent = "";

        // Get Zen page ID
		var zenPageID = "page-x";

		// Zen page Number
		var zenDataPage = 0;

		// Zen Pages Index [pages number]
		var zenPagesIndex = [];

		// Zen Pages Length - Number of Zen Pages
		var zenPagesLength = 0;

// < ----------------------------------------------------- //





// ------------------------------------------------------ >
			// PUBLICATION VARIABLES FROM DATA
// ------------------------------------------------------ >

		// Publication page Number
		var publicationDataPage = parseInt(window.top.location.hash.substring(6));

		// Zen Pages Index [pages number]
		var publicationPagesIndex = [];

// < ----------------------------------------------------- //



// ------------------------------------------------------ >
			// INDEX - DIRECTION
// ------------------------------------------------------ >

		// Where we are - page number
		var whereWeAre = 0;

		// Set up Direction - page number
		var whereWeGo = 0;

// < ----------------------------------------------------- //


		//header 
		var navPrevious = "";
		var contentTitle = "";
		var navNext = "";

		var dispalyContent = "";

		// Id élément de page
		var publicationpageID = "";




 		// Get Zen Content Page
       	$.get(input, function(data) {
            content=data;
        })
       	// Whem you get it
        .done(function(){

        	// Make it HTML
        	$('<div>'+content+'</div>')

        	// Find Zen pages
        	.find('.zenPage')

        	// And loop thought Zen pages
        	.each(function(i,zenPageElement) {
/*
        		// Zen Page Element - DOM
        		zenPageElement = $(zenPageElement);
        		console.log("zenPageElement : "+ zenPageElement);

        		// Zen Page Content - HTML content
        		zenPageContent = $(zenPageElement).html();
        		console.log("zenPageContent : "+ zenPageContent);

        		// Get Zen page ID
			    zenPageID = $(zenPageElement).attr('id');
			    console.log("zenPageID : "+ zenPageID);
*/
			    // Get Zen page Number from div ID and parse it
			    zenDataPage = parseInt($(zenPageElement).attr('id').substring(5));

			    // Push page number into the zenPagesIndex
				zenPagesIndex.push(zenDataPage);
				
			}); // End Loop


// FIREST TIME HERE

					// Publication Page
					whereWeAre = zenPagesIndex.indexOf(publicationDataPage);

					// If the publication page exist in Zen Version
					if (whereWeAre != -1 ){
						// We keep it
						publicationDataPage = zenPagesIndex[whereWeAre];
					}


					// If the publication page doens't exist in Zen version, BUT we stay in the pubication's interval
					 else if (whereWeAre = -1 && publicationDataPage > zenPagesIndex[0] && publicationDataPage < zenPagesIndex[zenPagesIndex.length - 1]){

					 

					// We go to the previous match in the index
					while (zenPagesIndex.indexOf(publicationDataPage) === -1){
						publicationDataPage --;
					}
					// And we keep this page
					whereWeAre = zenPagesIndex.indexOf(publicationDataPage);


					// Otherwise, we go the last Zen page
					} else {
						publicationDataPage = zenPagesIndex[zenPagesIndex.length -1];
					}



// UPDATE
				function upDate(){
					// Get headings in the DATA
					contentTitle = $('<div>'+content+'</div>').find("#page-" + publicationDataPage).find("h1").html();
					navPrevious = $('<div>'+content+'</div>').find("#page-" + publicationDataPage).prev().find("h1").html();
					navNext = $('<div>'+content+'</div>').find("#page-" + publicationDataPage).next().find("h1").html();

					// Display headings
					$('header h2').first().html(navPrevious);
					$('header h1').html(contentTitle);
					$('header h2').last().html(navNext);


					// Get Zen Content in the DATA
					dispalyContent = $('<div>'+content+'</div>').find("#page-" + publicationDataPage).html();

					// Display Zen Content
					output.html(dispalyContent);

				}
				upDate();

				
				function navigate(arrows){
						// ou qu'on est
						whereWeAre = zenPagesIndex.indexOf(publicationDataPage);

						//si on va a gauche
						if (arrows.attr("class") === "left"){

							// si on est pas dans l'index mais quand meme on est pas loin
							if (whereWeAre === -1 && publicationDataPage > zenPagesIndex[0] && publicationDataPage < zenPagesIndex[zenPagesIndex.length - 1]){

								while (zenPagesIndex.indexOf(publicationDataPage) === -1){
									publicationDataPage --;
								}
								whereWeAre = zenPagesIndex.indexOf(publicationDataPage);
							}

							if (whereWeAre != -1 && publicationDataPage > zenPagesIndex[0]){
								whereWeGo = zenPagesIndex[whereWeAre - 1];
								publicationDataPage = whereWeGo;
							}
							else {
								publicationDataPage = zenPagesIndex[zenPagesIndex.length -1];
							}
						}

						if (arrows.attr("class") === "right"){
							// si on est pas dans l'index mais quand meme on est pas loin
							if (whereWeAre === -1 && publicationDataPage > zenPagesIndex[0] && publicationDataPage < zenPagesIndex[zenPagesIndex.length - 1]){

								while (zenPagesIndex.indexOf(publicationDataPage) === -1){
									publicationDataPage ++;
								}
								whereWeAre = zenPagesIndex.indexOf(publicationDataPage);
							}

							if (whereWeAre != -1 && publicationDataPage <  zenPagesIndex[zenPagesIndex.length - 1]){
								whereWeGo = zenPagesIndex[whereWeAre + 1];
								publicationDataPage = whereWeGo;
							} 
							else {
								publicationDataPage = zenPagesIndex[0];
							}
						}
					upDate();
				}


				// lauch navigate
				$("nav .content svg").click(function(){
					navigate($(this));
				})


				// Close button

				// GO TO PAGE
			    function go(page) {
			        parent.postMessage('pageLoad/number/' + page, '*');
			        parent.postMessage('lightboxClose', '*');
			    }
			    // CLOSE IFRAME
			    function closePanel() {
			        parent.postMessage('api/lightbox.closeAll', '*');
			    }

				$("#close").click(function(){
					go(publicationDataPage);
					closePanel();
				})


			
        }); // Done
    } // End Get


    var input = "content/content.html";
    var output =  $('#output');
   	getContent(input,output);

}); // --- END ---