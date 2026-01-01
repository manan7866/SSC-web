"use client";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  getCart,
  updateCartItem,
  deleteCartItem,
  clearCart,
  type CartItem,
} from "@/hooks/cart";
import type { CartCategory } from "@/hooks/cart";

export default function Home() {
  const [showGiftCard, setShowGiftCard] = useState(false);
  const [giftCardAmount, setGiftCardAmount] = useState(100);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatingItem, setUpdatingItem] = useState<number | null>(null);
  const [deletingItem, setDeletingItem] = useState<number | null>(null);

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

  const handleQuantityChange = async (item: CartItem, newQty: number) => {
    if (newQty < 1) return;

    try {
      setUpdatingItem(item.id);

      // Determine the category based on which product field exists
      let category: CartCategory = "living"; // default
      if (item.music) category = "music";
      else if (item.digitalBook) category = "book";
      else if (item.fashion) category = "fashion";
      else if (item.meditation) category = "meditation";
      else if (item.decoration) category = "decoration";
      else if (item.accessories) category = "accessories";

      // Get the product ID
      const productId =
        item.music?.id ||
        item.digitalBook?.id ||
        item.fashion?.id ||
        item.meditation?.id ||
        item.decoration?.id ||
        item.living?.id ||
        item.accessories?.id;

      if (!productId) {
        setError("Product ID not found");
        return;
      }

      await updateCartItem({
        category,
        productId,
        qty: newQty,
      });

      // Refresh cart items
      await fetchCartItems();
    } catch (err) {
      console.error("Error updating quantity:", err);
      setError("Failed to update quantity");
    } finally {
      setUpdatingItem(null);
    }
  };

  const handleRemoveItem = async (item: CartItem) => {
    try {
      setDeletingItem(item.id);

      // Determine the category based on which product field exists
      let category: CartCategory = "living"; // default
      if (item.music) category = "music";
      else if (item.digitalBook) category = "book";
      else if (item.fashion) category = "fashion";
      else if (item.meditation) category = "meditation";
      else if (item.decoration) category = "decoration";
      else if (item.accessories) category = "accessories";

      // Get the product ID
      const productId =
        item.music?.id ||
        item.digitalBook?.id ||
        item.fashion?.id ||
        item.meditation?.id ||
        item.decoration?.id ||
        item.living?.id ||
        item.accessories?.id;

      if (!productId) {
        setError("Product ID not found");
        return;
      }

      await deleteCartItem({
        category,
        productId,
      });

      // Refresh cart items
      await fetchCartItems();
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Failed to remove item");
    } finally {
      setDeletingItem(null);
    }
  };

  const handleClearCart = async () => {
    try {
      setLoading(true);
      await clearCart();
      setCartItems([]);
    } catch (err) {
      console.error("Error clearing cart:", err);
      setError("Failed to clear cart");
    } finally {
      setLoading(false);
    }
  };

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

  const getCartCategory = (item: CartItem): string | undefined => {
    if (item.music) return "MUSIC";
    if (item.accessories) return "ACCESSORIES";
    if (item.decoration) return "DECORATION";
    if (item.digitalBook) return "DIGITAL_BOOK"; // special case
    if (item.fashion) return "FASHION";
    if (item.living) return "HOME_LIVING"; // special case
    if (item.meditation) return "MEDITATION";
    return undefined; // fallback if no match
  };

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Cart">
      {/* Start Cart Page */}
      <section className="relative block bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Error / Loading */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
              {error}
            </div>
          )}
          {loading && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-700 rounded">
              Loading cart items...
            </div>
          )}

          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-fixnix-darkpurple">
                Shopping Cart
              </h1>
              <p className="text-sm text-fixnix-gray">
                Review your items, adjust quantities, and proceed to checkout.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowGiftCard(!showGiftCard)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 5a3 3 0 0 0-5.5-1.9A3 3 0 0 0 8 5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {showGiftCard ? "Hide Voucher" : "Add Gift Voucher"}
              </button>
              <button
                onClick={handleClearCart}
                disabled={loading || cartItems.length === 0}
                className="px-4 py-2 rounded border border-gray-200 text-sm text-fixnix-darkpurple disabled:opacity-50"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Items Column */}
            <div className="lg:col-span-8">
              {/* Gift Card Option (expanded) */}
              {showGiftCard && (
                <div className="mb-6 p-5 bg-violet-50 border border-violet-100 rounded-lg">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-40 flex-shrink-0">
                      <Image
                        src="/assets/images/shop/giftvoucher.png"
                        alt="Gift Voucher"
                        width={400}
                        height={240}
                        className="w-full rounded-lg object-cover border border-gray-100"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-fixnix-darkpurple">
                        Gift Voucher
                      </h3>
                      <p className="text-sm text-fixnix-gray mb-4">
                        Send a flexible voucher. Recipient can redeem in
                        checkout.
                      </p>
                      <div className="flex gap-3 items-center">
                        <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                          <span className="px-3 text-fixnix-darkpurple">$</span>
                          <input
                            type="number"
                            min={10}
                            value={giftCardAmount}
                            onChange={(e) =>
                              setGiftCardAmount(Number(e.target.value))
                            }
                            className="w-28 p-2 text-sm outline-none"
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Recipient email (optional)"
                          className="flex-1 border border-gray-200 rounded p-2 text-sm"
                        />
                        <button className="px-4 py-2 bg-fixnix-lightpurple text-white rounded hover:bg-fixnix-darkpurple">
                          Add Voucher
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Empty state */}
              {cartItems.length === 0 && !loading ? (
                <div className="py-16 rounded-lg border border-gray-100 text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <h2 className="text-xl font-semibold text-fixnix-darkpurple mb-2">
                    Your cart is empty
                  </h2>
                  <p className="text-sm text-fixnix-gray mb-6">
                    Add items to get started.
                  </p>
                  <Link
                    href="/wall&artdecor#products"
                    className="inline-block px-6 py-3 bg-fixnix-lightpurple text-white rounded hover:bg-fixnix-darkpurple"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                /* Items list */
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const productInfo = getProductInfo(item);
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-gray-100 rounded-lg"
                      >
                        <div className="w-full sm:w-28 flex-shrink-0">
                          <div className="w-full h-28 bg-white border border-gray-200 overflow-hidden rounded">
                            <Image
                              src={productInfo.image}
                              alt={productInfo.title}
                              width={400}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/productdetails/${getCartCategory(item)}/${
                              item.id
                            }`}
                            className="text-base font-semibold text-fixnix-darkpurple hover:underline"
                          >
                            {productInfo.title}
                          </Link>
                          <p className="text-sm text-fixnix-gray mt-1">
                            ${productInfo.price.toFixed(2)}
                          </p>

                          <div className="mt-3 flex items-center gap-3">
                            <div className="flex items-center rounded border border-gray-200">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item,
                                    Math.max(1, item.qty - 1)
                                  )
                                }
                                disabled={updatingItem === item.id}
                                className="px-3 py-1 text-lg bg-white disabled:opacity-50"
                                aria-label="Decrease quantity"
                              >
                                —
                              </button>
                              <input
                                type="number"
                                value={item.qty}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    item,
                                    parseInt(e.target.value) || 1
                                  )
                                }
                                disabled={updatingItem === item.id}
                                className="w-14 text-center p-1 outline-none border-l border-r border-transparent"
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange(item, item.qty + 1)
                                }
                                disabled={updatingItem === item.id}
                                className="px-3 py-1 text-lg bg-white disabled:opacity-50"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => handleRemoveItem(item)}
                              disabled={deletingItem === item.id}
                              className="text-sm text-red-600 hover:underline disabled:opacity-50"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        <div className="mt-3 sm:mt-0 sm:ml-4 text-right min-w-[120px]">
                          <div className="text-sm text-fixnix-gray">
                            Item total
                          </div>
                          <div className="text-lg font-semibold text-fixnix-darkpurple">
                            ${(productInfo.price * item.qty).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Summary Column */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="p-5 border border-gray-100 rounded-lg bg-white">
                  <h3 className="text-lg font-semibold text-fixnix-darkpurple mb-3">
                    Order Summary
                  </h3>

                  <div className="flex justify-between text-sm text-fixnix-gray mb-2">
                    <span>Subtotal</span>
                    <span>
                      $
                      {showGiftCard
                        ? (calculateSubtotal() + giftCardAmount).toFixed(2)
                        : calculateSubtotal().toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-fixnix-gray mb-4">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>

                  <div className="border-t border-dashed pt-4 flex justify-between items-center">
                    <span className="text-base font-semibold text-fixnix-darkpurple">
                      Total
                    </span>
                    <span className="text-lg font-bold text-fixnix-lightpuple">
                      $
                      {showGiftCard
                        ? (calculateSubtotal() + giftCardAmount).toFixed(2)
                        : calculateSubtotal().toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <Link
                      href="/checkout"
                      className="block w-full text-center px-4 py-3 bg-fixnix-lightpurple text-white rounded hover:bg-fixnix-darkpurple"
                    >
                      Proceed to Checkout
                    </Link>
                    <Link href="/wall&artdecor#products">
                      <button className="w-full text-center px-4 mt-2 py-3 border border-gray-200 rounded bg-white text-fixnix-darkpurple disabled:opacity-50">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="p-5 border border-gray-100 rounded-lg bg-white">
                  <h4 className="text-sm font-semibold text-fixnix-darkpurple mb-2">
                    Have a coupon?
                  </h4>
                  <form className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      className="flex-1 border border-gray-200 rounded p-2 text-sm"
                    />
                    <button className="px-3 py-2 bg-fixnix-lightpurple text-white rounded hover:bg-fixnix-darkpurple text-sm">
                      Apply
                    </button>
                  </form>
                  <p className="text-xs text-fixnix-gray mt-2">
                    Coupons applied at checkout.
                  </p>
                </div>

                <div className="p-4 text-xs text-fixnix-gray">
                  <p>
                    Secure checkout • 30-day returns • Live support available
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
