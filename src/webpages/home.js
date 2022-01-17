import React, { useMemo, useState, useEffect } from "react";

import Table from "./table";
import axios from 'axios';

const Home = () => {

  const columns = useMemo(
    () => [
      {
        // first group
        Header: "Books",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "nombre"
          },
          {
            Header: "Price",
            accessor: "precio"
          }
        ]
      },
      {
        // Second group
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Description",
            accessor: "descripcion"
          },
          {
            Header: "Photo",
            accessor: "foto",
            Cell: tableProps => (
              <img
                src={tableProps.row.foto}
                width={60}
              />
            )
          }
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