//type/Character.ts

export interface CharacterType {
    id: number;
    name: string;
    characterImg: string;
    bgCharacter: {
        bgView: string;
        bgDetail: string;
        bgSlide: string;
    };
    textBg: {
        textView: string;
        textDetail: string;
        textHeroGame: string;
    };
    badge: {
        badgeView: string;
        badgeDetail: string;
    };
    slogan: string;
    description: string;
}
