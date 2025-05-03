'use client';

import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Page = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (userInput.trim() === '') {
      alert('कृपया एक प्रश्न दर्ज करें');
      return;
    }

    insertUserMessage(userInput);
    await fetchBotResponse(userInput);
    setUserInput('');
    scrollToBottom();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const insertUserMessage = (message: string) => {
    const chatContainer = document.querySelector('.allchat');
    if (!chatContainer) return;

    const h2 = document.createElement('h2');
    h2.className = 'text-[2rem] font-semibold text-gray-400 flex gap-[0.5rem] items-baseline';

    const personIcon = document.createElement('span');
    personIcon.innerHTML = ReactDOMServer.renderToString(
      <PersonIcon className="!text-[2rem] cursor-pointer" />
    );

    h2.appendChild(personIcon);
    h2.appendChild(document.createTextNode(message));
    chatContainer.appendChild(h2);
  };

  const insertBotMessage = (message: string) => {
    const chatContainer = document.querySelector('.allchat');
    if (!chatContainer) return;

    const h2 = document.createElement('h2');
    h2.className = 'text-[2rem] text-green-400 flex gap-[0.5rem] items-baseline';

    const botIcon = document.createElement('span');
    botIcon.innerHTML = ReactDOMServer.renderToString(
      <AutoAwesomeIcon className="text-purple-400 !text-[2rem] cursor-pointer" />
    );

    h2.appendChild(botIcon);
    h2.appendChild(document.createTextNode(message));
    chatContainer.appendChild(h2);
  };

  const removeLastBotMessage = () => {
    const chatContainer = document.querySelector('.allchat');
    if (!chatContainer) return;

    const allMessages = chatContainer.querySelectorAll('h2');
    if (allMessages.length === 0) return;

    const last = allMessages[allMessages.length - 1];
    if (last && last.textContent?.includes('लोड हो रहा है')) {
      chatContainer.removeChild(last);
    }
  };

  const fetchBotResponse = async (query: string) => {
    try {
      setLoading(true);
      insertBotMessage('लोड हो रहा है...');

      const res = await axios.post('/api/getchatbotdata', { query });

      removeLastBotMessage();
      insertBotMessage(res.data.answer || 'माफ़ कीजिए, मैं समझ नहीं पाया।');
    } catch (error) {
      removeLastBotMessage();
      insertBotMessage('सर्वर से जवाब प्राप्त नहीं हो पाया। कृपया पुनः प्रयास करें।');
      console.error('Error fetching bot response:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    const chatContainer = document.querySelector('.allchat');
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center pt-[2rem] flex-col gap-[1rem]">
        <div className="below-sm:w-[95%] min-h-[70vh] bg-gray-900 w-[70%] rounded-[1rem] p-[1rem] overflow-hidden">
          <div className="allchat h-[70vh] flex flex-col gap-[0.8rem] overflow-y-auto">
            <h2 className="text-[2rem] flex gap-[0.5rem] items-center">
              <AutoAwesomeIcon className="text-purple-400 !text-[2rem] cursor-pointer" />
              नमस्ते! मैं आपका फ़ार्मर साथी हूँ, आपकी क्या मदद कर सकता हूँ?
            </h2>
          </div>
        </div>
        <div className="below-sm:w-[95%] w-[70%] flex justify-center items-end gap-[1rem]">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-[80%] text-gray-200 bg-transparent border-b-[2px] focus:outline-none text-[1.5rem]"
            type="text"
            placeholder="प्रश्न दर्ज करें"
          />
          <SendIcon
            onClick={handleSubmit}
            className="!text-[2.5rem] rotate-[330deg] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
