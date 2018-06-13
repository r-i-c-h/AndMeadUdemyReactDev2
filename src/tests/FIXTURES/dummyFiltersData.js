import moment from 'moment';


const dummyFilterDataByDate = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const dummyFilterDataByAmount = {
  text: '',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3,'days')
};

export { dummyFilterDataByAmount, dummyFilterDataByDate };