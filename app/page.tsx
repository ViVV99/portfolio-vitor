import ContactForm from "@/components/ContactForm";
import MainHeader from "@/components/MainHeader";
import { TechCardList, TechCardProps } from "@/components/TechCard";
import { Box, BoxProps, Container, Grid, Typography } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import { Certification } from "@/components/Certification";
import CertificationsList from "@/components/Certification";
import SkillProgressList, { Skill } from "@/components/SkillProgess";

const certificationsMock: Certification[] = [
  {
    id: "1",
    title: "Advanced React",
    issuer: "Meta (Facebook)",
    issueDate: "2026-02-11",
    credentialUrl: "https://coursera.org/verify/KMML0NRHRF3H",
    skills: ["React", "JavaScript", "Unit Testing", "Jest", "UX/UI"],
    description:
      "Advanced professional program on front-end development with React.js.",
  },
];

const skills: Skill[] = [
  { 
    name: 'React', 
    level: 95, 
    category: 'Frontend',
    yearsOfExperience: 5
  },
  { 
    name: 'TypeScript', 
    level: 92, 
    category: 'Linguagem',
    yearsOfExperience: 4
  },
  { 
    name: 'Next.js', 
    level: 85, 
    category: 'Framework',
    yearsOfExperience: 3 
  },
  { 
    name: 'Laravel', 
    level: 90, 
    category: 'Framework',
    yearsOfExperience: 5 
  },
  { 
    name: 'PHP', 
    level: 95, 
    category: 'Backend',
    yearsOfExperience: 5
  },
   { 
    name: 'Node.js', 
    level: 88, 
    category: 'Backend',
    yearsOfExperience: 4
  },
  { 
    name: 'PostgreSQL', 
    level: 60, 
    category: 'Database',
    yearsOfExperience: 2 
  },
  { 
    name: 'MySQL', 
    level: 85, 
    category: 'Database',
    yearsOfExperience: 4 
  },
  { 
    name: 'Docker', 
    level: 90, 
    category: 'DevOps',
    yearsOfExperience: 3
  },
  { 
    name: 'Kubernetes', 
    level: 85, 
    category: 'DevOps',
    yearsOfExperience: 3
  },
  { 
    name: 'AWS', 
    level: 75, 
    category: 'Cloud',
    yearsOfExperience: 3
  },
];

export const techCardMock: TechCardProps[] = [
  {
    title: "Full Stack Development",
    description:
      "Extensive experience in web development, from responsive interfaces to robust and scalable SOLID APIs.",
    tags: ["React", "NextJS", "TypeScript", "Laravel", "PHP"],
    icon: <CodeIcon />,
    gradient: true,
  },
  {
    title: "Data Architecture",
    description:
      "Modeling and optimization of relational and NoSQL databases for high performance.",
    tags: ["PostgreSQL", "MySQL", "MariaDB"],
    icon: <StorageIcon />,
  },
  {
    title: "Cloud, DevOps & Monitoring",
    description:
      "Deploy e gerenciamento de aplicações em cloud com práticas de CI/CD e containerização.",
    tags: ["AWS", "Docker", "Kubernetes", "Zabbix", "Grafana"],
    icon: <CloudIcon />,
  },
];

const Section = ({ children, ...props }: React.PropsWithChildren<BoxProps>) => {
  return (
    <Box
      {...props}
      component="section"
      sx={{
        my: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <MainHeader>
        <Typography
          variant="h1"
          fontSize={{
            xs: "2rem",
            md: "2.5rem",
            lg: "6rem",
          }}
        >
          Developing the Future
        </Typography>
      </MainHeader>
      <Grid
        container
        component="main"
        sx={{
          position: "relative",
          backgroundColor: "background.default",
          zIndex: "2",
          padding: {
            xs: "1rem",
            md: "1.5rem",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            p: 0,
          }}
        >
          <Section>
            {/* Stacks */}
            <Typography variant="h2" mb={2}>
              My Stacks
            </Typography>
            <TechCardList data={techCardMock} />
          </Section>
          <Section>
            {/* Certifications */}
            <Typography variant="h2">Certifications</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              My Current Valid Certifications
            </Typography>
            <CertificationsList certifications={certificationsMock} />
          </Section>
          <Section>
            {/* Skills Progress */}
            <Box sx={{ mb: 8 }}>
              <SkillProgressList
                skills={skills}
                title="Skills And Knowledge"
                showCategory
              />
            </Box>
          </Section>
          {/* Contact Form */}
          <ContactForm />
        </Container>
      </Grid>
    </>
  );
}
