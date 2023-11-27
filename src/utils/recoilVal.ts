import { atom } from "recoil";
import Character from "../components/canvas/Character";

export const userNameAtom = atom({
	key: 'userName',
	default: '',
});

export const charactorAtom = atom<Character | null>({
    key:'charic',
    default: null,
})