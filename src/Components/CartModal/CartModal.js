// import { useDisclosure } from "@mantine/hooks";
import {
  Group,
  Card,
  Image,
  Text,
  Avatar,
  createStyles,
  Checkbox,
  Textarea,
  Button,
  Drawer,
  Radio,
} from "@mantine/core";
import { addToCart } from "../../redux/action/action";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { ADD_TO_CART } from "../../redux/actionTypes/actionTypes";
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
  addon_container: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
  },
}));

const CartModal = ({
  selectItem,
  count,
  foodItemCount,
  handleDecrement,
  handleIncrement,
  addonsQuantity,
  incrementFoodItem,
  decrementFoodItem,
  setAddonsQuantity,
}) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const modal = useSelector((state) => state.item.modal);
  console.log(modal);
  const { name, cover, description, convert_price, itemAttributes, extras, addons } = modal;
  // console.log(selectItem);

  const handleAddonsDecrement = (id) => {
    const decrementItem = addons.filter((addon) => {
      if (addon.id === id && addon.quantity > 1) {
        return {
          ...addon,
          quantity: 1,
          quantity: addon.quantity - 1,
        };
      }
      // return addon;
    });
    // if (addonsQuantity > 1) {
    setAddonsQuantity(decrementItem);
    // }
    // setCount(count - 1);
  };

  const handleAddonsIncrement = (id) => {
    const incrementItem = addons.map((addon) => {
      if (addon.id === id) {
        return {
          ...addon,
          quantity: 1,
          quantity: addon.quantity + 1,
        };
      }
      // return addon;
    });
    setAddonsQuantity(incrementItem);
  };

  const updatedPrice = convert_price * foodItemCount;
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="w-[650px] p-5 bg-[#FFFFFF] rounded-lg">
          <div className="flex justify-between items-start  gap-2">
            <div>
              {selectItem && selectItem ? (
                <>
                  {" "}
                  <div className="justify-between mb-4 rounded-lg bg-white shadow sm:flex sm:justify-start p-1">
                    <Image alt="food-img" src={cover} width={"95px"} height={"85px"} radius={"md"} />

                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <Text className="text-sm font-semibold text-[#FF6B6B]">{name}</Text>
                        <Text className="text-xs font-semibold text-dark-50">{description}</Text>
                        <div className="mt-2 pe-1 flex justify-between">
                          <div className="flex justify-between items-center border-gray-100">
                            {/* <div className="mr-5"> */}
                            <span
                              onClick={decrementFoodItem}
                              className="cursor-pointer rounded-l bg-[#FFA8A8] py-0 px-3 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                            >
                              {" "}
                              -{" "}
                            </span>

                            <input
                              className="h-6 w-8 border  bg-white text-center text-xs outline-none"
                              type="text"
                              value={foodItemCount}
                            />
                            <span
                              onClick={incrementFoodItem}
                              className="cursor-pointer rounded-r bg-[#FFA8A8] py-0 px-3  duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                            >
                              {" "}
                              +{" "}
                            </span>
                            {/* </div> */}
                            <span
                            // onClick={() => removeFromCart(item)}
                            >
                              {/* <FaTrash className="text-[#FFA8A8] hover:text-[#FF6B6B] transition duration-700 cursor-pointer" /> */}
                            </span>
                          </div>
                          <Text className="text-normal font-bold text-[#4DB759]">${updatedPrice}</Text>
                        </div>

                        {/* <p className="mt-1 text-sm font-semibold text-error">
                      Total : <span className="text-error">{updatedPrice}</span> $
                    </p> */}
                        {/* <p className="mt-1 text-sm font-semibold text-error">
            Total : <span className="text-error">{getCartTotal()}</span> $
          </p> */}
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"></div>
                    </div>
                  </div>
                  <div></div>
                  {/* <div>
                    {itemAttributes?.map((itemAttribute) => (
                      <>
                        <Text size={"sm"} fw={"bold"}>
                          {itemAttribute.name}
                        </Text>
                        <Radio.Group
                          name="favoriteFramework"
                          label="Select your favorite framework/library"
                          description="This is anonymous"
                          withAsterisk
                        >
                          <Group mt="xs">
                            <Radio value="react" label="React" />
                            <Radio value="svelte" label="Svelte" />
                            <Radio value="ng" label="Angular" />
                            <Radio value="vue" label="Vue" />
                          </Group>
                        </Radio.Group>
                      </>
                    ))}
                  </div> */}
                  <div>
                    {extras?.length ? (
                      <>
                        <Text size={"xs"} fw={"bold"} py={3}>
                          Extras
                        </Text>
                        <div className="flex items-center gap-2">
                          {extras?.map((extra) => (
                            <>
                              <div className="border flex items-center gap-2 shadow p-1  rounded-md  w-[109px] ">
                                {/* <input type="checkbox" /> */}
                                <Checkbox color="pink" size="xs" />
                                <div className="py-1">
                                  <Text size={"xs"} fw={"bold"}>
                                    {extra.name}
                                  </Text>

                                  <Text size={"sm"} fw={"bold"} c={"#6EC478"}>
                                    ${extra.flat_price}
                                  </Text>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {addons?.length ? (
                      <div>
                        <Text size={"xs"} fw={"bold"} py={3}>
                          Addons
                        </Text>
                        <div className={classes.addon_container}>
                          {addons?.map((addon) => (
                            <>
                              <div className=" shadow p-1  mb-4 mt-1 rounded-lg bg-white  sm:flex sm:justify-start border h-[79px] ">
                                <Image alt="food-img" src={addon.cover} width={"95px"} height={"69px"} radius={"xs"} />

                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                  <div className="mt-5 sm:mt-0">
                                    <Text className="text-xs font-semibold text-secondary">{addon.addon_item_name}</Text>
                                    {/* <Text className="text-xs font-semibold text-dark-50">{description}</Text> */}
                                    <div className="mt-2 pe-1 flex flex-col justify-between">
                                      <div className="flex justify-between items-center border-gray-100 w-16">
                                        {/* <div className="mr-5"> */}
                                        <span
                                          onClick={() => handleAddonsDecrement(addon.id)}
                                          className="cursor-pointer rounded-l bg-[#FFA8A8] py-0 px-3 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                                        >
                                          {" "}
                                          -{" "}
                                        </span>

                                        <input
                                          className="h-6 w-8 border  bg-white text-center text-xs outline-none"
                                          type="text"
                                          value={addonsQuantity}
                                        />
                                        <span
                                          onClick={() => handleAddonsIncrement(addon.id)}
                                          className="cursor-pointer rounded-r bg-[#FFA8A8] py-0 px-3 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                                        >
                                          {" "}
                                          +{" "}
                                        </span>
                                        {/* </div> */}
                                        <span
                                        // onClick={() => removeFromCart(item)}
                                        ></span>
                                      </div>
                                      <Text className="text-normal font-bold text-[#4DB759]">
                                        ${addon.addon_item_flat_price}
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"></div>
                                </div>
                              </div>
                              {/* <div className="border flex items-center gap-2 rounded-md ps-1 pe-1 w-[109px] ">
                            <input type="checkbox" />
                            <Checkbox color="pink" size="xs" />
                            <div className="py-1">
                              <Text size={"xs"} fw={"bold"}>
                                {addon.addon_item_name}
                              </Text>

                              <Text size={"sm"} fw={"bold"} c={"#6EC478"}>
                                ${addon.addon_item_flat_price}
                              </Text>
                            </div>
                          </div> */}
                            </>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Add note (extra mayo, cheese, etc)"
                      label="Special Instruction"
                      radius="md"
                      size="xs"
                      // autosize
                      fw={"bold"}
                    />
                  </div>
                </>
              ) : null}
            </div>
            <div className="modal-action">
              <label
                htmlFor="my_modal_6"
                className=" border rounded-3xl p-1 duration-700 cursor-pointer bg-[#FFFFFF] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-[#FFFFFF] border-[#FF6B6B] hover:border-[#FF6B6B] "
              >
                <MdClose />
              </label>
            </div>
          </div>

          <div>
            <Button onClick={() => dispatch(addToCart(selectItem))} color="pink" w="100%" radius={25} size="md" mt={19}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartModal;
