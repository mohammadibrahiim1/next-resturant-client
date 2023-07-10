"use client";

import {
  createStyles,
  Text,
  ActionIcon,
  Group,
  rem,
  Image,
  Button,
  Input,
  Container,
} from "@mantine/core";

import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconHeadphonesFilled,
  IconMailCheck,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: "#FF006B",

    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(180),
    marginBottom: "25px",

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    fontSize: "12px",
    fontWeight: "500",
    marginTop: rem(5),
    color: "#FFF3E3",
    width: rem(270),
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "left",
    },
  },

  inner: {
    // width: "60%",
    // margin: "auto",
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color: "#FFFFFF",
    fontWeight: "600px",
    fontSize: theme.fontSizes.md,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    color: "#FFFFFF",
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },

  afterFooter: {
    textAlign: "center",
    color: "#FFF3E3",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: "1px solid #A6A7AB",
  },

  social: {
    gap: "12px",
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.md,
    },
  },

  fileInput: {
    width: "100%",
    borderColor: "#FFF3E3 ",
  },
  subButton: {
    position: "relative",
    bottom: "39px",
    left: "165px",
    backgroundColor: "#FF006B !important",
  },
  image: {
    width: "120px",
    height: "120px",
  },
  icon: {
    border: "1px solid white",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    color: "white",
    "&:hover": {
      color: "blue",
    },
  },
  app: {
    width: "10px",
    height: "40px",
  },
}));

const data = [
  {
    title: "Useful Links",
    links: [
      { label: "Cookies Policy", link: "/cookies" },
      { label: "About Us", link: "/about" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
];

const Footer = () => {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} className={classes.link} component="a" href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div>
          <div className={classes.logo}>
            <Image
              mb={18}
              src="https://i.ibb.co/M5vdV03/theme-footer-logo.png"
              alt=""
              srcset=""
            />
          </div>
          <Text color="dimmed" mb={5} className={classes.description}>
            Subscribe to our newsletter to get latest updates
          </Text>

          <div>
            <Input
              className={classes.fileInput}
              // label="Upload files"
              size="md"
              placeholder="your email"
              accept="image/png,image/jpeg"
            />
            <Button className={classes.subButton}>Subscribe</Button>
          </div>

          <div>
            <Text color="dimmed" mb={15} className={classes.description}>
              Follow us on
            </Text>

            <Group
              spacing={0}
              className={classes.social}
              position="left"
              noWrap
            >
              <ActionIcon size="lg" className={classes.icon}>
                <IconBrandTwitter size="1.05rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" className={classes.icon}>
                <IconBrandYoutube size="1.05rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" className={classes.icon}>
                <IconBrandInstagram size="1.05rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" className={classes.icon}>
                <IconBrandYoutube size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
        </div>
        <div className={classes.groups}>{groups}</div>
        <div>
          <Text className={classes.title} mb={15}>
            Download Our Apps
          </Text>
          <div className="flex gap-2">
            <Image
              maw={240}
              className={classes.app}
              src="https://i.ibb.co/KNVKW1v/app-store.png"
              alt=""
              srcset=""
            />
            <Image
              className={classes.app}
              src="https://i.ibb.co/FbWFzkh/play-store.png"
              alt=""
              srcset=""
            />
          </div>
          <Text
            className="flex gap-2 items-center text-white text-semibold "
            mt={25}
          >
            <IconHeadphonesFilled /> <span>+13333846282</span>
          </Text>{" "}
          <Text
            className="flex gap-2 items-center text-white text-semibold "
            mt={25}
          >
            <IconMailCheck /> <span>info@inilabs.net</span>
          </Text>{" "}
        </div>
      </Container>
      <div className={classes.afterFooter}>
        <Text size="sm">© 2023 Food king by Ibrahim. All rights reserved.</Text>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';

// const NewFooter = () => {
//   return (
//     <div>
//       this is footer
//     </div>
//   );
// };

// export default NewFooter;
