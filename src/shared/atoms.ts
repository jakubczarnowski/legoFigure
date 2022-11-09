import { atom } from "jotai";
import { Figure } from "./types";

export const selectedFigureIdAtom = atom<string | null>(null);
