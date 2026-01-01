"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/s-card";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/s-tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import apiClient from "@/lib/apiClient";
import Link from "next/link";
import { Loader2Icon, PackageXIcon } from "lucide-react";
import { useCancelModal } from "../hooks/useCancelModal";
import { useReturnModal } from "../hooks/useReturnModal";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type OrderItem = {
  orderId: number;
  orderStatus: string;
  paymentStatus: string;
  orderCreatedAt: string;
  item: {
    id: number;
    orderId: number;
    category: string;
    productId: number;
    vendorId: string;
    quantity: number;
    price: number;
    status: string;
    trackingNumber: string | null;
    shippedAt: string | null;
    deliveredAt: string | null;
    createdAt: string;
    updatedAt: string;
    product: {
      id: number;
      title: string;
      price: number;
      images: string[];
      coverImage?: string;
      url?: string;
      mp4Url?: string;
      mp3Url?: string;
    };
  };
};

export default function ProductsTab() {
  const [filter, setFilter] = useState<"all" | string>("all");
  const [products, setProducts] = useState<OrderItem[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 6;

  const fetchMyProducts = useCallback(async (filter?: string | null) => {
    try {
      setLoading(true);
      const url = filter
        ? `/user/purchases?category=${filter}`
        : `/user/purchases`;
      console.log(url);

      const res = await apiClient.get(url);
      const data = res.data;
      setProducts(data.data.orderItems || []);
    } catch (error) {
      setError(
        (error instanceof Error && error.message) || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMyProducts();
  }, [fetchMyProducts]);

  const { CancelModal, openCancelModal } = useCancelModal(fetchMyProducts);
  const { openReturnModal, ReturnModal } = useReturnModal(fetchMyProducts);

  // Filter
  // const filtered =
  //   filter === "all"
  //     ? products
  //     : products.filter((p) => p.item.category === filter);

  // Pagination
  const totalPages = Math.ceil(products.length / perPage);
  const paginated = products.slice((page - 1) * perPage, page * perPage);

  return (
    <TabsContent value="products" className="space-y-6">
      <Card>
        <CardHeader className="flex-row justify-between">
          <div className="block">
            <CardTitle>My Products</CardTitle>
            <CardDescription>
              View and download your purchased items.
            </CardDescription>
          </div>
          <div className="flex justify-between items-center">
            <Select
              value={filter}
              onValueChange={(val) => {
                setPage(1);
                console.log(val);
                fetchMyProducts(val !== "all" ? val : null);
                setFilter(val);
              }}
            >
              <SelectTrigger className="w-40 focus-visible:ring-0 ring-fixnix-lightpurple">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {/* Dynamically render categories */}
                {[
                  "MUSIC",
                  "DIGITAL_BOOK",
                  "MEDITATION",
                  "FASHION",
                  "HOME_LIVING",
                  "DECORATION",
                  "ACCESSORIES",
                ].map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}

          {/* Product Grid */}
          {loading ? (
            <div className="w-full flex items-center justify-center min-h-[200px]">
              <Loader2Icon className="text-fixnix-lightpurple animate-spin" />
            </div>
          ) : paginated.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((order) => {
                const { item } = order;
                const product = item.product;
                const isDigital = !!product.url;
                const isPending = item.status === "PENDING";
                const isDelivered = item.status === "DELIVERED";

                return (
                  <Card
                    key={item.id}
                    className="flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden bg-white"
                  >
                    {/* Header */}
                    <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 bg-gray-50 border-b px-4 py-3">
                      <div className="text-left sm:text-left">
                        <CardTitle className="text-base sm:text-lg font-semibold text-gray-900">
                          {product.title}
                        </CardTitle>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Order ID: #{order.orderId} •{" "}
                          {new Date(order.orderCreatedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`capitalize w-fit mx-auto sm:mx-0 ${
                          order.paymentStatus === "PAID"
                            ? "border-green-500 text-green-600"
                            : "border-yellow-500 text-yellow-600"
                        }`}
                      >
                        {order.paymentStatus}
                      </Badge>
                    </CardHeader>

                    {/* Body */}
                    <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
                      {/* Product Image */}
                      <div className="w-full  h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg ">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src={
                              product.images?.[0] ||
                              product.coverImage ||
                              "/assets/images/loader.png"
                            }
                            fill
                            alt={product.title}
                            className="w-full rounded-lg object-contain border"
                          />
                        </AspectRatio>
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium text-gray-900">
                              Category:
                            </span>{" "}
                            {item.category}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-medium text-gray-900">
                              Price:
                            </span>{" "}
                            ${item.price} × {item.quantity}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-medium text-gray-900">
                              Status:
                            </span>{" "}
                            <Badge
                              variant="outline"
                              className={`capitalize ${
                                item.status === "DELIVERED"
                                  ? "border-green-500 text-green-600"
                                  : item.status === "SHIPPED"
                                  ? "border-blue-500 text-blue-600"
                                  : item.status === "CANCELLED"
                                  ? "border-red-500 text-red-600"
                                  : item.status === "PENDING"
                                  ? "border-yellow-500 text-yellow-600"
                                  : "border-gray-400 text-gray-500"
                              }`}
                            >
                              {item.status.toLowerCase()}
                            </Badge>
                          </p>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          {/* Digital Download */}
                          {isDigital && (
                            <a
                              href={product?.url?.replace(
                                "/upload/",
                                "/upload/fl_attachment:myproduct/"
                              )}
                              download="myproduct"
                              className="w-full sm:w-auto"
                            >
                              <Button
                                size="sm"
                                variant="default"
                                className="w-full sm:w-auto bg-fixnix-lightpurple"
                              >
                                Download
                              </Button>
                            </a>
                          )}

                          {/* Conditional Action Buttons */}
                          {!isDigital && (
                            <>
                              {isPending && (
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => openCancelModal(item.id)}
                                >
                                  Cancel Order
                                </Button>
                              )}

                              {isDelivered && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => openReturnModal(item.id)}
                                >
                                  Return Item
                                </Button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center mx-auto w-full">
              <PackageXIcon className="w-16 h-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-fixnix-darkpurple">
                No purchased products found
              </h3>
              <p className="text-sm text-gray-500">
                Purchase products to see them listed here.
              </p>
              <Link href="/wall&artdecor#products">
                <Button className="mt-4 bg-fixnix-lightpurple">
                  Go to Shop
                </Button>
              </Link>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => page > 1 && setPage(page - 1)}
                    className={
                      page === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i} className="cursor-pointer">
                    <PaginationLink
                      onClick={() => setPage(i + 1)}
                      isActive={page === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => page < totalPages && setPage(page + 1)}
                    className={
                      page === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </CardContent>
      </Card>
      {CancelModal}
      {ReturnModal}
    </TabsContent>
  );
}
