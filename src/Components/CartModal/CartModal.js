import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

const CartModal = ({ cart }) => {
  console.log(cart);
  const [opened, { open, close }] = useDisclosure(false);

  if (open) {
    return true;
  }
  //   const [opened, { close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>
    </>
  );
};
export default CartModal;
