// Get the VISIBLE expenses:
import moment from 'moment';

export default (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses.filter( exp => {  
    const expTIme = moment(exp.createdAt);
    const startDateOK = startDate ? startDate.isSameOrBefore(expTIme,'day') : true;
    const endDateOK = endDate ? endDate.isSameOrAfter(expTIme,'day') : true;
    const textOK = exp.description.toLowerCase().includes(text.toLowerCase());
    return startDateOK && endDateOK && textOK;
  }).sort( (a,b) => {
    if (sortBy === 'date'){ 
      return a.createdAt < b.createdAt ? 1 : -1; 
    } else if (sortBy === 'amount'){ 
      return a.amount < b.amount ? 1 : -1; 
    }
  });
};