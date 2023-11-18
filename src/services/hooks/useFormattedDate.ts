import { useAppSelector } from '@/redux/redux.hook';
import moment from 'moment';

const useFormattedDate = () => {
  const currentTime = useAppSelector(state => state.datetime.current);
  const userLocale = useAppSelector(state => state.userSettings.locale) || 'en';

  // Set moment's locale and format the date
  moment.locale(userLocale);
  const formattedDate = moment(currentTime).format('LLLL');

  return formattedDate;
};

export default useFormattedDate;