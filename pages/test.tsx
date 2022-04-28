import React, { useEffect } from "react";
import { GetServerSideProps } from "next";

type Props = {};

const Test = (props: Props) => {
  return <div>Test</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Test;
