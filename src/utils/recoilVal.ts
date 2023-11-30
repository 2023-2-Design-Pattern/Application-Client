import { atom } from "recoil";
import Character from "../components/canvas/Character";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userNameAtom = atom({
	key: 'userName',
	default: '',
    effects_UNSTABLE: [persistAtom],
});

export const roundAtom = atom({
	key: 'round',
	default: 1,
    // effects_UNSTABLE: [persistAtom],
});

export const charactorAtom = atom<Character | null>({
    key:'charic',
    default: null,
})