import React, { forwardRef } from 'react';
import { TextField } from '@lib';

const InputField = forwardRef(({ placeholder, label, errorMessage, ...rest }, ref) => {
  return (
    <div>
      <TextField
        id={label.toLowerCase()}
        label={label}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        margin="normal"
        size="small"
        color="primary"
        inputRef={ref} // Forwarding ref to TextField
        {...rest}
      />
     { errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
});

export default InputField;
