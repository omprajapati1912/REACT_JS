import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnIxXD4LS9mgxM_N2gQQwVDiqmtvPUR7k",
  authDomain: "om-fire-base.firebaseapp.com",
  projectId: "om-fire-base",
  storageBucket: "om-fire-base.firebasestorage.app",
  messagingSenderId: "963170448366",
  appId: "1:963170448366:web:33ad72c0a4be984c3894ff",
  measurementId: "G-ZBV1WNQ3Q7",
  dataURL: "https://om-fire-base-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
