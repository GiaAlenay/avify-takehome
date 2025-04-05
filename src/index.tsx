import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif !important",
    h1: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#1976d2",
    },
    h2: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#0288d1",
    },
  },

  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td, &:last-child th": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontFamily: "Lato, sans-serif",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontFamily: "Lato, sans-serif",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          fontFamily: "Lato, sans-serif",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Lato, sans-serif",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#D9D9D9",
          "&.Mui-checked": {
            color: "#E95A1A",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif;",
          // color: "#333",
        },
        root: {
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          verticalAlign: "middle",
          "& .MuiTypography-root": {
            fontSize: "12px",
            padding: "4px 8px",
            borderRadius: "4px",
            transition: "background-color 0.3s ease-in-out",
          },
          "& .Mui-checked + .MuiTypography-root": {
            // backgroundColor: "#E95A1A",
            // color: "#fff",
          },
        },
      },
    },
    MuiMenuList: {
      styleOverrides: {
        root: {
          padding: "5px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "140%",
          letterSpacing: "-2%",
          padding: "5px 5px !important",
          justifyContent: "left",
          alignItems: "left",
          "&.Mui-selected": {
            backgroundColor: "#FCEBE3 !important",
          },
          "& .MuiButtonBase-root ": {
            justifyContent: "left",
            display: "flex  !important'",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          input: {
            outline: "0 !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E95A1A !important",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #EDEDED",
          },
          "& .MuiOutlinedInput-input": {
            border: "none !important",
            padding: "10px 14px",
            fontStyle: "normal !important",
            color: "#808080",
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            "&::placeholder": {
              color: "#808080",
              fontStyle: "normal",
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
            },
          },

          "& .MuiOutlinedInput-inputMultiline": {
            height: "auto",
            minHeight: "100px",
            lineHeight: "1.5",

            padding: "0px !important",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "40px",
          "& .MuiSelect-select": {
            height: "40px",
            display: "flex",
            alignItems: "center",
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontFamily: "Barlow, sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "140%",
          letterSpacing: "0%",
        },
        selectLabel: {
          fontFamily: "Barlow, sans-serif",
          fontSize: "12px",
        },
        displayedRows: {
          fontFamily: "Barlow, sans-serif",
          fontSize: "12px",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#808080",
          "&.Mui-checked": {
            color: "#E95A1A",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "20px",
          },
        },
      },
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById("reactMountPoint")
  );
});
