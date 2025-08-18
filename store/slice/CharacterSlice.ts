//CharacterSlice.tsx
import { Character } from '@/types/Character';
import CharacterService from '@/service/CharacterService';

class CharacterSlice {
    private constructor() { }

    static async fetchCharacter():Promise<Character[]> {
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