import { ReactNode } from 'react';

interface Column {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  keyExtractor?: (row: any, index: number) => string | number;
}

export function DataTable({ columns, data, keyExtractor }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`text-${column.align || 'left'} py-3 px-4 text-sm text-gray-700`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={keyExtractor ? keyExtractor(row, index) : index}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`py-4 px-4 text-sm ${
                    column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
