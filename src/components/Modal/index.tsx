import { ModalProps } from "intefaces/Interfaces";
import Modal from "react-modal";

export default function MainModal({
  isOpen,
  onClose,
  children,
}: React.PropsWithChildren<ModalProps>) {
  const closeModal = () => {
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          border: "none",
          background: "none",
        },
      }}
    >
      <div className="modal-container">
        <div className="header">
          <i className="close" onClick={closeModal} />
        </div>
        <div className="content">{children}</div>
      </div>
    </Modal>
  );
}
