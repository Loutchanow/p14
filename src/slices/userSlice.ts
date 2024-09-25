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
  users: [], 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    editUser: (state, action: PayloadAction<{ field: keyof User; value: string | number | null }>) => {
      if (state.currentUser) {
        state.currentUser[action.payload.field] = action.payload.value;
      }
    },
    
    saveUser: (state) => {
      if (state.currentUser) {
        state.users.push(state.currentUser);  
        state.currentUser = {
          firstName: null,
          lastName: null,
          birth: null,
          startDate: null,
          street: null,
          city: null,
          state: null,
          zipCode: null,
          department: null,
        };
      }
    },
  },
});

export const { editUser, saveUser } = userSlice.actions;
export default userSlice.reducer;
