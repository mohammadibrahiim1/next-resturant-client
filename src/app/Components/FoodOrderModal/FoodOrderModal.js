import { Avatar, Button, Checkbox, Image, Text, Textarea, createStyles } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";

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

export default function FoodOrderModal() {
  const { classes } = useStyles();
  const modalData = useSelector((state) => state?.modal?.modalData);
  console.log(modalData);

  // const { name,cover, description, convert_price } = modalData;
  return (
    <div>
      <input type="checkbox" id="my_modal_6" class="modal-toggle" />
      <div class="modal">
        <div className="p-5 bg-[#FFFFFF] rounded-lg">
          <div className="flex justify-between items-start  gap-5 ">
            <div>
              {modalData && modalData ? (
                <>
                  {" "}
                  <div className="justify-between mb-3 rounded-lg bg-white sm:flex sm:justify-start ">
                    {/* <Image alt="food-img" src={modalData?.cover} width={"95px"} height={"85px"} radius={"md"} /> */}
                    <Avatar size="80px" src={modalData.cover} />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <Text className="text-sm font-semibold text-[#FF6B6B]">{modalData?.name}</Text>
                        <Text className="text-xs font-semibold text-dark-50">{modalData?.description}</Text>
                        <Text className="text-normal font-bold text-[#4DB759]">${modalData.convert_price}</Text>

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
                  <div className="flex justify-start items-center gap-2">
                    <Text className="font-semibold  ">Quantity : </Text>
                    <div className="flex items-center gap-2 bg-gray-200 rounded-2xl px-[3px] py-[1px]">
                      <span
                        //   onClick={decrementFoodItem}
                        className="cursor-pointer btn btn-xs btn-circle bg-[#FFA8A8]  duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                      >
                        {" "}
                        -{" "}
                      </span>
                      <Text
                        className="px-2"
                        fz={" xs"}
                        //   onClick={decrementFoodItem}
                      >
                        1
                      </Text>

                      <span
                        //   onClick={incrementFoodItem}
                        className="cursor-pointer btn btn-xs btn-circle bg-[#FFA8A8]  duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>

                    <span
                    // onClick={() => removeFromCart(item)}
                    >
                      {/* <FaTrash className="text-[#FFA8A8] hover:text-[#FF6B6B] transition duration-700 cursor-pointer" /> */}
                    </span>
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
                    {modalData?.extras?.length ? (
                      <>
                        <Text size={"sm"} fw={"bold"} pt={10}>
                          Extras
                        </Text>
                        <div className="flex items-center gap-2">
                          {modalData?.extras?.map((extra) => (
                            <>
                              <div className="border flex items-center gap-3 shadow p-2  rounded-md  ">
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
                    {modalData?.addons?.length ? (
                      <div>
                        <Text size={"sm"} fw={"bold"} pt={10}>
                          Addons
                        </Text>
                        <div className={classes.addon_container}>
                          {modalData?.addons?.map((addon) => (
                            <>
                              <div className=" shadow p-1  mb-4 mt-1 rounded-lg bg-white  sm:flex sm:justify-start border h-[79px] ">
                                <Avatar size="70px" src={addon.cover} />

                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                  <div className="mt-5 sm:mt-0">
                                    <Text className="text-xs font-semibold text-dark-50">{addon.addon_item_name}</Text>
                                    <Text size={"sm"} fw={"bold"} c={"#6EC478"}>
                                      {" "}
                                      $ {addon.total}
                                    </Text>
                                    <div className="flex justify-end items-center gap-2 mt-1  rounded-2xl  py-[1px]">
                                      <span
                                        //   onClick={decrementFoodItem}
                                        className="cursor-pointer btn btn-xs btn-circle bg-[#FFA8A8]  duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                                      >
                                        {" "}
                                        -{" "}
                                      </span>
                                      <Text
                                        fz={" xs"}
                                        //   onClick={decrementFoodItem}
                                      >
                                        1
                                      </Text>
                                      <span
                                        //   onClick={incrementFoodItem}
                                        className="cursor-pointer btn btn-xs btn-circle bg-[#FFA8A8]  duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
                                      >
                                        {" "}
                                        +{" "}
                                      </span>
                                    </div>
                                  </div>
                                  {/* <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"></div> */}
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
            <div className="modal-action mt-0 ms-5">
              <label
                htmlFor="my_modal_6"
                className=" border rounded-3xl p-1 duration-700 cursor-pointer bg-[#FFFFFF] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-[#FFFFFF] border-[#FF6B6B] hover:border-[#FF6B6B] "
              >
                <IconX size={"1rem"} />
              </label>
            </div>
          </div>

          <div>
            <Button
              onClick={() => dispatch(addToCart(modal))}
              className="btn btn-md border rounded-full text-white capitalize bg-pink-600 hover:bg-pink-700"
              w="100%"
              size="sm"
              mt={19}
            >
              Add to cart
            </Button>
          </div>
          {/* {modalData && modalData ? (
          <div class="modal-box flex justify-between items-center gap-2">
            <div className="flex justify-between gap-2">
              <Avatar size="80px" src={modalData.cover} />
              <div>
                <Text class="font-bold text-sm">{modalData?.name}</Text>
                <Text class=" text-gray-400 text-xs">{modalData?.description}</Text>
                <Text class=" font-semibold  text-sm text-teal-500 pt-1">$ {modalData?.convert_price}</Text>
              </div>
            </div>
            <div class="modal-action">
              <label
                for="my_modal_6"
                class="btn btn-xs btn-circle duration-700 cursor-pointer bg-[#FFFFFF] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-[#FFFFFF] border-[#FF6B6B] hover:border-[#FF6B6B]"
              >
                <IconX size={"1rem"} />
              </label>
            </div>
          </div>
        ) : null} */}
        </div>
      </div>
    </div>
  );
}
