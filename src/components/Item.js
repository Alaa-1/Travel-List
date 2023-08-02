import React from "react";

const Item = ({ item, onToggleItem, onDeleteItem }) => {
	return (
		<li>
			<input
				type="checkbox"
				onChange={() => onToggleItem(item.id)}
				value={item.packed}
			/>

			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>

			<button
				onClick={() => {
					onDeleteItem(item.id);
				}}
			>
				❌
			</button>
		</li>
	);
};

export default Item;
