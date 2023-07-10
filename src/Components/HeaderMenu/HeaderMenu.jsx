import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Image,
  Input,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import ToggleMenu from "../../Components/ToggleMenu/ToggleMenu";
import CartDrawer from "../CartDrawer/CartDrawer";
import UserProfile from "../UserProfile/UserProfile";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  logo: {
    maxWidth: rem(128),
    // marginBottom: "25px",

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: "1.25rem",
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#1F1F39",
    fontSize: "0.875rem",
    fontWeight: 600,

    // "&:hover": {
    //   backgroundColor:
    //     theme.colorScheme === "dark"
    //       ? theme.colors.dark[6]
    //       : theme.colors.gray[0],
    // },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      // backgroundColor: theme.fn.variant({
      //   variant: "light",
      //   color: theme.primaryColor,
      // }).background,
      color: "#FF006B",
    },
  },
}));

const links = [
  ,
  { link: "/home", label: "Home" },
  { link: "/menu", label: "Menu" },
  { link: "/offers", label: "Offers" },
];

const HeaderMenu = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0]?.link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src="https://i.ibb.co/Y048Z9J/menu-logo.png"
            alt=""
            srcset=""
          />
        </Link>
        <Group spacing={2} className={classes.links}>
          {items}
        </Group>

        <div className="flex justify-between items-center gap-2">
          <Group>
            <Input
              icon={<IconSearch height={20} width={20} />}
              placeholder="search"
              radius={25}
              size="xs"
              styles={(theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: theme.colors.pink[7],
                    transition: ".3s",
                  },
                },
              })}
            />
          </Group>
          <Group>
            <ToggleMenu></ToggleMenu>
          </Group>
          <Group>
            <CartDrawer></CartDrawer>
            {/* <ToggleMenu></ToggleMenu> */}
          </Group>
          <Group>
            <UserProfile></UserProfile>
          </Group>
        </div>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HeaderMenu;
