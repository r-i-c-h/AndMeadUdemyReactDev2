import moment from 'moment';

export default [
  {
    id:'1',
    description:'thing-1',
    note:'lorem ipsum 1',
    amount: 111,
    createdAt: 0
  },
  {
    id:'2',
    description:'the second',
    note:'',
    amount: 222,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id:'3',
    description:'los third-olio',
    note:'threeer',
    amount: 333,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
];