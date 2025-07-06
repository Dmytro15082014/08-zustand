import { NoteInput } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type NoteDraftStore = {
  draft: NoteInput;
  setDraft: (newNoteDraft: NoteInput) => void;
  clearDraft: () => void;
};
const initValues: NoteInput = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteDraft = create<NoteDraftStore>()(
  persist(
    (set) => {
      return {
        draft: initValues,
        setDraft: (newNoteDraft: NoteInput) => {
          return set({ draft: newNoteDraft });
        },
        clearDraft: () => {
          return set({ draft: initValues });
        },
      };
    },
    {
      name: "draft",
      partialize: (store) => {
        return { draft: store.draft };
      },
    }
  )
);
