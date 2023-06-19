import isToday from 'date-fns/isToday';
import isTomorrow from 'date-fns/isTomorrow';

export abstract class Utils {
  static formatISODate(isoDate: string) {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    const period = date.getHours() >= 12 ? 'pm' : 'am';
    return `${formattedDate} ${formattedTime} ${period}`;
  }

  static getTimeFromISODate(isoDate: string) {
    const date = new Date(isoDate);
    return date.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit' });
  }

  static isToday = isToday;

  static isTomorrow = isTomorrow;
}
