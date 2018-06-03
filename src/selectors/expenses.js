
export default (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses.filter(exp => {  
    const startDateOK = typeof startDate !== 'number' || exp.createdAt >= startDate;
    const endDateOK = typeof endDate !== 'number' || exp.createdAt <= endDate;
    const textOK = exp.description.toLowerCase().includes(text.toLowerCase());
    return startDateOK && endDateOK && textOK;
  }).sort( (a,b) => {
    // if (sortBy === 'date'){ return a.createdAt - b.createdAt; }
    // if (sortBy === 'amount'){ return a.amount - b.amount; }
    if (sortBy === 'date'){ 
      return a.createdAt < b.createdAt ? 1 : -1; 
    } else if (sortBy === 'amount'){ 
      return a.amount < b.amount ? 1 : -1; 
    }
  });
};
