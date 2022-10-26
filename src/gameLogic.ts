import { Player } from './player';
import { getRandom, stringFmt } from './utils';
import { useEffect, useState } from 'react';
import game_tasks from '../game_tasks/tasks.json';

type GameTask = {
  text: string,
  pack_id: number,
  pack_name: string
}
export const PackNames = {
  dares_social: "dares_social",
  dares_general1: "dares_general1",
  dares_general2: "dares_general2",
  dares_general3: "dares_general3",
  dares_general4: "dares_general4",
  dares_family1: "dares_family1",
  dares_family2: "dares_family2",
  dares_alcohol1: "dares_alcohol1",
  dares_alcohol2: "dares_alcohol2",
  dares_ero1: "dares_ero1",
  dares_ero2: "dares_ero2",
  dares_ero3: "dares_ero3",
  dares_erohard: "dares_erohard",
  dares_school: "dares_school",
  dares_newyear: "dares_newyear",
  dares_outdoor1: "dares_outdoor1",
  dares_outdoor2: "dares_outdoor2",
  truth_simple1: "truth_simple1",
  truth_simple2: "truth_simple2",
  truth_simple3: "truth_simple3",
  truth_simple4: "truth_simple4",
  truths_ero1: "truths_ero1",
  truths_ero2: "truths_ero2",
  truths_ero3: "truths_ero3",
  truths_serious1: "truths_serious1",
  truths_serious2: "truths_serious2",
  truths_serious3: "truths_serious3",
  truths_serious4: "truths_serious4",
  dares_mass: "dares_mass",
};

//TODO: Choose only ages which enabled in settings
type PacksType = {
  12: (keyof typeof PackNames)[],
  16: (keyof typeof PackNames)[],
  18: (keyof typeof PackNames)[],
  21: (keyof typeof PackNames)[]
}
export const Packs: PacksType = {
  12: [
    "dares_social",
    "truth_simple1",
    "truth_simple2",
    "truth_simple3",
    "truth_simple4",
    "truths_serious1",
    "truths_serious2",
    "truths_serious3",
    "truths_serious4",
    "dares_newyear",
    "dares_family1",
    "dares_family2",
    "dares_general1",
    "dares_general2",
    "dares_general3",
  ],
  16: [
    "truths_serious2",
    "truths_ero1",
    "truths_serious1",
    "truth_simple1",
    "dares_newyear",
    "dares_mass",
    "dares_general2",
    "dares_general3",
    "dares_general1",
    "dares_general4",
    "dares_outdoor1",
    "dares_outdoor2",
  ],
  18: [
    "dares_ero3",
    "dares_ero2",
    "dares_ero1",
    "dares_alcohol2",
    "dares_alcohol1",
    "truths_ero1",
    "truths_ero2",
    "truths_ero3",
    "truths_serious2",
  ],
  21: [
    "dares_erohard",
    "truths_ero3",

  ],
  
};

export interface GameInstance {
  truth: (player: Player) => string;
}

export function useGame(players: Player[]): [GameInstance, ((p: Player[]) => void)] {
  const [gameInstance, setGameInstance] = useState<GameInstance>(game(players));
  
  useEffect(() => {
    game_tasks;
  }, [gameInstance]);
  const updatePlayers = (p: Player[]) => {
    setGameInstance(game(players));
  };
  return [gameInstance, updatePlayers];
}

const game = function(players: Player[]): GameInstance {
  const truth: GameTask[] = [...Object.values<GameTask[]>(Object.fromEntries(
    Object.entries(game_tasks).filter(([key, value]) => key.includes("truth")),
  )).reduce((accum, val) => accum.concat(val), [])];
  console.log(truth);

  const getTruth = (player: Player) => {
    console.log("pp ", players);
    return stringFmt(getRandom(truth).text, {
      p1: player.name, p2: getRandom(players.filter(p => p != player))?.name ?? "ERROR",
    });
  };

  return {
    truth: getTruth,
  };
};
