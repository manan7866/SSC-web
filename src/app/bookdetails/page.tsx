"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/sections/home3/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaLock, FaInfoCircle, FaBook, FaHeart, FaRegHeart, FaShareAlt, FaFacebook, FaWhatsapp, FaPinterest, FaClock, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface BookDetails {
  id: string;
  title: string;
  author: string;
  genre: string;
  releaseYear: string;
  coverImage: string;
  description: string;
  price: number;
  previewUrl: string;
  pages: number;
  reads: number;
}

const sampleBook: BookDetails = {
  id: "1",
  title: "The Path of Sufism",
  author: "Sheikh Abdul Qadir",
  genre: "Spirituality",
  releaseYear: "2023",
  coverImage: "/assets/images/books/sample-cover.jpg",
  description: "A comprehensive guide to understanding the mystical path of Sufism, its principles, and practices. This book delves deep into the spiritual journey of self-discovery and divine love.",
  price: 29.99,
  previewUrl: "/assets/pdfs/sample-preview.pdf",
  pages: 250,
  reads: 12450
};

export default function BookDetails() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [countdown, setCountdown] = useState(15 * 60);
  const [showToast, setShowToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [activeTab, setActiveTab] = useState("description");
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  // Handle add to cart
  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setShowToast({
      message: "Sacred book added to your cart",
      type: 'success'
    });
    setTimeout(() => {
      setShowAddedToCart(false);
      window.location.href = "/cart";
    }, 1500);
  };

  // Handle buy now
  const handleBuyNow = () => {
    window.location.href = "/checkout";
  };

  // Handle download after purchase
  const handleDownload = () => {
    if (!hasPurchased) {
      return;
    }
    setShowTermsModal(true);
  };

  // Handle terms acceptance
  const handleTermsAccept = () => {
    setShowTermsModal(false);
    setShowDownloadModal(true);
    setShowToast({
      message: "Your sacred book is ready for your personal journey.",
      type: 'success'
    });
  };

  // Clear toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Book Details">
      <div className="container mx-auto px-4 py-10">
        {/* Main Book Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Book Preview Section */}
          <div className="relative">
            <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
              <div className="relative h-96">
                <Image
              src={sampleBook.coverImage}
              alt={sampleBook.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Preview Message */}
            <div className="bg-fixnix-lightpurple/5 border border-fixnix-lightpurple/10 rounded-lg p-4">
              <p className="text-sm text-fixnix-lightpurple flex items-center">
                <FaInfoCircle className="mr-2" />
                 Purchase to access the book.
              </p>
            </div>
          </div>

          {/* Book Info Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{sampleBook.title}</h1>
            <p className="text-gray-600 mb-4">By {sampleBook.author}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center text-gray-600">
                <FaBook className="mr-2" />
                {sampleBook.reads.toLocaleString()} reads
              </span>
              <span className="flex items-center text-gray-600">
                <FaClock className="mr-2" />
                {sampleBook.pages} pages
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="text-3xl font-bold text-fixnix-lightpurple">
                ${sampleBook.price}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                One-time purchase, lifetime access
              </p>
            </div>

            {/* Purchase/Download Section */}
            <div className="space-y-4 mb-8">
              {!hasPurchased ? (
                <div className="space-y-3">
                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-fixnix-lightpurple text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    Download Now
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-white border-2 border-fixnix-lightpurple text-fixnix-lightpurple py-3 px-6 rounded-lg font-medium hover:bg-fixnix-lightpurple/5 transition-colors flex items-center justify-center"
                  >
                    Add to Cart
                  </button>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <FaLock className="text-fixnix-lightpurple" />
                    Secure payment
                  </div>
                </div>
              ) : (
              <button
                  onClick={handleDownload}
                  className="w-full bg-fixnix-lightpurple text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                  <FaDownload className="mr-2" /> Download Full Book
              </button>
              )}
            </div>

            {/* Added to Cart Toast */}
            {showAddedToCart && (
              <div className="fixed top-4 right-4 bg-green-50 border-l-4 border-green-500 p-4 shadow-lg rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-800">
                      Added to cart successfully
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Share this sacred book:</span>
              <div className="flex gap-4">
                <Link href="#" className="text-fixnix-darkpurple hover:opacity-80">
                  <FaFacebook size={20} />
                </Link>
                <Link href="#" className="text-fixnix-darkpurple hover:opacity-80">
                  <FaWhatsapp size={20} />
                </Link>
                <Link href="#" className="text-fixnix-darkpurple hover:opacity-80">
                  <FaPinterest size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <div className="flex -mb-px">
              {["description", "terms"].map((tab) => (
                <button
                  key={tab}
                  className={`py-4 px-6 text-center border-b-2 font-medium ${
                    activeTab === tab
                      ? "border-fixnix-lightpurple text-fixnix-lightpurple"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">About this Sacred Book</h2>
                <p className="text-gray-600 mb-6">{sampleBook.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Spiritual Context</h3>
                  <p className="text-gray-600">
                    This book is part of our sacred collection, carefully curated to preserve
                    the authentic spiritual teachings of the Sufi tradition.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    By downloading this sacred book, you agree to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Use the content for personal, spiritual practice only</li>
                    <li>Not share, redistribute, or resell the book</li>
                    <li>Respect the sacred nature of these teachings</li>
                    <li>Accept that downloads are tied to your account and device</li>
                    <li>Understand that violations may result in account suspension</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toast Messages */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className={`px-6 py-3 rounded-lg shadow-lg flex items-center ${
            showToast.type === 'success' ? 'bg-green-500' :
            showToast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          } text-white`}>
            {showToast.type === 'success' && <FaCheckCircle className="mr-2" />}
            {showToast.type === 'error' && <FaInfoCircle className="mr-2" />}
            {showToast.type === 'info' && <FaInfoCircle className="mr-2" />}
            {showToast.message}
          </div>
        </div>
      )}
    </Layout>
  );
} 