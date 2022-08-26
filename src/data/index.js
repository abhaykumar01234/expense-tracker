export const expenses = {
  "Aug 22": [
    {
      Date: "08/01/2022",
      Reason: "airtel recharge 9955407297",
      Expense: 99,
      Category: "Recharge",
    },
    {
      Date: "08/01/2022",
      Reason: "Zomato",
      Expense: 334.15,
      Category: "Food",
    },
    {
      Date: "08/02/2022",
      Reason: "Zomato",
      Expense: 180,
      Category: "Food",
    },
    {
      Date: "08/02/2022",
      Reason: "Swiggy Cold Coffee",
      Expense: 236,
      Category: "Food",
    },
    {
      Date: "08/03/2022",
      Reason: "Mall Ek Villain returns + pizza",
      Expense: 1073,
      Category: "Outing",
    },
    {
      Date: "08/03/2022",
      Reason: "Irctc Bilaspur to Purulia Barkha train",
      Expense: 958.95,
      Category: "Travel",
    },
    {
      Date: "08/03/2022",
      Reason: "Zomato - Dominos Pizza",
      Expense: 418.78,
      Category: "Food",
    },
    {
      Date: "08/04/2022",
      Reason: "Zomato - Dominos Pizza",
      Expense: 213.84,
      Category: "Food",
    },
    {
      Date: "08/09/2022",
      Reason: "Zomato",
      Expense: 83.73,
      Category: "Food",
    },
    {
      Date: "08/10/2022",
      Reason: "Zomato",
      Expense: 149,
      Category: "Food",
    },
    {
      Date: "08/12/2022",
      Reason: "Zomato",
      Expense: 194,
      Category: "Food",
    },
    {
      Date: "08/13/2022",
      Reason: "Flight Banglore to Ranchi AmazonPay",
      Expense: 2824,
      Category: "Travel",
    },
    {
      Date: "08/13/2022",
      Reason: "Flight Banglore to Ranchi AmazonPay Wallet Used",
      Expense: 1065,
      Category: "Travel",
    },
    {
      Date: "08/13/2022",
      Reason: "Flight Ranchi to Banglore Cleartrip",
      Expense: 8320,
      Category: "Travel",
    },
    {
      Date: "08/15/2022",
      Reason: "Zomato",
      Expense: 112.95,
      Category: "Food",
    },
    {
      Date: "08/16/2022",
      Reason: "Irctc train ranchi to bokaro",
      Expense: 81.8,
      Category: "Travel",
    },
    {
      Date: "08/16/2022",
      Reason: "Irctc train bokaro to siliguri",
      Expense: 1943.6,
      Category: "Travel",
    },
    {
      Date: "08/16/2022",
      Reason: "Irctc train siliguri to bokaro",
      Expense: 1943.6,
      Category: "Travel",
    },
    {
      Date: "08/17/2022",
      Reason: "Amazon Trolley Travelling",
      Expense: 5099,
      Category: "Travel",
    },
    {
      Date: "08/18/2022",
      Reason: "Dominos Pizza",
      Expense: 416,
      Category: "Food",
    },
    {
      Date: "08/20/2022",
      Reason: "Zomato",
      Expense: 93,
      Category: "Food",
    },
    {
      Date: "08/21/2022",
      Reason: "Zomato",
      Expense: 155.5,
      Category: "Food",
    },
    {
      Date: "08/23/2022",
      Reason: "Zomato",
      Expense: 126.08,
      Category: "Food",
    },
    {
      Date: "08/25/2022",
      Reason: "Dad Ranchi Medicines",
      Expense: 4750,
      Category: "Medicine",
    },
    {
      Date: "08/25/2022",
      Reason: "Zomato",
      Expense: 115,
      Category: "Food",
    },
    {
      Date: "08/25/2022",
      Reason: "Wifi Recharge",
      Expense: 470.82,
      Category: "Recharge",
    },
    {
      Date: "08/25/2022",
      Reason: "Vellore me+dad+mom flight IXR-TIR",
      Expense: 46617,
      Category: "Travel",
    },
    {
      Date: "08/25/2022",
      Reason: "Amazon Prime membership",
      Expense: 179,
      Category: "Recharge",
    },
    {
      Date: "08/26/2022",
      Reason: "Vellore barkha flight IXR-TIR-RPR",
      Expense: 15543,
      Category: "Travel",
    },
  ],
  "June 22": [
    {
      Date: "06/24/2022",
      Reason: "Amazon Washing Machine",
      Expense: 15830,
      Category: "Shopping",
    },
    {
      Date: "06/28/2022",
      Reason: "Chandigarh Ranchi me+sumi flight",
      Expense: 27400,
      Category: "Travel",
    },
  ],
};

const data = expenses["Aug 22"];

export const groupedData = data.reduce(
  (obj, curr) => {
    const { Category, ...rest } = curr;

    obj.data[curr["Category"]] = Array.isArray(obj.data[curr["Category"]])
      ? [...obj.data[curr["Category"]], rest]
      : [rest];

    obj.meta[curr["Category"]] =
      (obj.meta[curr["Category"]] || 0) +
      (Number.isFinite(curr["Expense"]) ? curr["Expense"] : 0);

    obj.total += Number.isFinite(curr["Expense"]) ? curr["Expense"] : 0;

    return obj;
  },
  {
    data: {},
    meta: {},
    total: 0,
  }
);

// module.exports = { expenses, groupedData };
