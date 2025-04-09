interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?:string;
}

const Input = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className = ""
}: InputProps) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block w-full px-4 py-2 border border-border rounded-lg placeholder-forground ${
          error ? "border-red-400" : "border-border"
        } ${className}`}
      />
      {error && (
        <div className="text-red-400 text-sm mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
