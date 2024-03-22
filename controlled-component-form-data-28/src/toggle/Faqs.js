import React, { useState } from "react";
import FAQData from "./data.json";
import Faq from "./Faq";
export default function Faqs() {
  const [faqs, setFaqs] = useState(FAQData);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="fs-1 text center">Faq </h1>
          {faqs.map((faq) => 
            <Faq key={faq.id} {...faq} />
          )}
        </div>
      </div>
    </div>
  );
}
