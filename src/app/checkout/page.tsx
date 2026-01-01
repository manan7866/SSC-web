"use client";
import Layout from "@/components/layout/Layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { checkoutSubmit, getCart, type CartItem } from "@/hooks/cart";
import Image from "next/image";
import PaymentButtons from "@/components/payments/PaymentButtons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";
import CheckoutForm from "./CheckoutForm";
import BillingForm from "./BillingForm";
import ReactConfetti from "react-confetti";
import ShippingOptions from "./ShippingServices";
import apiClient from "@/lib/apiClient";

type Address = {
  country: string;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
};

export type CheckoutPayload = {
  billing: Address;
  shipping?: Address; // only if ship to different
};

export default function Home() {
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Fetch cart items on component mount
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const items = await getCart();
      setCartItems(items);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError("Failed to load cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      window.scrollTo({
        top: 0, // scroll to top of page
        behavior: "smooth", // optional: smooth scrolling
      });
    }
  }, [success]);

  const getProductInfo = (item: CartItem) => {
    const product =
      item.music ||
      item.digitalBook ||
      item.fashion ||
      item.meditation ||
      item.decoration ||
      item.living ||
      item.accessories;

    if (!product) return { title: "Unknown Product", price: 0, image: "" };

    return {
      title: product.title || product.name || "Product",
      price: product.price || 0,
      image:
        product.images?.[0] ||
        product.coverImage ||
        "/assets/images/shop/cart-page-img-1.jpg",
    };
  };

  const calculateSubtotal = () => {
    return cartItems.length
      ? cartItems.reduce((total, item) => {
          const product = getProductInfo(item);
          return total + product.price * item.qty;
        }, 0)
      : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  //calculate shipping cost

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Checkout">
        <section className="checkout-page py-16">
          {success ? (
            <div className="relative bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl  mx-auto min-h-[350px] flex flex-col items-center justify-center">
              {/* 🎉 Confetti */}
              <ReactConfetti numberOfPieces={300} recycle={true} width={672} />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-fixnix-darkpurple">
                  🎉 Order Confirmed!
                </h2>
                <p className="text-gray-600">
                  Thanks for your order. We’ll send you an email confirmation
                  shortly.
                </p>
                <Link href="/wall&artdecor">
                  <Button
                    onClick={() => setSuccess(false)}
                    className="bg-fixnix-lightpurple mt-3"
                  >
                    Place Another Order
                  </Button>
                </Link>
              </motion.div>
            </div>
          ) : (
            <div className="container max-w-6xl mx-auto px-4">
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
                  Loading cart items...
                </div>
              )}

              {/* Empty Cart Redirect */}
              {cartItems && cartItems.length === 0 && !loading && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-2">
                    Your cart is empty
                  </h2>
                  <p className="text-fixnix-gray mb-6">
                    Add some items to proceed to checkout!
                  </p>
                  <Link
                    href="/wall&artdecor"
                    className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-darkpurple rounded"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}

              {/* Login Link */}
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <p className="text-base">
                  Returning Customer?{" "}
                  <Link
                    href="/login"
                    className="text-fixnix-lightpurple hover:text-fixnix-darkpurple font-medium transition-colors"
                  >
                    Click here to Login
                  </Link>
                </p>
              </div>

              {cartItems && cartItems.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Billing Details */}
                  <div className="space-y-8">
                    {/* <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex items-center space-x-3 mb-6">
                        <input
                          type="checkbox"
                          id="ship-different"
                          checked={showShippingForm}
                          onChange={(e) =>
                            setShowShippingForm(e.target.checked)
                          }
                          className="w-4 h-4 text-fixnix-lightpurple rounded border-gray-300 focus:ring-fixnix-lightpurple"
                        />
                        <label
                          htmlFor="ship-different"
                          className="text-lg font-medium text-gray-700 cursor-pointer"
                        >
                          Add new billing address?
                        </label>
                      </div>

                      {showShippingForm && <BillingForm />}
                    </div> */}

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h2 className="text-2xl font-semibold text-fixnix-darkpurple mb-6">
                        Your Order
                      </h2>
                      <div className="space-y-4">
                        <div className="border-b border-gray-200">
                          <div className="w-full space-y-4">
                            {/* Header */}
                            <div className="grid grid-cols-2 border-b border-gray-200 pb-2">
                              <div className="text-left text-gray-600 font-medium">
                                Product
                              </div>
                              <div className="text-right text-gray-600 font-medium">
                                Price
                              </div>
                            </div>

                            {/* Cart Items */}
                            {cartItems && cartItems.length ? (
                              cartItems.map((item) => {
                                const product = getProductInfo(item);
                                return (
                                  <div
                                    key={item.id}
                                    className="grid grid-cols-2 items-center py-3 border-b border-gray-100 last:border-none"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={50}
                                        height={50}
                                        className="rounded-md"
                                      />
                                      <span className="text-gray-700">
                                        {product.title}
                                      </span>
                                    </div>
                                    <div className="text-right text-gray-700">
                                      ${product.price.toFixed(2)}
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <p className="text-sm text-gray-500">
                                Error displaying items
                              </p>
                            )}

                            {/* Subtotal */}
                            <div className="grid grid-cols-2 py-2">
                              <div className="text-gray-600">Subtotal</div>
                              <div className="text-right text-gray-700">
                                ${calculateSubtotal().toFixed(2)}
                              </div>
                            </div>

                            {/* Shipping Method */}
                            {/* <div className="text-gray-600">Shipping Cost</div>
                            <div className="text-right text-gray-700">
                       
                            </div> */}

                            {/* Total */}
                            <div className="grid grid-cols-2 border-t border-gray-200 pt-3">
                              <div className="font-semibold text-gray-800">
                                Total
                              </div>
                              <div className="text-right font-semibold text-gray-800">
                                ${calculateTotal().toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <PaymentButtons
                            amount={Number(calculateTotal().toFixed(2))}
                            currency="USD"
                            description="Cart Checkout"
                            onSuccess={() => alert("Payment successful")}
                            onError={(_g, e) =>
                              alert(
                                "Payment error: " + ((e as any)?.message || e)
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Details */}
                  <CheckoutForm
                    onSuccess={setSuccess}
                    subTotal={calculateSubtotal().toFixed()}
                  />
                </div>
              ) : null}
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}
