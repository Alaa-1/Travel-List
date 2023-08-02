import React from "react";

const Stats = ({ items }) => {
	const numItems = items.length;
	const numPacked = items.filter((oneItem) => oneItem.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100) || 0;
	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? "You got everything! Ready to go ✈️"
					: ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
			</em>
		</footer>
	);
};

export default Stats;
