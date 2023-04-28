import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

const Button = tw.button`
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
`;

const Form = tw.form`
  bg-white
  shadow-md
  rounded
  px-8
  pt-6
  pb-8
  mb-4
`;

const FormGroup = tw.div`
  mb-4
`;

const Label = tw.label`
  block
  text-gray-700
  font-bold
  mb-2
`;

const Input = tw.input`
  shadow
  appearance-none
  border
  rounded
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline
`;

const SellerPortal = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseClick = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <Button onClick={handleButtonClick}>Open Form</Button>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative z-10 bg-white p-8">
            <div className="mb-4">
              <span className="text-lg font-bold">Seller Portal Form</span>
              <button
                onClick={handleCloseClick}
                className="float-right text-gray-700 hover:text-gray-900"
              >
                Close
              </button>
            </div>
            <Form>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                ></textarea>
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerPortal;
