// import { useDisclosure } from "@mantine/hooks";
import { Group, Card, Image, Text, Avatar, createStyles } from "@mantine/core";
// import { useContext } from "react";
// import { ApiContext } from "../../Context/DataContext";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

const CartModal = ({ selectItem }) => {
  const { classes } = useStyles();
  // const { name } = selectItem;
  console.log(selectItem);
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <Card radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0}>
              <img alt="foot-image" src={selectItem?.cover} className="h-20 w-20 rounded" />
              <div className={classes.body}>
                <Text className={classes.title}>{selectItem?.name}</Text>
              </div>
              <div className={classes.body}>
                <Text className={classes.title}>{selectItem?.description}</Text>
              </div>
            </Group>
          </Card>

          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartModal;
