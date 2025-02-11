// import Contact from '../Contact/Contact';
// import css from './ContactList.module.css';


// const ContactList = ({ contacts }) => {
// 	return (
// 		<ul className={css.contactList}>
// 			{contacts.map((contact) => (
// 				<Contact key={contact.id} contact={contact} />
// 			))}
// 		</ul>
// 	);
// };

// export default ContactList;

// import PropTypes from 'prop-types';
// import Contact from '../Contact/Contact';
// import css from './ContactList.module.css';

// const ContactList = ({ contacts }) => {
//   return (
//     <ul className={css.contactList}>
//       {contacts.map((contact) => (
//         <Contact key={contact.id} contact={contact} />
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default ContactList;
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';


const ContactList = ({ contacts }) => {
	return (
		<ul className={css.contactList}>
			{contacts.map((contact) => (
				<Contact key={contact.id} contact={contact} />
			))}
		</ul>
	);
};

export default ContactList;