const Form = ({ children, submitFn }) => {
  return (
    <form onSubmit={(e) => submitFn(e)}
      className=" bg-gray-100
  shadow-md
  rounded
  px-8
  pt-6
  pb-8
  mb-4"
    >
      {children}
    </form>
  );
};