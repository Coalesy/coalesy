export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Get date components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Get time components
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Get timezone offset in hours
  const timezoneOffset = -date.getTimezoneOffset() / 60;
  const timezone = `UTC${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset}`;

  // Format the date as `29/05/2024 10:00 AM UTC+1`
  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm} ${timezone}`;
};
