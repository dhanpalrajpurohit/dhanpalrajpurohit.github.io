// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dhanpalrajpurohit', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Ytubers',
          description:'A web-application where youtubers can send the invite to other youtubers for collabration.',
          imageUrl:'https://miro.medium.com/v2/resize:fit:828/format:webp/1*oSEaTHCA2--FyRDeILHRQw@2x.png',
          link: 'https://youtubers-6o45.vercel.app/',
        },
        {
          title: 'Text Share',
          description:'A web-application where user send their text from computer to mobile device just with single scanner.',
          imageUrl:'https://cdn.icon-icons.com/icons2/2018/PNG/512/friends_link_send_share_icon_123609.png',
          link: 'https://text-share-rho.vercel.app/',
        },
        {
          title: 'Youtube Clone',
          description:"A YouTube clone with Google API is a web application that replicates YouTube's core functionalities, including video uploading, streaming, and searching. By integrating with Google's YouTube Data API, it enables users to search for videos, access video details, and manage playlists. This project delivers a scalable, feature-rich video-sharing experience using modern web technologies.",
          imageUrl:'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
          link: 'https://youtube-clone-nine-red.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Dhanpal Singh Rajpurohit',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'dhanpal-rajpurohit',
    twitter: 'DhanpalRaj1998',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'rajpurohitdhanpal',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1iPT5YJ-IBhPV7E6DNUOAsFHrEX-i7XAe/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Django',
    'FastAPI',
    'Javascript',
    'Typescript',
    'React.js',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
    'AWS'
  ],
  experiences: [
    {
      company: 'LA Net Team Software Solution Surat',
      position: 'Full Stack Developer',
      from: 'December 2021',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'IT Futurz Pvt Ltd Surat',
      position: 'Full Stack Developer',
      from: 'July 2020',
      to: 'October 2020',
      companyLink: '',
    },
    {
      company: 'Pixelbeget Lab',
      position: 'Python Developer',
      from: 'June 2019',
      to: 'June 2020',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Python Django',
      body: 'Learn code online',
      year: 'Feb 2021',
      link: 'https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/86241/3869324_86241.pdf?1614257638',
    },
    {
      name: 'Python',
      body: 'Hacker Rank',
      year: 'Jul 2020',
      link: 'https://www.hackerrank.com/certificates/97db2b83f559',
    },
  ],
  educations: [
    {
      institution: 'Dharmsinh Desai University',
      degree: 'Master of Computer Application',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Shree Ramkrishna Institute of Computer Science and Applied Science',
      degree: 'Bachlore of Science(Computer Science)',
      from: '2016',
      to: '2019',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: ''
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'rajpurohitdhanpal', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [],
    // themes: [
    //   'light',
    //   'dark',
    //   'cupcake',
    //   'bumblebee',
    //   'emerald',
    //   'corporate',
    //   'synthwave',
    //   'retro',
    //   'cyberpunk',
    //   'valentine',
    //   'halloween',
    //   'garden',
    //   'forest',
    //   'aqua',
    //   'lofi',
    //   'pastel',
    //   'fantasy',
    //   'wireframe',
    //   'black',
    //   'luxury',
    //   'dracula',
    //   'cmyk',
    //   'autumn',
    //   'business',
    //   'acid',
    //   'lemonade',
    //   'night',
    //   'coffee',
    //   'winter',
    //   'dim',
    //   'nord',
    //   'sunset',
    //   'procyon',
    // ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
