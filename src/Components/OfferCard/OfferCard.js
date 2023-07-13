import { createStyles, Paper, Text, Title, Button, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "22px",
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
    image: "https://i.ibb.co/6m8wd85/savory-and-satisfying-cover.png",
  },
  {
    image: "https://i.ibb.co/522nYQM/uplifting-anytime-cover.png",
  },
];

// interface ArticleCardImageProps {
//   image: string;
//   title: string;
//   category: string;
// https://i.ibb.co/6m8wd85/savory-and-satisfying-cover.png
// https://i.ibb.co/522nYQM/uplifting-anytime-cover.png
// }
const OfferCard = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {data.map((item) => (
          <>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              sx={{ backgroundImage: `url(${item.image})` }}
              className={classes.card}
            >
              <div>
                {/* <Text className={classes.category} size="xs">
                  {category}
                </Text> */}
                {/* <Title order={3} className={classes.title}>
                  {title}
                </Title> */}
              </div>
              {/* <Button variant="white" color="dark">
                Read article
              </Button> */}
            </Paper>
          </>
        ))}
      </div>
    </div>
  );
};
export default OfferCard;
