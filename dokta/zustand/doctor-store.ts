import { create } from "zustand";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase/config';

export interface Doctor {
  id: string;
  name: string;
  price: number;
  rating: number;
  speciality: string;
  statement: string;
  imageUrl: string;
  availability: boolean;
}

interface DoctorStore {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
  fetchDoctors: () => void;
}

export const useDoctorStore = create<DoctorStore>((set) => ({
  doctors: [],
  loading: false,
  error: null,
  fetchDoctors: async () => {
    set({ loading: true, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, "doctors"));
      const doctorsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Doctor[];
      set({doctors: doctorsData, loading: false});
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
