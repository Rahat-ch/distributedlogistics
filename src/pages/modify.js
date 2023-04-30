import React, { useState } from "react";
import Sidebar from "@/pages/home";

const Button = ({ children }) => {
  return (
    <button
      className="  bg-blue-900
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded"
    >
      {children}
    </button>
  );
};

const Form = ({ children }) => {
  return (
    <form
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

const FormGroup = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

const Label = ({ children }) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {children}
    </label>
  );
};

const ClickOption = ({ option }) => {
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
};

const Input = ({ name, value }) => {
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
  focus:shadow-outline"
      placeholder={name}
      defaultValue={value}
    />
  );
};

const InputNumber = ({ name, value }) => {
  return (
    <input
      className="shadow
  appearance-none
  border
  rounded
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline"
      type="number"
      placeholder={name}
      defaultValue={value}
    />
  );
};

const Contract = ({template}) => {
  return (
    <>
      <div className="mb-4 bg-white rounded content-evenly"></div>
      <Form>
        <label className="block text-gray-900 text-2xl font-bold mb-4">
          Edit Contract
        </label>
        <label className="block text-gray-900 text-md mb-4">
          {template.buyerAddress}
        </label>
        <FormGroup>
          <Label htmlFor="name">Client Address</Label>
          <Input id="name" name="123 Main St" type="text" value={template.buyerPhysicalAddress}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Return Address</Label>
          <Input id="name" name="321 Walnut St" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="MM/DD/YYYY" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="product">Product</Label>
          <div className="flex justify-evenly">
            <div className="flex-col justify-evenly">
              <ClickOption option="Barrel Chair" />
              <ClickOption option="Billiard Table" />
            </div>
            <div className="flex-col justify-evenly">
              <ClickOption option="Wicker Accent Cabinet" />
              <ClickOption option="Bathroom Vanity" />
            </div>
            <div className="flex-col justify-evenly">
              <ClickOption option="Shoe Storage" />
              <ClickOption option="Leather Sofa" />
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="quantity">Quantity</Label>
          <InputNumber id="quantity" name="#" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          ></textarea>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

const ModifyPortal = ({ contracts, setContracts, contract }) => {
  return (
    <div className="relative bg-gray-800 p-8">
      <Contract template={contract}/>
    </div>
  );
};
export default ModifyPortal;

// address buyer
// address seller
// string shipping address
// string origin address
// date created
// bool is paid
// array of items

// Item
// Number of units
// description
// price per unit
