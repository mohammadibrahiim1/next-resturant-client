import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

const CartModal = ({ opened, close, selectItem }) => {
  console.log(selectItem);
  //   const [opened, { close }] = useDisclosure(false);

  return (
    <>
      {/* <Modal opened={opened} onClose={close} title="Authentication">
        Modal content
      </Modal> */}
    </>
  );
};
export default CartModal;
