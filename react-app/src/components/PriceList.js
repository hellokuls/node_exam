import React from "react";

const PriceList = ({items, onModifyItem, onDeleteItem }) => {

    return (
        // <h1>这里</h1>
        <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center"
                        key={item.id}>
                        <span className="col-1 text-primary"> {item.category.name} </span>
                        <span className="col-5"> {item.title} </span>
                        <span className="col-2 fw-bold">
                            {(item.category.type === 'income' ? '+' : '-')}
                            {item.price}
                        </span>
                        <span className="col-1"> {item.date} </span>

                        <button className="col-1 btn btn-primary">
                            编辑
                        </button>

                        <button className="col-1 btn btn-danger">
                            删除
                        </button>
                    </li>
                ))
            }
        </ul>

    )
}


export default PriceList