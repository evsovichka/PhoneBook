import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    modalIsOpen: "",
    contact: {},
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.items.push(action.payload);
        state.message = "Contact added!";
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.message = "Contact deleted!";
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        state.loading = false;
        state.error = null;
        state.message = "Contact updated!";
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
  reducers: {
    closeModal: (state) => {
      state.modalIsOpen = null;
    },
    openModal: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    choseContact: (state, action) => {
      state.contact = action.payload;
    },
  },
});

export const { closeModal, openModal, choseContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
