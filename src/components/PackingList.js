import React from "react";
import Item from "./Item";
import { useState } from "react";

const PackingList = ({ items, setItems }) => {
	const onToggleItem = (itemId) => {
		setItems(
			items.map((oneItem) =>
				oneItem.id === itemId
					? { ...oneItem, packed: !oneItem.packed }
					: oneItem
			)
		);
	};

	const onDeleteItem = (itemId) => {
		setItems(items.filter((oneItem) => oneItem.id !== itemId));
	};

	const onClearItems = () => {
		setItems([]);
	};

	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	if (sortBy === "input") sortedItems = items;

	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));

	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onToggleItem={onToggleItem}
						onDeleteItem={onDeleteItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button
					onClick={() => {
						onClearItems();
					}}
				>
					Clear list
				</button>
			</div>
		</div>
	);
};

export default PackingList;
