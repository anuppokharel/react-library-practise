import {
  createContext,
  useContext,
  useReducer,
} from "react"; /* Helps to pass data 
through component tree without having to pass prop down manually */

const BookContext = createContext();

const initialState = [
  {
    id: 1,
    title: "Book Title",
    description: "Book Desc",
    author: "Books Author name",
    publication: "Books Publication",
    status: false,
    date: {
      published_date: new Date(),
      availableDate: 2022 / 12 / 12,
    },
  },
  {
    id: 2,
    title: "Book Title 1",
    description: "Book Desc 1",
    author: "Books Author name",
    publication: "Books Publication",
    status: false,
    date: {
      published_date: new Date(),
      availableDate: 2022 / 12 / 12,
    },
  },
  {
    id: 3,
    title: "Book Title 2",
    description: "Book Desc 2",
    author: "Books Author name 2",
    publication: "Books Publication 2",
    status: "Available",
    date: {
      published_date: new Date(),
      availableDate: 2022 / 12 / 12,
    },
  },
];

const bookReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return {
        bookData: [
          ...state.bookData,
          { ...action.payload, id: Math.ceil(Math.random() * 100) },
        ],
      };
    }
    case "DELETE": {
      return {
        bookData: state.bookData.filter((el) => el.id !== action.payload),
      };
    }
    case "UPDATE": {
      return {
        bookData: state.bookData.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload;
          } else {
            return el;
          }
        }),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, {
    bookData: initialState,
  });
  const value = { state, dispatch };

  // Yo line bujhina maile
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export function useBookData() {
  const context = useContext(BookContext);

  if (context === undefined) {
    throw new Error("useBookData must be used with a CountProvider");
  }

  return context;
}
