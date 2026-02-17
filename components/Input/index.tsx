"use client";

import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'


export type InputProps = TextFieldProps & {
    name: string;
}

export default function Input({ name, ...props }: InputProps) {
    const { control } = useFormContext();
    return (
        <Controller name={name} control={control} render={({ field, fieldState }) => {
            return (
                <TextField 
                variant='outlined'
                color='secondary'
                {...field} {...props}
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                />
            )
        }} />
    )
}
