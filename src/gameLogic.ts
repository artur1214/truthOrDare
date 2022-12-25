import { Player } from './player';
import { fmtTask, getRandom, stringFmt } from './utils';
import { useEffect, useState } from 'react';
import { game_tasks, GameTask, PackNames, PackNamesType, Packs } from '../game_tasks/tasks';
import { useSettings } from './settingsManager';


//TODO: Choose only ages which enabled in settings
export type PacksType = {
  12: readonly (keyof typeof PackNames)[],
  16: readonly (keyof typeof PackNames)[],
  18: readonly (keyof typeof PackNames)[],
  21: readonly (keyof typeof PackNames)[]
}

export const packsAges = Object.keys(Packs) as unknown as (keyof PacksType & number)[];

export interface GameInstance {
  truth: (player: Player) => string,
  dare: (player: Player) => string
}

export function useGame(players: Player[]): [GameInstance, ((p: Player[]) => void)] {
  const [settings, setSettings] = useSettings();
  const packs: PackNamesType[] = settings.selectedAges.map((value: (keyof PacksType & number)) => {
    return [...Packs[value]];
  }).reduce((accum: PackNamesType[], val: PackNamesType[]) => accum.concat(val), []);
  
  const [gameInstance, setGameInstance] = useState<GameInstance>(game(players, [...packs]));
  useEffect(() => {
    setGameInstance(game(players, [...packs]));
  }, []);
  useEffect(() => {
    setGameInstance(game(players, [...packs])); //On settings loaded make game instance
  }, [settings]);
  
  const updatePlayers = (p: Player[]) => {
    setGameInstance(game(players, [...packs]));
  };
  return [gameInstance, updatePlayers];
}

const game = function(players: Player[], game_packs: PackNamesType[]): GameInstance {
  
  const truth: GameTask[] = Object.values(game_tasks).reduce((accum, val) => accum.concat(val), []).filter(
    (value) => {
      return game_packs.includes(value.pack_name) && value.pack_name.startsWith('truth');
    },
  );
  
  const dare: GameTask[] = Object.values(game_tasks).reduce((accum, val) => accum.concat(val), []).filter(
    (value) => {
      return game_packs.includes(value.pack_name) && value.pack_name.startsWith('dare');
    },
  );
  
  const getTruth = (player: Player) => {
    return stringFmt(getRandom(truth)?.text || '', {
      p1: player.name, p2: getRandom(players.filter(p => p != player))?.name ?? 'ERROR',
    });
  };
  
  const getDare = (player: Player) => {
    //console.log('pp ', players);
    let task;
    while (1){
      task = getRandom(dare)?.text || ''
      if (task.startsWith('<')){
        break;
      }
    }
    let res;
    while (1) {
      res = fmtTask(task || '', {
        current_player: player, other_players: players.filter(p => p != player),
      })
      if (res!== undefined) {
        break
      }
      else{
        while (1){
          task = getRandom(dare)?.text || ''
          if (task.startsWith('<')){
            break;
          }
        }
      }
    }
    console.log('"' + task + '"');
   return res || '';
    
  };
  return {
    truth: getTruth,
    dare: getDare,
  };
};
