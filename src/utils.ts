import { Player } from './player';

type FmtUnit = '<M>' | '<F>' | '<D>' | '<N>' | '<A>'

export function stringFmt<P>(expression: string, valueObj: P): string {
  // <M> - male
  // <F> - female
  // <D> - Any, Maybe Any different gender
  // <N> - any
  // <A> - number
  // <P> ? MB pairs
  // <S> ?
  const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  return expression.replace(templateMatcher, (substring, value: keyof P, index: number): string => {
    return valueObj[value] as string;
  });
  //return text;
}

function getUserFmtUnits(task_text: string): FmtUnit[] {
  return (task_text.match(/<M>|<F>|<D>|<N>/g) || []) as FmtUnit[];
}

export function fmtTask(task: string, players: { current_player: Player, other_players: Player[] }): string | undefined {
  if (
    (task.startsWith('<M>') && players.current_player.gender != 'm') ||
    (task.startsWith('<F>') && players.current_player.gender != 'w')
  ) {
    return;
  }
  let fmtUnits = getUserFmtUnits(task);
  if (fmtUnits.length > players.other_players.length) {
    return;
  }
  if (
    fmtUnits.filter(u => u == '<M>').length > [players.current_player, ...players.other_players].filter(p => p.gender == 'm').length ||
    fmtUnits.filter(u => u == '<F>').length > [players.current_player, ...players.other_players].filter(p => p.gender == 'w').length
  ) {
    return;
  }
  let resultTask = task;
  //console.log('plf', players);
  if (task.startsWith('<M>') || task.startsWith('<F>')) {
    resultTask = resultTask.replace(fmtUnits[0], players.current_player.name + ' ');
    fmtUnits = fmtUnits.slice(1);
  }
  resultTask = resultTask.replace('<P>', ' Делимся на пары! ');
  //fmtUnits = fmtUnits.slice(1);
  
  resultTask = resultTask.replace('<A>', (getRandom([2,3,4,5]) || 3).toString()); // 2/3/4/5 раунда.
  const usedPlayers: Player[] = [];
  for (let unit of fmtUnits) {
    let selectedPlayer = getRandomExclude(players.other_players, usedPlayers);
    usedPlayers.push(selectedPlayer);
    resultTask = resultTask.replace(unit,  ' ' + selectedPlayer.name + ' ');
  }
  
  //TODO: FORMAT PEOPLE
  return resultTask.replace(/\s{2,}/g, ' ');
}


export function getRandom<P>(arr: Array<P>): P | undefined {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomExclude<P>(arr: P[], exclude: P | P[]): P {
  arr = exclude instanceof Array ? arr.filter((value) => !exclude.includes(value)) : arr.filter(value => value != exclude);
  return arr[Math.floor(Math.random() * arr.length)];
}


