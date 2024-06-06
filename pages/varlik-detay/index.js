import React from "react";
import { useRouter } from "next/router";
const VarlikDetay = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Varlık Detay</h1>
      <h2>{router.query.id}</h2>
    </div>
  );
};

export default VarlikDetay;
