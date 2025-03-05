import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

export interface MapPageProps {
    rota: { partida: string; destino: string } | null;
}

const defaultCenter = {
    lat: -23.561482,
    lng: -46.656537,
};

const mapStyles = [
    {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
    }
];

const MapPage = ({ rota }: MapPageProps) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAW3gZtPnvhFzyQsu5YehHgtPcf45ESQ7Q',
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [center, setCenter] = useState(defaultCenter);

    const onLoad = (map: google.maps.Map) => {
        map.setOptions({
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            fullscreenControl: false
        });
        setMap(map);
    };

    const onUnmount = () => {
        setMap(null);
    };

    useEffect(() => {
        if (!rota || !rota.partida || !rota.destino || !isLoaded) return;

        console.log("Buscando rota de:", rota.partida, "para:", rota.destino);

        // Usando DirectionsService para a nova Routes API
        const directionsService = new google.maps.DirectionsService();

        directionsService.route(
            {
                origin: rota.partida,
                destination: rota.destino,
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: false, // Não queremos alternativas
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    console.log("Rota encontrada:", result);
                    setDirections(result);

                    // Centraliza o mapa no ponto de partida
                    const newCenter = result.routes[0].legs[0].start_location;
                    setCenter(newCenter);
                    map?.setCenter(newCenter);
                    map?.setZoom(14);
                } else {
                    console.error("Erro ao buscar rota:", status);
                    alert("Erro ao calcular a rota: " + status);
                }
            }
        );
    }, [rota, isLoaded]);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {directions ? (
                <DirectionsRenderer directions={directions} />
            ) : (
                <Marker position={center} />
            )}
        </GoogleMap>
    ) : (
        <></>
    );
};

export default MapPage;
