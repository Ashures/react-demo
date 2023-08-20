import { useState } from "react";

export function TodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;

        onSubmit(newItem);
        
        setNewItem("");
    }
    
    return (
        <form onSubmit={handleSubmit} className="add-item-form">
            <div className="form-row">
                <label htmlFor="item">Add Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
                <button id="btn">+</button>
            </div>
        </form>
    );
}