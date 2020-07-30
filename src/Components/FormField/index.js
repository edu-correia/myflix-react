import React from 'react';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
    position: relative;

    textarea {
        min-height: 150px;
    }

    input[type="color"] {
        padding-left: 56px;
    }

    margin-right: 5%;
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  padding-top: 5px;
  
  transform-origin: 0% 0%;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const Tag = styled.input`
    background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 70px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 24px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
`;

function FormField({ name, type, label, value, onChange }){
    const fieldId = `id_${name}`;

    const isTextArea = type === "textarea";
    const As = isTextArea ? "textarea" : "input";

    return (
        <FormFieldWrapper>
            <Label htmlFor={fieldId}>
                <Tag
                    as={As}
                    id={fieldId}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />

                <Label.Text>
                    {label}:
                </Label.Text>
            </Label>
        </FormFieldWrapper>
    );
}

export default FormField;
