import { useState, Fragment } from "react";
import { groupedData } from "data";
import { getDate } from "utils";
import cx from "classnames";
import s from "../Table/table.module.scss";

const GroupTable = () => {
  const [isOpenArr, setIsOpenArr] = useState(
    Object.keys(groupedData.data).reduce(
      (total, k, idx) => ({ ...total, [k]: idx === 0 }),
      {}
    )
  );

  const renderToggleColumn = (k) => (
    <div className="between">
      <span>{k}</span>
      <div className="iconBtn">{isOpenArr[k] ? "👇" : "👉"}</div>
    </div>
  );

  return (
    <table className={cx(s.table, s.groupTable)}>
      <thead>
        <tr>
          <th className={s.groupCol} style={{ width: "250px" }}>
            Category
          </th>
          <th style={{ width: "200px" }}>Date</th>
          <th style={{ width: "500px" }}>Reason</th>
          <th>Expense</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(groupedData.meta).map(([k, v]) => (
          <Fragment key={k}>
            {isOpenArr[k] && groupedData.data[k].length > 1 ? (
              <>
                <tr>
                  <td
                    onClick={() => setIsOpenArr((s) => ({ ...s, [k]: !s[k] }))}
                    rowSpan={groupedData.data[k].length + 1}
                    className={s.groupCol}
                  >
                    {renderToggleColumn(k)}
                  </td>
                  <td>{getDate(groupedData.data[k][0]["Date"])}</td>
                  <td>{groupedData.data[k][0]["Reason"]}</td>
                  <td>{groupedData.data[k][0]["Expense"].toFixed(2)}</td>
                </tr>
                {groupedData.data[k].slice(1).map((row, idx) => (
                  <tr key={idx}>
                    <td>{getDate(row["Date"])}</td>
                    <td>{row["Reason"]}</td>
                    <td>{row["Expense"].toFixed(2)}</td>
                  </tr>
                ))}
                {groupedData.data[k].length > 1 && (
                  <tr className={s.aggregate}>
                    <td colSpan={2} style={{ borderRightWidth: 0 }}>
                      Expenses for {k} :
                    </td>
                    <td>{Number(v).toFixed(2)}</td>
                  </tr>
                )}
              </>
            ) : groupedData.data[k].length > 1 ? (
              <tr>
                <td
                  onClick={() => setIsOpenArr((s) => ({ ...s, [k]: !s[k] }))}
                  className={s.groupCol}
                >
                  {renderToggleColumn(k)}
                </td>
                <td colSpan={2}>&nbsp;</td>
                <td className={s.aggregate}>{Number(v).toFixed(2)}</td>
              </tr>
            ) : (
              <tr>
                <td className={s.groupCol}>{k}</td>
                <td>{getDate(groupedData.data[k][0]["Date"])}</td>
                <td>{groupedData.data[k][0]["Reason"]}</td>
                <td>{Number(v).toFixed(2)}</td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} style={{ borderRightWidth: 0 }}>
            Total
          </td>
          <td> {Number(groupedData.total).toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default GroupTable;
