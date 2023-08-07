import { createStyles, Paper, Text, Title, Button, rem } from "@mantine/core";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";
// import { Router, useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: "65px",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "28px",
  },
  card: {
    height: rem(136),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const data = [
  {
    slug: "test",
    image: "https://i.ibb.co/n8Pzxh3/creamy-saop-sticker-cover.png",
  },
  {
    slug: "uplifting-anytime",
    image: "https://i.ibb.co/522nYQM/uplifting-anytime-cover.png",
  },
  {
    slug: "savory-and-satisfying",
    image: "https://i.ibb.co/6m8wd85/savory-and-satisfying-cover.png",
  },
];

const OfferCard = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {data.map((item) => (
          <>
            <Link
              className="cursor-pointer"
              href={`offers/${item.slug}`}
              // onClick={() => handleOffer(item.slug)}
            >
              <Paper
                shadow="md"
                p="xl"
                radius="md"
                sx={{ backgroundImage: `url(${item.image})` }}
                className={classes.card}
              ></Paper>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};
export default OfferCard;
