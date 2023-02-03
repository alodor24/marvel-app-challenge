import { useEffect, useState } from "react";
import { PageViewMode } from "../../components/constants";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Loader from "../../components/Loader";
import Paginate from "../../components/Paginate";
import usePaginateContext from "../../context/PaginateContext/usePaginateContext";
import useGetAllCharacters from "../../hooks/useGetAllCharacters";

const Characters = () => {
  const { offset } = usePaginateContext();
  const { data, isLoading } = useGetAllCharacters({ offset: offset });

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero title="Marvel Characters" />
          <List data={data?.results} mode={PageViewMode.CHARACTERS} />
          <Paginate data={data} />
        </>
      )}
    </Layout>
  );
};

export default Characters;
