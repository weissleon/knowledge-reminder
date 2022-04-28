import { NextPage } from "next";
import React from "react";
import { GetServerSideProps } from "next";

type Props = {};

const ResultWithId: NextPage = (props: Props) => {
  return <div>Result</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.query);
  return {
    props: {},
  };
};

export default ResultWithId;
