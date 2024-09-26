    const apiKey = process.env.MAPBOX_PUB_KEY;
	mapboxgl.accessToken = apiKey;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });


