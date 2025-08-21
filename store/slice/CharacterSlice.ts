//CharacterSlice.tsx
import { CharacterType } from '@/types/Character';
import CharacterService from '@/service/CharacterService';

class CharacterSlice {
    private constructor() { }

    static async fetchCharacter():Promise<CharacterType[]> {
        try {
            const response = await CharacterService.getCharacter();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default CharacterSlice