const ClickOption = ({option}) => {
  return (
    <div className="mb-4 ml-4">
      <div className="flex items-center">
        <input
          className="mr-2 leading-tight w-{1/2}"
          type="checkbox"
          id="checkbox_id"
        />
        <label className="text-lg text-gray-700">{option}</label>
      </div>
    </div>
  );
}