export function formatDate(dt: number, timezoneOffset: number): string {
  let date = new Date((dt + timezoneOffset) * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.substr(-2);
}
