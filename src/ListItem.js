import React from 'react';
let props = {
    name: "sadas",
    price: 328
}


function ListItem({ name, id, price, icon, inStock }) {
    return (
        <li className='item-card'>
            <p className="name">{name}</p>
            <p className="id"> id: {id}</p>
            <p className="icon"> {icon}</p>
            {
                inStock > 0 ? <p className="price">price: {price}$</p> :
                    <span>not in stock</span>
            }

            {/* {children} */}
        </li>
    )
}

export default ListItem