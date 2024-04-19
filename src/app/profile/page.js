"use client";
import { DashboardLayout, PageContainer, CardContainer, useAuth } from "@lib/layout";
import { useForm, yup, generateYupResolver } from '@lib/form';
import Typography from "@mui/material/Typography";
import { CustomButton, InputField } from "@lib/components/custom";
import { Container, Box, Paper } from "@lib";

// Define Yup schema for validation
const profileValidationRules = {
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup.string().required("Mobile Number is required").matches(/^[0-9]+$/, "Invalid mobile number"),
  city: yup.string().required("City is required"),
  pincode: yup.string().required("Pincode is required"),
};

const securityValidationRules = {
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
};

const DEFAULT_PROFILE_VALUES = {
  firstName: "", // Set default value for first name field
  lastName: "", // Set default value for last name field
  email: "", // Set default value for email field
  mobile: "", // Set default value for mobile number field
  city: "", // Set default value for city field
  pincode: "" // Set default value for pincode field
};

const DEFAULT_SECURITY_VALUES = {
  password: "", // Set default value for password field
  confirmPassword: "" // Set default value for confirm password field
};

const ProfileDetailsPage = () => {
  const { register: registerProfile, handleSubmit: handleSubmitProfile, formState: { errors: profileErrors }, reset: resetProfile } = useForm({
    resolver: generateYupResolver(profileValidationRules),
    defaultValues: DEFAULT_PROFILE_VALUES
  });

  const { register: registerSecurity, handleSubmit: handleSubmitSecurity, formState: { errors: securityErrors }, reset: resetSecurity } = useForm({
    resolver: generateYupResolver(securityValidationRules),
    defaultValues: DEFAULT_SECURITY_VALUES
  });

  const onSubmitProfile = (data) => {
    // You can implement form submission logic here, e.g., sending data to a server
    console.log("Profile Form submitted with the following data:", data);
  };

  const onSubmitSecurity = (data) => {
    // You can implement form submission logic here, e.g., sending data to a server
    console.log("Security Form submitted with the following data:", data);
  };

  const handleProfileClear = () => {
    resetProfile(DEFAULT_PROFILE_VALUES); // Reset the profile form with default values
  };

  const handleSecurityClear = () => {
    resetSecurity(DEFAULT_SECURITY_VALUES); // Reset the security form with default values
  };

  return (
    <DashboardLayout>
      <PageContainer>


        <div className="flex">

          <div className="w-1/2 p-4">
            <Paper className="p-4 mb-4">
              <Typography variant="h2" className="mb-4">Profile Details</Typography>
              {/* First Name */}
              <InputField
                size="small"
                color="primary"
                focused
                id="firstName"
                label="First Name"
                variant="outlined"
                {...registerProfile("firstName")}
                margin="normal"
                errorMessage={profileErrors.firstName && profileErrors.firstName.message}
              />
              {/* Last Name */}
              <InputField
                size="small"
                color="primary"
                focused
                id="lastName"
                label="Last Name"
                variant="outlined"
                {...registerProfile("lastName")}
                margin="normal"
                errorMessage={profileErrors.lastName && profileErrors.lastName.message}
              />
              {/* Email */}
              <InputField
                size="small"
                color="primary"
                focused
                id="email"
                label="Email"
                variant="outlined"
                {...registerProfile("email")}
                margin="normal"
                errorMessage={profileErrors.email && profileErrors.email.message}
              />
              {/* Mobile Number */}
              <InputField
                size="small"
                color="primary"
                focused
                id="mobile"
                label="Mobile Number"
                variant="outlined"
                {...registerProfile("mobile")}
                margin="normal"
                errorMessage={profileErrors.mobile && profileErrors.mobile.message}
              />
              {/* City */}
              <InputField
                size="small"
                color="primary"
                focused
                id="city"
                label="City"
                variant="outlined"
                {...registerProfile("city")}
                margin="normal"
                errorMessage={profileErrors.city && profileErrors.city.message}
              />
              {/* Pincode */}
              <InputField
                size="small"
                color="primary"
                focused
                id="pincode"
                label="Pincode"
                variant="outlined"
                {...registerProfile("pincode")}
                margin="normal"
                errorMessage={profileErrors.pincode && profileErrors.pincode.message}
              />
              {/* Profile Clear Button */}
              <CustomButton
                className='mr-3'
                title={'Clear'}
                onClick={handleProfileClear}
                variant="outlined"
                color="primary"
              />
              {/* Profile Submit Button */}
              <CustomButton
                title={'Submit'}
                onClick={handleSubmitProfile(onSubmitProfile)}
                variant="contained"
                color="primary"
              />
            </Paper>
          </div>
          <div className="w-1/2 p-4">
            <Paper className="p-4">
              <Typography variant="h2" className="mb-4">Security Details</Typography>
              {/* Password */}
              <InputField
                size="small"
                color="primary"
                focused
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                {...registerSecurity("password")}
                margin="normal"
                errorMessage={securityErrors.password && securityErrors.password.message}
              />
              {/* Confirm Password */}
              <InputField
                size="small"
                color="primary"
                focused
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                {...registerSecurity("confirmPassword")}
                margin="normal"
                errorMessage={securityErrors.confirmPassword && securityErrors.confirmPassword.message}
              />
              {/* Security Clear Button */}
              <CustomButton
                className='mr-3'
                title={'Clear'}
                onClick={handleSecurityClear}
                variant="outlined"
                color="primary"
              />
              {/* Security Submit Button */}
              <CustomButton
                title={'Submit'}
                onClick={handleSubmitSecurity(onSubmitSecurity)}
                variant="contained"
                color="primary"
              />



            </Paper>
          </div>
        </div>


      </PageContainer>
    </DashboardLayout>
  );
};

export default useAuth(ProfileDetailsPage);
