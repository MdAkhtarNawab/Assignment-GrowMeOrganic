import React from "react";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "User Name",
    width: 150,
    editable: true,
  },
  {
    field: "name",
    headerName: "Full Name",
    width: 150,
    editable: true,
  },
  {
    field: "website",
    headerName: "Website",
    type: "number",
    width: 110,

    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 250,
  },
];

const Page2 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
        console.log(resp.data);
      })
      .catch((e) => console.log("error :- ", e.message));
  }, []);

  return (
    <Box>
      <Typography
        sx={{
          flex: "1 1 100%",
          background: "#A9A9A9",
          fontSize: 26,
          fontWeight: 600,
          padding: 2,
        }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        User List
      </Typography>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          // pageSize={10}            // developer can choose to show 10 objects per page
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>
  );
};

export default Page2;
