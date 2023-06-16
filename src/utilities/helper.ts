const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const getMonthAndDay = (date: Date) => {
  const monthName = monthNames[date.getMonth()];
  const day = date.getDate();
  return `${monthName} ${day}`;
};
export function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}
export const getDiffTime = (srcDateTime: Date, dstDateTime: Date) => {
  const milliseconds = Math.abs(
    dstDateTime?.getTime() - srcDateTime?.getTime()
  );
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  seconds = seconds % 60;
  minutes = seconds >= 30 ? minutes + 1 : minutes;
  minutes = minutes % 60;
  hours = hours % 24;
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
};
export const getTimeString = (inputDate: Date) => {
  return `${inputDate?.getHours()}:${
    Number(inputDate?.getMinutes()) > 9
      ? inputDate?.getMinutes()
      : `0${inputDate?.getMinutes()}`
  }`;
};
