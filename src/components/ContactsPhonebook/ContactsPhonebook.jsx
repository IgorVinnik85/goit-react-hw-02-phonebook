import css from './ContactsPhonebook.module.css'


export const ContactsPhonebook = ({ data, deleteContact }) => {
  // console.log(data);
  const filtered = data();
  return (
    <ul className={css.list}>
      {filtered.map(el => {
        return (
          <li className={css.item} key={el.id}>
            <span> {el.name}</span>
            <span> {el.number}</span>
            <button className={css.btn} type="button" onClick={() => deleteContact(el.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
