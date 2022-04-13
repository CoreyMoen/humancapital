//------------- Open item drawer based on URL hash ---------------------
    $(function() {

        //Add ID to each item drawer trigger
        $("a[drawer='trigger']").each(function() {

            var itemSlug = $(this).find("[drawer='identifier']").text(); //get slug from hidden child element

            if (!$(this).hasClass("w-condition-invisible")) { //if not conditionally hidden
                $(this).attr('id', itemSlug); //add id of slug to drawer trigger
            }

        });

        //Add ID of item drawer trigger to URL as hash
        $("a[drawer='trigger']").on('click', function() {
            history.pushState({}, '', '#' + $(this).prop('id'));
        });

        //Function to get URL hash and open corresponding drawer
        function openDrawer() {
            //Get hash from URL and remove #
            var urlHash = window.location.hash;
            var urlID = urlHash.replace('#', '')

            if (urlID.length) {
                document.getElementById(urlID).click(); //click ID that matches hash in URL
            }
        }

        //On page load, if there is a hash in URL then run openDrawer
        if (typeof window.location.hash !== 'undefined') {
            openDrawer()
        }

        //If back button/forward used, run openDrawer
        $(window).on('hashchange', openDrawer);

    });
