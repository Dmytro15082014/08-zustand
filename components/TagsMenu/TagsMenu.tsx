"use client";
import { useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";

const allTag: string[] = [
  "All",
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

export const TagsMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={handleOpenMenu}>
        Notes ▾
      </button>
      {isOpenMenu && (
        <ul className={css.menuList}>
          {allTag.map((tag) => (
            <li key={tag} className={css.menuItem} onClick={handleOpenMenu}>
              <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
