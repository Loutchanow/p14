import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    firstName: string | null;
    lastName: string | null;
    startDate: string | null;
    department: string | null;
    birth: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
  } | null;
}

const initialState: AuthState = {
  user: {
    firstName: null,
    lastName: null,
    startDate: null,
    department: null,
    birth: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
}
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<{ user: { firstName: string; lastName: string; startDate: string; department: string; birth: string; street: string; city: string; state: string; zipCode: number} }>) => {
      state.user = {
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
        startDate: action.payload.user.startDate,
        department: action.payload.user.department,
        birth: action.payload.user.birth,
        street: action.payload.user.street,
        city: action.payload.user.city,
        state: action.payload.user.state,
        zipCode: action.payload.user.zipCode,
      };
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
