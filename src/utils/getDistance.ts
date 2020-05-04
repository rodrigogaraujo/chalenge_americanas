import Geocode from "react-geocode";
import { getDistance } from "geolib";

export default async function getDistanceF(
    address: string,
    addressUser: string,
): Promise<number | null> {
    Geocode.setApiKey("API_KEY");

    Geocode.setLanguage("pt-br");

    Geocode.setRegion("br");

    const response = await Geocode.fromAddress(address);
    const response1 = await Geocode.fromAddress(addressUser);

    const { lat, lng } = response.results[0].geometry.location;

    const { lat: lat1, lng: lng1 } = response1.results[0].geometry.location;

    const distance =
        getDistance(
            { latitude: lat1, longitude: lng1 },
            { latitude: lat, longitude: lng },
            100,
        ) / 1000;

    return distance;
}
