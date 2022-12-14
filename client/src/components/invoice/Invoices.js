import React from "react";
import InvoiceCard from "./InvoiceCard";
// import data from '../data.json'
import { useSelector } from "react-redux";
import SkeletonCard from "../skeletons/SkeletonCard";

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);

  return (
    <div className="invoices-container">
      {invoices.length > 0
        ? invoices.map((cardData) => (
            <InvoiceCard data={cardData} key={cardData.id} />
          ))
        : [1, 2, 3, 4, 5].map((n) => <SkeletonCard key={n} />)}
    </div>
  );
};
export default Invoices;
