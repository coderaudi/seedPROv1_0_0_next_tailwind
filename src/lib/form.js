import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'; // Correct import statement
import { useForm } from "react-hook-form";


// Utility function to generate yupResolver from Yup validation rules object
const generateYupResolver = (validationRules) => {
    // Create a schema from the validation rules
    const schema = yup.object().shape(validationRules);
    // Return the resolver using yupResolver
    return yupResolver(schema);
  };

export {
    yupResolver,
    yup,
    useForm,
    generateYupResolver
}