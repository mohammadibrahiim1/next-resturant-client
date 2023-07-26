"use client";
import { Text, TextInput, Textarea, Button, Group, SimpleGrid, createStyles, rem, Container } from "@mantine/core";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "22px",
      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.md,
      flex: 1,
      padding: theme.spacing.lg,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.md,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(360)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: "#000000 !important",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

const Checkout = () => {
  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.wrapper}>
        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="md" fw={700} className={classes.title}>
            Select Branch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="hello@mantine.dev" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea mt="md" label="Your message" placeholder="Please include all relevant information" minRows={3} />

            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
        <div className={classes.contacts}>
          <Text fz="sm" align="center" fw={700} className={classes.title}>
            Cart Summery
          </Text>
        </div>
      </div>
    </Container>
  );
};
export default Checkout;
