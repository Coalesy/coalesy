export const eventsData = [
  {
    id: 1,
    image: './event-one.svg',
    icons: './solana.svg',
    projectName: 'Solana Foundation',
    verified: true,
    description: 'Explore our resource channels, prompt-crafting forum and support channels, where our team of guides is ready to help you around the server...',
    totalJoined: 1500,
    type: 'Online', // Event type
    date: '2024-09-15',
    time: '15:00',
    category: 'Gaming',
    status: 'Upcoming',
    programs: [
      { number: 1, title: 'Opening Ceremony' },
      { number: 2, title: 'Keynote Speech' },
      { number: 3, title: 'Networking' },
    ],
    questions: [
      { question: 'What is the event about?', answer: 'This event is focused on Solana Foundation’s initiatives and developments.' },
      { question: 'Who can join?', answer: 'Anyone interested in blockchain technology can join.' },
      { question: 'How to participate?', answer: 'You can join via the online link provided.' },
      { question: 'Is it free?', answer: 'Yes, the event is free for all participants.' },
    ],
    tags: ['Blockchain', 'Solana', 'Hackathon', 'Gaming', 'Web3'],
    language: 'English',
    resources: {
      website: 'https://solana.com',
      discord: 'https://discord.gg/solana',
      telegram: 'https://t.me/solana',
      x: 'https://twitter.com/solana',
      youtube: 'https://youtube.com/solana',
    },
    organizers: [
      { profilePicture: './organizer1.jpg', fullName: 'John Doe', role: 'Event Coordinator' },
      { profilePicture: './organizer2.jpg', fullName: 'Jane Smith', role: 'Technical Lead' },
    ],
  },
  {
    id: 2,
    image: './event-two.svg',
    icons: './binance.svg',
    projectName: 'Binance',
    verified: false,
    description: 'Join us for an intensive hackathon focused on building the future of finance on the blockchain.',
    totalJoined: 2000,
    type: 'Physical', // Event type
    date: '2024-09-20',
    time: '20:00',
    category: 'Blockchain',
    status: 'Upcoming',
    programs: [
      { number: 1, title: 'Hackathon Registration' },
      { number: 2, title: 'Workshop: Building on Binance Smart Chain' },
      { number: 3, title: 'Pitching Session' },
    ],
    questions: [
      { question: 'Where is the event located?', answer: 'The event will take place at Binance’s headquarters in Malta.' },
      { question: 'What should I bring?', answer: 'Bring your laptop and a positive attitude.' },
      { question: 'Is accommodation provided?', answer: 'Accommodation is not provided, but we have partnered with local hotels.' },
      { question: 'Can I participate remotely?', answer: 'This is a physical event, so remote participation is not possible.' },
    ],
    tags: ['Blockchain', 'Binance', 'Hackathon', 'Finance', 'Cryptocurrency'],
    language: 'English',
    resources: {
      website: 'https://binance.com',
      discord: 'https://discord.gg/binance',
      telegram: 'https://t.me/binance',
      x: 'https://twitter.com/binance',
      youtube: 'https://youtube.com/binance',
    },
    organizers: [
      { profilePicture: './organizer3.jpg', fullName: 'Alice Johnson', role: 'Hackathon Coordinator' },
      { profilePicture: './organizer4.jpg', fullName: 'Bob Williams', role: 'Technical Mentor' },
    ],
  },
];
