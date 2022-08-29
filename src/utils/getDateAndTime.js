export function getFormattedDateAndTime(date) {
  const dateArr = date.split("T");

  return dateArr[0] + " " + dateArr[1].slice(0, 5);
}

export function getKoreanDateAndTime() {
  return new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString();
}
