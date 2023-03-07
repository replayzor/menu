import { useState } from "react";

import Title from "./components/Title";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(data);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(data);
			return;
		}
		const newMenu = data.filter((item) => item.category === category);
		setMenuItems(newMenu);
	};

	return (
		<main>
			<section className="menu">
				<Title title="Our Menu" />
				<Categories categories={categories} filterItems={filterItems} />
				<Menu menuItems={menuItems} />
			</section>
		</main>
	);
}

export default App;
