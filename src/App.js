import React, { useState } from "react";
import "./App.css";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// Set prende solo quelle uniche, se ho per tre volte la categoria "breakfast" mi prende solo la prima

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  function filterItems(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>
        <div className="underline"></div>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
