import React from 'react'

function Pizza(props) {
    const {newOrder} = props

    return (
        <div>
            <h2>New Pizza is made!</h2>
            <p>Name : {newOrder.name}</p>
            <p>Size: {newOrder.size}</p>
            <p>Sauce: {newOrder.sauce}</p>
            <p>Special Instructions: {newOrder.specialInstructions}</p>
        </div>
    )
}

export default Pizza