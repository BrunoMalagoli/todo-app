interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pending: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "In-progress:Adipisicing Lorem sunt est ex cillum laboris fugiat",
      status: "in-progress",
      createdAt: Date.now() - 10000,
    },
    {
      description: "Finished:Aliqua tempor officia officia non laborum",
      status: "finished",
      createdAt: Date.now() - 1000,
    },
  ],
};
