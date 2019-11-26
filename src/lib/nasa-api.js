import { getRandomDate } from "./helpers";

/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'sZuQKCRqW5kKj6GrOjPVclbF30UmAdsNdDcGmEt1';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  const randomDate = getRandomDate(new Date(1995, 5, 16, 0, 0, 0), new Date());

  const formattedDate = `${randomDate.getFullYear()}-${randomDate.getMonth() + 1}-${randomDate.getDate}`;

  const response = await fetch(`${URL}?api_key=${API_KEY}&date=${formattedDate}`);

  const json = await response.json();

  return json;
}
