export const getFormattedTimeStamp = (date: Date) => {
  const dt = new Date(date);
  var newDateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return dt.toLocaleString("en-US", newDateOptions);
};
