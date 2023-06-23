import { Modal, ModalBody, ModalHeader } from "reactstrap";

const CustomModal = ({ isOpen, toggle, size, modalHeader, modalBody }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size={size}>
      <ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
      <ModalBody>{modalBody}</ModalBody>
    </Modal>
  );
};

export default CustomModal;
