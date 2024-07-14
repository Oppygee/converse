export const disputeData = [
  {
    id: 1,
    ProjectTitle: "Plumbing service for my bathroom",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Unresolved",
  },

  {
    id: 2,
    ProjectTitle: "Graphic designer for brand design",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Resolving",
  },
  {
    id: 3,
    ProjectTitle: "Plumbing service for my bathroom",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Unresolved",
  },
  {
    id: 4,
    ProjectTitle: "Electrician for light fixing",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Resolved",
  },
  {
    id: 5,
    ProjectTitle: "Graphic designer for brand design",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Resolving",
  },
  {
    id: 6,
    ProjectTitle: "Plumbing service for my bathroom",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Unresolved",
  },
  {
    id: 7,
    ProjectTitle: "Electrician for light fixing",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Resolved",
  },
  {
    id: 8,
    ProjectTitle: "Plumbing service for my bathroom",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Unresolved",
  },
  {
    id: 9,
    ProjectTitle: "Graphic designer for brand design",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Resolving",
  },
  {
    id: 10,
    ProjectTitle: "Electrician for light fixing",
    ProjectID: "#783451",
    DateofComplain: "Dec 24 2023",
    Status: "Unresolved",
  },
]
export const disputeLength = disputeData.length
export const unResolved = disputeData.filter(
  (data) => data.Status === "Unresolved"
)
export const resolving = disputeData.filter(
  (data) => data.Status === "Resolving"
)
export const resolved = disputeData.filter((data) => data.Status === "Resolved")
export const unResolvedLength = unResolved.length
export const resolvingLength = resolving.length
export const resolvedLength = resolved.length
export const allDetails = [
  {
    text: "All Disputes",
    percentage: 100,
    length: disputeLength,
    bg: "yellow-300",
  },
  {
    text: "Unresolved Dispute",
    percentage: (disputeLength * unResolvedLength) / 100,
    length: unResolvedLength,
    bg: "green-300",
  },
  {
    text: "Resolving Dispute",
    percentage: (disputeLength * resolvingLength) / 100,
    length: resolvingLength,
    bg: "red-300",
  },
  {
    text: "Resolved Dispute",
    percentage: (disputeLength * resolvedLength) / 100,
    length: resolvedLength,
    bg: "blue-300",
  },
]
