"use client";
import React, { useState } from "react";
import { useForm, yup, generateYupResolver } from "@lib/form";
import Typography from "@mui/material/Typography";
import {
  CustomButton,
  CustomDatePicker,
  InputField,
  SmallDatePicker,
} from "@lib/components/custom";
import {
  DashboardLayout,
  PageContainer,
  CustomizedDialogs,
  useLoading,
  CustomTile,
} from "@lib/layout";
import { DatePicker } from "@mui/x-date-pickers";

import { SettingsIcon, PersonAdd, ShoppingCart } from "@lib/icons";
import dayjs from "dayjs";

const tilesData = [
  {
    title: "Active Users",
    description: "Number of active users",
    icon: <SettingsIcon fontSize="large" />,
    value: "5,678",
  },
  {
    title: "Active Users",
    description: "Number of active users",
    icon: <SettingsIcon fontSize="large" />,
    value: "5,678",
  },
  {
    title: "Active Users",
    description: "Number of active users",
    icon: <SettingsIcon fontSize="large" />,
    value: "5,678",
  },
  {
    title: "Pending Orders",
    description: "Number of pending orders",
    icon: <SettingsIcon fontSize="large" />,
    value: "123",
  },
];

// Define Yup schema for validation
const validationRules = {
  name: yup.string().required("Name is required"),
  query: yup.string().required("Query is required"),
  description: yup.string().required("Description is required"),
};

const DEFAULT_FORM_VALUES = {
  name: "Test user123", // Set default value for name field
  query: "", // Set default value for query field
  description: "", // Set default value for description field
};

const ContactUsPage = () => {
  const { showLoading, hideLoading } = useLoading();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: generateYupResolver(validationRules),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const onSubmit = (data) => {
    // You can implement form submission logic here, e.g., sending data to a server
    console.log("Form submitted with the following data:", data);
    // Close the dialog only if there are no errors
    if (Object.keys(errors).length === 0) {
      return true; // Close the dialog
    } else {
      return false; // Keep the dialog open
    }
  };

  return (
    <DashboardLayout
      pageName={"Dashboard"}
      breadcrumbItems={[{ text: "Home", href: "/" }, { text: "Dashboard" }]}
      layoutCustomContent={() => {
        return (
          <CustomButton
            title={"Refresh"}
            onClick={() => {
              showLoading("", "settings");
            }}
          />
        );
      }}
    >
      <PageContainer>
        <div className="flex space-x-2">
          {tilesData.map((tile, index) => (
            <CustomTile
              key={index}
              title={tile.title}
              description={tile.description}
              icon={tile.icon}
              value={tile.value}
            />
          ))}
        </div>

        <div className="mt-10"></div>
        <CustomizedDialogs
          //  width={50} // Width in percentage
          minWidth={550} // Minimum width in pixels
          maxWidth={100} // Maximum width in pixels
          openDialog={openDialog}
          handleDialog={setOpenDialog}
          buttonTitle="TEST POPUP"
          title={"Custom Dialog Title"}
          // contentJSx={() => (
          //   <div>
          //     <div className="max-w-md">
          //       <CustomDatePicker
          //         title="MY Date Picker"
          //         width="120px"
          //         height="120px"
          //       />
          //       {/* Name */}
          //       <InputField
          //         size="small"
          //         color="primary"
          //         id="name"
          //         label="Name"
          //         variant="outlined"
          //         {...register("name")}
          //         margin="normal"
          //         errorMessage={errors.name && errors.name.message}
          //       />
          //       {/* Query */}
          //       <InputField
          //         size="small"
          //         color="primary"
          //         id="query"
          //         label="Query"
          //         variant="outlined"
          //         {...register("query")}
          //         margin="normal"
          //         errorMessage={errors.query && errors.query.message}
          //       />
          //       {/* Description */}

          //       <InputField
          //         size="small"
          //         color="primary"
          //         id="description"
          //         label="Description"
          //         variant="outlined"
          //         {...register("description")}
          //         multiline
          //         rows={4}
          //         margin="normal"
          //         errorMessage={
          //           errors.description && errors.description.message
          //         }
          //       />
          //     </div>
          //   </div>
          // )}
        />
      </PageContainer>
    </DashboardLayout>
  );
};

export default ContactUsPage;
