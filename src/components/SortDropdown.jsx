const SortDropdown = ({ onChange }) => {
  return (
    <div className="flex justify-center mt-5">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="select select-default max-w-xs w-[80%]"
      >
        <option value="default">Сортировка по умолчанию</option>
        <option value="price-asc">Цена: по возрастанию</option>
        <option value="price-desc">Цена: по убыванию</option>
      </select>
    </div>
  );
};

export default SortDropdown;
