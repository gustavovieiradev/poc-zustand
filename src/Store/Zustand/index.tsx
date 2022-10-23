import create from "zustand";

type User = {
  fullName: string;
  email: string;
  score: number;
}

interface IUserZustand {
  user: User;
  updateUser: (updatedData: Partial<User>) => void;
}

export const useStore = create<IUserZustand>((set) => ({
  user: {
    fullName: '',
    email: '',
    score: 0,
  },
  updateUser: (newUserData) => {
    set((state) => {
      return {
        ...state,
        user: {
          ...state.user,
          ...newUserData
        }
      }
    })
  }
}))