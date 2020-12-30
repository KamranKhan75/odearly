        let searchInput = 'search_input';
        $(document).ready(function () {
            let autoComplete;
            autoComplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
                types: ['geocode']
            });
        });