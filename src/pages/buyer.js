const Input = ({name}) => {
  return (
    <input
      className="shadow
  appearance-none
  border
  rounded
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline" placeholder={name}
    />
  );
};

const FormGroup = ({children}) => {
    return <div className="">{children}</div>;
}


export default function Buyer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormGroup>
          <Input id="name" name="Name" type="text"/>
        </FormGroup>
      </form>
    </div>
  );
}
