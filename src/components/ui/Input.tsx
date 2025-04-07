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
        className={`mt-1 block w-full px-4 py-2 border rounded-lg placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          error ? "border-red-500" : "border-neutral-300"
        } ${className}`}
      />
      {error && (
        <div className="text-red-500 text-sm mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
