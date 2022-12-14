// eslint-disable-next-line
export default (invoices = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_FILTER_INVOICES":
      return action.payload;
    case "CREATE":
      return [...invoices, action.payload];
    case "UPDATE":
      return invoices.map((invoice) =>
        invoice.id === action.payload.id ? action.payload : invoice
      );
    case "PAID":
      return invoices.map((invoice) =>
        invoice.id === action.payload.id ? action.payload : invoice
      );
    case "DELETE":
      return invoices.filter((invoice) => invoice.id !== action.payload);
    default:
      return invoices;
  }
};
