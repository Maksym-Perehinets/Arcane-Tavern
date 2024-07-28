// AdditionalDetails.tsx
import React from "react";
import { IAdditionalDetailsTable } from "@/types";

interface AdditionalTableProps {
  tableData: { utilType: string; details: IAdditionalDetailsTable[] }[];
}

const AdditionalDetails: React.FC<AdditionalTableProps> = ({ tableData }) => {
  return (
    <div>
      {tableData.map((item, index) => (
        <div key={index}>
          <h3 className="text-gray-300 text-[1em] font-bold">{item.utilType}</h3>
          {item.details.map((detail, subIndex) => (
            <p 
              key={subIndex} 
              className="text-gray-300 text-[.9em] font-medium hover:text-white hover:bg-black/10"
            >
              {detail.header}: {detail.value.toString()}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdditionalDetails;
