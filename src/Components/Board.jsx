import React from 'react'


const Board = ({board, onClick}) => {
    const size = [0, 1, 2];

    const renderCell = (x) => (y, index) =>
        <th key={index} onClick={() => onClick([x, y])}>
            {board[x][y]}
        </th>;

    const renderRow = (row, index) =>
        <tr key={index}>
            {size.map(renderCell(row))}
        </tr>;

    return (
        <table>
            <tbody>
            {size.map(renderRow)}
            </tbody>
        </table>
    );
};


export default Board