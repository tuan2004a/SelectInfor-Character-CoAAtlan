//CharacterService.ts

import { JSON_URL } from '@/config/axiosInstance';
import axios from 'axios';
import { Character } from '@/types/Character';

class CharacterService {

    private constructor() { }
    
    static async getCharacter(): Promise<Character[]> {
        try {
            const res = await axios.get<Character[]>(`${JSON_URL}/character`);
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async getCharacterById(id: number): Promise<Character> {
        try {
            const res = await axios.get(`${JSON_URL}/character/${id}`);
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default CharacterService