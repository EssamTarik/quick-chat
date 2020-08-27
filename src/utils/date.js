import { format } from 'date-fns';
import { dateTimeFormat } from '../config/date';

export const formatDateTime = (date) => format(new Date(date), dateTimeFormat)