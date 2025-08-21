//CharacterService.ts

import { JSON_URL } from '@/config/axiosInstance';
import axios from 'axios';
import { CharacterType } from '@/types/Character';

class CharacterService {

    private constructor() { }
    
    static async getCharacter(): Promise<CharacterType[]> {
        try {
            const res = await axios.get<CharacterType[]>(`${JSON_URL}/characters`);
            // console.log("service", res)
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async getCharacterById(id: number): Promise<CharacterType> {
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