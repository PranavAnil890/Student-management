import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import axiosInstance from "../../axiosinterceptor";

const Table1 = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/user")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = async (rollnumber) => {
    try {
      await axiosInstance.delete(
        `/user/${rollnumber}`
      );

      setData((prevData) =>
        prevData.filter(
          (user) => user.rollnumber !== rollnumber
        )
      );

      alert("Student deleted successfully!");
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Delete failed!");
    }
  };

  return (
    <Box sx={{ padding: "30px" }}>

      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#1976d2",
          mb: 3,
        }}
      >
        Student List
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        <Table>

          <TableHead>
            <TableRow>

              <TableCell
                sx={{
                  background: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Roll Number
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  background: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Candidate Name
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  background: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Course
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  background: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Email
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  background: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Marks
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  background: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Password
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  background: "#1976d2",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Actions
              </TableCell>

            </TableRow>
          </TableHead>

          <TableBody>

            {data.map((user, index) => (

              <TableRow
                key={user._id}
                sx={{
                  backgroundColor:
                    index % 2 === 0 ? "#f8fbff" : "#ffffff",

                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                }}
              >

                <TableCell>
                  {user.rollnumber}
                </TableCell>

                <TableCell align="center">
                  {user.candidatename}
                </TableCell>

                <TableCell align="center">
                  {user.course}
                </TableCell>

                <TableCell align="center">
                  {user.email}
                </TableCell>

                <TableCell align="center">
                  {user.marks}
                </TableCell>

                <TableCell align="center">
                  {user.password}
                </TableCell>

                <TableCell align="center">

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<EditIcon />}
                    sx={{ mr: 1 }}
                    onClick={() =>
                      navigate(`/update/${user.rollnumber}`)
                    }
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() =>
                      handleDelete(user.rollnumber)
                    }
                  >
                    Delete
                  </Button>

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>
      </TableContainer>

    </Box>
  );
};

export default Table1;