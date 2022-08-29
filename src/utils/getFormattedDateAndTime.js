export default function getFormattedDateAndTime(date) {
  const dateArr = date.split("T");

  return dateArr[0] + " " + dateArr[1].slice(0, 5);
}
