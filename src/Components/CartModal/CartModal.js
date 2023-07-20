import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

const CartModal = ({ cart, isOpen, onClose }) => {
  console.log(cart);

  if (!isOpen) {
    return true;
  }
  //   const [opened, { close }] = useDisclosure(false);

  return (
    <>
      <Modal
        // isOpen={isModalOpen}
        //  opened={opened}
        onClick={onClose}
        title="Authentication"
      >
        Modal content
      </Modal>
    </>
  );
};
export default CartModal;
