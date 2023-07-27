// import { useDisclosure } from "@mantine/hooks";
import { Group, Card, Image, Text, Avatar, createStyles } from "@mantine/core";
import { FaTrash } from "react-icons/fa";
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
  const { name, cover, description, convert_price } = selectItem;
  console.log(selectItem);
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="w-[647PX]">
          {/* <Card radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0}>
              <img alt="foot-image" src={selectItem?.cover} className="h-20 w-20 rounded" />
              <div className={classes.body}>
                <Text className={classes.title}>{selectItem?.name}</Text>
              </div>
              <div className={classes.body}>
                <Text className={classes.title}>{selectItem?.description}</Text>
              </div>
            </Group>
          </Card> */}
          {selectItem && selectItem ? (
            <>
              {" "}
              <div class="justify-between mb-4 mt-4 rounded-lg bg-white p-3  shadow-md sm:flex sm:justify-start">
                {/* <Image src={cover} alt="Landscape picture" width={800} height={500} /> */}
                <Image alt="food-img" src={cover} width={"82px"} height={"72px"} radius={"md"} />
                {/* <img src={cover} alt={"image"} srcset="food image" className="h-[72px] w-[72px] rounded" /> */}
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <Text class="text-sm font-semibold text-secondary">{name}</Text>
                    <Text class="text-xs font-semibold text-dark-50">{description}</Text>
                    <Text class="text-normal font-bold text-[#4DB759]">${convert_price}</Text>
                    {/* <p class="mt-1 text-sm font-semibold text-error">
                      Total : <span className="text-error">{updatedPrice}</span> $
                    </p> */}
                    {/* <p class="mt-1 text-sm font-semibold text-error">
            Total : <span className="text-error">{getCartTotal()}</span> $
          </p> */}
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex justify-between items-center   border-gray-100">
                      {/* <div className="mr-5"> */}
                      <span
                        // onClick={() => handleDecrement(_id)}
                        class="cursor-pointer rounded-l bg-[#FFA8A8] py-1 px-3.5 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF"
                      >
                        {" "}
                        -{" "}
                      </span>

                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="text"
                        // value={quantity}
                        // min="1"
                      />
                      <span
                        // onClick={() => handleIncrement(_id)}
                        class="cursor-pointer rounded-r bg-[#FFA8A8] py-1 px-3 mr-5 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                      >
                        {" "}
                        +{" "}
                      </span>
                      {/* </div> */}
                      <span
                      // onClick={() => removeFromCart(item)}
                      >
                        <FaTrash className="text-[#FFA8A8] hover:text-[#FF6B6B] transition duration-700 cursor-pointer" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}

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
