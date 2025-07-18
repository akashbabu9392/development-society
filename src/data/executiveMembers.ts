export interface ExecutiveMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
}

export const executiveMembers: ExecutiveMember[] = [
  {
    id: 1,
    name: "Mrs. Thomasamma",
    position: "President",
    image: "/images/team/thomasamma.jpg",
    bio: "With over 15 years of experience in social work, Mrs. Thomasamma has been instrumental in guiding the organization's vision and mission since 2017.",
    email: "president@dsp.org"
  },
  {
    id: 2,
    name: "Mr. A. Prabhudasu",
    position: "Founder & Vice President",
    image: "/images/team/prabhudasu.jpg",
    bio: "Co-founder of DSP, Mr. Prabhudasu has been a driving force behind the organization's initiatives since its inception in 2005.",
    email: "vp@dsp.org"
  },
  {
    id: 3,
    name: "Mrs. Mary Ruby",
    position: "Project Manager",
    image: "/images/team/mary.jpg",
    bio: "Leading various projects since 2018, Mrs. Ruby has been pivotal in implementing DSP's community development programs.",
    email: "projects@dsp.org"
  },
  {
    id: 4,
    name: "Mrs. Anitha Kumari",
    position: "Program Coordinator",
    image: "/images/team/anitha.jpg",
    bio: "Specializing in educational initiatives, Mrs. Kumari oversees programs supporting underprivileged children's education.",
    email: "education@dsp.org"
  },
  {
    id: 5,
    name: "Mrs. Yeruva Maria Rani",
    position: "Women Empowerment Coordinator",
    image: "/images/team/maria.jpg",
    bio: "Dedicated to women's welfare, Mrs. Rani leads initiatives for skill development and economic empowerment of women.",
    email: "women@dsp.org"
  },
  {
    id: 6,
    name: "Mrs. Allam Mary",
    position: "Community Development Officer",
    image: "/images/team/allam.jpg",
    bio: "Working closely with rural communities, Mrs. Mary implements sustainable development programs in remote areas.",
    email: "community@dsp.org"
  },
  {
    id: 7,
    name: "Mrs. Boyapati Mahitha",
    position: "Healthcare Coordinator",
    image: "/images/team/mahitha.jpg",
    bio: "Overseeing health and wellness programs, Mrs. Mahitha ensures access to healthcare for underprivileged communities.",
    email: "health@dsp.org"
  }
];
