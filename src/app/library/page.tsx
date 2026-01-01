"use client"
import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaDownload, FaBook, FaHeadphones } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Types for our library items
interface LibraryItem {
  id: string;
  title: string;
  type: 'audio' | 'book';
  coverImage: string;
  downloadDate: string;
  fileUrl: string;
  description: string;
  author?: string;
  duration?: string;
  format?: string;
}

export default function Library() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'audio' | 'books'>('all');
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Authentication check with persistent login
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is logged in from localStorage
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        
        if (!isLoggedIn) {
          // Save the current path to return to after login
          localStorage.setItem('returnUrl', '/library');
          router.push('/login');
          return;
        }

        // If logged in, set authenticated and fetch items
        setIsAuthenticated(true);
        await fetchLibraryItems();
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []); // Remove router from dependencies to prevent re-runs

  // Simulated API call - Replace with your actual data fetching
  const fetchLibraryItems = async () => {
    try {
      // This is dummy data - replace with actual API call
      const dummyData: LibraryItem[] = [
        {
          id: '1',
          title: 'The Heart of Sufism',
          type: 'audio',
          coverImage: '/assets/images/shop/product1.jpg',
          downloadDate: '2024-04-15',
          fileUrl: '/downloads/heart-of-sufism.mp3',
          description: 'A spiritual journey through the mystical teachings of Sufism',
          author: 'Sheikh Abdullah',
          duration: '2h 45m',
          format: 'MP3'
        },
        {
          id: '2',
          title: 'Sufi Poetry Collection',
          type: 'book',
          coverImage: '/assets/images/shop/cart-page-img-2.jpg',
          downloadDate: '2024-04-14',
          fileUrl: '/downloads/sufi-poetry.pdf',
          description: 'A collection of timeless Sufi poetry and wisdom',
          author: 'Various Authors',
          format: 'PDF'
        },
      ];

      setLibraryItems(dummyData);
    } catch (error) {
      console.error('Failed to fetch library items:', error);
    }
  };

  if (isLoading) {
    return (
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Library">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fixnix-lightpurple"></div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return null; // Router will handle redirect
  }

  const filteredItems = libraryItems.filter(item => 
    activeTab === 'all' ? true : item.type === (activeTab === 'books' ? 'book' : 'audio')
  );

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Library">
      <div className="container mx-auto px-4 py-12">
        {/* Library Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-fixnix-darkpurple mb-4">My Sacred Library</h1>
          <p className="text-fixnix-gray">Access your downloaded audio and books here</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {[
            { id: 'all', label: 'All Items', icon: null },
            { id: 'audio', label: 'Audio', icon: FaHeadphones },
            { id: 'books', label: 'Books', icon: FaBook }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 font-medium text-lg border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-fixnix-lightpurple text-fixnix-lightpurple'
                  : 'border-transparent text-fixnix-gray hover:text-fixnix-darkpurple'
              }`}
            >
              {tab.icon && <tab.icon className="text-lg" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Library Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-medium text-fixnix-darkpurple mb-2">
              Your library is empty
            </h3>
            <p className="text-fixnix-gray mb-4">
              Start your spiritual journey by downloading some sacred content
            </p>
            <Link
              href="/shop"
              className="inline-block bg-fixnix-lightpurple text-white px-6 py-3 rounded hover:bg-fixnix-darkpurple transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    {item.type === 'audio' ? (
                      <button className="bg-fixnix-lightpurple text-white p-4 rounded-full hover:bg-fixnix-darkpurple transition-colors">
                        <FaPlay className="text-xl" />
                      </button>
                    ) : (
                      <Link
                        href={item.fileUrl}
                        className="bg-fixnix-lightpurple text-white p-4 rounded-full hover:bg-fixnix-darkpurple transition-colors"
                      >
                        <FaBook className="text-xl" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-fixnix-darkpurple">
                      {item.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.type === 'audio' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-purple-100 text-purple-600'
                    }`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>

                  <p className="text-fixnix-gray text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 text-sm text-fixnix-gray">
                    <div>Author: {item.author}</div>
                    {item.duration && <div>Duration: {item.duration}</div>}
                    <div>Format: {item.format}</div>
                    <div>Downloaded: {new Date(item.downloadDate).toLocaleDateString()}</div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      href={item.fileUrl}
                      className="flex items-center gap-2 text-fixnix-lightpurple hover:text-fixnix-darkpurple"
                    >
                      <FaDownload />
                      Download Again
                    </Link>
                    <Link
                      href={`/product-details/${item.id}`}
                      className="text-fixnix-gray hover:text-fixnix-darkpurple"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
} 