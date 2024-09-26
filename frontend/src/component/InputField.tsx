export const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 mt-7">
        {label}
      </label>
      <input
        type="text"
        id="first_name"
        className=" border border-slate-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
