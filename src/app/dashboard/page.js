"use client";
import { CardContainer, DashboardLayout, PageContainer, useAuth } from "@lib/layout";
import { useForm, yup, generateYupResolver } from '@lib/form';
import Typography from "@mui/material/Typography";
import { CustomButton, InputField } from "@lib/components/custom";
import { Container, Box, Paper, Grid, Card } from "@lib";

// Define Yup schema for validation
const validationRules = {
  name: yup.string().required("Name is required"),
  query: yup.string().required("Query is required"),
  description: yup.string().required("Description is required"),
};

const DEFAULT_FORM_VALUES = {
  name: "Test user", // Set default value for name field
  query: "", // Set default value for query field
  description: "" // Set default value for description field
};

const ContactUsPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: generateYupResolver(validationRules),
    defaultValues: DEFAULT_FORM_VALUES
  });

  const onSubmit = (data) => {
    // You can implement form submission logic here, e.g., sending data to a server
    console.log("Form submitted with the following data:", data);
  };

  const handleClear = () => {
    reset(DEFAULT_FORM_VALUES); // Reset the form with default values
  };

  return (
    <DashboardLayout 
     pageName={'Dashboard Page1'}
     breadcrumbItems={[
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Product Details' },
    ]}
     layoutCustomContent={()=>{

      return (
        <>
       <CustomButton 
        title={"Refresh"}
       />
        </>
      )
     }}
    >
      <PageContainer >

        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 ...">  <Typography variant="h4">Contact Us</Typography>
            <div className="max-w-md">
              {/* Name */}
              <InputField
                size="small"
                color="primary"
                focused
                id="name"
                label="Name"
                variant="outlined"
                {...register("name")}
                margin="normal"
                errorMessage={errors.name && errors.name.message}
              />
              {/* Query */}
              <InputField
                size="small"
                color="primary"
                focused
                id="query"
                label="Query"
                variant="outlined"
                {...register("query")}
                margin="normal"
                errorMessage={errors.query && errors.query.message}
              />
              {/* Description */}
              <InputField
                size="small"
                color="primary"
                focused
                id="description"
                label="Description"
                variant="outlined"
                {...register("description")}
                multiline
                rows={4}
                margin="normal"
                errorMessage={errors.description && errors.description.message}
              />
              {/* Clear Button */}
              <CustomButton
                className='mr-3'
                title={'Clear'}
                onClick={handleClear}
                variant="outlined"
                color="primary"
              />
              {/* Submit Button */}
              <CustomButton
                title={'Submit'}
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                color="primary"
              />
            </div></div>
          <div class="col-span-2 ...">  <Typography variant="h4">Contact Us</Typography>
            <div className="max-w-md">
              {/* Name */}
              <InputField
                size="small"
                color="primary"
                focused
                id="name"
                label="Name"
                variant="outlined"
                {...register("name")}
                margin="normal"
                errorMessage={errors.name && errors.name.message}
              />
              {/* Query */}
              <InputField
                size="small"
                color="primary"
                focused
                id="query"
                label="Query"
                variant="outlined"
                {...register("query")}
                margin="normal"
                errorMessage={errors.query && errors.query.message}
              />
              {/* Description */}
              <InputField
                size="small"
                color="primary"
                focused
                id="description"
                label="Description"
                variant="outlined"
                {...register("description")}
                multiline
                rows={4}
                margin="normal"
                errorMessage={errors.description && errors.description.message}
              />
              {/* Clear Button */}
              <CustomButton
                className='mr-3'
                title={'Clear'}
                onClick={handleClear}
                variant="outlined"
                color="primary"
              />
              {/* Submit Button */}
              <CustomButton
                title={'Submit'}
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                color="primary"
              />
            </div></div>
          <div class="row-span-2 col-span-2 ...">03</div>
        </div>

      </PageContainer>
    </DashboardLayout>
  );
};

export default useAuth(ContactUsPage);
