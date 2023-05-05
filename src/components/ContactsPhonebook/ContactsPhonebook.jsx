export const ContactsPhonebook = ({data, deleteContact}) => {
  // console.log(data);
  const filtered = data();
  return (
    <ul>
      {filtered.map(el => {
        return (
          <li key={el.id}>
            <span> {el.name}</span>
            <span> {el.number}</span>
            <button type="button" onClick={() => deleteContact(el.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
