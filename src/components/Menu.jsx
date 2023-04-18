import MenuItem from "./MenuItem";

function Menu({ menuItems }) {
	const renderedMenu = menuItems.map((item) => {
		return <MenuItem key={item.id} {...item} />;
	});

	return <div className="section-center">{renderedMenu}</div>;
}

export default Menu;
