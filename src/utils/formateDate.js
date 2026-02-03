// utils/formatDate.js
export const formatDate = (dateStr) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr; // fallback if invalid
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
