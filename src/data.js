// ============================================================
//   AYUSH SARAF PORTFOLIO — Static Data
// ============================================================

export const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' },
];

export const TYPED_PHRASES = [
    'Computer Science Student',
    'AI/ML Enthusiast',
    'Software Developer',
    'Data Science Explorer',
    'NLP Researcher',
];

export const STATS = [
    { value: '9.02', label: 'CGPA' },
    { value: '4+', label: 'Projects' },
    { value: '1', label: 'Internship' },
    { value: 'VIT', label: 'University' },
];

export const QUICK_INFO = [
    { icon: 'phone', text: '+91 7004777571' },
    { icon: 'email', text: 'sarafa736@gmail.com', href: 'mailto:sarafa736@gmail.com' },
    { icon: 'location', text: 'Vellore, India' },
    { icon: 'edu', text: 'B.Tech CSE, VIT Vellore' },
];

export const SKILLS = [
    {
        icon: '💻', title: 'Languages', type: 'lang',
        items: ['Python', 'Java', 'C/C++', 'JavaScript', 'SQL'],
    },
    {
        icon: '🛠️', title: 'Frameworks & Libraries', type: 'lib',
        items: ['Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    },
    {
        icon: '⚙️', title: 'Tools & Platforms', type: 'tool',
        items: ['Git', 'VSCode', 'Cursor', 'Jupyter', 'Google Colab'],
    },
    {
        icon: '🤝', title: 'Soft Skills', type: 'soft',
        items: ['Team Management', 'Communication', 'Leadership', 'Event Management'],
    },
];

export const EXPERIENCE = [
    {
        badge: 'intern', badgeLabel: 'Internship',
        date: 'May 2025 – Jul 2025',
        role: 'AI/ML Intern',
        company: 'SentiAid',
        points: [
            'Preprocessed speech and text datasets for an Indian Sign Language (ISL) translation system',
            'Applied Pandas, Regex, and Scikit-learn for data cleaning and feature engineering pipelines',
            'Contributed to accessibility-focused AI systems designed for the hearing-impaired community',
            'Collaborated in agile sprints to integrate preprocessing modules into the broader ML pipeline',
        ],
        tags: ['Pandas', 'Scikit-learn', 'Regex', 'NLP', 'Accessibility AI'],
        isLast: false,
    },
    {
        badge: 'volunteer', badgeLabel: 'Volunteer',
        date: 'Aug 2024 – Sep 2024',
        role: 'Student Volunteer',
        company: "Gravitas – VIT's Annual Tech Fest",
        points: [
            "Coordinated logistics and event flow for Gravitas, one of Asia's largest student-run tech fests",
            'Managed cross-functional student teams for smooth event execution',
            'Led promotional outreach strategies to maximize participation and engagement',
        ],
        tags: ['Event Coordination', 'Team Management', 'Leadership'],
        isLast: true,
    },
];

export const PROJECTS = [
    {
        icon: '📄', category: 'ml',
        title: 'Resume Feedback System',
        desc: 'NLP-powered resume analyzer that scores resumes against ATS criteria, provides keyword-based gap analysis, and generates actionable improvement suggestions.',
        tech: ['Python', 'NLP', 'Scikit-learn', 'Streamlit', 'NLTK'],
        ghLink: 'https://github.com/wizardofvoid',
    },
    {
        icon: '🫀', category: 'ml',
        title: 'Heart Disease Detection System',
        desc: 'Predictive ML model using Logistic Regression and Random Forest achieving 88.65% accuracy. Includes feature importance visualization and model comparison dashboard.',
        tech: ['Python', 'Random Forest', 'Logistic Regression', 'Pandas', 'Seaborn'],
        ghLink: 'https://github.com/wizardofvoid',
        accuracy: '88.65%',
    },
    {
        icon: '🎓', category: 'ml',
        title: 'Student Performance Predictor',
        desc: 'Advanced ML pipeline combining RandomForest with LLaMA integration for natural language explanations of predicted outcomes. Achieved 94.5% accuracy.',
        tech: ['Python', 'RandomForest', 'LLaMA', 'Pandas', 'Scikit-learn'],
        ghLink: 'https://github.com/wizardofvoid',
        accuracy: '94.5%',
    },
    {
        icon: '🌐', category: 'web',
        title: 'E-Learning Platform',
        desc: 'Fully functional e-learning web platform with user authentication, course catalog, progress tracking, and responsive UI designed for seamless cross-device learning.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Authentication'],
        ghLink: 'https://github.com/wizardofvoid',
    },
];

export const CERTIFICATIONS = [
    {
        icon: '🤖',
        name: 'Generative AI Workshop',
        org: 'Industry Workshop',
        date: 'March 2025',
        desc: 'Hands-on workshop covering generative AI fundamentals, prompt engineering, and practical applications of LLMs in real-world systems.',
    },
];

export const ACHIEVEMENTS = [
    {
        icon: '⭐', title: 'Academic Excellence',
        desc: 'Maintaining a CGPA of 9.02 at VIT Vellore (B.Tech CSE)',
    },
    {
        icon: '💼', title: 'AI/ML Internship at SentiAid',
        desc: 'Worked on cutting-edge accessibility AI for Indian Sign Language translation',
    },
    {
        icon: '🏅', title: 'Hackathon Participant',
        desc: 'Active hackathon participant building rapid ML prototypes under time constraints',
    },
    {
        icon: '🌐', title: 'Open Source & Codolio Profile',
        desc: 'Active coder on Codolio with consistent project contributions and technical showcase',
    },
];

export const SOCIAL_LINKS = {
    github: 'https://github.com/wizardofvoid',
    linkedin: 'http://www.linkedin.com/in/saraf--ayush',
    codolio: 'https://codolio.com/profile/AyushSaraf',
    email: 'mailto:sarafa736@gmail.com',
    resume: 'https://drive.google.com/file/d/1M0bqe0HQl5VgHJuoAKRWIufkDFXdurjC/view?usp=sharing',
};
