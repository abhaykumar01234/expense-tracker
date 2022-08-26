export const getDate = (dateStr) => {
  const d = new Date(Date.parse(dateStr));
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
};

export const getCurrency = (curr) => {
  if (isNaN(curr)) return { value: 0, label: "" };
  const value = Number(curr).toFixed(2);
  return {
    value,
    label: new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "INR",
      unitDisplay: "long",
    }).format(curr),
  };
};
