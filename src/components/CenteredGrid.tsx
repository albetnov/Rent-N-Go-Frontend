import { Grid, GridProps } from "@chakra-ui/react";

export default function CenteredGrid(props: GridProps) {
  return <Grid {...props} minH="100vh" w="full" placeItems="center" />;
}
