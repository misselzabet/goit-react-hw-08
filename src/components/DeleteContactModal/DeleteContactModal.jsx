// import { useHotkeys } from 'react-hotkeys-hook';
// import css from './DeleteContactModal.module.css';

// const DeleteContactModal = ({ contact, handleDelete, handleCancel }) => {
// 	useHotkeys('esc', () => handleCancel());

// 	return (
// 		<div className={css.modalOverlay}>
// 			<div className={css.modal}>
// 				<p>
// 					Are you sure you want to delete contact: <b>{contact.name}</b> ?
// 				</p>
// 				<div className={css.btnWrapper}>
// 					<button
// 						onClick={handleDelete}
// 						className={css.deleteBtn}
// 						type='button'
// 						aria-label='delete button'
// 					>
// 						Delete
// 					</button>
// 					<button
// 						onClick={handleCancel}
// 						className={css.cancelBtn}
// 						type='button'
// 						aria-label='cancel button'
// 					>
// 						Cancel
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default DeleteContactModal;

// import PropTypes from 'prop-types';
// import { useHotkeys } from 'react-hotkeys-hook';
// import css from './DeleteContactModal.module.css';

// const DeleteContactModal = ({ contact, handleDelete, handleCancel }) => {
//   useHotkeys('esc', () => handleCancel());

//   return (
//     <div className={css.modalOverlay}>
//       <div className={css.modal}>
//         <p>
//           Are you sure you want to delete contact: <b>{contact.name}</b>?
//         </p>
//         <div className={css.btnWrapper}>
//           <button
//             onClick={handleDelete}
//             className={css.deleteBtn}
//             type="button"
//             aria-label="delete button"
//           >
//             Delete
//           </button>
//           <button
//             onClick={handleCancel}
//             className={css.cancelBtn}
//             type="button"
//             aria-label="cancel button"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// DeleteContactModal.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   handleDelete: PropTypes.func.isRequired,
//   handleCancel: PropTypes.func.isRequired,
// };

// // export default DeleteContactModal;
// import Modal from 'react-modal';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../../redux/contacts/operations';
// import s from './ContactDeleteModal.module.css';

// Modal.setAppElement('#root');

// const ContactDeleteModal = ({ isOpen, onClose, contactId }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(contactId));
//     onClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       aria-modal="true"
//       className={s.modal}
//       overlayClassName={s.overlay}
//       shouldCloseOnOverlayClick={true}
//     >
//       <h3>Are you sure you want to delete the contact?</h3>
//       <div className={s.modalActions}>
//         <button onClick={onClose} className={s.cancelBtn}>
//           Cancel
//         </button>
//         <button onClick={handleDelete} className={s.confirmBtn}>
//           Delete
//         </button>
//       </div>
//     </Modal>
//   );
// };

// ContactDeleteModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   contactId: PropTypes.string.isRequired,
// };

// export default ContactDeleteModal;
import { useHotkeys } from 'react-hotkeys-hook';
import css from './DeleteContactModal.module.css';

const DeleteContactModal = ({ contact, handleDelete, handleCancel }) => {
	useHotkeys('esc', () => handleCancel());

	return (
		<div className={css.modalOverlay}>
			<div className={css.modal}>
				<p>
					Are you sure you want to delete contact: <b>{contact.name}</b> ?
				</p>
				<div className={css.btnWrapper}>
					<button
						onClick={handleDelete}
						className={css.deleteBtn}
						type='button'
						aria-label='delete button'
					>
						Delete
					</button>
					<button
						onClick={handleCancel}
						className={css.cancelBtn}
						type='button'
						aria-label='cancel button'
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteContactModal;