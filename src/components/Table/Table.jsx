// components/Table.jsx
import React from "react";
import { Pencil, Trash2 } from "lucide-react"; // modern icons

const Table = ({ columns, data, onEdit, onDelete }) => {
    return (
        <div className="overflow-hidden  bg-white rounded-md"
           >
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    {/* Header */}
                    <thead className="bg-[#F2F4F8]">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.accessor}
                                    className="px-6 py-4 text-left text-sm  font-semibold text-[#202C4B] uppercase tracking-wider"
                                >
                                    {col.header}
                                </th>
                            ))}
                            {/* Extra column for actions */}
                            <th className="px-6 py-4 text-left text-sm  font-semibold text-[#202C4B] uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-gray-200">
                        {data.length > 0 ? (
                            data.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    {columns.map((col) => (
                                        <td
                                            key={col.accessor}
                                            className="px-6 py-4 text-[#202C4B] whitespace-nowrap text-sm"
                                        >
                                            {row[col.accessor]}
                                        </td>
                                    ))}
                                    {/* Action buttons */}
                                    <td className="px-6 py-4 flex gap-3">
                                        <button
                                            onClick={() => onEdit(row)}
                                            className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                                        >
                                            <Pencil size={14} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(row)}
                                            className="text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="text-center px-6 py-10 text-gray-400 text-sm"
                                >
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
