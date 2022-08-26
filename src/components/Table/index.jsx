import { expenses } from "data";
import { getDate } from "utils";
import cx from "classnames";
import s from "./table.module.scss";

const data = expenses["Aug 22"];
const total = Number(
  data.reduce((total, curr) => (total += curr["Expense"]), 0)
).toFixed(2);

const Table = () => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>Category</th>
          <th style={{ width: "200px" }}>Date</th>
          <th style={{ width: "500px" }}>Reason</th>
          <th>Expense</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row["Category"]}</td>
            <td>{getDate(row["Date"])}</td>
            <td>{row["Reason"]}</td>
            <td
              align="right"
              className={cx({
                [s.danger]: Number(row["Expense"]).toFixed(2) > 800,
              })}
            >
              {Number(row["Expense"]).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td style={{ borderRightWidth: 0 }}>Total</td>
          <td colSpan={2}>&nbsp;</td>
          <td align="right">{total}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
