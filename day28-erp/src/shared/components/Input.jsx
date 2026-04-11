const Input = ({ label, register, name, rules, ...props }) => {
  console.log(props);
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>
      <input
        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 text-sm placeholder-slate-400"
        {...props}
        {...register(name, rules)}
      />
    </div>
  );
};

export default Input;
