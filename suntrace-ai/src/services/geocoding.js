const BASE_URL = "https://nominatim.openstreetmap.org/search";

export async function searchLocation(address) {
  const url = `${BASE_URL}?format=json&q=${encodeURIComponent(
    address
  )}&limit=1`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch location.");
  }

  const data = await response.json();

  if (data.length === 0) {
    throw new Error("Location not found.");
  }

  return {
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
    displayName: data[0].display_name,
  };
}