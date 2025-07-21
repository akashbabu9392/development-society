export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  location: string;
  startDate: string;
  endDate?: string;
  beneficiaries: string;
  status: 'active' | 'upcoming' | 'completed';
  image: string;
  gallery?: string[];
  impact?: string[];
  budget?: string;
  partners?: Array<{ name: string; logo: string }>;
}

export const upcomingProjects: Project[] = [
  {
    id: 'up1',
    title: "Digital Literacy Program",
    description: "Empowering rural youth with essential digital skills and computer literacy to enhance their employability.",
    fullDescription: [
      "The Digital Literacy Program is designed to bridge the digital divide in rural communities by providing comprehensive training in essential computer and digital skills. Our program targets youth aged 15-25 who lack access to quality digital education.",
      "The curriculum covers basic computer operations, internet usage, Microsoft Office applications, email communication, and online safety. We also provide hands-on training with actual devices to ensure practical learning.",
      "Our goal is to make participants job-ready for the digital economy, opening doors to better employment opportunities and empowering them with skills that are increasingly essential in today's world."
    ],
    location: "Guntur District, Andhra Pradesh",
    startDate: "2023-09-15",
    endDate: "2024-03-15",
    beneficiaries: "300+ youth",
    status: 'upcoming',
    image: "/images/digital-literacy.jpg",
    gallery: [
      "/images/digital-literacy-1.jpg",
      "/images/digital-literacy-2.jpg",
      "/images/digital-literacy-3.jpg"
    ],
    impact: [
      "Basic computer literacy for 300+ rural youth",
      "Training in essential software applications",
      "Internet navigation and online safety education",
      "Job readiness and resume building workshops",
      "Certification upon completion"
    ],
    budget: "₹2,500,000",
    partners: [
      { name: "Ministry of Electronics and IT", logo: "/logos/meity.png" },
      { name: "Digital India Foundation", logo: "/logos/digital-india.png" }
    ]
  },
  {
    id: 'up2',
    title: "Clean Water Initiative",
    description: "Installing water purification systems in remote villages to provide access to clean drinking water.",
    fullDescription: [
      "The Clean Water Initiative addresses the critical need for safe drinking water in rural communities by installing advanced water purification systems. These systems use multi-stage filtration and UV treatment to provide clean, safe drinking water.",
      "Each system is installed in a central community location and is capable of providing up to 1,000 liters of clean water per hour. The project includes comprehensive community training on system maintenance and water conservation practices.",
      "By providing reliable access to clean water, we aim to reduce waterborne diseases and improve overall community health, particularly for women and children who often bear the burden of water collection."
    ],
    location: "Krishna District, Andhra Pradesh",
    startDate: "2023-11-01",
    endDate: "2024-05-01",
    beneficiaries: "1000+ villagers",
    status: 'upcoming',
    image: "/images/clean-water.jpg",
    gallery: [
      "/images/clean-water-1.jpg",
      "/images/clean-water-2.jpg",
      "/images/clean-water-3.jpg"
    ],
    impact: [
      "Installation of 5 water purification systems",
      "Access to clean water for 1,000+ villagers",
      "Reduction in waterborne diseases",
      "Community water management training",
      "Improved school attendance (especially for girls)"
    ],
    budget: "₹3,200,000",
    partners: [
      { name: "WaterAid India", logo: "/logos/wateraid.png" },
      { name: "State Rural Development Dept.", logo: "/logos/rural-dev.png" }
    ]
  },
  {
    id: 'up3',
    title: "Elderly Care Center",
    description: "Establishing a dedicated care center for the elderly with medical facilities and recreational activities.",
    fullDescription: [
      "The Elderly Care Center is designed to provide comprehensive care and support for senior citizens who lack family support or proper care. Our center offers a safe, comfortable, and engaging environment for the elderly.",
      "Services include 24/7 medical care, nutritious meals, physiotherapy, recreational activities, and social engagement programs. We also provide counseling services and organize regular health check-up camps in collaboration with local hospitals.",
      "Our goal is to ensure that every resident receives the care, respect, and dignity they deserve in their golden years, while also creating a vibrant community where they can thrive."
    ],
    location: "Guntur, Andhra Pradesh",
    startDate: "2024-01-15",
    endDate: "2024-07-15",
    beneficiaries: "50+ elderly",
    status: 'upcoming',
    image: "/images/elderly-care.jpg",
    gallery: [
      "/images/elderly-care-1.jpg",
      "/images/elderly-care-2.jpg",
      "/images/elderly-care-3.jpg"
    ],
    impact: [
      "24/7 residential care facility",
      "Regular medical check-ups and care",
      "Nutritious meals and dietary planning",
      "Recreational and social activities",
      "Counseling and emotional support"
    ],
    budget: "₹4,500,000",
    partners: [
      { name: "Ministry of Social Justice", logo: "/logos/social-justice.png" },
      { name: "HelpAge India", logo: "/logos/helpage.png" }
    ]
  },
  {
    id: 'up4',
    title: "Vocational Training Center",
    description: "Setting up a center to provide vocational training in various trades for underprivileged youth.",
    fullDescription: [
      "The Vocational Training Center is designed to provide market-relevant skills training to underprivileged youth, helping them secure gainful employment or start their own businesses. The center offers courses in various trades including electrician training, plumbing, carpentry, tailoring, and mobile phone repair.",
      "Each course is designed in collaboration with industry experts to ensure the skills taught are in line with current market demands. The training includes both theoretical knowledge and practical, hands-on experience.",
      "Upon completion, participants receive certification and job placement assistance. We also provide entrepreneurship training and micro-finance linkages for those interested in starting their own businesses."
    ],
    location: "Prakasam District, Andhra Pradesh",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    beneficiaries: "200+ youth annually",
    status: 'upcoming',
    image: "/images/vocational-training.jpg",
    gallery: [
      "/images/vocational-1.jpg",
      "/images/vocational-2.jpg",
      "/images/vocational-3.jpg"
    ],
    impact: [
      "Training in 5+ vocational trades",
      "200+ youth trained annually",
      "Job placement assistance",
      "Entrepreneurship development programs",
      "Industry partnerships for practical training"
    ],
    budget: "₹5,000,000",
    partners: [
      { name: "Ministry of Skill Development", logo: "/logos/skill-india.png" },
      { name: "National Skill Development Corporation", logo: "/logos/nsdc.png" }
    ]
  },
  {
    id: 'up5',
    title: "Community Health Camp",
    description: "Organizing free health check-up camps in remote villages with specialist doctors and free medicines.",
    fullDescription: [
      "The Community Health Camp initiative brings comprehensive healthcare services directly to remote villages that lack access to proper medical facilities. Our mobile health units, staffed with qualified doctors and medical professionals, provide free consultations, diagnostic tests, and essential medicines.",
      "Each camp includes general health check-ups, eye examinations, dental care, maternal and child health services, and specialist consultations. We also conduct health awareness sessions on topics such as hygiene, nutrition, and disease prevention.",
      "The program focuses on early detection and prevention of common health issues, with referrals to partner hospitals for further treatment when necessary. Our goal is to improve health outcomes in underserved communities and reduce the burden of preventable diseases."
    ],
    location: "Nellore District, Andhra Pradesh",
    startDate: "2023-10-10",
    endDate: "2023-12-31",
    beneficiaries: "500+ villagers",
    status: 'upcoming',
    image: "/images/community-health.jpg",
    gallery: [
      "/images/health-camp-1.jpg",
      "/images/health-camp-2.jpg",
      "/images/health-camp-3.jpg"
    ],
    impact: [
      "Free health check-ups for 500+ villagers",
      "Distribution of essential medicines",
      "Specialist doctor consultations",
      "Health awareness sessions",
      "Referrals for specialized treatment"
    ],
    budget: "₹1,800,000",
    partners: [
      { name: "State Health Department", logo: "/logos/health-dept.png" },
      { name: "Indian Medical Association", logo: "/logos/ima.png" }
    ]
  },
  {
    id: 'up6',
    title: "Solar Power for Schools",
    description: "Providing solar power solutions to rural schools to ensure uninterrupted electricity for education.",
    fullDescription: [
      "The Solar Power for Schools initiative aims to provide reliable, clean energy to rural schools that face frequent power cuts or lack access to electricity. Each installation includes solar panels, battery storage, and energy-efficient LED lighting for classrooms.",
      "The project not only ensures uninterrupted power supply for teaching and learning but also serves as an educational tool for students to learn about renewable energy. We conduct workshops on solar energy and environmental conservation as part of the program.",
      "By providing consistent electricity, we enable schools to use digital learning tools, extend study hours, and improve the overall learning environment. The project also reduces schools' energy costs and carbon footprint."
    ],
    location: "Chittoor District, Andhra Pradesh",
    startDate: "2024-02-01",
    endDate: "2024-06-30",
    beneficiaries: "10+ schools, 2000+ students",
    status: 'upcoming',
    image: "/images/solar-power.jpg",
    gallery: [
      "/images/solar-1.jpg",
      "/images/solar-2.jpg",
      "/images/solar-3.jpg"
    ],
    impact: [
      "Solar power for 10+ rural schools",
      "Uninterrupted electricity for 2,000+ students",
      "Reduced energy costs for schools",
      "Educational programs on renewable energy",
      "Reduced carbon footprint"
    ],
    budget: "₹3,600,000",
    partners: [
      { name: "Ministry of New and Renewable Energy", logo: "/logos/mnre.png" },
      { name: "Solar Energy Corporation of India", logo: "/logos/seci.png" }
    ]
  }
];

export const currentProjects: Project[] = [
  {
    id: '1',
    title: "Rural Education Initiative",
    description: "Providing quality education to underprivileged children in rural areas through our network of community learning centers.",
    fullDescription: [
      "The Rural Education Initiative is a comprehensive program designed to bridge the educational gap in rural communities. We've established a network of community learning centers that provide quality education to children who lack access to proper schooling facilities.",
      "Our centers are equipped with trained teachers, learning materials, and digital tools to create an engaging learning environment. The curriculum is designed to be interactive and practical, focusing on foundational skills in literacy, numeracy, and digital literacy.",
      "We also conduct regular teacher training programs and community engagement activities to ensure the sustainability of the initiative. Our goal is to empower children with education that opens doors to better opportunities and breaks the cycle of poverty."
    ],
    location: "Multiple Villages, Andhra Pradesh",
    startDate: "2023-01-01",
    beneficiaries: "500+ children",
    status: 'active',
    image: "/images/rural-education.jpg",
    gallery: [
      "/images/rural-education-1.jpg",
      "/images/rural-education-2.jpg",
      "/images/rural-education-3.jpg"
    ],
    impact: [
      "Established 10 community learning centers",
      "Enrolled 500+ students in the program",
      "Achieved 85% average attendance rate",
      "Trained 25 local teachers",
      "Distributed 1,000+ educational kits"
    ],
    budget: "₹3,500,000",
    partners: [
      { name: "State Education Department", logo: "/logos/education-dept.png" },
      { name: "Global Education Fund", logo: "/logos/global-education.png" }
    ]
  },
  {
    id: '2',
    title: "Healthcare Access Program",
    description: "Mobile medical units providing free healthcare services and medicines to remote communities.",
    fullDescription: [
      "The Healthcare Access Program brings essential medical services directly to doorsteps in remote communities through our fleet of mobile medical units. Each unit is staffed with qualified medical professionals and equipped with basic diagnostic tools and essential medicines.",
      "Our services include general health check-ups, maternal and child health services, vaccinations, and treatment for common illnesses. We also conduct health awareness campaigns on topics such as hygiene, nutrition, and disease prevention.",
      "The program focuses on reaching the most vulnerable populations, including women, children, and the elderly, who often face significant barriers to accessing healthcare services."
    ],
    location: "Guntur District, Andhra Pradesh",
    startDate: "2023-03-15",
    beneficiaries: "2000+ individuals",
    status: 'active',
    image: "/images/healthcare-acess.jpeg",
    gallery: [
      "/images/healthcare-1.jpg",
      "/images/healthcare-2.jpg",
      "/images/healthcare-3.jpg"
    ],
    impact: [
      "Provided healthcare services to 2,000+ individuals",
      "Conducted 50+ health camps in remote areas",
      "Distributed medicines worth ₹500,000",
      "Trained 30 community health workers",
      "Vaccinated 1,200+ children and adults"
    ],
    budget: "₹4,200,000",
    partners: [
      { name: "State Health Department", logo: "/logos/health-dept.png" },
      { name: "Healthy India Foundation", logo: "/logos/healthy-india.png" }
    ]
  },
  {
    id: '3',
    title: "Women's Empowerment Initiative",
    description: "Skill development and entrepreneurship training for women to achieve financial independence.",
    fullDescription: [
      "Our Women's Empowerment Initiative is designed to provide women with the skills, knowledge, and resources they need to achieve economic independence and social empowerment. The program focuses on skill development, entrepreneurship training, and financial literacy.",
      "Participants receive training in various vocational skills such as tailoring, handicrafts, food processing, and digital literacy. We also provide mentorship, access to microfinance, and market linkages to help women start and grow their own businesses.",
      "The program includes leadership development and confidence-building components to help women become agents of change in their communities. We believe that empowering women leads to stronger families and more prosperous communities."
    ],
    location: "Guntur, Andhra Pradesh",
    startDate: "2023-06-01",
    beneficiaries: "150+ women",
    status: 'active',
    image: "/images/women-empowerement.jpg",
    gallery: [
      "/images/women-1.jpg",
      "/images/women-2.jpg",
      "/images/women-3.jpg"
    ],
    impact: [
      "Trained 150+ women in vocational skills",
      "Helped establish 50+ women-led businesses",
      "Achieved 70% employment/self-employment rate among participants",
      "Conducted 20+ financial literacy workshops",
      "Created 3 women's self-help groups"
    ],
    budget: "₹2,800,000",
    partners: [
      { name: "Women & Child Development Dept.", logo: "/logos/wcd.png" },
      { name: "Empower Her Foundation", logo: "/logos/empower-her.png" }
    ]
  },
  {
    id: '4',
    title: "Sustainable Agriculture Project",
    description: "Training farmers in sustainable agricultural practices and providing access to better farming technologies.",
    fullDescription: [
      "The Sustainable Agriculture Project works with smallholder farmers to promote environmentally friendly and economically viable farming practices. We provide training in organic farming, water conservation, soil health management, and integrated pest management.",
      "The program also facilitates access to high-quality seeds, organic fertilizers, and modern farming equipment. We establish farmer producer organizations to help farmers access better markets and get fair prices for their produce.",
      "Our goal is to improve agricultural productivity while preserving natural resources and building resilience to climate change. The project has already helped hundreds of farmers increase their yields and incomes while reducing their environmental impact."
    ],
    location: "Krishna District, Andhra Pradesh",
    startDate: "2023-02-10",
    beneficiaries: "300+ farmers",
    status: 'active',
    image: "/images/sustainable-agriculture.jpg",
    gallery: [
      "/images/agriculture-1.jpg",
      "/images/agriculture-2.jpg",
      "/images/agriculture-3.jpg"
    ],
    impact: [
      "Trained 300+ farmers in sustainable practices",
      "Increased crop yields by 40% on average",
      "Reduced water usage by 30% in target areas",
      "Established 5 farmer producer organizations",
      "Connected farmers to premium markets for organic produce"
    ],
    budget: "₹3,800,000",
    partners: [
      { name: "Ministry of Agriculture", logo: "/logos/agriculture-dept.png" },
      { name: "Sustainable Farming Network", logo: "/logos/sustainable-farming.png" }
    ]
  },
  {
    id: '5',
    title: "Clean Water Initiative",
    description: "Installing water purification systems in rural schools and communities to provide access to clean drinking water.",
    fullDescription: [
      "The Clean Water Initiative addresses the critical need for safe drinking water in rural communities by installing water purification systems in schools and community centers. Each system uses advanced filtration technology to remove contaminants and provide clean, safe drinking water.",
      "The project includes community education programs on water conservation, hygiene, and sanitation. We also train local community members to maintain the water purification systems, ensuring long-term sustainability.",
      "Access to clean water has immediate and far-reaching benefits, including reduced waterborne diseases, improved school attendance (especially for girls), and better overall community health. The project has already transformed the lives of thousands of people in water-scarce regions."
    ],
    location: "Prakasam District, Andhra Pradesh",
    startDate: "2023-04-01",
    beneficiaries: "1000+ individuals",
    status: 'active',
    image: "/images/clean-water.jpg",
    gallery: [
      "/images/water-1.jpg",
      "/images/water-2.jpg",
      "/images/water-3.jpg"
    ],
    impact: [
      "Installed 15 water purification systems",
      "Provided clean water to 1,000+ people daily",
      "Reduced waterborne diseases by 60% in target areas",
      "Trained 30 community water operators",
      "Conducted 25+ hygiene awareness sessions"
    ],
    budget: "₹3,000,000",
    partners: [
      { name: "WaterAid India", logo: "/logos/wateraid.png" },
      { name: "State Rural Development Dept.", logo: "/logos/rural-dev.png" }
    ]
  },
  {
    id: '6',
    title: "Digital Literacy Program",
    description: "Equipping youth and adults with essential digital skills for better employment opportunities.",
    fullDescription: [
      "The Digital Literacy Program is designed to bridge the digital divide by providing comprehensive training in essential computer and internet skills. The program targets both youth and adults, with a special focus on underprivileged communities.",
      "Our curriculum covers basic computer operations, internet usage, email communication, digital payments, and online safety. We also offer advanced modules on topics like digital marketing, graphic design, and basic programming for interested learners.",
      "The program is delivered through our network of digital learning centers, equipped with computers and high-speed internet. We provide certification upon completion, which helps participants in their job search or entrepreneurial ventures."
    ],
    location: "Nellore, Andhra Pradesh",
    startDate: "2023-05-15",
    beneficiaries: "250+ individuals",
    status: 'active',
    image: "/images/digital-literacy.jpg",
    gallery: [
      "/images/digital-1.jpg",
      "/images/digital-2.jpg",
      "/images/digital-3.jpg"
    ],
    impact: [
      "Trained 250+ individuals in digital skills",
      "Achieved 80% course completion rate",
      "Helped 60% of participants find employment or start businesses",
      "Established 3 digital learning centers",
      "Conducted 10+ career guidance workshops"
    ],
    budget: "₹2,200,000",
    partners: [
      { name: "Digital India Foundation", logo: "/logos/digital-india.png" },
      { name: "Tech for Good Initiative", logo: "/logos/tech-for-good.png" }
    ]
  }
];

export const completedProjects: Project[] = [
  {
    id: 'cp1',
    title: "Rural Education Enhancement Program",
    description: "Established 5 learning centers providing quality education to 500+ children in remote villages of Guntur district.",
    fullDescription: [
      "The Rural Education Enhancement Program was launched to address the educational needs of children in remote villages of Guntur district, where access to quality education was severely limited. The program established five learning centers strategically located to serve multiple villages.",
      "Each center was equipped with modern teaching aids, digital learning tools, and a library. We recruited and trained local educators who understood the community's needs and could teach in the local language while gradually introducing English.",
      "The program focused on foundational literacy and numeracy, along with life skills and digital literacy. Regular assessments showed significant improvement in learning outcomes, with 78% of students achieving grade-level competencies in core subjects.",
      "Community involvement was a key component, with regular parent-teacher meetings and awareness sessions on the importance of education, especially for girls."
    ],
    location: "Guntur District, Andhra Pradesh",
    startDate: "2022-01-10",
    endDate: "2022-12-20",
    beneficiaries: "500+ children",
    status: 'completed',
    image: "/images/rural-education.jpg",
    gallery: [
      "/images/education-1.jpg",
      "/images/education-2.jpg",
      "/images/education-3.jpg"
    ],
    impact: [
      "Established 5 fully functional learning centers",
      "Improved literacy rates by 35% in target areas",
      "Trained 15 local educators in modern teaching methodologies",
      "Provided educational materials to 500+ students",
      "Achieved 92% average attendance rate across centers"
    ],
    budget: "₹1,800,000",
    partners: [
      { name: "Ministry of Education", logo: "/logos/education-ministry.png" },
      { name: "Pratham Education Foundation", logo: "/logos/pratham.png" }
    ]
  },
  {
    id: 'cp2',
    title: "Healthcare on Wheels",
    description: "Mobile medical units provided free healthcare services to over 2,000 individuals in underserved communities.",
    fullDescription: [
      "The Healthcare on Wheels initiative was designed to bridge the healthcare gap in remote villages of Krishna District. Two fully equipped mobile medical units were deployed, each staffed with a doctor, nurse, pharmacist, and community health worker.",
      "The units traveled to different villages on a fixed schedule, providing primary healthcare services, basic diagnostic tests, and free medicines. Special emphasis was placed on maternal and child health, with regular antenatal check-ups and immunization drives.",
      "The program also included health education sessions on nutrition, hygiene, and disease prevention. Telemedicine facilities connected patients with specialists in district hospitals for complex cases.",
      "A referral system was established for patients requiring advanced care, with transportation assistance provided when needed."
    ],
    location: "Krishna District, Andhra Pradesh",
    startDate: "2022-03-15",
    endDate: "2022-11-30",
    beneficiaries: "2,000+ individuals",
    status: 'completed',
    image: "/images/healthcare-wheels.jpg",
    gallery: [
      "/images/healthcare-1.jpg",
      "/images/healthcare-2.jpg",
      "/images/healthcare-3.jpg"
    ],
    impact: [
      "Conducted 5,000+ free medical consultations",
      "Administered 1,200+ immunizations",
      "Provided free medicines to 2,000+ patients",
      "Referred 150+ patients for specialized care",
      "Reduced travel time to healthcare facilities by 80%"
    ],
    budget: "₹3,500,000",
    partners: [
      { name: "National Health Mission", logo: "/logos/nhm.png" },
      { name: "Apollo Hospitals", logo: "/logos/apollo.png" }
    ]
  },
  {
    id: 'cp3',
    title: "Women's Skill Development Center",
    description: "Trained 200+ women in tailoring, handicrafts, and entrepreneurship, enabling them to start small businesses.",
    fullDescription: [
      "The Women's Skill Development Center was established to empower women from economically disadvantaged backgrounds by providing them with marketable skills and entrepreneurship training. The six-month program included training in tailoring, embroidery, handicrafts, and basic business management.",
      "Participants received hands-on training using modern equipment and were taught about design, quality control, and pricing. The program also included financial literacy sessions and guidance on accessing government schemes and microfinance options.",
      "A production unit was set up where women could work collectively, and a marketing platform was created to sell their products both locally and online. The center continues to provide ongoing support through a cooperative society formed by the participants.",
      "Many graduates have started their own small businesses, while others have found employment in the garment and handicraft industries."
    ],
    location: "Guntur, Andhra Pradesh",
    startDate: "2021-11-01",
    endDate: "2022-10-30",
    beneficiaries: "200+ women",
    status: 'completed',
    image: "/images/womenskill-development.jpg",
    gallery: [
      "/images/women-1.jpg",
      "/images/women-2.jpg",
      "/images/women-3.jpg"
    ],
    impact: [
      "Trained 200+ women in vocational skills",
      "85% of participants started income-generating activities",
      "Established a women's cooperative society",
      "Generated ₹5,000-15,000 monthly income per participant",
      "Created a sustainable business model"
    ],
    budget: "₹2,200,000",
    partners: [
      { name: "Ministry of Women and Child Development", logo: "/logos/wcd.png" },
      { name: "NITI Aayog", logo: "/logos/niti-aayog.png" }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return [...currentProjects, ...upcomingProjects, ...completedProjects].find(project => project.id === id);
};
