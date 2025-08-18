import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';    
import CharacterService from '@/store/slice/CharacterSlice';
import { Character } from '@/types/Character';

interface CharacterContextState {
    character: Character[];
}

interface CharacterContextActions{
    LoadCharacter: () => Promise<void>;
}

interface CharacterProviderProps{
    children: ReactNode;
}

type CharacterContextType = CharacterContextState & CharacterContextActions;

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

const initialState: CharacterContextState = {
    character: [],
};

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
    const [state, setState] = useState<CharacterContextState>(initialState);

    const LoadCharacter = useCallback(async () => {
        try {
            const result = await CharacterService.fetchCharacter();
            setState({
                character: result
            })
            // return result;
        } catch (error) {
            console.log(error);
            throw error
        }
    },[])

    const contextValue = useMemo<CharacterContextType>(() => ({
        character: state.character,
        LoadCharacter
    }), [state.character, LoadCharacter]);

    return (
        <CharacterContext.Provider value={contextValue}>
            {children}
        </CharacterContext.Provider>
    )
}

export const useCharacterContext = () => {
    const context = useContext(CharacterContext);
    if (!context) {
        throw new Error('useCharacterContext must be used within a CharacterProvider');
    }
    return context;
}
