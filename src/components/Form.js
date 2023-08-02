import React from "react";
import { useState } from "react";

const Form = ({ items, setItems }) => {
	const [oneItem, setOneItem] = useState({
		id: Date.now(),
		description: "",
		quantity: 1,
		packed: false,
	});
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!oneItem.description) return;

		const tempOneItem = {
			id: oneItem.id,
			description: oneItem.description,
			quantity: oneItem.quantity,
			packed: oneItem.packed,
		};
		setItems([...items, tempOneItem]);
		setOneItem({
			id: Date.now(),
			description: "",
			quantity: 1,
			packed: false,
		});
	};
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 🤩 trip?</h3>
			<select
				onChange={(e) => setOneItem({ ...oneItem, quantity: e.target.value })}
				value={oneItem.quantity}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
					return (
						<option key={num} value={num}>
							{num}
						</option>
					);
				})}
			</select>
			<input
				type="text"
				onChange={(e) =>
					setOneItem({ ...oneItem, description: e.target.value })
				}
				value={oneItem.description}
			/>
			<button>Add</button>
		</form>
	);
};

export default Form;
