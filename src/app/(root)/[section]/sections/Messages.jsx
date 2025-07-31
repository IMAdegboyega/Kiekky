'use client'

import React, { useState } from 'react';
import { ChatList } from '@/components/Messages/ChatList';
import { ChatView } from '@/components/Messages/ChatView';

const Messages = ({ onClose }) => {
  const [selectedChat, setSelectedChat] = useState(null); // Changed to null - no chat selected initially
  const [showChatView, setShowChatView] = useState(false); // Changed to false - hidden initially

  // Sample chat data
  const chats = [
    {
      id: 1,
      name: 'Amara',
      lastMessage: "You really had me smiling all day with that voice note 😂.",
      time: '08:22',
      hasNewMessage: true
    },
    {
      id: 2,
      name: 'Liam',
      lastMessage: "Still thinking about our convo last night. You’ve got a vibe, no lie.",
      time: 'Yesterday',
      hasNewMessage: false
    },
    {
      id: 3,
      name: 'Sophie',
      lastMessage: "If we link up this weekend, I promise you won’t regret it 😉.",
      time: 'Wed',
      hasNewMessage: true
    },
    {
      id: 4,
      name: 'Derek',
      lastMessage: "Let’s plan something chill. Drinks, good music, and just us.",
      time: 'Mon',
      hasNewMessage: false
    },
    {
      id: 5,
      name: 'Jade',
      lastMessage: "I'm not usually this forward but... damn you’ve got my attention.",
      time: 'Thurs',
      hasNewMessage: false
    },
    {
      id: 6,
      name: 'Kemi',
      lastMessage: "My weekend just cleared up 👀. Wanna come make it interesting?",
      time: 'Sat',
      hasNewMessage: true
    },
    {
      id: 7,
      name: 'Noah',
      lastMessage: "I can’t stop thinking about that one thing you said last night...",
      time: 'Sun',
      hasNewMessage: false
    }
  ];  

  // Sample messages
  const messages = [
    { id: 1, text: "Hey stranger, you disappeared on me 👀", time: '14:02', isMe: false },
    { id: 2, text: "Haha my bad. Got caught up. What’s up though?", time: '14:05', isMe: true },
    { id: 3, text: "I was replaying your voice note, honestly. That accent? 😩", time: '14:06', isMe: false },
    { id: 4, text: "Haha you like? I could send more, but only if you behave 😏", time: '14:07', isMe: true },
    { id: 5, text: "Oh I’ll behave… if that means I get more of *you*", time: '14:09', isMe: false },
    { id: 6, text: "You’re trouble 😅. But I’m here for it.", time: '14:10', isMe: true },
    { id: 7, text: "Let’s make plans then. Tonight? Or too soon?", time: '14:11', isMe: false }
  ];
  

  const handleSelectChat = (index) => {
    setSelectedChat(index);
    setShowChatView(true); // Show the chat view when a chat is selected
  };

  const handleCloseChatView = () => {
    setShowChatView(false);
    // Don't call parent onClose here - just hide the chat view
  };

  return (
    <div className="flex h-full bg-gray-50">
      <ChatList 
        chats={chats} 
        selectedChat={selectedChat} 
        onSelectChat={handleSelectChat} // Use the new handler
      />
      
      {showChatView && selectedChat !== null && (
        <ChatView 
          chat={chats[selectedChat]} 
          messages={messages} 
          onClose={handleCloseChatView}
        />
      )}
    </div>
  );
};

export default Messages;