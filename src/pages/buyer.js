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

const Input = ({ name }) => {
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
    />
  );
};

const InputNumber = ({ name }) => {
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
    />
  );
};
const SellerPortal = () => {
  return (
    <div className="relative bg-gray-800 p-8">
      <div className="mb-4 bg-gray-100 rounded h-20 content-evenly">
        <p className="text-lg font-bold ml-4">Seller Request Form</p>
        <p className="text-sm ml-4">
          5fd924625f6ab16a19cc9807c7c506ae1813490e4ba675f843d5a10e0baacdb8
        </p>
      </div>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Seller Address</Label>
          <Input id="name" name="123 Main St" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="MM/DD/YYYY" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="product">Product</Label>
          <div className="flex justify-evenly">
            <ClickOption option="Barrel Chair" />
            <ClickOption option="Billiard Table" />
            <ClickOption option="Wicker Accent Cabinet" />
          </div>
          <div className="flex justify-evenly">
            <ClickOption option="Bathroom Vanity" />
            <ClickOption option="Shoe Storage" />
            <ClickOption option="Leather Sofa" />
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
    </div>
  );
};
export default SellerPortal;

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
