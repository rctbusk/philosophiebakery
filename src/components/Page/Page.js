import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@material-ui/core";

export const Page = (props) => {
  const { title /*pageDescription*/ } = props;
  return (
    <Box height="calc(100vh - 70px)">
      <Helmet>
        <title>{`${title} - Philosophie Bakery`}</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Helmet>
      {props.children}
    </Box>
  );
};
