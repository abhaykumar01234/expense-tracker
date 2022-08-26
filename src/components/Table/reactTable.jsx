import { useState, Fragment } from "react";
import { expenses } from "data";
import { getDate, getCurrency } from "utils";
import cx from "classnames";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import s from "./table.module.scss";

const data = expenses["Aug 22"];
const total = getCurrency(
  data.reduce((total, curr) => (total += curr["Expense"]), 0)
);

const columns = [
  {
    header: "Category",
    accessorKey: "Category",
    cell: (info) => <td style={{ width: "250px" }}>{info.getValue()}</td>,
    footer: () => <td style={{ borderRightWidth: 0 }}>Total</td>,
  },
  {
    header: "Date",
    accessorKey: "Date",
    accessorFn: (row) => getDate(row["Date"]),
    cell: (info) => <td style={{ width: "200px" }}>{info.getValue()}</td>,
    footer: () => <td colSpan={2}>&nbsp;</td>,
  },
  {
    header: "Reason",
    accessorKey: "Reason",
    cell: (info) => <td style={{ width: "500px" }}>{info.getValue()}</td>,
    enableSorting: false,
  },
  {
    header: "Expense",
    accessorKey: "Expense",
    cell: (info) => (
      <td
        align="right"
        className={cx(
          {
            [s.danger]: getCurrency(info.getValue()).value > 800,
          },
          s.currency
        )}
      >
        {getCurrency(info.getValue()).label}
      </td>
    ),
    footer: () => <td align="right">{total.value}</td>,
  },
];

const Table = () => {
  const [sorting, setSorting] = useState([{ id: "Date", desc: false }]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className={s.table}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                onClick={header.column.getToggleSortingHandler()}
                className={cx({
                  [s.isSortable]: header.column.getCanSort(),
                  [s.isAsc]: header.column.getIsSorted() === "asc",
                  [s.isDesc]: header.column.getIsSorted() === "desc",
                })}
              >
                {header.isPlaceholder ? null : (
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <div className={s.sortIcon}>
                      {header.column.getCanSort() &&
                        (!header.column.getIsSorted() ? (
                          <span className={s.icon}>⏫</span>
                        ) : (
                          {
                            asc: "🔼",
                            desc: "🔽",
                          }[header.column.getIsSorted()]
                        ))}
                    </div>
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Fragment key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Fragment>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <Fragment key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </Fragment>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default Table;
