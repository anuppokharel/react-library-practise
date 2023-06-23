import { createContext, useContext, useReducer } from "react";

const NoticeContext = createContext();

const initialStateNotice = [
  {
    id: 1,
    title: "Notice Title",
    description: "Notice Desc",
    status: false,
    date: {
      published_date: new Date(),
      availableDate: 2022 / 12 / 12,
    },
  },
  {
    id: 2,
    title: "Notice Title 2",
    description: "Notice Desc 2",
    status: false,
    date: {
      published_date: new Date(),
      availableDate: 2022 / 12 / 12,
    },
  },
  {
    id: 3,
    title: "Notice Title 3",
    description: "Notice Desc 3",
    status: false,
    date: {
      published_date: new Date(),
      availableDate: 2022 / 12 / 12,
    },
  },
];

const noticeReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return {
        noticeData: [
          ...state.noticeData,
          {
            ...action.payload,
            id: Math.ceil(Math.random() * 100),
          },
        ],
      };
    }
    case "DELETE": {
      return {
        noticeData: state.noticeData.filter(
          (el) => el.id !== action.payload.id
        ),
      };
    }
    case "UPDATE": {
      return {
        noticeData: state.noticeData.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload;
          } else {
            return el;
          }
        }),
      };
    }
    default: {
      throw new Error(`Unhandled action typw: ${action.type}`);
    }
  }
};

export const NoticeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noticeReducer, {
    noticeData: initialStateNotice,
  });
  const value = { state, dispatch };

  return (
    <NoticeContext.Provider value={value}>{children}</NoticeContext.Provider>
  );
};

export function useNoticeData() {
  const context = useContext(NoticeContext);

  if (context === undefined) {
    throw new Error("useNoticeData must be used with a CountProvider");
  }

  return context;
}
