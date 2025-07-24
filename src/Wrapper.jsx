import React, { createContext, useState } from 'react';
export const MyContext = createContext();
import Libdata from '../public/marktube_backup_1753388036672.json'; // Adjust path if needed

const Wrapper = ({children}) => {
    let data=[{
    "type": "standard",
    "title": "Never Gonna Give You Up",
    "channel": "Rick Astley",
    "verified": true,
    "views": "1.5B views",
    "uploaded": "14 years ago",
    "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
  },
  {
    "type": "wide",
    "title": "GANGNAM STYLE(강남스타일) M/V",
    "channel": "officialpsy",
    "description": "The viral hit that broke the internet. Watch the full video and join the dance!",
    "views": "4.9B views",
    "uploaded": "12 years ago",
    "thumbnail": "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg"
  },
  {
    "type": "wide",
    "title": "My Morning Routine That Changed Everything",
    "channel": "Matt D'Avella",
    "description": "Simple habits that helped me get my life together.",
    "views": "5.7M views",
    "uploaded": "2 years ago",
    "thumbnail": "https://i.ytimg.com/vi/y7e-GC6oGhg/hqdefault.jpg"
  },
  {
    "type": "standard",
    "title": "10 Minute Home Workout For Beginners",
    "channel": "Chloe Ting",
    "verified": true,
    "views": "24M views",
    "uploaded": "1 year ago",
    "thumbnail": "https://i.ytimg.com/vi/2pLT-olgUJs/hqdefault.jpg"
  },
  {
    "type": "standard",
    "title": "How I Learned to Code in 6 Months",
    "channel": "Fireship",
    "verified": true,
    "views": "3.7M views",
    "uploaded": "1 year ago",
    "thumbnail": "https://i.ytimg.com/vi/Q33KBiDriJY/hqdefault.jpg"
  },
  {
    "type": "standard",
    "title": "Master Public Speaking in 20 Minutes",
    "channel": "TEDx Talks",
    "views": "17M views",
    "uploaded": "4 years ago",
    "thumbnail": "https://i.ytimg.com/vi/tShavGuo0_E/hqdefault.jpg"
  },
  {
    type: "standard",
    title: "How to Speak So That People Want to Listen",
    channel: "TED",
    verified: true,
    views: "40M views",
    uploaded: "8 years ago",
    thumbnail: "https://i.ytimg.com/vi/eIho2S0ZahI/hqdefault.jpg"
  },
  {
    type: "standard",
    title: "How to Study for Long Hours Without Getting Tired",
    channel: "Ali Abdaal",
    verified: true,
    views: "3.8M views",
    uploaded: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/IlU-zDU6aQ0/hqdefault.jpg"
  },
  {
    type: "standard",
    title: "Build 5 JavaScript Projects in 5 Hours",
    channel: "freeCodeCamp.org",
    verified: true,
    views: "1.9M views",
    uploaded: "3 years ago",
    thumbnail: "https://i.ytimg.com/vi/3PHXvlpOkf4/hqdefault.jpg"
  },
  {
    type: "standard",
    title: "Time Management Tips That Actually Work",
    channel: "Thomas Frank",
    verified: true,
    views: "5.6M views",
    uploaded: "3 years ago",
    thumbnail: "https://i.ytimg.com/vi/oTugjssqOT0/hqdefault.jpg"
  },
   {
    type: "standard",
    title: "Atomic Habits by James Clear | Animated Summary",
    channel: "Productivity Guy",
    verified: false,
    views: "6.2M views",
    uploaded: "2 years ago",
    thumbnail: "https://i.ytimg.com/vi/PZ7lDrwYdZc/hqdefault.jpg"
  },
  {
    type: "playlist",
    title: "Python Crash Course Tutorial",
    channel: "freeCodeCamp.org",
    views: "8M views",
    uploaded: "2 years ago",
    thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg"
  },
  {
    type: "wide",
    title: "Eminem – Lose Yourself [HD]",
    channel: "EminemMusic",
    description: "Watch the official video of Eminem’s Academy Award-winning song.",
    views: "800M views",
    uploaded: "15 years ago",
    thumbnail: "https://i.ytimg.com/vi/_Yhyp-_hX2s/hqdefault.jpg"
  },
  {
    type: "standard",
    title: "How to Learn Anything Fast – Josh Kaufman",
    channel: "TEDx Talks",
    verified: false,
    views: "28M views",
    uploaded: "10 years ago",
    thumbnail: "https://i.ytimg.com/vi/5MgBikgcWnY/hqdefault.jpg"
  },

]
const [showLogin, setShowLogin] = useState(false);
const [Notifshow, setNotifshow] = useState(false);
const [users, setusers] = useState([]);
const [theme,settheme] = useState(false)
const contextData={
  users,setusers,data,showLogin,setShowLogin,Notifshow,setNotifshow,theme,settheme,Libdata
}
  return (
  <MyContext.Provider value={contextData}>
            {children}
  </MyContext.Provider>
  )
}

export default Wrapper