export interface TimelineEvent {
  from_date: Date;
  to_date: Date;
  title: string;
  occupation: string;
  occupation_sv?: string;
  description: string;
  description_sv?: string;
  category: 'work' | 'education';
  tech: string[];
  languages: string[];
  tools: string[];
  link: string;
  isHovered: boolean;
}

export function getTimelineEvents(currentDate: Date): TimelineEvent[] {
  return [
    {
      from_date: new Date('2023-09-13'),
      to_date: currentDate,
      title: 'Ruhr University Bochum',
      occupation: 'PhD Student',
      occupation_sv: 'Doktorand',
      description: 'Currently working as a PhD student at the Chair of Software Engineering group headed by Prof. Thorsten Berger at Ruhr University Bochum. My research is focused on the development of tools to aid developers in automating the creation of variation points and creating and maintaining feature traceability. The research is conducted in collaboration with Centiro Solutions AB.',
      description_sv: 'Arbetar för närvarande som doktorand vid forskningsgruppen Software Engineering, ledd av professor Thorsten Berger, vid Ruhr-universitetet i Bochum. Min forskning fokuserar på att utveckla verktyg som hjälper utvecklare att automatisera skapandet av variationspunkter samt att skapa och underhålla spårbarhet för features. Forskningen bedrivs i samarbete med Centiro Solutions AB.',
      category: 'education',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://se.rub.de/',
      isHovered: false
    },
    {
      from_date: new Date('2021-08-01'),
      to_date: currentDate,
      title: 'Centiro',
      occupation: 'Software Developer',
      occupation_sv: 'Mjukvaruutvecklare',
      description: 'Currently working as a software developer in a team that is responsible for the development of the finance product. The product is a cloud-based platform that is used to calculate and manage costs and invoicing. My main responsibilities include developing new features, fixing bugs, maintaining the codebase and driving the product forward. Additinally, I integrate research results from my ongoing PhD studies into the company as a whole.',
      description_sv: 'Arbetar för närvarande som mjukvaruutvecklare i ett team som ansvarar för utvecklingen av finansprodukten. Produkten är en molnbaserad plattform som används för att beräkna och hantera kostnader och fakturering. Mina huvudsakliga arbetsuppgifter innefattar att utveckla nya funktioner, åtgärda buggar, underhålla kodbasen och driva produkten framåt. Utöver detta integrerar jag forskningsresultat från mina pågående doktorandstudier i verksamheten som helhet.',
      category: 'work',
      tech: [],
      languages: ['c#', '.net', 'python', 'typescript', 'kotlin', 'mongoDb', 'sql', 'bigquery-sql'],
      tools: ['git', 'azure devops', 'google cloud platform'],
      link: 'https://centiro.com/',
      isHovered: false
    },
    {
      from_date: new Date('2021-01-01'),
      to_date: new Date('2021-07-31'),
      title: 'Chalmers University of Technology',
      occupation: 'Master Thesis',
      occupation_sv: 'Examensarbete',
      description: 'Conducted research on tools to aid developers in creating and maintaining feature traceability through a IntelliJ IDE plugin. The research questions were concerning how effective such a tool could be and future work is to explore the effectiveness of the tool in a longitudinal study with professional developers.',
      description_sv: 'Genomförde forskning om verktyg som hjälper utvecklare att skapa och underhålla spårbarhet för features genom ett IntelliJ IDE-plugin. Forskningsfrågorna handlade om hur effektivt ett sådant verktyg kunde vara, och framtida arbete är att undersöka verktygets effektivitet i en longitudinell studie med yrkesverksamma utvecklare.',
      category: 'education',
      tech: ['Plugin Development', 'Intellij Platform'],
      languages: ['Java', 'Kotlin'],
      tools: [],
      link: 'assets/Publications/MSCThesis-Jansson-Martinsson.pdf',
      isHovered: false
    },
    {
      from_date: new Date('2018-06-01'),
      to_date: new Date('2020-06-30'),
      title: 'Waya Finance & Technology',
      occupation: 'Junior Software Developer',
      occupation_sv: 'Junior mjukvaruutvecklare',
      description: 'Worked as a junior software developer in a team that was responsible for the development of the company\'s core product. The product is a cloud-based platform that was used to manage debt collection and reminders notices. My main responsibilities included developing microservices to handle email notifications and plugins to integrate with VISMA and Fortnox.',
      description_sv: 'Arbetade som junior mjukvaruutvecklare i ett team som ansvarade för utvecklingen av företagets kärnprodukt. Produkten var en molnbaserad plattform som användes för att hantera inkasso och påminnelser. Mina huvudsakliga arbetsuppgifter innefattade att utveckla mikrotjänster för e-postaviseringar samt plugins för integration med VISMA och Fortnox.',
      category: 'work',
      tech: ['Full stack', 'Microservices'],
      languages: ['Java', 'SQL', 'C#', '.NET'],
      tools: [],
      link: 'https://www.waya.se/en/',
      isHovered: false
    },
    {
      from_date: new Date('2019-09-01'),
      to_date: new Date('2021-08-31'),
      title: 'Chalmers University of Technology',
      occupation: 'MSc Software Engineering',
      occupation_sv: 'Master, Software Engineering and Technology',
      description: 'Studied the master program in Software Engineering and Technology at Chalmers University of Technology. The program focused on software development, software architecture, software testing, and software project management.',
      description_sv: 'Läste masterprogrammet Software Engineering and Technology vid Chalmers tekniska högskola. Programmet fokuserade på mjukvaruutveckling, mjukvaruarkitektur, mjukvarutestning och projektledning inom mjukvaruutveckling.',
      category: 'education',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://www.chalmers.se/en/education/find-masters-programme/software-engineering-and-technology-msc/',
      isHovered: false
    },
    {
      from_date: new Date('2015-09-01'),
      to_date: new Date('2021-08-31'),
      title: 'Chalmers University of Technology',
      occupation: 'BSc Computer Engineering',
      occupation_sv: 'Högskoleingenjör, Datateknik',
      description: 'Studied the bachelor program in Computer Engineering at Chalmers University of Technology. The program focused on computer engineering, software engineering, real-time systems and ethical aspects of computer engineering.',
      description_sv: 'Läste högskoleingenjörsprogrammet i Datateknik vid Chalmers tekniska högskola. Programmet fokuserade på datateknik, mjukvaruteknik, realtidssystem och etiska aspekter av datateknik.',
      category: 'education',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://www.chalmers.se/utbildning/hitta-program/datateknik-hogskoleingenjor/',
      isHovered: false
    },
  ];
}
