import { Field } from "./style";

interface FieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  disalbled: boolean;
}

export default function FormField({ label, name, type, value, disalbled }: FieldProps) {
  return (
    <>
      <Field>
        <label>{label}</label>
        <input type={type} name={name} value={value} disabled={disalbled} />
      </Field>

      
    </>
  );
}
