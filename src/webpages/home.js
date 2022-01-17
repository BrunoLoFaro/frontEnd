import React, { useMemo, useState, useEffect } from "react";

import Table from "./table";

import axios from 'axios';

const Home = () => {


  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Books",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "nombre"
          },
          {
            Header: "Price",
            accessor: "price"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Description",
            accessor: "descripcion"
          },
        ]
      }
    ],
    []
  );

        const [data, setData] = useState([]);

        useEffect(() => {
            (async () => {
              const result = await axios("https://proyecto--final.herokuapp.com/producto/");
              setData(result.data);
            })();
          }, []);

          return (
            <div className="Home">
              <Table columns={columns} data={data} />
            </div>
          );
}
export default Home;