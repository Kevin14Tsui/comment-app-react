export const getComments = async () => {
  return [
    {
      id: "1",
      body: "What game is good?",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2023-02-25 GMT+8 19:35",
    },
    {
      id: "2",
      body: "How can i get the money?",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2023-02-25 GMT+8 20:00",
    },
    {
      id: "3",
      body: "I think LOL, Apex is good",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2023-02-25 GMT+8 20:15",
    },
    {
      id: "4",
      body: "Work!!!!!",
      username: "John",
      userId: "2",
      parentId: "2",
      createdAt: "2023-02-25 GMT+8 19:38",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
