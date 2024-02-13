const lat = 10.8231;
const lng = 106.6297;
const params = "windSpeed";

fetch(
  `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
  {
    headers: {
      Authorization:
        "40b111ce-584f-11ee-a26f-0242ac130002-40b11228-584f-11ee-a26f-0242ac130002",
    },
  }
)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });
