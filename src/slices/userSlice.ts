import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  firstName: string | null;
  lastName: string | null;
  startDate: string | null;
  department: string | null;
  birth: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
}

interface UserState {        
  currentUser: User | null;  
  readyToSave: boolean; 
  users: User[];          
}

const initialState: UserState = {
  currentUser: {
    firstName: null,
    lastName: null,
    birth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null,
  },
  readyToSave: false,
  users: [], 
};


const isUserComplete = (user: User | null): boolean => {
  if (!user) return false;
  return Object.values(user).every(value => value !== null && value !== '');
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<{ field: keyof User; value: string | number | null }>) => {
      if (state.currentUser) {
        state.currentUser[action.payload.field] = action.payload.value;
        state.readyToSave = isUserComplete(state.currentUser);
      }
    },
    
    saveUser: (state) => {
      if (state.currentUser && state.readyToSave) {
        state.users.push(state.currentUser);  
        state.readyToSave = false;
      }
    },
  },
});

export const { editUser, saveUser } = userSlice.actions;
export default userSlice.reducer;
// Styled Components
