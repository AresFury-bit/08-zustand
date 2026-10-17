import css from "./SidebarNotes.module.css";
export default function SidebarNotes() {
  const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];
  return (
    <>
      <ul className={css.menuList}>
        <li>
          <a href={`/notes/action/create`}>Create note</a>
        </li>
        <li className={css.menuItem}>
          <a href={`/notes/filter/all`} className={css.menuLink}>
            All notes
          </a>
        </li>
        {tags.map((tag) => (
          <li className={css.menuItem} key={tag}>
            <a href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
