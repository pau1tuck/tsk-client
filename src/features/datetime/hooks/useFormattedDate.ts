import { useAppSelector } from '@/redux/redux.hook';
import moment from 'moment';

const useFormattedDate = () => {
  const currentDatetime = useAppSelector(state => state.datetime.current);
  const userLocale = useAppSelector(state => state.languageSettings.locale) || 'en';

  // Set moment's locale and format the date
  moment.locale(userLocale);
  const formattedDate = moment(currentDatetime).format('LLLL');

  return formattedDate;
};

export default useFormattedDate;