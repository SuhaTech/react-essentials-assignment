export const candidate = {
  name: "Alex Morgan",
  title: "Backend Software Engineer",
  email: "alex@example.com",
  phone: "+91 98XXX XX210",

  health: 92,
  atsScore: 84,
  completeness: 88,

  skills: [
    "Java",
    "Spring Boot",
    "Kafka",
    "PostgreSQL",
    "Docker",
    "REST APIs",
    "Microservices",
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Northlake Systems",
      period: "2023 — Present",
      bullets: [
        "Designed and maintained microservices handling 2M+ daily transactions using Java and Spring Boot.",
        "Built Kafka-based event pipelines for real-time order processing across 3 downstream services.",
      ],
    },

    {
      role: "Backend Developer",
      company: "Fieldstone Solutions",
      period: "2021 — 2023",
      bullets: [
        "Developed REST APIs for an internal billing platform used by 40+ internal teams.",
        "Optimized PostgreSQL queries, reducing average response time by 35%.",
      ],
    },
  ],
};