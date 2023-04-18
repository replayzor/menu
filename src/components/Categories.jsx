function Categories({ categories, filterItems }) {
	const renderedButtons = categories.map((category) => {
		return (
			<button
				type="button"
				className="btn"
				key={category}
				onClick={() => filterItems(category)}
			>
				{category}
			</button>
		);
	});

	return <div className="btn-container">{renderedButtons}</div>;
}

export default Categories;
