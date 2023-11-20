import { HiHome, HiMagnifyingGlass, HiStar, HiTv, HiPlayCircle } from "react-icons/hi2";
import { HiPlus } from 'react-icons/hi';

const icons = [
    {
        "id": 1,
        "name": 'HOME',
        "icon": <HiHome />
    },
    {
        'id': 2,
        'name': 'SEARCH',
        'icon': <HiMagnifyingGlass />
    },
    {
        'id': 3,
        'name': 'WATCH LIST',
        'icon': <HiPlus />
    },
    {
        'id': 4,
        'name': 'ORIGINALS',
        'icon': <HiStar />
    },
    {
        'id': 5,
        'name': 'MOVIES',
        'icon': <HiPlayCircle />
    },
    {
        'id': 6,
        'name': 'SERIES',
        'icon': <HiTv />
    }
]

export function getIcons() {
    return icons;
}