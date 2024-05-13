export const convertTempInKelvinToCelsiusWithDecimal = (tempInKelvin: number): string | null => {
  if (typeof tempInKelvin !== 'number' || Number.isNaN(tempInKelvin)) {
    return null; // Invalid parameter, return null
  }

  // Subtracting 273.15 from the temperature in Kelvin gives the temperature in Celsius
  const tempInCelsius = tempInKelvin - 273.15;
  return tempInCelsius.toFixed(1);
};

export const convertUnixTimestampToDateTime12HourFormat = (
  unixTimeStamp: number
): string | null => {
  if (typeof unixTimeStamp !== 'number' || Number.isNaN(unixTimeStamp)) {
    return null; // Invalid parameter, return null
  }

  const dtDateTime = new Date(unixTimeStamp * 1000);
  const year = dtDateTime.getFullYear();
  const month = String(dtDateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dtDateTime.getDate()).padStart(2, '0');
  const hours = String(dtDateTime.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(dtDateTime.getMinutes()).padStart(2, '0');
  const ampm = dtDateTime.getHours() >= 12 ? 'PM' : 'AM';

  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
};
