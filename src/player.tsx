import { StorageManager } from './storage';
import { useEffect, useState } from 'react';

export type Gender = 'm' | 'w'

export class Player {
  
  
  public name: string;
  public gender: Gender | undefined;
  public id: number | undefined;
  
  constructor(name?: string, gender?: Gender, id?: number) {
    this.name = name || 'Добавить имя';
    this.gender = gender?? 'm';
    this.id = id;
  }
}
const PlayerActionTypes = {
  create: 'create',
  delete: 'delete',
  edit: 'edit',
  set: 'set',
};
export type PlayerActionType = typeof PlayerActionTypes[keyof typeof PlayerActionTypes]

type PlayerAction = {
  player_id?: number,
  action: 'create' | 'delete' | 'edit' | 'set'
}
export type playerDispatcherType = (state: Player[], action: PlayerAction) => Player[]


export function usePlayer(): [Player[], ((newPlayers: Player[]) => void)] {
  const [players, setPlayers] = useState<Player[]>([]);
  
  useEffect(()=>{
    StorageManager.getPlayers().then((res) =>{
      console.log('getting players');
      if (res === null) {
        setPlayers([]);
      }
      else {
        console.log('players:', res);
        setPlayers(res);
      }
    })
  }, [])
  
  function setPlayerValue(newPlayers: Player[]){
    StorageManager.setPlayers(newPlayers).then(()=>{
      setPlayers(newPlayers)
    });
  }
  return [players, setPlayerValue]
}

