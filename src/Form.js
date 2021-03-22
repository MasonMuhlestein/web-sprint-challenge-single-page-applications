import React, {useState} from 'react'
import axios from 'axios'
import Pizza from './Pizza.js'

const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    specialInstructions: '',
    pepperoni: false,
    ham: false,
    sausage: false,
    bacon: false
}

function Form() {
    const [formValues, setFormValues]=useState(initialFormValues)
    const [newOrder, setNewOrder]=useState(initialFormValues)

    const postNewOrder = (newOrder) => {
        axios.post('https://reqres.in/', newOrder)
        .then((res) => {
            setNewOrder(newOrder)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        postNewOrder(formValues)
    }

    const onChange = (evt) => {
       const { name, value, type, checked } = evt.target; 
       const valueToUse = type ==="checkbox" ? checked : value;
       setFormValues({...formValues, [name]: valueToUse})
    }


    return (
        <form onSubmit={onSubmit}>
        <div className="form">
            <h2>Build Your Pizza!</h2>
            <label>Name
                <input
                value={formValues.name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>

            <label>
                <select name='size' value={formValues.size} onChange={onChange}>
                    <option>---Select a size---</option>
                    <option>Extra Large</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
            </label>


            <h2>Choice of Sauce</h2>
            <label>Red Sauce
                <input
                type="radio"
                name="sauce"
                value="red"
                checked={formValues.sauce === "red"}
                onChange={onChange}
                />
            </label>
            <label>Bbq sauce
                <input
                type="radio"
                name="sauce"
                value="bbq"
                checked={formValues.sauce === "bbq"}
                onChange={onChange}
                />
            </label>
            <label>Garlic Ranch
                <input
                type="radio"
                name="sauce"
                value="garlic"
                checked={formValues.sauce === "garlic"}
                onChange={onChange}
                />
            </label>
            <label>Spinach Alfredo
                <input
                type="radio"
                name="sauce"
                value="spinach"
                checked={formValues.sauce === "spinach"}
                onChange={onChange}
                />
            </label>

            <h2>Add Toppings</h2>
                <h4>Choose Toppings</h4>
            <label>Ham
                <input
                type="checkbox"
                name="ham"
                checked={formValues.ham}
                onChange={onChange}
                />
            </label>
            <label>Sausage
                <input
                type="checkbox"
                name="sausage"
                checked={formValues.sausage}
                onChange={onChange}
                />
            </label>
            <label>Pepperoni
                <input
                type="checkbox"
                name="pepperoni"
                checked={formValues.pepperoni}
                onChange={onChange}
                />
            </label>
            <label>Bacon
                <input
                type="checkbox"
                name="bacon"
                checked={formValues.bacon}
                onChange={onChange}
                />
            </label>

            <h2>Special Instructions</h2>
                <textarea
                name="specialInstructions"
                value={formValues.specialInstructions}
                onChange={onChange}
                placeholder="Anything else you'd like to add?"
                />

            <div className="add-to-order">
                <button id="submit-button" onClick={(evt)=> evt.preventDefault}>Add to order</button>
            </div>
            <Pizza newOrder={formValues}/>
        </div>
        </form>
    )
}

export default Form