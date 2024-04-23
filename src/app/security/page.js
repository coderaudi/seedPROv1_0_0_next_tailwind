"use client";
import { DashboardLayout, PageContainer, Card, useAuth } from "@lib/layout";
import { useForm, yup, generateYupResolver } from '@lib/form';
import Typography from "@mui/material/Typography";
import { CustomButton, InputField } from "@lib/components/custom";
import { Container, Box, Paper } from "@lib";
import { getData } from "@lib/rest";
import { getCookie } from "@lib/utils";

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

    const getToken = async () => {
        // get token 

        const cook_ = getCookie();
        
        console.log("cook", cook_)
    }

    return (
        <DashboardLayout>
            <PageContainer>
                <Typography variant="h4">Security Page</Typography>

                <CustomButton
                    onClick={() => {

                        getToken()
                    }}
                    title={"Coookies Token Check"}
                />

            </PageContainer>
        </DashboardLayout>
    );
};

export default useAuth(ContactUsPage);
