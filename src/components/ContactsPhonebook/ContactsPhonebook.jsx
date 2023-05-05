export const ContactsPhonebook = ({data}) => {
  // console.log(data);
  const filtered = data();
  return (
    <ul>
      {filtered.map(el => {
        return (
          <li key={el.id}>
            <span> {el.name}</span>
            <span> {el.number}</span>
          </li>
        );
      })}
    </ul>
  );
};
