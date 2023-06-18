import differenceInDays from 'date-fns/differenceInDays';

export abstract class Utils {
  static convertISODate(isoDate: string) {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    const period = date.getHours() >= 12 ? 'pm' : 'am';
    return `${formattedDate} ${formattedTime} ${period}`;
  }

  static differenceInDays = differenceInDays;
}
