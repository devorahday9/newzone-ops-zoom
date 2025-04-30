
import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatButton = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <button className="bg-zoom-blue rounded-full p-4 text-white shadow-lg hover:bg-blue-600 transition-colors">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatButton;
