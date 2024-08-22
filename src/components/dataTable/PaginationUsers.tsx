import React, { useState } from "react";
import "./DataTable.css";
import users from "../../data/user.json";

type User = (typeof users)[number];

const columns = [
    { label: "Id", key: "id" },
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
    { label: "Occupation", key: "occupation" }
] as const;

const paginateUsers = (
    userList: Array<User>,
    page: number,
    pageSize: number
) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const pageUsers = userList.slice(start, end);
    const totalPages = Math.ceil(userList.length / pageSize);

    return { pageUsers, totalPages };
}

const PaginationUsers: React.FC = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const { totalPages, pageUsers } = paginateUsers(users, page, pageSize);

    return (<>
        <table className="pagination-table">
            <thead>
                <tr>
                    {columns.map(({ label, key }) => <th key={key}>{label}</th>)}
                </tr>
            </thead>
            <tbody>
                {pageUsers.map(({ id, name, age, occupation }) => <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{occupation}</td>
                </tr>)}
            </tbody>
        </table>
        <hr />
        <div className="pagination">
            <select
                onChange={(event) => {
                    setPageSize(Number(event.target.value));
                    setPage(1);
                }}
            >
                {[5, 10, 20].map((size) => <option key={size} value={size}>Show {size}</option>)}
            </select>

            <div className="pages">
                <button disabled={page === 1} onClick={() => {
                    setPage(page - 1)
                }}>Prev</button>
                <span>Page {page} of {totalPages}</span>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    </>)
}

export default PaginationUsers;