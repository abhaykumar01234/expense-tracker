const { expenses } = require("./index");

const data = expenses["Aug 22"];

const groupedData = data.reduce(
  (total, curr) => {
    const { Category, ...rest } = curr;

    total.data[curr["Category"]] = Array.isArray(total.data[curr["Category"]])
      ? [...total.data[curr["Category"]], rest]
      : [rest];

    total.meta[curr["Category"]] =
      (total.meta[curr["Category"]] || 0) +
      (Number.isFinite(curr["Expense"]) ? curr["Expense"] : 0);

    return total;
  },
  {
    data: {},
    meta: {},
  }
);

console.log(JSON.stringify(groupedData, null, 2));
