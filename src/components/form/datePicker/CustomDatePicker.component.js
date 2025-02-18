
// import React, { forwardRef } from "react";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { CalendarMonthIcon } from "@lib/icons";
// import { CalendarIcon } from "@mui/x-date-pickers";
// const CustomDatePicker = forwardRef(
//   ({ title, width, height, focused, backgroundColor, ...rest }, ref) => {
//     const datePickerStyle = {
//       backgroundColor: "red" || "inherit", // Use the provided backgroundColor prop or default to 'inherit'
//       width: width || "100%",
//       height: height || "100%",
//       color: "red",
//     };
//     const color = "#c44242";

//     return (
//       <DatePicker
//         renderInput={(params) => {
//           return (
//             <TextField
//               {...params}
//               sx={{
//                 svg: { color: "#f3ff" },
//                 input: { color: "#f3ff" },
//               }}
//             />
//           );
//         }}
//         ref={ref}
//         sx={{
//           paddingTop: "0px",
//         }}
//         label={title || "Styled picker"}
//         style={datePickerStyle}
//         slotProps={{
//           textField: {
//             focused: focused,
//             size: "small",
//             InputProps: {
//               color: "secondary",
//             },
//           },
//         }}
//       />
//     );
//   }
// );

// export default CustomDatePicker;
