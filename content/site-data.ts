/**
 * EDIT THIS FILE TO UPDATE THE WEBSITE.
 *
 * Add or remove items from any list below. The page layout updates automatically.
 * Before publishing, replace cvUrl with the public path to the final CV PDF and add
 * confirmed student profiles to the students list.
 */

export const siteData = {
  groupName: 'Monika Yadav Research Group',
  shortName: 'Yadav Research Group',
  affiliation: 'School of Data Science · Old Dominion University',
  email: 'myadav@odu.edu',
  lastUpdated: 'September 2026',
  introduction:
    'The Upgraded Injector Test Facility at Jefferson Lab provides the injector test case for our physics-based modeling, machine-learning, and controls research.',

  course: {
    code: 'DASC 495/595',
    title: 'Machine Learning & Data Science',
    term: 'Fall 2026',
    overview:
      'The course connects machine-learning foundations and optimization methods with applications in scientific computing and particle accelerators.',
    weeks: [
      {
        week: 'Week 1',
        title: 'Course framing and scientific context',
        status: 'Completed',
        description:
          'We distinguish AI, machine learning, deep learning, data science, and scientific machine learning, then examine accelerator facilities, beam diagnostics, and controls as motivating scientific systems.',
        focus: 'AI · Machine learning · Data science · Accelerator systems',
      },
      {
        week: 'Week 2',
        title: 'Computational and mathematical foundations',
        status: 'Completed',
        description:
          'We review Python and Jupyter workflows, vectors and matrices, probability, statistics, reproducibility, and the role of high-performance computing in scientific machine learning.',
        focus: 'Python · Linear algebra · Probability · Reproducibility · HPC',
      },
      {
        week: 'Week 3',
        title: 'Optimization',
        status: 'Current module',
        description:
          'We study minimization, objective functions, grid and random search, Nelder–Mead, gradient descent, momentum, Adam, and extremum seeking.',
        focus: 'Derivative-based and derivative-free optimization',
      },
    ],
    presentationNote:
      'Each student will give a 10-minute presentation during class.',
  },

  pi: {
    name: 'Monika Yadav, Ph.D.',
    title:
      'Assistant Professor, School of Data Science and Department of Physics, Old Dominion University',
    bio: 'Dr. Yadav works at the intersection of accelerator physics, scientific machine learning, beam diagnostics, and intelligent control, with an emphasis on translating computational methods to operational facilities.',
    facultyUrl: 'https://www.odu.edu/directory/monika-yadav',
    orcidUrl: 'https://orcid.org/0000-0002-6567-4431',
    cvUrl: '',
  },

  researchThemes: [
    {
      title: 'Digital twins for accelerators',
      description:
        'Hybrid models combine first-principles simulation, machine learning, controls data, and diagnostics to predict beam behavior and support facility decisions.',
      tags: ['surrogate models', 'sim-to-real', 'uncertainty'],
    },
    {
      title: 'AI-enabled optimization & control',
      description:
        'Safe optimization and control methods learn useful machine settings while respecting operational limits, measurement noise, and time-varying conditions.',
      tags: ['EPICS', 'reinforcement learning', 'optimization'],
    },
    {
      title: 'Trustworthy scientific AI',
      description:
        'Physics-aware guardrails, anomaly detection, and uncertainty quantification help keep autonomous scientific workflows interpretable and reliable.',
      tags: ['guardrails', 'fault detection', 'UQ'],
    },
  ],

  projects: [
    {
      title: 'AI-Enabled Digital Twin for Injector Optimization',
      status: 'Active',
      description:
        'Building a scalable digital-twin workflow that links physics models, machine learning, diagnostics, and controls for accelerator injector optimization.',
      partners:
        'Old Dominion University · Jefferson Lab · Pacific Northwest National Laboratory',
    },
    {
      title: 'UITF Beamline Modeling and Intelligent Control',
      status: 'Active',
      description:
        'Developing EPICS-connected modeling, optimization, and validation workflows for the Upgraded Injector Test Facility at Jefferson Lab.',
      partners:
        'Old Dominion University · Thomas Jefferson National Accelerator Facility',
    },
    {
      title: 'Physics-Aware Guardrails for Scientific Workflows',
      status: 'Active',
      description:
        'Studying real-time integrity protection for AI-driven scientific workflows through physics constraints, monitoring, and secure control interfaces.',
      partners: 'Interdisciplinary ODU and national-laboratory collaboration',
    },
  ],

  grants: [
    {
      title:
        'AI-Enabled Digital Twin for Scalable Injector Optimization and Control',
      role: 'Principal Investigator',
      status: 'Active · Phase I',
      period: '2026–present',
      sponsor: 'U.S. Department of Energy · Genesis Mission',
      collaborators: 'JLab · PNNL',
      description:
        'A trusted digital-twin framework for faster prediction, optimization, and control of particle-accelerator injectors.',
    },
    {
      title:
        'Physics-Aware Guardrails for Real-Time Integrity Protection of AI-Driven Scientific Workflows',
      role: 'Co-Principal Investigator',
      status: 'Active · Phase I',
      period: '2026–present',
      sponsor: 'U.S. Department of Energy · Genesis Mission',
      collaborators: 'ODU-led interdisciplinary team',
      description:
        'Physics-aware safeguards for reliable and secure AI-assisted operation of complex scientific systems.',
    },
  ],

  students: [
    {
      name: 'Karen Makino',
      initials: 'KM',
      program: 'Graduate Researcher',
    },
    {
      name: 'Jacob Bird',
      initials: 'JB',
      program: 'Graduate Researcher',
    },
    {
      name: 'Kamelia Marchand Vaudrin',
      initials: 'KMV',
      program: "Master's Student",
    },
  ] as Array<{
    name: string;
    initials: string;
    program?: string;
    focus?: string;
  }>,

  openings: [
    {
      title: 'Graduate Researcher',
      type: '2 positions',
      description:
        'Research opportunities for graduate students interested in developing and validating AI methods for accelerator modeling, optimization, and control.',
      interests: ['AI / ML', 'accelerator science', 'digital twins'],
    },
    {
      title: 'Postdoctoral Researcher',
      type: '1 position',
      description:
        'A research position spanning scientific machine learning, accelerator systems, trustworthy AI, and collaboration with national laboratories.',
      interests: ['scientific ML', 'controls', 'cybersecurity'],
    },
  ],

  publications: [
    {
      year: '2026',
      venue: 'Proceedings of IPAC 2026',
      title:
        'AI-Enabled Digital Twins and Optimization Workflows for Accelerator Control',
      authors: 'M. Yadav et al.',
      url: 'https://digitalcommons.odu.edu/cgi/viewcontent.cgi?article=2062&context=physics_fac_pubs',
    },
    {
      year: '2025',
      venue: 'Physical Review Accelerators and Beams',
      title:
        'Modeling betatron radiation using particle-in-cell codes for plasma wakefield accelerator diagnostics',
      authors: 'M. Yadav, C. Hansel, B. Naranjo, et al.',
      url: 'https://doi.org/10.1103/ykrl-45h8',
    },
    {
      year: '2025',
      venue: 'Physical Review Accelerators and Beams',
      title:
        'Reconstruction of beam parameters and betatron radiation spectra measured with a Compton spectrometer',
      authors: 'M. Yadav, M. H. Oruganti, B. Naranjo, et al.',
      url: 'https://doi.org/10.1103/PhysRevAccelBeams.28.042802',
    },
    {
      year: '2025',
      venue: 'Physical Review Accelerators and Beams',
      title:
        'Extreme radiation emission regime for electron beams in strong focusing ion channels and undulators',
      authors: 'A. Frazzitta, M. Yadav, J. Mann, et al.',
      url: 'https://doi.org/10.1103/PhysRevAccelBeams.28.040703',
    },
  ],
};
