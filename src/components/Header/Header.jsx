import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  let key = 0;

  const [items, setItems] = useState([
    { label: "sélection de projets", path: "/", key: 0 },
    { label: "index", path: "/index", key: 1 },
    { label: "à propos", path: "/about", key: 2 },
  ]);

  useEffect(() => {
    const initItems = [
      { label: "sélection de projets", path: "/" },
      { label: "index", path: "/index" },
      { label: "à propos", path: "/about" },
    ];

    const itemsUpdated = initItems.map((item) => {
      if (item.path === location.pathname) {
        return { ...item, label: item.label.concat(" ●") };
      } else {
        return {
          ...item,
          label: (
            <>
              {item.label}
              <span className="menu_bullet"> ●</span>
            </>
          ),
        };
      }
    });

    setItems(itemsUpdated);
  }, [location]);

  return (
    <header>
      <nav className="menu">
        <ul className="menu_un">
          <li>
            <Link to="/">Agathe Brütt</Link>
          </li>
          <li>
            <ul className="menu_deux">
              {items.map((item) => {
                key++;
                return (
                  <li key={key}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
