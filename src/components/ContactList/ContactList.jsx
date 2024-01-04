import { useDispatch,useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { selectError, selectIsLoading, selectVisibleContact } from 'store/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operations';



export const ContactList = () => {
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
const visibleContacts = useSelector(selectVisibleContact);
const dispatch = useDispatch();
useEffect(()=> {
  dispatch(fetchContacts());
}, [dispatch]);


 
  return (
    <List>

{isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id}>
          <ContactItem
            name={name}
            number={number}
            id={id}
            // onDelete={onDelete}
          />
        </li>
      ))}
    </List>
  );
};
