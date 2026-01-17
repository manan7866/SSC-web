import React from "react";
import ProductDetails from "../ProductDetails";

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  return <ProductDetails productId={slug[1]} category={slug[0]} />;
};

export default page;
