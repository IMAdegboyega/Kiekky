import React from 'react';

const Notification = () => {
  // Sample notification data - you can replace this with your own data
  const notifications = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      message: "You have received a welcome gift of 100 Token.",
      timestamp: "May 17, 2022 at 10AM"
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      message: "You have received a welcome gift of 100 Token.",
      timestamp: "May 17, 2022 at 10AM"
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      message: "You have received a welcome gift of 100 Token.",
      timestamp: "May 17, 2022 at 10AM"
    },
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      message: "You have received a welcome gift of 100 Token.",
      timestamp: "May 17, 2022 at 10AM"
    },
    {
      id: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      message: "You have received a welcome gift of 100 Token.",
      timestamp: "May 17, 2022 at 10AM"
    }
  ];

  return (
    <div className="w-screen max-w-5xl mx-auto bg-white pt-4 p-8">
      {/* Header */}
      <div className="px-4 py-3 border-0">
        <h2 className="text-lg font-semibold text-gray-900">Notification</h2>
      </div>
      
      {/* Notification List */}
      <div className="">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-3 p-4 hover:bg-blue-50 hover:border-l-2 hover:border-blue-600">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={notification.avatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 leading-relaxed">
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;