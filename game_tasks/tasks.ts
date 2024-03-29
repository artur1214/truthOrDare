import { PacksType } from '../src/gameLogic';

export type GameTask = {
  text: string,
  pack_id: number,
  pack_name: PackNamesType & string
}
export const Packs: PacksType = {
  12: [
    'dares_social',
    'truth_simple1',
    'truth_simple2',
    'truth_simple3',
    'truth_simple4',
    'truths_serious1',
    'truths_serious2',
    'truths_serious3',
    'truths_serious4',
    'dares_newyear',
    'dares_family1',
    'dares_family2',
    'dares_general1',
    'dares_general2',
    'dares_general3',
  ],
  16: [
    'truths_serious2',
    'truths_ero1',
    'truths_serious1',
    'truth_simple1',
    'dares_newyear',
    'dares_mass',
    'dares_general2',
    'dares_general3',
    'dares_general1',
    'dares_general4',
    'dares_outdoor1',
    'dares_outdoor2',
  ],
  18: [
    'dares_ero3',
    'dares_ero2',
    'dares_ero1',
    'dares_alcohol2',
    'dares_alcohol1',
    'truths_ero1',
    'truths_ero2',
    'truths_ero3',
    'truths_serious2',
  ],
  21: [
    'dares_erohard',
    'truths_ero3',
  ],
  
} as const;
export const PackNames = {
  dares_social: 'dares_social',
  dares_general1: 'dares_general1',
  dares_general2: 'dares_general2',
  dares_general3: 'dares_general3',
  dares_general4: 'dares_general4',
  dares_family1: 'dares_family1',
  dares_family2: 'dares_family2',
  dares_alcohol1: 'dares_alcohol1',
  dares_alcohol2: 'dares_alcohol2',
  dares_ero1: 'dares_ero1',
  dares_ero2: 'dares_ero2',
  dares_ero3: 'dares_ero3',
  dares_erohard: 'dares_erohard',
  dares_school: 'dares_school',
  dares_newyear: 'dares_newyear',
  dares_outdoor1: 'dares_outdoor1',
  dares_outdoor2: 'dares_outdoor2',
  truth_simple1: 'truth_simple1',
  truth_simple2: 'truth_simple2',
  truth_simple3: 'truth_simple3',
  truth_simple4: 'truth_simple4',
  truths_ero1: 'truths_ero1',
  truths_ero2: 'truths_ero2',
  truths_ero3: 'truths_ero3',
  truths_serious1: 'truths_serious1',
  truths_serious2: 'truths_serious2',
  truths_serious3: 'truths_serious3',
  truths_serious4: 'truths_serious4',
  dares_mass: 'dares_mass',
} as const;
export type PackNamesType = Readonly<keyof typeof PackNames & string>
export const game_tasks: {
  [key: string] : GameTask[]
} = {
  'dares_alcohol': [
    {
      'text': 'ты за здоровый образ жизни? Выпей какой-нибудь алкогольный напиток или же отожмись 15 раз.',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Каждый раз, когда игрок <D> дотрагивается до бокала, ты должен(должна) имитировать оргазм',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'начинаешь ты! Игроки по очереди по несколько капель доливают в стакан (рюмку, бокал) любой алкогольный напиток. Тот игрок, у которого перелилось - выполняет какое-нибудь наказание (придумывают присутствующие).',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'допей свой бокал и расстегни зубами ширинку одного из игроков на твой выбор',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей с игроком <N> на брудершафт под столом',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Если ты когда-нибудь спал с человеком с сайта знакомств, делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей пять стаканов воды/пива ',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'За 15 секунд выпить 3 рюмки водки (если не успел - тренировки продолжаются до нужного рекорда) ',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей 3 рюмки водки не закусывая ',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей все спиртное, которое налито в стаканы на данный момент ',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей стакан вина через проколотую трубочку (если трубочку проколоть 3-4 раза зубочисткой, пить из нее станет почти невозможно)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей несколько рюмок водки без закуски',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'До конца вечеринки следить, чтобы бокалы гостей не опустели, подливая алкогольные напитки, как только у кого-то окажется меньше четверти. ',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей содержимое своего стакана и стаканов соседей по обе руки до дна',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'С завязанными глазами с помощью рук угадать, кто перед тобой, за каждый неправильный ответ – штрафная рюмка! ',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей рюмку с закрытыми глазами',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей три рюмки подряд',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей с игроком <D> на брудершафт',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Угадай, что ты выпил (какое вино, коньяк и т. д.) с закрытыми глазами',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей из блюдца (или вылакай)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Спой гимн, если запнешься - выпей рюмку',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выбери того, кто будет пить',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей рюмку за 10 глотков',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей из трехлитровой банки или кастрюли (количество на усмотрение)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Налей себе рюмку левой рукой и выпей ее',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей рюмку через соломинку',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей рюмку под столом',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей рюмку из рук игрока <D>',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Разлей всем в рюмки (бокалы) без рук',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей с песней на устах',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Вылей рюмку в тарелку и выпей с помощью ложки',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей из ладоней игрока <D>',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сделай коктейль из всех напитков и выпей его',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Взять на руки игрока <D> и выпить из его рук',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей рюмку без помощи рук',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей из бумажного кулечка (можно свернутого из купюры)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей, стоя в позе ласточки',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей, стоя как цапля',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей из ладошки игрока <D>',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Разрекламируй выпиваемый напиток так, чтобы игрок <N> захотел его у тебя купить',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей, встав на стул и прочитав стихотворение',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей под столом с игроком <D>. Если нет стола - то под игроком <D>',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей из наперстка (можно из крышки от пластиковой бутылки)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей лежа на полу или на диване',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Налей выпить всем присутствующим',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Определи сорт алкоголя в рюмках с закрытыми глазами по запаху',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сделай рюмку из яблока или мандарина и угости каждого присутствующего из нее',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Разогрей в микроволновке или на плите водку и выпей стопку',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выйди в подъезд и выпей в нем с первым попавшимся',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Сделай стопку из яйца и выпей из нее',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Придумай 20 хвалебных описаний выпитой рюмке (содержимому)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей и закуси чесноком',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей и громко заори чего-нибудь (ну типа, как Тарзан)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Открыть бутылку шампанского, хорошенько взболтав ее',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпить намешанный алкоголь. Можно смешать 3 напитка и для большего эффекта сверху посыпать перца.',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей 100 грамм алкоголя и сделай 20 отжиманий',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпить 3 стопарика, между ними делать по 10 отжиманий',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпить стакан крепкого алкоголя',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сыграть с игроком <N> в алко-шашки, используя шахматную доску и рюмки. Если противник съедает шашку, ты обязан выпить содержимое и наоборот',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Напои <N> самым крепким алкоголем, который только есть в наличии',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выпей рюмку водки и спой Лепса',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты стоишь и держишь в зубах рюмку с алкоголем (ром/текила/виски и тд). Игрок <N> с завязанными глазами ищет тебя, и ты должен дать выпить ему(ей) (без помощи рук)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты ложишься на диван/кровать/пол - что угодно, на живот ставится рюмка с алкоголем. Игрок <N>, начиная с поцелуя "наоборот", как в человеке-пауке, с помощью поцелуев добирается до рюмки и без рук выпивает.',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ложись, тебе на живот ставится рюмка текилы, на шею насыпается соль, в губы дается долька лайма. Игрок <N> должен в том же порядке выпить текилу. Соль-рюмка-лайм',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Выбери любое слово, при произношении которого любой игрок должен будет выпить',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Придумай забавное прозвище игроку <N>. Если кто-то обратится к нему не по этому прозвищу, должен будет выпить',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Устрой армрестлинг с игроком <S>. Проигравший выпивает алкогольный напиток',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'выпей бокал пива/вина, стоя на руках',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Оскорби каждого игрока. Выпей за каждого, кого ты не смог обидеть',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'На видео признаться в любви к Игорю Николаеву и выпить за это',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Все пьют за кота, если он есть',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпить спиртное из пяти крышечек, после каждого повторяя « Вкусновато, но маловато» , каждый раз изменяя интонацию',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Паровоз. Тебе наливают 3 стопки, ты должен(на) выпить все без рук ',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'у тебя есть 1 минута, чтобы допить свой напиток. Не успел - игрок <N> придумывает тебе наказание',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'чего ты никогда не делал(а)? Все те, кто это делал, пьют',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'выбери человека, который будет пить',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'какого числа ты родился(ась)? Сделай такое количество глотков алкогольного напитка',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Пьют все',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сделай несколько глотков из бокала игрока <N>',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'сделай <A> глотков алкогольного напитка',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Все левши делают <A> глотков алкогольного напитка',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Все правши делают <A> глотков алкогольного напитка',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, чьи телефоны лежат на столе, делают 10 глотков алкогольного напитка',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Тот, чей бокал наиболее полон, делает <A> глотков',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты и игроки <N> и <N> должны говорить шепотом в течение 3 раундов. Штраф - выпивка',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'пей всегда, когда пьет кто-то другой. Действует в течение <A> раундов',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'подливай всем алкоголь в течение <A> раундов',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'все парни пьют',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'все девушки пьют',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'выпить весь алкоголь, разлитый в бокалы',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты словил(а) Макконахи. Выпей и сиди с серьезным лицом',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Теперь ты - винишко-тян. Пей только вино и говори цитатами великих людей, отрывками из книг, стихов или песен',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Все, кто старше тебя, делают по <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Все, кто выше тебя, делают по <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Все, кто пьянее тебя, рисуют твой портрет. Ты выбираешь победителя',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Все, кто трезвее тебя, делают по 5 приседаний',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'делай глоток без помощи рук',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'сделай столько глотков, сколько хочешь, а игрок <N> должен выпить вдвое больше',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Тот, у кого в бокале наиболее крепкий алкоголь, делает тебе вкусный салат',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если напиток в твоем бокале слабее напитка игрока <N>, вставай на четвереньки на 2 раунда',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Тот, кто последним обновил свой статус в социальной сети, выпивает с тобой на брудершафт',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'добавь алкоголь в бокал игроку <N>',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сделай столько глотков, сколько человек участвует в игре',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Тот,  кого тошнило на вечеринке, ложатся на пол у твоих ног',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! По очереди добавляем алкоголь в свои бокалы',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'пока снова не увидишь свое имя на экране, пьешь каждый ход',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Салки до конца игры! Кого осалят, тот и пьет. Ты начинаешь',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, у кого есть пачка сигарет, делают столько глотков, сколько их осталось в пачке',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто (до сих пор) пьет слабый алкоголь (вино, пиво...) делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Трое самых жадных игроков делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Тот, кто хотел бы переспать с одним из игроков, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Делай <A> глотка(ов), если ты когда-нибудь спал(а) с первой(ым) встречной(ым)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто любят оральные ласки, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь во время секса снимал на камеру своего партнера, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто считают, что ты хорош(а) в постели, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь занимался анальным сексом, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто одет в рубашку на пуговицах, расстегивает их и делает столько глотков, сколько пуговиц он расстегнул',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты должен изображать оргазм каждый раз, перед тем, как пьешь',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'кто не помнят имен всех своих сексуальных партнеров, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'кто когда-нибудь занимался сексом в отеле, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'кто никогда не занимался сексом в машине, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'чего ты никогда не пробовал(а) во время секса? Игроки, которые это делали, пьют <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'выбирай: сделать <A> глотка(ов) или поцеловать ноги игрока <D>',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если ты поцелуешь игрока <D>, все игроки должны будут сделать <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Все должны сделать столько глотков, сколько оргазмов вы испытали на этой неделе. Онанизм тоже считается',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'кто не занимался сексом на этой неделе, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь отправлял или получал сексуальные сообщения, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Если тебе доводилось спать с одним из игроков, делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кого когда-либо застукивали родители во время секса, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если у тебя не было секса более 4 раз за день, делай <A> глотка(ов). Если был, решай, кому пить',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто занимался сексом на кровати своих родителей, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто выкрикивают имя своего партнера во время секса, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь испытывали оргазм после трех минут секса, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь занимался сексом во время менструации, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь занимался сексом на стиральной машинке, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь занимался сексом на кухне, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Девушки, которым было больно во время первого раза, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь пользовался секс игрушками, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто сидят на сайте знакомств, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей с игроком <N> на брудершафт',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь занимался сексом в лесу, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь держал в руке фаллоимитатор, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь чувствовал возбуждение в общественном транспорте, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь чувствовал сексуальное возбуждение на работе делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь представлял в эротических фантазиях родителей своего друга/своей подруги, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь наблюдал за сексом животных, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Парни: те, кто когда-либо мерился своими причиндалам, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь засовывал инородный предмет себе в анус/вагину, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь обзывал во время секса своего партнера, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь подталкивал своего друга/свою подругу на измену, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь встречался с бывшей(бывшим) своего друга(подруги), делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кого когда-нибудь оскорбляли во время секса, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Развратники, у кого был секс с двумя партнерами, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Девушки, которые испытывали оргазм, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь спал с человеком другой расы, решай, кому делать <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Все игроки делают <A> глотка(ов) кроме тебя, ты целуешь всех в щечку',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сделай <A> глотка(ов), если ты считаешь себя гуру секса',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'выбери игрока, который будет пить, пока ты гладишь его интимные части тела',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'укуси одного из игроков за ушко или делай <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Все пьют и снимают один предмет одежды!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто не умеют танцевать twerk, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'покажи интимную часть своего тела или делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сделай <A> глотка(ов), если на тебе нет нижнего белья',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Сделай <A> глотка(ов), если предварительные ласки тебе нравятся больше, чем секс',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сделай <A> глотка, если ты любишь жесткий секс',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Сделай <A> глотка(ов), если ты считаешь, что предварительные ласки необходимы',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сними свое нижнее белье или допивай свой бокал до дна',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'пей как викинг! Выпей банку пива залпом!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'назови букву. Те игроки, кто спал с человеком, чье имя начинается на выбранную букву, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Выпей бокал шампанского без помощи рук ',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'допей свой бокал и укуси или облизни ухо того человека, который тебя привлекает',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'допей свой бокал и поцелуй в губы любого из игроков',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'поставь засос игроку <D> и сделай <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'допей свой бокал и изобрази минет(куни) на игроке <D>',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'оближи ухо игрока <D> или делай <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'оближи щеку игрока <D> или делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'выбери игрока, с которым вы будете целоваться после каждого сделанного вами глотка. Продолжайте, пока ваши бокалы не опустеют',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'выбери игрока, чья рука будет находиться у тебя между ног, пока ты допиваешь свой бокал до дна. Рука должны быть под нижним бельем',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'выбери игроков, которые должны допить свои бокалы до дна и поцеловаться с языком',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'допей до дна бокал игрока, с кем бы ты мог/могла переспать этой ночью',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Секс с сильно пьяным партнером: отвратительно или занимательно? Голосуют все одновременно, те, кто в меньшинстве, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Каждый игрок делает <A> глотка(ов) и говорит, с кем бы он переспал из присутствующих',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Конкурс лифчиков! Чей лифчик самый крутой? Парни выбирают победителя, проигравший делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если ты когда-нибудь делал(а) куннилингус, пей <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'если ты когда-нибудь делал(а) минет, пей <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'отлей из своего бокала по чуть-чуть каждому из игроков',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Все игроки отливают немного из своего бокала в твой бокал',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'допей свой бокал и наполни его до краев',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'возьми бокал игрока слева и напои его из этого бокала',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'встань на руки и сделай <A> глотка(ов). Игроки <M> и <M> помогут тебе сохранить равновесие',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто бы с радостью занялся сексом с игроком справа, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто бы с радостью занялся сексом с игроком слева, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь поднимал еду с пола и ел ее, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если ты когда-нибудь мастурбировал(а), представляя свою(его) дальнюю(него) родственницу(ка), делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, у кого был секс больше недели назад, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': '<F>сделай столько глотков, сколько мужских членов ты отсосала',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, у кого был анальный секс, поднимите свои бокалы в воздух и скажите "да здравствует анал"',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Тот, кто планирует заняться сексом сегодня вечером, делайте <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сделай <A> глотка(ов), если ты когда-нибудь отправлял(а) фото своего пениса или своей груди в сообщении',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'сделай <A> глотка(ов), не касаясь губами бокала',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'положи что-нибудь съестное в бокал игрока <N>, он(она) должен(должна) допить до дна, чтобы достать это',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'и игрок <N>, кто быстрее выпьет свой бокал до дна, у того иммунитет на 8 минут',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто в детстве рассматривал картинки голых женщин на последней странице новостных газет, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь засовывал палец в попу, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сделай <A> глотка(ов), не касаясь до бокала руками',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь мастурбировал во время просмотра мультфильма, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'добавь крепкого алкоголя себе в бокал',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Девушки: та, у кого недавно были месячные, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто пукал в общественном транспорте, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, у кого серьезных отношений было больше, чем секса на одну ночь, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, у кого член меньше 15 см, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'сделай <A> глотка(ов), держа бокал между ног',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Игроки выбирают, какой напиток ты должен(а) будешь пить',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если тебя когда-либо тошнило на кого-нибудь, делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь мастурбировал, представляя своего друга(свою подругу), делай <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь какал в душе, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь глотал сперму, делают <A> глотка(ов) (алкоголя)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь давал денег бомжу, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь подсматривал за своими соседями, в надежде увидеть их голыми, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Сделай <A> глотка(ов), если вчера ты смотрел(а) порно',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь писался в штаны, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь писал в раковину, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь писал в лифте, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кого когда-нибудь рвало(тошнило) в общественном транспорте, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь представлял в эротических фантазиях героя мультфильма, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь смотрел на свой анус в зеркало, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто бреют или эпилируют волосы в попе, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'выбирай: сделать по одному глотку из бокала каждого игрока или сделать 5 глотков из своего бокала',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Тот, кому когда-нибудь вставляли палец в попу, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь пробовал на вкус естественную смазку своего партнера, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'и игрок <S>, кто из вас сильнее даст другому пощечину, выиграл! Проигравший делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'и игрок <D>, кто из вас сильнее шлепнет по попе другого, выиграл! Проигравший делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'и игрок <D>, кто из вас дольше продержит руки поднятыми над головой, победил. Проигравший делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'и игрок <D>, кто из вас дольше продержится, стоя на одной ноге, тот выиграл! Проигравший делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'и игрок <N>, надо держать свой язык двумя пальцами, кто из вас продержится дольше, тот победил. Проигравший делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь пукал во время секса, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Парни, кто из вас последний покажет свой голый торс, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Все, у кого есть борода, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь какал в океан, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь какал на улице, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто не занимался анальным сексом, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Все игроки делают <A> глотка(ов). Кроме тебя, ты танцуешь танец маленьких утят',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто любит часок-другой посидеть в туалете, делайте <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': '<M>сделай столько глотков, сколько кисок ты удовлетворил своим языком',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'вылей немного из своего бокала себе в трусы',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'вылей немного из своего бокала себе на голову',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сделай глоток из каждой бутылки, которая стоит на столе',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь не мог достать из себя тампон, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': '<F>Сделай <A> глотка(ов), если твоя грудь меньше груди игрока <S>',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Сделай <A> глотка(ов), если твоя грудь больше третьего размера',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сделай по глотку из каждого бокала',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Добавь немного соли в свой бокал. Или перца, или приправ, все что угодно, что придаст вкуса твоему напитку',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь мастурбировал на Сашу Грей, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-нибудь преодолевал 50 км, ради того, чтобы заняться сексом, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'сделай столько глотков, какое количество идиотов сидит в этой комнате',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'сделай столько глотков, какое количество мебели находится в этой комнате',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'все игроки должны издавать как можно больше звуков своим ртом, каждый раз, когда пьют',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты должен/должна причмокивать каждый раз, когда кто-нибудь из игроков пьет',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты не можешь дотрагиваться ногами до пола! Если твои ноги коснулись пола, делай <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты химик! Химичь над напитками игроков, когда захочешь',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди числа от 1 до 100, которые делятся на 7. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди названия порно сайтов. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Назовите предмет, который можно использовать во время секса, который начинается с буквы, с которой начинается имя игрока <N>. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Назовите цвета радуги. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди порно актрис. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди то, что продается в аптеке. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Какие буквы составляют слово "великовозрастный". Тот, кто не сможет дать ответ или ошибется, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди место, где нельзя снять проститутку. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди фрукты, которые поместятся в вагину стандартного размера. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди маленьких животных, которые могут поместиться в анусе стандартного размера. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Назовите по очереди места, где можно заниматься сексом. Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! "Овощи, которые поместятся в вагину порно звезды". Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! "Преимущества 13-и метровых рук". Тот, кто не сможет дать ответ или повторится, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Каждый по очереди должен назвать предмет, который может поместиться в анусе. Слово должно начинаться на первую букву имени игрока <N>. Тот, кто не сможет ответить или повторится, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Кого из общих знакомых вы считаете глупее игрока <N>? Все игроки отвечают по очереди. Тот, кто не сможет ответить или повторится, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Каждый игрок по очереди должен назвать ругательства, в которых присутствует слово член. Тот, кто не сможет ответить или повторится, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Каждый игрок по очереди должен назвать ругательства, в которых присутствует слово пи*да. Тот, кто не сможет ответить или повторится, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Каждый игрок по очереди должен сказать шутку, которая начинается со слов: твоя мама... Тот, кто не сможет ответить или повторится, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Каждый игрок по очереди должен сказать ругательство, которое можно применить только к девушке. Тот, кто не сможет ответить или повторится, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'допивай свой бокал под всеобщие оскорбления!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты должен допить свой бокал, в то время как игрок <N> тебя щиплет за нос и игрок <D> шлепает тебя по попе',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'встаньте на четвереньки c игроком <D>, выгните спину и в такой позе допейте свой бокал',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'допей свой бокал и рыгни на всю комнату',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'вылей свой бокал себе на штаны или допивай до дна',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'все игроки дают тебе щелбан и ты допиваешь свой бокал',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты делаешь 1 глоток, игрок справа от тебя делает 2 глотка, следующий игрок справа делает 3 глотка и т.д.',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты начинаешь! Каждый делает столько глотков, сколько раз он писал сегодня',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты начинаешь! Каждый игрок по очереди должен назвать количество гласных букв в своем имени. Тот, кто не сможет ответить, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Трое самых трезвых игроков делают по <A> глотка(ов) из твоего бокала',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто сегодня не принимал душ, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто занимается двумя видами спорта и более, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Хозяин(хозяйка) квартиры решает, кому делать <A> глотка(ов). Если таких нет, решаешь ты',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо появлялся на ТВ, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-либо в тайне читал сообщения своего парня/девушки, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо списывал на экзаменах, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто добавлял что-либо в социальную сеть, будучи абсолютно пьяным, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто никогда не танцевал стриптиз, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-либо использовал презервативы со вкусом, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто никогда не был пьяным в "зю-зю" три вечеринки подряд, решают, кому делать <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-либо начинал пить до 10 часов утра, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-нибудь не менял нижнее белье три дня подряд, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'те игроки, у кого нет ни бороды, ни усов, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Атеисты делают по <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто верят в высшую силу, делают по <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто были пьяными вчера, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кому было очень плохо на последней тусовке, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто работают или учатся в сфере торговли, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто работают или учатся в инженерной сфере, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто работают или учатся в сфере маркетинга, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто работают или учатся в медицинской сфере, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто работают или учатся в социальной сфере, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто работают или учатся в сфере экологии, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто говорят "звОнит", вместо "звонИт", делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто заходил сегодня на свою страничку Вконтакте или Facebook, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо красил волосы, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, у кого есть домашние животные, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, у кого накрашены ногти, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто одет в наряд, специально выбранный для этого вечера, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо фотошопил свои фотографии, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Тот, кто последним пришел на вечеринку, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Тот, кто когда-либо взламывал страничку в социальной сети, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Тот, чью страничку в социальной сети когда-либо взламывали, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо общался на сайте знакомств (badoo, tinder и др), делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто танцевал когда-либо под Тимати, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Правши делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто в данный момент болеют, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто танцевал медленный танец и потом не склеил партнера, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто начал встречаться со своей парой еще в школе, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто отбил девушку/парня у своего друга/подруги, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-либо какал в напольный унитаз (туалет-дырка), делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто сегодня танцевал/танцует, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Последний игрок, взявший свой телефон в руку, должен напоить тебя алкоголем',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто в данный момент курят, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто играет в эту игру не первый раз, решают, кому делать <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо участвовал в единоборствах, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'сделай 6 приседаний и 6 глотков одновременно!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто учился дольше тебя, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто не могут скрестить руки за спиной, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Тот, кто находится справа и слева от тебя, делают по <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Каждый делает столько глотков, сколько лет он проучился в институте!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те игроки, в чьем имени присутствует буква И, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те игроки, в чьем имени присутствует буква Р, делают <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те игроки, в чьем имени присутствует буква Л, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те игроки, в чьем имени присутствует буква М, делают <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто учатся или работают в творческой сфере, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, у кого самые тоненькие ручки, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Бородачи, вы делаете по <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-либо какал в океан/море, делают <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо какал на улице, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если тебе четное количество лет, ты делаешь <A> глотка(ов), если нечетное - отжимаешься <A> раз',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Девушки делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Парни делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто читал "50 оттенков серого", делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кому довелось жить в трех разных городах, делает <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто когда-либо бил во сне кого-либо, делает <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто когда-либо разговаривал во сне, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто выше тебя, делают столько глотков, на сколько сантиметров они выше',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Кому нравится гладить кошечек? Вы делаете <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Тот, кто только что нажал на экран, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто родился за 100 км от этого места, делает <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто родился в радиусе 50 км отсюда, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто хоть раз говорил фразу "нам лучше остаться друзьями", делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто не голосовал на последних выборах, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Если когда-нибудь ты судорожно искал(а) что-либо, а это находилось в твоей руке, делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Если ты когда-нибудь писал(а) четырехцветной ручкой и использовал(а) все 4 цвета сразу, сделай <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Игроки, которые встречались с толстушкой/толстяком, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'ты делаешь столько глотков, каков размер твоей груди',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'сделай столько глотков, сколько любовников(ниц) у тебя было',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто хоть раз срывал уроки/пары, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Акулы финансов, работающие или учащиеся в банковской и биржевой сферах, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Задроты и очкарики, работающие или учащиеся в информационно-технической сфере, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'если на твоих ботинках есть шнурки - пей',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кто крал деньги у членов своей семьи, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Футболисты делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Хоккеисты делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Баскетболисты делают <A> глотка(ов)!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сноубордисты делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто садился за руль в пьяном состоянии, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Сделай <A> глотка(ов), если ты кошатник(ца)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кому меньше 21 года, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, кому больше 25 лет, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто играют на гитаре, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Люди, занимающиеся благотворительностью, делают <A> глотка(ов)!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, кто выступают "за" смертную казнь, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Мускулистые качки делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Сделай <A> глотка(ов), если ты когда-нибудь писал(а) без помощи рук',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Первый игрок, который найдет в комнате треугольный предмет и назовет вслух, решает, кому делать <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, у кого арахнофобия (боязнь пауков), делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, на кого когда-нибудь нападало животное, делает <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Если ты фанат Мстителей, делай <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Пианисты, которые умеют играть, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'похлопай в ладоши, если ты сейчас пьешь алкоголь, который купил сам(а)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Те, у кого накрашены губы, делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Каждый делает столько глотков, сколько игроков он (она) считает сексуально привлекательным',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Любители вина делают <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Сделай <A> глотка(ов), если ты смотришь Дом 2',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Если в твоем бокале виски, делай <A> глотка(ов)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Те, у кого когда-нибудь была бородка, делают <A> глотка(ов)',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Игрок <N> пишет тебе на лбу: “Псина агрессивная”, если ты становишься агрессивным, когда напиваешься',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Делай <A> глотка(ов), если ты смотрел(а) более трех сезонов реалити-шоу Холостяк',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'выбери слово, которое игрок <N> должен будет говорить каждый раз, когда кто-либо будет пить',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты не можешь пить из своего бокала. Каждый раз, когда надо будет пить, ты будешь брать бокал других игроков',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'каждый раз, когда ты будешь хлопать в ладоши, все будут пить (даже ты)',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'и игрок <N> обмениваются бокалами',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Девушки наполняют бокалы парням, если те их попросят',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'ты и два игрока, чьи бокалы почти пусты, допивайте!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Лысые и рыжие пьют до дна!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Тот, кто весит больше 80 кг, пьют до дна!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'пей до дна!',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'и игрок <N>, пейте до дна!',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Первый, кто сейчас быстро допьет свой напиток, целует любого игрока на свой выбор',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'найди закуски для всех игроков',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'решай, кто купит всем выпивку',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'купи всем выпивку',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
    {
      'text': 'Каждый игрок по очереди должен сказать то, чего он никогда не делал в своей жизни. Те, кто это делали, пьют',
      'pack_id': 8,
      'pack_name': 'dares_alcohol1',
    },
    {
      'text': 'Каждый игрок по очереди должен рассказать необычный поступок, который он сделал в жизни. Тот, кто этого не делал, пьет',
      'pack_id': 9,
      'pack_name': 'dares_alcohol2',
    },
  ],
  'dares_erotic': [
    {
      'text': 'Позвоните по случайно подобранному номеру телефона и проведите короткий сеанс «Секса по телефону», заранее предупредив абонента, что в эту ночь эта услуга для него абсолютно бесплатна',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'взять в руки чайник и в роли рекламного агента попытаться его разрекламировать, как предмет для сексуальных игр.Убедите игрока <N> купить чайник',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Сними 1 вещь, если ты мастурбировал на рабочем месте',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуйте игрока с самыми красивыми губами',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'изобрази оргазм противоположного пола',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>возьми два кусочка льда и засунь их в лифчик у всех на глазах. Не вынимай лед в течение 30 секунд.',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'иди на балкон и танцуй там стриптиз для игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'нарисуй портрет игрока <N> в обнаженном виде',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'прими эротическую позу и простой так в течение пяти минут',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'каждая девушка должна взять в рот дольки лимона или другую еду. Ты должен с завязанными глазами, без помощи рук, найти и съесть все.',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'исполни танец своими ягодицами для игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>пусть каждый игрок пощупает твою грудь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F>эротично съешь банан/огурец',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'изобрази девушку легкого поведения. Предлагай себя всем присутствующим',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M> вступить в группу для геев в соцсети, сообщить об этом на своей стене',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F> вступить в группу для лесбиянок Вконтакте, сообщить об этом на своей стене',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'научи игрока <N> правильно надевать презерватив',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'станцуй стриптиз, используя игрока <N> в качестве шеста',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'на тебе раскладываются фрукты/конфеты. <N> ищет их с завязанными глазами и руками',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ты должен встать на табурет и зажать между колен, допустим, яблоко. <N> без рук берет это яблоко и дает откусить тебе',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Двое мужчин проводят ликбез по анатомии женского тела. <M> рассказывает, а <M> показывает на игроке <F>. Все остальные задают уточняющие или наводящие вопросы',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>тебе завязывают глаза. <F>, <F>, <F> садятся вперемешку, ты берешь в свои руки руки девушек. Затем должен на ощупь угадать хотя бы двух. Если это сделал - они целуют в щеку',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<F>держит за руку <M> и, глядя на него, в течении минуты произносит слова и фразы, которые произносила бы во время бурного секса (с необходимой интонацией)',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'делай массаж игроку <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'с игроком <N> берете печеньку и, держа ее губами, съедаете без помощи рук',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сиди на коленках у игрока <N> в течении 3 конов',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Все по очереди рассказывают анекдоты на сексуальную тему. На раздумья дается 10 секунд. Тот, кто не придумает/вспомнит за это время анекдот, должен громко и с выражением сказать "Я очень люблю секс!"',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M> <M> по очереди называют синонимы женской груди, не повторяясь. Задумавшийся надолго игрок проигрывает, а выигравший получает право поцеловать любую из присутствующих девушек',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M> <M> по очереди называют синонимы влагалища, не повторяясь. Задумавшийся надолго игрок проигрывает, а выигравший получает право поцеловать любую из присутствующих девушек',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>ты и игрок <F> по очереди называют синонимы пениса, не повторяясь. Задумавшийся надолго игрок проигрывает, а выигравший получает право поцеловать любого парня из присутствующих',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'при помощи <M>, <N> и <F> изобрази статую любви. Необходимо изобразить всю страсть!',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'танцуйте эротический танец для <N> вместе с игроком <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поменяйся элементами одежды с игроком <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'шепчи на ухо игроку <D> то, что бы ты сделал(а) с ним. Если игрок соглашается - целует его(ее) в щеку',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'целуй в щеку игрока <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'целуй в губы игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'на 2 кона ты раб игрока <N>. Выполняй все его поручения!',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'кусай за ухо игрока <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'кусай коленку игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'целуй живот игрока <N> ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'нежно целуй и кусай шею игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'игрок <D> должен(а) снять футболку и лечь на живот. теперь ты массажист(ка)! Сделай так, чтобы игроку понравилось. Массаж должен длиться 3 минуты.',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сделайте горячий поцелуй с игроком <N> и разместите фото у себя в социальной сети',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сделай депиляцию любым способом на одной ноге. В процессе депиляции могут участвовать все!',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'зайди в любую социальную сеть и напиши пошлое предложение любому человеку противоположного пола. Составить предложение должны другие игроки.',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'измени статус в социальной сети на "Уже не могу, мне нужен грязный секс!"',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'любишь когда тебя раздевают? Выбери любого игрока и пусть он стянет с тебя футболку.',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуйте игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуйте игрока <D>, одновременно снимая с него 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Станцуйте стриптиз для игрока <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Станцуйте стриптиз для всех',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Снимите любую 1 вещь с себя ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Снимите любую 1 вещь с игрока <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Снимите любую 1 вещь с игрока по вашему желанию ',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Сделайте массаж самому на ваш взгляд красивому человеку среди игроков ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Эротично посчитать удары сердца у игрока <N>, приложив руку к сердцу',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ущипнуть за попу ближайшего соседа противоположного пола',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Изобрази суслика в оргазме',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Обменяться тремя предметами одежды с игроком <N> и тремя – с игроком <N>. Сидите так полчаса',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуй игрока <N> в коленку ',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Стать моделью для непристойной фотосессии с мягкой игрушкой ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Снять с себя 1 вещь, одновременно целуя игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сделать самому высокому игроку расслабляющий массаж ',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Сделать самому низкому игроку расслабляющий массаж ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сделать самому дальнему игроку расслабляющий массаж ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Объяснить гостям, почему игрок <N> намеренно забыл надеть нижнее белье сегодня. Правило: надо быть убедительным.',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Танцуй стриптиз со снятием 3-х вещей',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Написать на груди игрока <N> сердечко помадой',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сделать фото в эротической позе',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Сделайте комплимент любой части тела каждого игрока и поцелуйте его в это место. Части тела не должны повторяться!',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'вы - сутенер, разрекламируйте игрока <N> для клиента (игрок <N>)',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Станцуйте эротический танец в паре с игроком <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Позвонить по любому номеру телефона и предложить секс-услуги Деда Мороза за тарелку оливье',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Изобразить самую сложную для себя позу из камасутры в одиночку',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Снять с себя две вещи и одну - с игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Станцевать стриптиз с каким-то предметом (швабра, банан, дверь, ботинок)',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Засунуть женский тампон себе в ноздрю',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сексуально снимать носок с игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'В течение 3-5 минут на каком-нибудь возвышении толкать речь о необходимости повышения рождаемости в стране. Настойчиво призывать всех присутствующих к непосредственному размножению',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'В течение 3-5 минут на каком-нибудь возвышении толкать речь о пользе мастурбации',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'В течение 3-5 минут на каком-нибудь возвышении толкать речь о пользе занятий сексом',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'В течение 3-5 минут на каком-нибудь возвышении толкать речь в защиту сексуальных меньшинств',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'расстегни ширинку и оставь так до конца игры!',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'оближи свои пальчики у всех на глазах',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'помассируй свою грудь в течение 20 секунд, не снимая верхней одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'пусть каждый игрок пощупает твою грудь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'С помощью бутылки на игроке <M> изобразить минет. Свинтить крышку без помощи рук',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'отшлепай игрока <N> по попке',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'зубами сними с себя предмет одежды',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'без помощи рук сними с игрока <N> 2 предмета одежды',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'станцуй танец живота для игрока <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'с игроком <N> изобразите позу 69',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'покажи свою точку G',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'как можно более сексуально обними игрока <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'оближи шею игрока <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'оближи мочку уха игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'поцелуй мочку уха игрока <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'оближи нижнюю губу игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'прикоснись кончиком языка к губам игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'прикоснись губами к губам игрока <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'все игроки по очереди шлепают тебя по попе',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поиграй со своими сосками',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'эротично съешь то, что выберет игрок <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'соблазни игрока <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сними с игрока <N> предмет одежды при помощи ног',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'разыграй свой оргазм',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ты - порнозвезда. Изобрази 5 различных поз, а остальные должны тебя заснять',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'покажи свое нижнее белье',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'оближи вокруг пупка игрока <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Проложи дорожку из поцелуев от губ до пупка игроку <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'научи целоваться игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'поставь засос игроку <N>  ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'поставь засос игроку <N>  на шее',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поставь засос игроку <N> на груди',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Cделай комплименты ножкам игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'все игроки по очереди называют синонимы слова "секс" или "заниматься сексом". Проигравшим считается тот, кто раздумывал слишком долго. Он выбывает. Победитель получает право поцеловаться с тем, с кем захочет',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Одной рукой ублажай игрока <D>, другой - себя',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'разденься и облей себя шампанским. Игроки противоположного пола должны слизать его с тебя',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'лижи, посасывай и покусывай соски игрока <D>',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>уйди туда, где тебя никто не увидит. Сними лифчик и закрой грудь лишь взбитыми сливками, а затем возвращайся так к игре',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'оближи сосок игрока <D>',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'обмажь сосок игрока <D> каким-нибудь кремом (или соусом) и слижи его',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'помассируй попку игрока <D>',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'оближи палец игрока <D>',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'засунь руку в штаны и поласкай себя',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'засунь руку в штаны игрока <D> и поласкай его',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>ты должна с помощью бутылки или любого предмета (банан, огурец), показать как делаешь минет',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'покажи на игроке <D>, как ты занимаешься оральным сексом',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>раздевайся до бюстгальтера. Пусть <M> определит на глаз размер твоей груди. Если он угадает - целуй его. Иначе отшлепай по попе',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M>тебе повезло! пусть <F> и <F> в течении 2 минут дразнят и ласкают тебя при помощи только своей груди',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'разденься до нижнего белья',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M>накапай джем на ноги игрока <F>, теперь слизывай',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'пусть игрок <D> заглянет тебе в трусики',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'вместе с игроком <D> раздевайся до нижнего белья, затем тритесь попами друг с другом',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>проведи небольшой предмет (например, теннисный шарик, крышка от бутылки и др) через брюки игрока <M>. Причем запускается шарик в одну штанину, а выпущен должен быть из другой',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>Усядься к игроку <M> в позе наездницы и попрыгай',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'сделай так, чтобы игроку <D> стало стыдно',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'сделай так, чтобы тебе стало приятно, а игроку <D> стало стыдно',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'сделай так, чтобы тебе стало стыдно, а игроку <D> стало приятно',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'продемонстрируй на игроке <D>, как тебе хочется заняться сексом с ним',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Уложите игрока <D> в вашу любимую позу в сексе',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'сними свое нижнее белье (предварительно уединившись), затем надень остальное и возвращайся',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'поласкай свою грудь',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'танцуй стриптиз, пусть остальные засовывают тебе деньги в трусики',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Пусть <N> напишет у тебя на груди что-нибудь взбитыми сливками или джемом, затем игрок <D> слижет все это',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'возьми один кубик льда и засунь его в трусы у всех на глазах. Нельзя вынимать в течение 20 секунд.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'используя гуашь или акварель, нарисуй портрет любого игрока, используя только свою грудь',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'станцуй танец живота нагишом. Используй восточную музыку',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'пришло время танго. Станцуй его с игроком <D>. Ты танцуешь голышом, а твой партнер одетым',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'станцуй танец маленьких лебедей голышом',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'найди собеседника/цу в чате или социальной сети и добейся того, чтобы он(а) запросил(а) твою фотку. Спроси, как сфотографироваться и после этого сделай фотографию в полной обнаженке (так как попросил(а) собеседник(ца)) и отправь ему(ей)',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M>изобрази девушку, будучи голым. Твоего хозяйства не должно быть видно',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Оближи пупок игрока <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'натри шею игрока <N> каким-нибудь гелем или кремом',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'покрути бутылочку (или что-нибудь крутящееся) и поцелуй того, на кого она показала',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'расстегни ширинку на 10 минут',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'вместе с игроком <N> разыграйте сценку "секс по телефону". Ты - оператор',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты спас игрока <D> от утопления! сделай ему искусственное дыхание!',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'пощупай попу всех игроков в том числе и свою, скажи, какая на ощупь приятнее',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'поцелуй игрока <D> тремя разными способами',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'подбрось монетку. Орел - сними с себя элемент одежды. Решка - игрок <N> снимает с себя что-то',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'вы пришли в публичный дом. Игрок <N> - главный в этом заведении. Расскажи о своих предпочтениях',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'почувствуй грудь игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'укуси самого волосатого игрока за ухо',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'поцелуй игрока с самыми темными глазами',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'при помощи языка и губ изобрази заигрывание с игроком <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>изобрази кормление грудью вместе с игроком <M>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'поцелуй игрока, на котором есть красная одежда',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'поиграй с соском игрока <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'покажи игроку <D> свое нижнее белье',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F> ты - стриптизерша на мальчишнике! Танцуй для игроков <M>, <M> и <M>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'накрась губы игроку <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поцелуй первого, кто войдет в дверь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'скажи игроку  <N>, что бы ты с ним делал(а), если бы вы остались в застрявшем лифте одни на 5 часов',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'вы рекламируете службу секса по телефону. В течение 5 минут рассказывайте об этом',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выйдите с игроком <D> из помещения и в течение 5 минут изображайте страстный секс',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сними с игрока <N> элемент одежды, используя только одну руку',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'изобрази ситуацию, когда тебя ловят за просмотром порно',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'изобрази ситуацию, когда тебя ловят за занятием мастурбацией',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'позвоните по 10му телефону в вашем телефонном справочнике и спросите, какие презервативы лучше всего подходят для анального секса',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'позвони другу и скажи, что проводишь небольшое статистическое исследование, затем спроси размер его члена',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'попробуй расстегнуть бюстгальтер игрока <F>, не снимая никакой одежды',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'расскажи о приготовлении яичницы в эротической форме',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'поцелуй попу игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'изобрази громкие звуки поцелуя',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери игрока и запрись с ним в ванной на 5 минут',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'предложи игроку <D> заняться с ним оральным сексом',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сделай 10 отжиманий, находясь над игроком <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'целуй и аккуратно покусывай губы игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'изобрази любовь с мебелью',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поцелуй кого-нибудь. Группа решает, кого именно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'придумай эротическую историю про себя, игрока <M> и игрока <F>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ты соревнуешься с игроком <N>! Кто из вас быстрее разденется до нижнего белья, получает право поцеловать того, кого захочет',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'посмотрите порнофильм вместе с игроком <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F>ты - модель Playboy, а <M> - фотограф. Тебе нужно эротично позировать для фото',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'обучи окружающих трем позам. Используй для этого игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты пришел в секс-шоп за покупками! игрок <N> - продавец. Узнай у него обо всем интересующем',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>в течение 5 минут смотри только на грудь игрока <F>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'разденься полностью (можешь выйти), затем возвращайся только в халате',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'придумай новую позу для секса. Назови ее и расскажи всем о ней',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'назови свои лобковые волосы одним словом',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними с себя всю одежду, за исключением черной',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'игрок <N> рисует тебе на лице член',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>игрок <N> рисует тебе на груди маркером сиськи',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>надень бюстгальтер, наполни его чем-нибудь для похожести и сиди так в течение часа',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'возбуди игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ртом расстегни ширинку игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'назови все сексуальные позы, которые ты знаешь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'слижи крем, джем или мед с пальцев игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'оближи щеку игрока <D> ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'попытайся раздеть игрока <N> за 20 секунд!',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'засунь руку под рубашку игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Возьми бутылку и зажми ее между ног. Теперь затыкай ей игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Отшлепай игроков <D> и <D> ремнем по попке!',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Пробегись, размахивая над головой элементом твоей одежды - футболкой, рубашкой и проч.',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Изобразите дикий эротичный танец с игроком <D>!',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Позвонить любому номеру, который наберешь, и сказать, что это секс по телефону ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>оголи ножки игроку <F>, а игрок <M> должен гладить и ласкать их',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M>ты - покорный раб, а <F> - твоя госпожа. Она оголяет игроку <F> ножки и усаживает ее в кресло. Потом ты привстаешь на колени и, согласно требованиям «госпожи», три раза целуешь ножки второй девушки. Если первой девушке понравилось, как ты выполнял ее указания, она разрешает тебе поцеловать подругу в губы. Если не очень - безжалостно шлепает по попе.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты начинаешь! Все соревнуется в том, кто сможет предложить больше синонимов слову «секс». На раздумья дается десять секунд, повторяться запрещено. Задумавшийся сверх поставленного времени игрок выбывает. Последний оставшийся объявляется победителем и получает право поцеловать любого в компании',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F><F>, <M>, <M>. Первый парень раздевает выше пояса первую девушку, оставляя ее в одном бюстгальтере. Если на ней нет бюстгальтера, то в итоге оказывается по пояс голой. Затем второй на глаз определяет размер ее груди. Если он угадал - девушка целует его, если нет - шлепает по попе и снимает с него одну деталь одежды, а свою надевает. После этого второй мужчина так же раздевает вторую девушку, а первый на тех же условиях выступает в качестве «эксперта»',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'начинаешь ты! Все встают в круг. Включается песня, игроки передают друг другу по порядку пустую емкость (поднос, тазик). Тот, у кого емкость окажется в руках в момент припева, снимает с себя одну деталь одежды и кладет ее туда. И так - три песни подряд. Тот, кто раздевался в самом конце, решает, надевать снятую одежду или так и играть дальше',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'игроки <D> и <D> раздевают тебя по пояс и усаживают в кресло. Первый игрок намазывает капельку меда (шоколада, джема) на какую-нибудь твою часть тела, а второй слизывает ее. Потом они меняются ролями. Они делают это трижды. Поцелуй игрока, язычок которого тебе понравился больше',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<P> девушки садятся на колени к мужчинам, и каждый из них, обняв партнершу за талию, шепчет ей на ушко комплимент. Если комплимент понравился, она разрешает партнеру поцеловать себя, если нет - шлепает его по попе',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты моешь руки и садишься в кресло. Игрок <D> завязывает тебе глаза и намазывает на средние пальцы рук мед (джем, шоколад). Затем игроки <D> и <D>, стоя рядом, одновременно облизывают и обсасывают твои пальцы',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты и игроки <D>, <D>, <S>. Игрокам следует изобразить статую любви (а точнее статую групповых утех), скульптором-постановщиком при этом выступаешь ты',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Удалившись в безлюдное место, ты снимаешь свои трусики. Одевшись, возвращайся и отдай их игроку <D> на сохранение. Дальше так и играй без них',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Оголи попку игрока <D> и отшлепай его. Затем игрок <F> делает то же самое с игроком <M>',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M><F>, <F>, <F>. Мужчина садится на стул. Ему завязывают глаза. Девушки дразнят его, касаясь только грудью. При этом они трутся об него и прижимаются так, будто стараются совратить. Им разрешается подходить со всех сторон, садиться на колени, но запрещается трогать руками. Девушки делают это по очереди, имея по три минуты. Та, что сделает это наиболее сексуально, получает право поцеловать понравившегося человека. Победительницу выбирают игроки-парни',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M>игрок <F> обнажает игроку <F> ступни и усаживает в кресло. Ты и игрок <M> пять минут делают ей массаж ступней ног. Тот из парней, у которого это получится лучше, целует игрока на свой выбор, а второй после окончания вечеринки моет грязную посуду',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ты поворачиваешься к игрокам задом и показываешь всем свои трусики. Ты должен продемонстрировать их, эротично покачивая попкой. Любые комплименты в твой адрес приветствуются, а автора лучшего из них ты благодаришь поцелуем',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<P> каждый мужчина прижимает девушку к себе и страстно целует',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M> игрок <F> оголяет игроку <F> ножки и усаживает ее в кресло, а затем наносит ей на коленки по капельке меда (джема, шоколада). Ты и <M> встаете рядом на колени и одновременно слизываете сладкое с коленок. Тот, кто сделает это наиболее артистично, получает право поцеловать любого игрока, а второй покупает джем на следующую игру',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F><F>, <M>, <M>. Первая девушка тщательно моет подруге руки и наносит ей на тыльную сторону обеих ладоней по капельке меда (джема, шоколада). Когда все приготовления закончатся, мужчины одновременно слизывают сладкое с ладоней девушки, стараясь делать это максимально чувственно и эротично. Тот из них, у которого, по мнению первой девушки, это получится более искренне, получит право поцеловать любого игрока',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F> ты намазываешь на губы игрока <F> мед, джем или шоколад. Затем ты завязываешь ей глаза. Игроки <M> и <M> по очереди слизывают с губ девушки сладость, после чего она говорит, какой ей понравился больше: первый или второй. Победитель целует любого игрока',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'поцелуй игрока <D> туда, куда укажет игрок <D>. Перед этим сними со всех по 1 вещи. В процессе поцелуя ласкай руками тело игрока',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<P> Пары должны угостить вином друг друга, после чего закусить клубникой. Девушки поят изо рта в рот своих партнеров вином, держа их за руки. Затем парни угощают девушек клубникой, передавая ее из губ в губы. Тот, кому не досталась пара, выпивает с горя целый бокал вина в одиночку',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты снимаешь с себя один элемент одежды, затем все игроки противоположного пола по очереди целуют тебя в обнаженные части тела. Каждый следующий поцелуй должен быть в новую часть тела, а на раздумья дается три секунды. Задумавшийся сверх установленного времени выбывает. Игрок, оставшийся последним, объявляется победителем и награждается твоим поцелуем',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M>игрок <M> завязывает тебе глаза, а затем оголяет грудь игрокам <F>, <F> и <F>. Затем он усаживает их рядом и подводит тебя к ним. Ты стараешься на ощупь угадать девушек по груди. Угадал - девушки целуют тебя, нет - целуют второго мужчину, а тебя отшлепывают по попе. Кроме этого они снимают с тебя одну часть одежды, выкидывая ее в окно',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'оголи грудь игроку <F> и усади ее в кресло. Все мужчины по очереди сравнивают ее соски с чем-то  вкусным. Повторяться нельзя, а на раздумья дается пять секунд. Выбери игрока, который нежно лизнет соски девушки',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'игрок <S> завязывает тебе глаза. Затем он оголяет попки игроков <D>, <D> и <D>, а ты должен на ощупь угадать, кто есть кто. Угадал - поцелуй любого игрока на свой выбор',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M><M>, <F>, <F>. Девушки - покорные рабыни, а мужчины - их хозяева. Следуя указаниям своего «господина», первая девушка снимает со второго парня один элемент одежды и нежно целует его в указанное ей место. После выполнения данного задания второй мужчина повелевает своей «рабыней». Он говорит, куда ей нужно сунуть руку под одежду первого мужчины и где погладить у него там, делая все очень нежно и без спешки. Снятая с мужчины одежда больше не надевается.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>ты эротично танцуешь стриптиз вокруг шеста под музыку, красиво раздеваясь до трусиков. В качестве живого шеста выступает игрок <M>, который подыгрывает тебе, поддерживая и помогая. Во время действа ты можешь раздевать и его. Закончив танец, поцелуйтесь в губы',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M><F>, <F>. Первая девушка завязывает парню глаза и усаживает его на кресло. Она раздевает вторую девушку до нижнего белья. Затем она подводит ее к нему и дает полизать три разные части тела подруги. Мужчина пытается угадать, что он лизнул. Если хотя бы два раза были верными, то он снимает один элемент одежды с первой девушки. Если нет - девушки снимают с него одну часть одежды, а одну надевают на раздетую девушку',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>игроки <M> и <M> раздевают тебя по пояс. Затем игрок <F> смазывает твои соски медом, шоколадом или джемом. Ты садишься в кресло, и мужчины одновременно вылизывают по одному соску. Тот, кто по твоему мнению сделал это более чувственно, получает право поцеловать любого игрока на свой выбор, а второй сжигает тысячерублевую банкноту',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>обнажи свою грудь и продемонстрирует ее всем. Тот, кто захочет потрогать ее, должен заслужить это комплиментом. Дай потрогать свою грудь игроку, который тебе больше всего понравился. Поцелуй его',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F> <M> раздевает тебя до нижнего белья и приспускает трусики так, чтобы обнажить попку. Затем игрок <F> рисует шоколадом или джемом сердечко на ее ягодице, а игрок <M> слизывает его. Если тебе было приятно, поцелуй его, если не очень - вы с подругой раздеваете его до трусов',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>твой раб - игрок <M>, а игрок <M> - раб игрока <F>. Ты снимаешь с игроков по одной вещи и указываешь своему «рабу», куда тот должен поцеловать вторую девушку. Затем она снимает с парней по одной вещи и приказывает своему рабу, где тот должен нежно потрогать и погладить тебя',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты и игроки <S>, <D>, <D>. Первая девушка выступает в качестве холста. Первый парень усаживает ее в кресло и оголяет ей грудь, а вторая девушка рисует на ней что-либо медом, жидким шоколадом или джемом. Затем второй мужчина эротично слизывает этот рисунок',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'вместе с игроком <D> раздень игроков <F> и <M> до трусов. При этом мужчина раздевает девушку, а девушка - мужчину. Раздетая пара поворачивается спиной друг к другу, и, наклонившись, минуту трется попками друг о друга',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты встаешь к компании спиной. Игрок <D> снимает с тебя верхнюю одежду и приспускает трусики, обнажая попку. Покачивай ею, демонстрируя свои ягодицы всем остальным. В конце игрок целует тебя в ягодицу',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты раздеваешься до трусов, ложишься на живот с завязанными глазами, а игрок <D> начинает делать тебе эротический массаж. После этого, незаметно для тебя, к этим ласкам подключаются другие игроки. Ты должен не глядя определить, сколько рук в данный момент массируют тебя. Если угадаешь - второй игрок целует первого в указанное тем место, если нет, то сильно шлепает его по попе. Это повторяется три раза',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'выбери понравившееся тебе эротическое нижнее белье. Игрок <F> поворачивается ко всей компании попой, а игрок <F> переодевает ее в это белье',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M><F>, <F>, <F>. Девушки ртом надевают презервативы на банан. По твоей команде они берут в рот презервативы и начинают надевать их на бананы, которые держат в руках. Та из них, которая сделает это быстрее всех и правильно, награждается правом поцеловать любого мужчину',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'нагло загляни в трусы игроку <D>. Затем он делает то же самое. Страстно поцелуйтесь',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M> вместе с игроком <M> разденьте игрока <F>. После этого игрок <F> приспускает ей трусики, чтобы обнажить ягодицы и нанести на них по капельке меда, шоколада или джема. Затем мужчины вдвоем слизывают сладкое. Тот, кто на взгляд первой девушки сделает это наиболее нежно, может поцеловать ее',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'выбери любое сексуальное белье для игрока <D>, а он выберет для тебя. Игроки <F> и <M> делают то же самое. После переодевания вместе станцуйте эротический танец',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<M>садись на кровать. Игрок <F> ложится на спину головой к тебе. Она закрывает глаза. Нежно и не спеша (предварительно смазав руки аромамаслом) массируй девушке грудь. Поиграй с сосочками, возбуждая и дразня их',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'и игрок <D>. Парень садится в кресле с завязанными глазами, положив руки за голову и слегка раздвинув ноги. Девушка нежно целует парня в губы. Используя масло, она пять минут неторопливо ласкает руками его член и мошонку. В конце она нежно целует его',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>сядь в кресло, раздвинув ножки. Игрок <M> встает на колени у тебя между ног. Для начала разогрев языком вход во влагалище, он нежно вводит туда свой палец, смазанный маслом, начиная искать точку «G». Ты руководишь процессом, подсказывая парню направление движения, силу нажатия и частоту вибраций пальца',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>встань в проеме двери, придерживаясь за косяк и слегка расставив ноги. Игрок <M> проводит вибратором вдоль живота, спины, бедер, промежности, между ног, вокруг грудей, ягодиц, чуть касаясь сосков, клитора',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты должен(а) научить игрока <D> чему-то новому для него в сексе. Не обязательно это должны быть позы. Можно найти или придумать что-то сложнее и тоньше. Это может быть новый вид ласки, необычный поцелуй, особое напряжение каких-то мышц, специфическое движение во время секса - что угодно, но обязательно новое, приятное и интересное.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Лежа в положении «69 на боку», ты и <D> нежно и чувственно ласкаете руками друг друга. Каждый приподнимает согнутую в колене ногу. Одна рука опирается на локоть, вторая гладит и ласкает бедра и промежность. Ладони должны быть очень хорошо смазанными и теплыми. Через пять минут вы целуете друг друга между ног и в губы.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты и игрок <D>. Парень прижимается к спине девушки грудью и обхватывает спереди, ласкает двумя руками. Гладит, теребит сосочки. Поглаживает живот и бедра, массирует ладонями лобок. Проводит пальцами по паху и половым губкам. Затем добирается до клитора, теребя и лаская его. Раздвинув набухшие губки, ныряет одним пальцем, а вторым продолжает ласкать клитор. Нашептывает ласковые слова, целуя ее сзади в шею',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'расскажи игроку <D>, какие оральные ласки тебе нравятся. Затем откинься в кресле, а он встанет на колени и попытается довести тебя до состояния блаженства. Он действует язычком и губами, одновременно ласкает пальцами и нежно гладит тебе промежность',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'и игрок <D>. Девушка расслабленно лежит на животе, раздвинув ноги. Парень ласкает языком ее тело. За ушком, вдоль спины, ласкает ягодицы, спускается ниже',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>игрок <M> раздевает тебя по пояс. Садись на кровать с завязанными глазами, а он, взяв кусочек льда, неспешно и чувственно водит им по твоему обнаженному телу. Начав с шеи и подбородка, медленно опускается вниз, проводит вокруг грудей, дразнит льдом соски. Чуть согрев их своими губами, он опять касается льдом',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'и игрок <D>. Оголив с помощью партнера грудь и глядя ему в глаза, девушка представляет себе эротические сцены для того, чтобы ее сосочки затвердели. Если это не выходит достаточно быстро, она помогает себе собственными ласками. Парень чувственно целует каждый ее сосочек.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Держи в руках ладонь игрока <D>, и глядя ему в глаза, говори страстно, как хочешь его. Если игроку понравились твои слова, он целует тебя в губы и снимает с тебя одну вещь',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>признайся, любишь ли ты глотать сперму своего партнера. Как поступаешь, если мужчина случайно кончает в ротик?',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'игрок <D> снимает с тебя одну часть одежды, затем выбирает, какую обнаженную часть тела он хочет поцеловать. Глядя тебе в глаза, он объясняет, почему именно это место ему хочется поцеловать, а затем наслаждается поцелуем',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Не спеша, эротично раздень до трусиков игрока, на котором в данный момент осталось наибольшее количество одежды. Затем, если этот человек противоположного пола, нежно поцелуй его, страстно обняв.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Танцуя медленный танец под музыку, вы с игроком <D> чувственно раздеваете друг друга. Сначала одну часть одежды с девушки снимает мужчина, а затем одну с мужчины — девушка, потом вы целуетесь, и так раз за разом, пока один из вас не окажется полностью обнаженным',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Сняв с игрока <D> любую одну часть одежды, делай ему трехминутный массаж ягодиц',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>Чуть раздвинув ножки, позволь игроку <M> сквозь трусики нежно погладить пальцем твою промежность',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'расскажи игроку <D> о том, как ты можешь достигнуть оргазма, не приступая непосредственно к сексу. Позволь ему сделать все, что может приблизить тебя к этому',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'тебе завязываются глаза и ты, расслабившись, ложишься на живот. Игрок <D> нежно и чувственно ласкает твое тело исключительно губами и языком в течение трех минут. Затем ты переворачиваешься, и действие повторяется вновь.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>Глядя тебе в глаза и держа ладонь, игрок <M> представляет и говорит, как бы он занялся с тобой сексом. Как только его член начнет подниматься, парень дает тебе возможность потрогать его сквозь одежду. После этого поцелуй его в губы и сними с него одну деталь одежды',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'вы с игроком <D> изучаете новые виды поцелуев. Пускай игроки <S> и <D> научат вас, показав на собственном примере особые техники поцелуев.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'пять минут ласкай руками игрока <D>. Гладя ему тело, можешь говорить приятные комплименты',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Поцеловать игрока <N> и укусить за ушко',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'возбуди любого игрока противоположного пола',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'исполни любое желание игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'покажи родинку, которая скрыта под одеждой',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сделай массаж пяточек самому красивому на твой взгляд игроку',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сделай то, что ты всегда хотел сделать',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'прогуляйся с игроком <D> до любого места, держась за руки',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'обними любого игрока',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'в течении 5 минут имитируй оргазм',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'надень презерватив на что-нибудь интересное',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'просиди 10 минут с рукой в штанах',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Ты фотограф эротического журнала, выбери любую девушку и сделай с ней 5 эротических снимков!',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'изобразить оргазм носорога',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'завести разговор о плохой рождаемости и в течении 2 минут призывать всех к размножению',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<F>зажмите карандаш (или что-то другое) грудью и попробуйте что-нибудь нарисовать',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сыграйте все вместе в карты на раздевание, проигравший раздевается до нижнего белья',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'без слов предложи любому игроку провести с ним ночь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'поговори со своим половым органом',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сделай засос каждому игроку, кроме лиц своего пола!',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Все, кроме тебя, снимают по одной вещи!',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>поцелуй любого парня, если твоя фамилия Калашников, если нет - любую девушку',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Изобрази с помощью пылесоса секс с роботом',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Каждый игрок показывает одну из секс-поз, ты решаешь, кто победил. Тот кто победил может загадать желание любому игроку',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>включите порно и смотрите полностью, игрок <D> сидит у вас на коленях',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'время романтики. выберите игрока противоположного пола, и оба станцуйте так, как будто готовы страстно накинуться друг на друга',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'вы и игрок <D> уходите в другую комнату на 5 минут. Сделайте что-нибудь неприличное',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'тебе зажимает соски прищепкой игрок <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ты должен протанцевать танец с <D>, зажав между вами и не роняя апельсин, яблоко или банан',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Признайся в любви игроку <D>. Теперь целуй',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M> ты должен на ощупь угадать размер груди игрока <F>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери любого игрока, который должен будет поцеловать игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M> отожмись столько раз, какой длины у тебя член в см',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>если день твоего рождения равен длине твоего члена в см, поцелуй любого человека. Если он против, предоставь ему доказательства',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'танцуй тверк',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'засунь руку игроку <D> в штаны. Он должен засунуть руку тебе',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ложись на диван. Остальные капают джем тебе на тело. Игроки <D>, <D> и <D> должны слизать',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сделайте так, чтобы у игрока <D> пошли мурашки по коже',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Найдите игрока с самым приятным запахом волос',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Обнимите за талию игрока <D> и сидите так 3-4 кона',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуйте игрока противоположного пола, который последним из присутствующих смотрел какой-нибудь фильм',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сделайте массаж игроку противоположного пола, который последним из присутствующих занимался сексом',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Укусите ушко игрока противоположного пола, который последним из присутствующих смотрел порно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Садитесь на коленки к игроку противоположного пола, который последним из присутствующих занимался онанизмом',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Танцуйте приватный танец игроку противоположного пола, который последним из присутствующих катался на машине',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Изобразите любую эротическую позу с игроком противоположного пола, который последним из присутствующих заглядывал в камасутру',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Все игроки рассказывают пошлые шутки. Кто рассказал самую смешную, имеет возможность уединиться с любым игроком на 5 минут',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуйте в щеку игрока противоположного пола, который последним из присутствующих катался на велосипеде',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ущипни за попу игрока противоположного пола, который последним из присутствующих пил алкоголь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поиграй с ладошкой игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'С тебя снимает одну вещь игрок противоположного пола, который последним из присутствующих играл в компьютерные игры',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Напиши имя игрока противоположного пола, который последним из присутствующих был в кинотеатре, языком на шее',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F>представь, что ты медсестра и ставишь укол игроку <M>. Изобрази это эротично',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Представьте, что игрок <D> - ваш сексуальный партнер. Разрекламируйте его всем присутствующим',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Представьте, что игрок <D> - ваш(а) избранник(ца), а <D> - любовник(ца). Изобразите сцену, в которой супруг(а) узнает о существовании любовника(цы)',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Напиши 10му человеку в соцсети \'Привет, я хочу тебя\'',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Напиши 5му человеку в соцсети \'Привет, хочешь поучаствовать в групповом сексе?\'',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Научите целоваться любого добровольца',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Придумай слоган секс-шопу \'проказница\'',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'каждый раунд вы должны снимать с себя одну деталь одежды. И так до тех пор, пока не окажетесь в одном нижнем белье',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Всякий раз, когда кто-то разговаривает по телефону, эротично стоните',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Отправьте кому-то из своих родителей сообщение со ссылкой на порносайт и напишите, что-то вроде "просто обожаю этот сайт, постоянно пользуюсь"',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Создайте в соцсети профиль своего пениса (для парня), или своей груди (для девушки)',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'До конца игры, всегда, когда кто-то выбирает действие, ты должен(на) снять одну деталь одежды. Можешь одеть одну деталь одежды, если кто-то выбрал правду',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'До конца игры, всегда, когда кто-то выбирает правду, ты должен(на) снять одну деталь одежды. Можешь одеть одну деталь одежды, если кто-то выбрал действие',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Скажите игроку <N>, что хотели бы видеть его голым',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Танцуй приватный танец для игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'поцелуй самого красивого на твой взгляд игрока (противоположного пола), но так, чтобы никто из присутствующих этого не видел!',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>Поцелуй девушек с именами Настя, Саша, Катя, Женя. Не целуй никого, если девушек с такими именами нет :(',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F> Поцелуй парней с именами Дмитрий, Саша, Артур, Никита. Не целуй никого, если парней с такими именами нет',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуй всех игроков, в имени которых есть буква А',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'с игроком <D> идите в ванную комнату, снимите друг с друга одежду и примите вместе душ. Вы должны намылить друг друга с ног до головы. Остальные игроки продолжают играть',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Поцелуй ... игрока <D>, укуси его за ..., пососи его ...  Сам(а) вставь пропущенные слова и выполни задание ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери любого игрока и уединись с ним в комнате, включи порно-ролик, сядьте напротив друг друга и займись с ним мастурбацией',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': '<F>устрой аукцион по продаже своего лифчика. Игрок, который заплатит за него больше всех, должен снять его с тебя у всех на глазах и забрать себе на память',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты должен с закрытыми глазами определить кто есть кто, трогая за попу игроков противоположного пола',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуй игроков, которые родились в тот же месяц, что и ты',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'у 13-го человека в твоём списке друзей спроси, где ближайший секс-шоп ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поиграй на попах как на барабанах игроков <D>, <D> и <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Уединитесь с игроком <D> на ... минут и займитесь ... Вставьте пропущенные слова и выполните задание',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'твоя правая рука будет мужчиной, левая рука - женщина. Тебе необходимо показать, как они занимаются любовью.',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Шлепай игрока  <F>, используя руку игрока  <M> до тех пор, пока девушка не начнет эротично стонать.',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F> позвони 10-му человеку из твоих контактов и спроси, как найти точку G',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'тебе связывают ноги,руки и заклеивают рот скотчем, завязывают глаза и  игрок <D> делает с тобой то, что пожелает',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'уединитесь с игроком  <D> в комнате на 2 минуты и целуйтесь. друзья скажут вам, когда зайти обратно',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'раздень игрока <D> до нижнего белья и положи на спину, в течение 5 минут лаской его тело губами и языком (не забудь приспустить трусики)',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'раздень игрока <D>  до трусов, а затем массируй его тело в течении 3 минут, а потом сними трусы и продолжай',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Поцелуй игрока противоположного пола, у которого скоро день рождения',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Позвони в сексшоп и скажи, что тебе нужен фаллоимитатор в форме саурона',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Ролевые игры с игроком <D>.  Проститутка и клиент',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>.  Тупой ученик и учитель.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>.  медсестра и пациент.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>.  Ученица и учитель.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>. Клиент и массажист.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>. Босс и сексуальная секретарша',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>.  Жертва и преступник-извращенец.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>. Преступница и полицейский.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ролевые игры с игроком <D>. Пленница и охраняющий пленницу.',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'закрыться с игроком <D> в каком-нибудь тесном помещении. В Шкафу, кладовке и т.п. Просидеть вы там должны 10 минут. Ах да, вы должны быть абсолютно голыми.',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M>любым способом докажи, что у тебя большой пенис',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Выбери игрока противоположного пола. Девушка раздевается перед парнем до нижнего белья, после чего она должна эротично снять с себя лифчик и трусики и указать, в какое место её поцеловать. Если девушке понравилось, то она может заняться с парнем сексом, если же нет - то она дает парню пощечину',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'вместе с игроком <D> изобрази поцелуй человека-паука и мэри джейн (ты должен находиться вниз головой)',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними с себя всю одежду, останься только в халате',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сделай массаж стоп игроку <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Сделай массаж рук игроку <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сексуально оближи свои губы',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери игрока и стань его рабом на 10 мин',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F>сними бюстгальтер, не вылезая из одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними бюстгальтер с ближайшей девушки',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Выбросить нижнее бельё с балкона',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'иди мыться в душ, игроки <D> и <D> должны держать покрывало как шторку, а остальные - наблюдать со стороны',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'до конца вечера сидеть в одном покрывале на голое тело',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Озвучить порнофильм (только первую половину, где диалоги). Попытаться сделать это смешно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Озвучить порнофильм (только вторую половину). Сексуально стонать, кричать, изображать обоих партнеров',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<F>сделать минет двум пальцам игроку <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'изобразить 5 видов оргазма',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'встать на колени, нежно гладить икры, затем внешнюю и внутреннюю стороны бедер игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '(не читать вслух!) неважно, кому выпало, читающий должен поцеловать игрока <D> позже, когда он этого не ожидает. Обновить задание для текущего игрока',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты должен поцеловать игрока <D> в тот момент, когда он этого не ожидает',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Целуйся с кем-нибудь противоположного пола на протяжении 2 минут',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Хлопай себя по ягодицам на мотив какой-нибудь песни, пока кто-нибудь не угадает еe название',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ущипни игрока <D> за ягодицы',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Устрой себе 7 минут рая с любым из игроков',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сыграй в Камень, ножницы, бумагу с игроком <D>. Победитель ласкает проигравшего, а проигравший должен позволить ему это сделать',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Съешь тающий шоколад с груди игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Спой любую неприличную песню',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сделай стойку на руках в нижнем белье',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сделай зарядку в нижнем белье',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>Расстегни лифчик игрока <F> одной рукой',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<F>Пусть игрок <M> расстегнет на тебе лифчик',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Разреши группе сфотографировать себя в неприличной позе',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Разверни конфету вместе с игроком <D>, используя только губы',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Пройдись кончиками пальцев по телу игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуйся с чьим-нибудь парнем',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуйся с чьей-нибудь девушкой',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуй по-французски пупок игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуй игрока с бородой. Ты сам выбираешь кого и куда',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуй в щеку игрока <D> и признайся ей/ему в любви',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Покажи эротическое шоу',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>Покажи пинг-понг шоу',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Позвони тому, кого выберет группа. Попытайся поговорить с ней/ним на тему секса с тобой',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Позволь соседу написать неприличное сообщение любому абоненту из твоей телефонной книги',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поделись частью жевательной резинки с каждым участником без использования рук',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Воспользуйся чьей-нибудь губной помадой и поцелуй игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Обнови свой статус в соцсети на "Я возбужден"',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Оближи щеку игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Назови один из цветов надетой на тебя одежды. Все игроки должны будут снять с себя вещи этого цвета на 3 раунда',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Каждый раз, когда тебе нужно в туалет, ты должен/должна брать с собой игрока <D>, чтобы тот стоял у двери, ожидая',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Закажи пиццу и пригласи разносчика на свидание. Без разницы, какого разносчик пола! Сделай это, если человек согласится',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Займись любовью с игроком <D>',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Если ты парень, дай побрить одну из своих ног. Если ты девушка, выбери свою жертву',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Доведи любого игрока до состояния крайнего возбуждения',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Добавь свой пост с твоим фото в группу "секс-знакомства" вашего города. Текст придумывают остальные участники',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Выбери кого-нибудь, зайди с ним в ванную комнату и не выходи 5 минут',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Выбери кого-нибудь в комнате. Этот игрок выбирает вещь, которую ты должен/должна снять',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Выбери игрока. Этот игрок должен будет снимать с себя по одной вещи каждый кон до тех пор, пока ты не останешься в одном нижнем белье',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Выбери игрока, который нарисует тебе татуировку на заднице',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Каждый игрок придумывает тебе сексуальное действие',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>Устрой конкурс мокрых маек с игроками <F> и <F>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M>Конкурс мокрых маек для девушек! Ты выбираешь победительницу',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Разыграй под одеялом вместе с игроками <D> и <D> сексуальную сцену из фильма',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Следующее задание выполняет твой/твоя парень/девушка, если есть',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Каждый игрок придумывает 2 сексуальных действия для тебя и твоей девушки (парня)',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Чувственно помассируй себя',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Умоляй игрока <D> отшлепать тебя',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Пробегись по кварталу в халате',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Ты выбираешь двоих, которые должны поцеловаться',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'До конца игры, если ты назовешь любого игрока по имени, ты должен будешь поцеловать случайного игрока противоположного пола',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Придумай 10 нестандартных вариантов применения презерватива',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'оближи самую сладкую часть игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'в течение всего дня веди себя как метросексуал',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>Измени свой статус в соцсети на "У меня большой пенис, пришлю фото тому, кто не верит"',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'разденься полностью, выйди на улицу, завернувшись в одно большое полотенце',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сделай в пакете отверстия для глаз, надень на голову и иди "грабить" супермаркет - сделай пальцы "пистолетом" и требуй у продавщицы 10 килограмм презервативов',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сделать репост любого гей-порно себе на страницу',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'заказать на алиэкспресс фаллоимитатор ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Обхвати левой рукой ягодицу игрока слева от тебя и правой - ягодицу игрока справа',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F> Игрок <D> вырезает из самоклеящейся бумаги пэстис. Пэстис — это такие наклейки, которые прикрывают только соски. Выйди из комнаты, наклей себе на грудь и возвращайся топлес',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'ты находишься в нудистском фитнес-клубе, игрок <D> - твой тренер, выполняй упражнения под его руководством ',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Разденься, включи красивую музыку и приготовь поесть ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'опиши во всех подробностях 10 поз для секса с использованием стола ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Воспроизведите в деталях ваш первый секс ',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Ты пишешь на листочке сексуальное задание. Игрок <D> его выполняет ',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'разрекламируй набор сменных усов “пропуск в трусики” ',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'изобрази разъяренного продавца секс-шопа. Игрок <N> - покупатель ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Периодически кричать “Сиськи!"',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Периодически кричать “Возьми меня!”',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Периодически кричать “Да, мой господин!"',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Периодически кричать “Я-я, Даст ист фантастиш!”',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Эротично проползи по комнате',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'подойти и поцеловать человека в губы неожиданно',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Присесть 10 раз, хлопая себя по попе со словами: Отшлепай меня, как грязную шлюшку',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'привяжи в маленьком пакетике яйцо к ремню на пояс себе и игроку <D>. Теперь попытайтесь разбить их друг об друга ',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Игроки называют любую считалочку. Используй ее на компании и поцелуй того, на котором остановишься ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'уединиться и сделать отпечаток своей груди (для девушек) или своего члена (для парней) на чистом листе бумаги. Можно использовать краски, кетчуп и т.д. По желанию, продать получившуюся картину на аукционе среди остальных игроков',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'все игроки ставят на тебе засос',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'позвони в публичный дом и 5 минут расспрашивай по поводу ассортимента ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'в пять общих диалогов в соцсети или мессенджере написать "Кто-нибудь в курсе, как можно использовать кочан капусты в сексуальных играх?"  ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M> полностью раздеться и сделать вид, что ты девочка, спрятав свои причиндалы ',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты и игрок <D>, один из вас наклоняется вперед и к своей попе руками прижимает чистый лист а4. Задача другого игрока - нарисовать на листе солнышко маркером, зажатым между ног ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ядовитый поцелуй с игроком <D>. Ты должен(на) набрать в рот какого-нибудь алкоголя и передать его другому игроку через поцелуй ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'кисломолочный поцелуй с игроком <D>. Ты должен(на) набрать в рот кефир или ряженку и передать его другому игроку через поцелуй',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Целуйся в засос с игроком <D>, а затем сиди 2 кона, держась за ягодицы игроков <D> и <D> ',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сделай приятно игроку <D> ',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ты ничего не делаешь, а игрок справа от тебя целует игрока слева от тебя ',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'научи игрока <D> соблазнять людей твоего пола',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Произнеси на испанском фразу “Me gusta tener sexo con animales” (Мне нравится заниматься сексом с животными)',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Играем в “Угадайку”. Все игроки противоположного пола выстраиваются в ряд. Ваша задача с завязанными глазами определить, кто есть кто. Если вы девушка - угадываете по “достоинству” каждого мужчину, если парень - по груди. Не подглядывать! Если играющих двое, то вы угадываете часть тела другого игрока, используя только язык',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Завяжите игроку <D> глаза, а затем, указывая на части вашего тела, задавайте вопрос “Сюда?”, до тех пор, пока игрок не ответит “Да”. Далее показывая на пальцах число, спрашивайте “Сколько?”. Как только игрок ответил “Да”, снимите с него повязку, он должен поцеловать выбранную часть тела столько раз, сколько выбрал с завязанными глазами',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Изобразите игрока <N> во время секса',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Изобразите моряка дальнего плавания, у которого не было секса 5 лет',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Изобразите стриптизера(шу). Пройдитесь мимо игроков, соберите чаевые себе в трусы',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>покажи на ладони игрока <D>, как ты делаешь кунилингус',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'изобрази вместе с игроком <D> секс в ограниченном пространстве, например, в коробке от телевизора',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F>ты раздеваешься догола и садишься на колени к игроку <M>. Расположись к нему лицом и плотно прижмись к нему. Оставайся в таком положении в течение 3 конов',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<F>С помощью линейки измерь размер члена игроков <M> и <M>. Пусть игрок <F> поможет тебе их возбудить для правильного замера',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Изобрази мастурбацию игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'отшлепай игрока <D> ремнем',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'посмотри видеоуроки о том, как делать массаж простаты',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'пусть игрок <D> повесит твои трусики на люстру',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>пусть игрок <D> закажет тебе проститутку',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'назови 10 причин сделать тебе минет/кунилингус прямо сейчас. Будь убедительным',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сделай игроку <S> приятно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сделай эротическое фото вместе с игроками <D>, <D>, <S>. Ты должен(а) быть полностью раздетым(ой)',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'изобрази секс с игроком <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Изобразить 5 видов оргазма',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'если ты знаком/а с игроком <D>, чмокни его/ее',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если ты знаком/а с игроком <D>, лизни его/ее щеку',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Тот, кто быстрее всех снимет с себя 2 вещи, целует любого игрока на свой выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'поцелуйся со всеми, кто будет выполнять следующее задание',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поцелуйся со следующим игроком, который будет выполнять задание в одиночку',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'скажи любое слово, а игроки по очереди должны называть к нему рифму. Тот, кто не сможет этого сделать, должен снять 1 элемент одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'придумай, как к тебе должны обращаться другие игроки. Если кто-то ошибся - штраф - игрок должен снять с себя 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Все игроки противоположного пола раздеваются до нижнего белья, а ты выбираешь обладателя самого сексуального тела',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'возьмите с игроком <D> кубик льда и зажмите между вашими оголенными животами. Растопите лед как можно быстрее',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Все блондины и блондинки снимают с себя по одной вещи',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Все, кто родился <A> числа, раздеваются до нижнего белья',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Те, кто носят стринги, целуют тебя',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'У кого есть татуировка или пирсинг, делают тебе приятно',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Кто родился в Сибири, делают тебе согревающий массаж',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'и <N>: у кого цвет нижнего белья темнее, тот целует любого игрока на свой выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Те, у кого iPhone, отправляют тебе свои интимные фото',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Обладатель самой большой попы противоположного пола получает массаж от тебя',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Если день твоего рождения это четное число, поцелуй любого парня',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Если день твоего рождения это нечетное число, поцелуй любую девушку',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Кто первый сможет достать языком до носа получает возможность поцеловать любого из присутствующих',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'чмокни игрока <D> в пятую точку',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Первый, кто достанет презерватив, решает, кого ты будешь целовать',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'называет аксессуар (ремень, часы, браслет...). Те, на ком есть этот предмет, снимают элемент одежды',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>посчитай количество женской груди среди участников и сделай столько же поцелуев игроку <F>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Если у тебя был когда-нибудь незащищенный секс с незнакомцем, поцелуй игрока <S>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Те, кто не мастурбировал под порно, делают тебе приятно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'скажи, сколько лет игроку <N>. Ошибся - сними с себя 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'назови знак зодиака игрока <N>. Ошибся - сними с себя 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'закрой глаза и скажи какого цвета глаза у игрока <N>. Ошибся - сними с себя 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'у тебя есть 3 секунды, чтобы сказать точное количество присутствующих в комнате. Ошибся - сними с себя 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'назови любимый цвет игрока <N>. Ошибся - сними с себя 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если ты девушка, эротично облизни свой палец. Если ты парень, эротично облизни свои губы.',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'если ты когда-нибудь занимался(ась) сексом в общественном месте, поцелуй игрока на свой выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'если ты когда-нибудь занимался(ась) сексом втроем, поцелуй игрока на свой выбор',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M>Все девушки должны подтянуть свои трусики так, чтобы тебе их было видно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Если ты когда-нибудь занимался(ась) сексом при включенной камере, поцелуй игрока на свой выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Если ты когда-нибудь во время секса представлял(а) другого человека, поцелуй игрока на свой выбор',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'должен сексуально облизать палец игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Если на тебе рубашка, расстегни <A> пуговиц(ы)',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними один предмет одежды с игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если тебя когда-либо застукивали за онанизмом, поцелуй игрока на свой выбор',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'поцелуй игрока на свой выбор, если последний раз ты смотрел(а) порно больше двух недель назад',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'если ты любишь использовать похотливые словечки во время секса, поцелуй игрока на свой выбор',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если ты когда-нибудь играл в ролевые игры, поцелуй игрока на свой выбор',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'кого из игроков ты считаешь самым(ой) сексуальным(ой)? Он(она) должен(должна) поцеловать тебя',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'покажи позу наездницы c игроком <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если ты покажешь свой сосок, игрок <D> должен будет раздеться до нижнего белья или полностью, если он уже в нижнем белье',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'устройте оргию с игроками <D>, <D>, <S>',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'Если у тебя был секс с человеком, который старше тебя на 5 лет, поцелуй любого игрока',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Если у тебя был секс с человеком, который младше тебя на 5 лет, поцелуй любого игрока',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Первый игрок, который покажет интимное сообщение на своем телефоне, может поцеловать любого игрока',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Если ты когда-нибудь терпел(а) провал во время секса, поставь статус в соцсети: “Это фиаско, братан”',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Если ты когда-либо представлял(а) в своих сексуальных фантазиях девушку/парня своего друга/своей подруги, поцелуй любого игрока',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Если ты когда-нибудь отправлял(а) сексуальные фотографии, поцелуй любого игрока',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Если ты когда-нибудь ел(а) с тела своего партнера, поцелуй любого игрока',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'если бы ты был(а) не против переспать с игроком <D>, поцелуй его',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если ты был(а) тайно влюблен(а) в игрока <D>, поцелуй его',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ущипни игрока <D> за сосок',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Если ты когда-нибудь притворялся(лась) во время оргазма, поцелуй любого игрока',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Если у тебя когда-нибудь оставались синяки или царапины после секса, поцелуй игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'лизни нос игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'прошепчи что-то сексуальное на ухо игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>потрогай причиндалы игрока <M>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'чмокни в нос игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери двух игроков, которые должны поцеловаться',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если последний твой секс был защищенным, поцелуй игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты Купидон! Выбери того, кто сможет обнимать и целовать кого хочет, когда хочет',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты любишь, когда на тебя смотрят во время секса',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты когда-нибудь занимался сексом при просмотре порно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты любишь заниматься сексом при включенном порно',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты любишь спонтанный секс',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты любишь, когда во время секса ласкают твой анус',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты любишь забавляться с анусом твоего партнера(твоей партнерши) во время секса',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты любишь, когда тебя шлепают',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуй игрока <D>, если испытывал(а) больше трех оргазмов подряд',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты когда-нибудь переодевался(лась), чтобы придать пикантности сексу',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты когда-нибудь наблюдал(а), как другие занимаются сексом',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Поцелуй игрока <D>, если последний твой секс был анальным',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Поцелуй игрока <D>, если когда-нибудь массаж, который ты делал(а), доводил до секса',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Поцелуй игрока <D>, если ты когда-нибудь занимался(лась) сексом по телефону',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'оближи губы игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'оближи ухо игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'передай кусочек льда изо рта в рот игроку <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты должен(должна) целовать другого игрока каждый раз, когда тебя называют по имени',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты неотразим! Ты можешь просить любого игрока поцеловать тебя (в щечку, губы или еще куда..) Игрок не имеет права отказать!',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери того, кто должен не переставая трогать свою попу',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'оближи любую часть тела игрока <D>, которого выберет <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'реши, кто из игроков оближет какую-либо часть твоего тела',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ты должен пощупать соски любого из игроков',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери игрока, который потрогает тебя за соски',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'поцелуй голый торс игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери, кто поцелует твою голую грудь/торс',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M>подойди сзади к игроку <F> и нежно погладь ее грудь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F>выбери парня, который погладит твою грудь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'станцуй эротический танец у игрока <D> на коленках',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сними 1 вещь, если ты когда-нибудь занимался сексом перед другими людьми',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сними 1 вещь, если ты когда-нибудь участвовал в свингер пати',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними 1 вещь, если ты когда-нибудь мастурбировал(а), пока твой партнер наблюдал за тобой',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'гладь попу любого игрока на протяжении 20 секунд',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сними 1 вещь, если ты мастурбировал(а), представляя своего(свою) коллегу по работе',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними 1 вещь, если ты когда-нибудь мастурбировал(а) при просмотре обычного фильма (не порно)',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери игрока, который будет поглаживать твою попу на протяжении 20 секунд',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'посмотри в глаза тому игроку, с кем бы ты мог(могла) переспать этой ночью',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'покажи свою фотографию топлес',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Те, кто после секса ласкал своего партнера так, что это приводило снова к сексу, снимают с тебя 1 элемент одежды',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери двух игроков, которые должны поцеловаться с языком',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери того, кто должен показать свой сосок',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'покажи одну из интимных частей своего тела',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери игрока, который должен показать интимную часть своего тела',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'покажи секс позицию с игроком <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери двоих игроков, которые должны показать секс позицию',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'прильни головой к интимной части тела одного из игроков',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери игрока, который должен прильнуть своей головой к интимной части твоего тела',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери игрока, который должен уткнуться лицом в грудь игрока <F>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'лизни интимную часть тела игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери игрока, который должен облизать интимную часть твоего тела',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'погладь интимную часть тела одного из игроков',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери игрока, который должен погладить интимную часть твоего тела',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери того, кто должен залезть рукой под твое нижнее белье',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты должен(должна) провести своей рукой под нижнем бельем одного из игроков',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'передай изо рта в рот игроку <D> какой-либо предмет',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери двух игроков, которые должны передать друг другу предмет изо рта в рот',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M>пощупай грудь одной из девушек',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери, кто снимет один элемент одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними 1 вещь, если у тебя были эротические фантазии с участием одного из игроков',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери игрока, который должен расстегнуть лифчик игроку <F>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Тот, у кого недавно был секс, снимает один элемент одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери того, кто ущипнет тебя за соски',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ущипни за попу одного из игроков',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери того, кто ущипнет тебя за попу',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'оближи губы одного из игроков',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери того, кто оближет твои губы',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери игрока, который должен показать интимную часть своего тела игроку <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'оближи соски одного из игроков',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери игрока, который должен облизать твои соски',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<M>Парни, кроме тебя, снимите один элемент одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<F>Девушки, кроме тебя, снимите один элемент одежды',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Парни, вы должны сидеть с голым торсом',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Девушки, вы должны снять верх и остаться в лифчике',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними 1 вещь, если ты занимался(лась) сексом в кровати друга без его ведома',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сними 1 вещь, если ты использовал лед во время предварительных ласк',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сними 1 вещь, если во время предварительных ласк во рту у тебя была ментоловая жвачка',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сними 1 вещь, если тебя фотографировали голым(голой)',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если ты впервые ты занимался(лась) сексом, когда тебе было меньше 17 лет, сними любую вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'положи свою руку на попу одного из игроков',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'в любой момент ты можешь выбрать двух игроков, один из которых сядет на колени другому',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'крути бутылочку и целуй того, на кого укажет горлышко',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'мысленно выбери секс позицию. Все игроки по очереди должны угадать, что это за позиция. Те, кто не угадают, снимают 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'мысленно выбери место, где ты бы хотел заняться сексом. Все игроки по очереди должны угадать, что это за место. Те, кто не угадают, снимают 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'мысленно выбери вещь, которую можно использовать во время секса. Все игроки по очереди должны угадать, что это за вещь. Те, кто не угадают, снимают 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'подумай про себя, кого из игроков ты считаешь самым горячим в постели. Все игроки по очереди должны угадать, кто это. Те, кто не угадают, снимают 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты начинаешь! игроки по очереди называют порно актрис, кто не вспомнит, должен снять 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты начинаешь! игроки по очереди называют секс позы, кто не вспомнит, должен снять 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Каждый игрок должен назвать самое необычное место, где он(она) занимался(лась) сексом, ты должен(а) выбрать “победителя”',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'должен показать свою татуировку или пирсинг',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'станцуй сексуальных танец для игрока <D> и допей свой бокал',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери игрока, который будет тебя ласкать, пока ты ласкаешь игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сними 3 элемента одежды и поцелуй игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': '<F>выбери игрока, который будет ласкать твою грудь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>выбери игрока, который будет ласкать твой член',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Вы за или против секса на одну ночь? Голосуют все, те, кто в меньшинстве, снимают 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Вы за или против незащищенного секса? Голосуют все, те, кто в меньшинстве, снимают 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Что ты выберешь: секс с любимой порно звездой или с любимым(ой) актером(актрисой)? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Что ты выберешь: сняться в порно или снять порно? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Ты бы предпочел(предпочла) поцеловать игрока <D> или игрока <D>? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Ты бы предпочел(предпочла) секс с игроком <D> или <D> ? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Что ты предпочитаешь: секс с 3 партнерами или с 15? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Что предпочитаешь: оральный секс или вагинальный? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Что ты выберешь: секс со знаменитостью или самым сексуальным человеком в твоем окружении? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Что ты выберешь: идеальные отношения и скучный секс или ужасные отношения и невероятный секс? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Что ты выберешь: никогда не испытать любовь или никогда не заниматься сексом? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Предпочитаешь заниматься сексом утром или вечером? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Костюм медсестры или полицейской, что сексуальней? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Ты бы предпочел(предпочла) поцеловать игрока справа или слева? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Ты бы предпочел(предпочла) заняться сексом с игроком справа или слева? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сколько у вас было сексуальных партнеров? Те, у кого было больше, чем у тебя,  должны снять по 1 элементу одежды с тех, у кого было меньше',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты начинаешь! Каждый игрок выбирает того, кто должен снять с себя один из предметов одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Конкурс трусов! Чьи трусы самые крутые? Девушки выбирают победителя, проигравший делает 10 отжиманий',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты начинаешь! По очереди каждый игрок должен поцеловать соседа слева',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'спусти штаны',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Тот, кто начал заниматься сексом раньше всех, снимает с тебя 1 элемент одежды',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Тот, кто начал мастурбировать раньше всех, снимает с тебя 1 элемент одежды',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'покажи свой лобковые волосы',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'и игрок <S>: у кого больше мускулов, тот целует игрока на свой выбор',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Тот(та), кому сегодня делали минет или куни, решают, кто будет тебя целовать',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'засунь свою голову между ног игрока <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'и игрок <N> снимают свои штаны',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ущипни за соски игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'покажи свою красивую попку всем игрокам',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'если ты в детстве снимал(а) штанишки перед противоположным полом, сними 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если ты занимался(лась) сексом в носках, сними носки',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Тот, кто спал на одной неделе с двумя разными партнерами, целует тебя',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Тот, кто в течение одного дня переспал с двумя разными партнерами, целует тебя',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'потрогай между ног игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Те, кто когда-нибудь изменял своей супруге(своему супругу), снимите 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'делай столько отжиманий, сколько раз ты мастурбировал(а) за последние 7 дней',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Те, кто когда-нибудь снимал проститутку, снимают 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'пусть игрок <D> сфотографирует тебя без трусов',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Последний, кто засунет руку себе в трусы, делает тебе массаж попы',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Те, у кого первый секс был с проституткой, решают, снимают 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'если ты сможешь отжаться 15 раз, игрок <D> должен будет снять с себя 2 вещи',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'если не успеешь сделать 10 кругов вокруг своей оси, пока игрок <N> считает до 50, сними с себя 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Первый, кто выложит в соц. сеть фотографию своего пьяного лица, может поцеловать любого игрока на свой выбо',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Первый, кто покажет свой половой орган, может раздеть до нижнего белья любого игрока на свой выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'напиши в соц. сети “Я теперь встречаюсь с (игроком) <D>”. Если пост наберет хотя бы 5 лайков до конца вечера, вы делаете совместное фото с поцелуем и ставите на аватарку',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'покажи свою голую попу',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'отправь фотографию своих гениталий трем людям. Игрок <N> выбирает, кому именно',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'продержись 5 секунд, стоя на руках со спущенными штанами',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>напиши у себя в соцсети: “Я наконец-то нашел средство от импотенции!”',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ущипни за бока игрока <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Все игроки должны потрогать твои гениталии',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'расскажи грязную шуточку. Если никто не смеется над твоей шуткой, сними 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'просвисти какую-нибудь мелодию с набитым ртом. Тот, кто ее угадает, решает, может поцеловать любого игрока',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'пусть игрок <D> разорвет что-либо из твоей одежды',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>Сделай вертолетик своим членом',
      'pack_id': 13,
      'pack_name': 'dares_erohard',
    },
    {
      'text': 'надень штаны задом наперед',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'разденься и останься с голым торсом/в лифчике',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'все должны постоянно держать руку между ног в течение <A> раундов',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Никому нельзя смеяться! Тот, кто засмеется, делает тебе приятно',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери мысленно порно актрису. Все игроки по очереди должны угадать, кто это. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери мысленно болезнь, передающуюся половым путем. Все игроки по очереди должны угадать, что это за болезнь. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери мысленно секс игрушку (не говори вслух). Все игроки по очереди должны угадать, что это за игрушка. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери мысленно сексуальную американскую актрису (не говори вслух). Все игроки по очереди должны угадать, кто это. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'выбери мысленно сексуальную русскую актрису (не говори вслух). Все игроки по очереди должны угадать, кто это. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери мысленно мазохистскую позицию в сексе (не говори вслух). Все игроки по очереди должны угадать, что это за позиция. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери мысленно самую сексуальную девушку, которую знают все присутствующие. Все игроки по очереди должны угадать, кто это. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сделай вид, что ты мастурбируешь игроку <D>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'сядь голой попой на пол',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Что бы вы выбрали: поцеловать паука или съесть земляного червя? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты встаешь на четвереньки, и каждый игрок должен тебя шлепнуть',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'скажи любую фразу с набитым ртом. Первый, кто угадает, решит, может поцеловать любого игрока',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'закрой глаза. Игроки делают для тебя коктейль, если ты угадаешь, из чего он состоит, можешь поцеловать любого игрока',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Трое самых молодых игроков делают тебе массаж. Делай сам себе тоже, если входишь в их число',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Первый, кто отправит сообщение кому-либо из членов семьи, поцелует любого игрока',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ущипни за попу игрока <D>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Последний, кто посетил аквапарк, купает тебя в ванной',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': '<M>Девушка, с самой большой грудью целует тебя в шею',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<F>Парень, у которого самая маленькая борода или ее нет вообще, целует тебя за ушко',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Самый носатый игрок целует тебя',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Тот, кто был инициатором более трех расставаний, делает тебе массаж',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'сними элемент одежды, если ты когда-нибудь давал(а) поносить твоё нижнее белье',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сделай массаж игроку, у кого недавно был день рождения',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'решает, кто будет танцевать медленный танец на протяжении 30 секунд, держа друг друга за ягодицы',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Те, кто когда-нибудь "снимал" кого-то в клубе, снимают 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Станцуй, если ты не против заплатить за секс',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Те игроки, кто живут одни, снимают 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Три самых молодых игрока снимают с тебя 1 вещь без использования рук',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Девочки выбирают одного игрока, которого ты должен(а) будешь поцеловать',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'станцуй стриптиз, если ты когда-нибудь просил станцевать тебе стриптиз',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'поцелуй игрока <D>, если ты можешь дотянуться носом до большого пальца ноги',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сними с каждого игрока по 1 элементу одежды и надень все это на себя',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сними 1 вещь, если тебя бросали больше четырех раз',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сними 1 вещь, если твой партнер ненасытнее тебя в постели',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Сними 1 вещь, если ты разглядывал(а) свои гениталии в зеркале на этой неделе',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сними 1 вещь, если ты мастурбировал(а) втайне от своего партнера',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сними 1 вещь, если у тебя когда-нибудь был секс, о котором ты потом сожалел(а)',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Сними 1 вещь, если ты когда-нибудь пукал(а) во время секса',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сними 1 вещь, если ты когда-нибудь пукал во время поцелуя',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Сними 1 вещь, если ты мастурбировал(а) за последние 3 дня',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Пусть игрок <N> положит что-то небольшое на стул, ты должен с закрытыми глазами, попой, определить, что это за предмет',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Сними 1 вещь, если ты занимался(лась) сексом, пока твои друзья спали в соседней кровати',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'кого ты считаешь самым умным из игроков? Он должен снять 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'кого ты считаешь самым красивым из игроков? Он должен снять 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'у кого из игроков шикарная фигура? Он должен снять 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'если твой первый секс был после 16 лет, сделай пост об этом в соцсети',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты не должен(а) использовать местоимения (я, ты, он...) в течение <A> раундов, иначе тебе придется снимать одежду',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ты должен(должна) вставать и садиться при каждом новом задании, забудешь - должен(а) снять 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'ты папарацци! Тот игрок, который не заметит, как ты его фотографируешь, должен снять с себя 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'ты звезда танцпола: звезда танцует, когда ей вздумается, тот игрок, кто повторит последним движение звезды, должен снять с себя 1 вещь',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'ты капитан команды! Капитан кладет руку на стол, тот из игроков, кто положит свою руку последней, снимает 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Давайте обзывать друг друга! Отшлепай игрока, который будет наименее активен',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Давайте добавлять матерные слова в каждую фразу! Отшлепай игрока, который будет наименее активен',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать, что рифмуется со словом "секс"? Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать вкусовые предпочтения игрока <N> при выборе сексуального партнера. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать секс позицию. Сними 1 вещь с игрока, который не сможет ответить или повторится',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать сексуальную киноактрису. Сними 1 вещь с игрока, который не сможет ответить или повторится',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать сексуальную певицу. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать сексуального певца. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Ты начинаешь! Игроки по очереди называют сексуальных актеров/актрис в возрасте. Игрок, который не сможет ответить или повторится, делает тебе массаж',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Ты начинаешь! Игроки по очереди называют сексуальных актеров/актрис малолеток. Игрок, который не сможет ответить или повторится, делает тебе массаж',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'тот, кто последним пришел на вечеринку, целует тебя, куда выберет',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Угадай, кого игрок <M> считает самой сексуальное девушкой из присутствующих. Не угадал(а) - тебя наказывает игрок <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Угадай, кого игрок <F> считает самым сексуальным парнем из присутствующих. Не угадал(а) - тебя наказывает игрок <N>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Угадай, кого игрок <M> считает самой легкодоступной девушкой из присутствующих. Не угадал(а) - тебя наказывает игрок <N>',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Угадай, кого игрок <F> считает самым сексуально озабоченным парнем из присутствующих. Не угадал(а) - тебя наказывает игрок <N>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'решай, кто и как будет целовать игрока <F>: игрок <M> или <M>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'одолжи у кого-нибудь презерватив',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'укуси игрока <D> за попу',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'напиши у себя на лбу "виагра"',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'напиши у себя на лбу "анальный секс"',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'напиши у себя на лбу "девственница"',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'напиши у себя на лбу "коитус"',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'напиши у себя на лбу "совокупление"',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'напиши у себя на лбу "эрекция"',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: мотоцикл, лента, сексуальный, <N>, ерепенишься. Прикрепи любую картинку из поиска по запросу “зелибоба” и добавь хештег “правдаилидействие”',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'One Finger Challenge. Тебе необходимо сделать обнаженное селфи, прикрыв интимные части тела одним пальцем. Не забудь выложить в соцсеть!',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': '<M>Putin Shirtless Challenge. Ты раздеваешься по пояс, игрок <N> тебя фотографирует. Не забудь выложить в соцсеть!',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'сексуально домогайся до игрока <D> в людном месте',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Выбери: oрел или решка? Брось монетку, угадал - целуй игрока <D>, не угадал - игрока <S>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Выбери: oрел или решка? Брось монетку, угадал - отшлепай игрока <D>, не угадал - игрок <D> отшлепает тебя',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Выбери: oрел или решка? Брось монетку, угадал - надень элемент одежды, не угадал - сними',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Выбери: oрел или решка? Брось монетку, не угадал - сними элемент одежды с себя, угадал - с игрока <D>',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Выбери: oрел или решка? Брось монетку, угадал - игрок <D> делает тебе массаж, не угадал - сделай массаж игроку <S>',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'Выбери: oрел или решка? Брось монетку, угадал - игроки <D>, <D>, <D> - твои рабы, должны выполнять твои желания в течение <A> раундов. Не угадал - раздевайся полностью,  надень на себя халат и выбегай в таком виде на улицу',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'выбери самого красивого игрока, который должен будет снять 1 вещь',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'выбери самого умного игрока, он снимет 1 вещь',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
    {
      'text': 'показывает без слов название фильма, первый, кто угадает, целует любого игрока на выбор',
      'pack_id': 12,
      'pack_name': 'dares_ero3',
    },
    {
      'text': 'Каждый игрок записывает на бумажке последний фильм, который он смотрел. Те, игроки, чьи фильмы совпадают, должны поцеловаться',
      'pack_id': 10,
      'pack_name': 'dares_ero1',
    },
    {
      'text': 'Каждый игрок записывает на бумажке свой любимый фильм. Те, игроки, чьи фильмы совпадают, должны поцеловаться',
      'pack_id': 11,
      'pack_name': 'dares_ero2',
    },
  ],
  'dares_family': [
    {
      'text': '<F>написать или позвонить своему любимому и объявить, что беременна!',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'позвони в любую пиццерию и закажи пиццу, как у Черепашек Ниндзя. Настаивай на своём',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'собери у всех присутствующих жевательные резинки и надуй пузырь как можно больше',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'вместе с игроком <N> изобразите любую сцену из известного фильма',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'сделай вид, что очень боишься всех присутствующих. Веди себя так 10 минут',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить походку игрока <N>, который очень хочет спать',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'изображай панический страх, когда кто-то что-то говорит, делай это убедительно',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': '3 кона разговаривать со всеми стихами',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'из подручных материалов изготовить лодку, сесть в нее и изобразить моряка, идущего на бой против пиратов. Пираты - игроки <N> и <N>. Их надо победить и ограбить',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'в течение часа когда кто-то садиться изображать "пук" и делать лицо, как будто плохо пахнет',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'загадай игроку <N> загадку: Чем лошадь отличается от иголки? (Ответ: на иголку сначала сядешь, потом подпрыгнешь, а на лошадь сначала подпрыгнешь, потом сядешь.)',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'поставь себе на голову какую-нибудь посуду с жидкостью. Теперь ты должен пройти 5 метров, не пролив ни капли. Если не смог - выполни какое-нибудь наказание (придумывают присутствующие).',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'изобрази какую-нибудь известную личность, и пусть остальные угадывают',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'научи игрока <N> правильно стирать носки',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'надень на голову кастрюлю (сковородку, тазик) и сиди так 10 минут',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'пойди в ванну и умойся ледяной водой',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'попробуй угадать номер телефона игрока <N>. Отожмись столько раз, сколько цифр не смог угадать',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'полчаса разговаривай, употребляя только слова в уменьшительно-ласкательной форме',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': '5 минут разговаривать с телевизором',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'не моргай 2 минуты',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'присесть с печенькой на лбу 15 раз так, чтобы она не упала, иначе присутствующие придумывают тебе наказание',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'игра в "Ну, погоди". Ты заяц, убегай! А <N>, попробуй догнать зайца за 1 минуту',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'изобрази зомби, который пытается съесть самого себя',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'изобрази Патрика из мультфильма "Спанч-Боб"',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'изобрази лунную походку',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'возьми стакан газированного напитка и выпей без остановки!',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'изображай птичку, а остальные игроки кричите: "Лети птичка - лети!"',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'у тебя крепкие уши? игрок <N> должен подергать тебя за уши столько раз, сколько тебе лет',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'у тебя длинный язык? Попробуй дотянутся им до кончика носа. Можно помогать руками!',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'позвони на незнакомый номер и позови на свидание',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'спой государственный гимн',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'прояви чудеса гибкости. Попробуй укусить себя за большой палец ноги',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'уйди в другую комнату и переодень одежду задом наперед',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'играем в Угадай мелодию! Спой 3 песни, пусть присутствующие угадывают',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'теперь до конца игры ты играешь сидя на полу!',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'выполните любое желание игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'в течении 10 минут смотри только на игрока <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'нарисуй себе сам усы и бороду фломастером (маркером, ручкой), не пользуясь зеркалом',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'и <N> устраиваете соревнования по армрестлингу! Победивший получает возможность поцеловать любого из присутствующих.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'прочитай хотя бы одну из трех скороговорок без запинки 1) У хламидомонады и хлореллы в хроматофорах хранится хлорофилл. 2)Маша классифицировалась классифицировалась, да не классифицировалась. 3)Маршрут маршрутизировался маршрутизировался да не вымаршрутизировался. Если не смог - выполни какое-нибудь наказание (придумывают присутствующие).',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'постой как цапля',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Спойте песню для игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Покажите фокус ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Человек должен встать на четвереньки и изобразить автомобиль, осуществляющий задним ходом параллельную парковку в пространство между двумя стульями',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'За одну минуту нарисовать портрет игрока <N> ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'За одну минуту нарисовать портрет игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Выбрать себе двух партнеров и изобразить акробатический этюд ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сказать игроку <N>, что вы подумали о нем (о ней), когда увидели впервые ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить королеву, поздравляющую народ ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Без слов признаться в любви игроку <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Признаться в любви игроку <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Перевоплотиться в какого-нибудь героя сказок: Винни-Пуха, Алису из страны чудес, Колобка, Иванушку-дурачка и т.д.  ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Перевоплотиться в известною личность или героя кинофильма: Бориса Моисеева, Аллу Пугачеву, Мерилин Монро, Супермена, Терминатора. ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Придумайте короткое пожелание каждому в компании',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Инсценировать любой анекдот с игроками <N> и <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'спеть любую песню с игроком <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сделать какую-либо гимнастическую фигуру — мостик, ласточку, пистолет ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Рассказать анекдот про игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'игрока <N> обнять, игрока <N> поцеловать, а игроку <N> пожать руку ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить немую сценку «Возвращается муж из командировки...» с игроками <N> и <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Если играете зимой - принести с улицы снеговика ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Воспользовавшись гелем, расческой и феном сделать себе необыкновенную прическу. Игрок <D> помогает',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'В течение следующего часа каждые 5 минут сообщать всем игрокам "Прошло еще 5 минут"',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'В течение 10 минут на каждый вопрос отвечать положительно ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сделать каждому участнику эксклюзивный коктейль ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Представьте себя в роли астролога и предскажите, что ждет каждого из гостей в следующем году ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Прочтите стихотворение или спойте песню ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Скажите комплимент игроку <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Позвонить по случайному телефонному номеру и разыграть ответившего человека',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Встать на голову ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Назвать для каждого игрока 3 качества, за которые он вам нравится ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Произнести красивый тост',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Превратиться на 15 минут в иностранца. Выбрать какой-либо язык (можно тарабарский) и общаться только на нем. ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Покормить с ложечки каждого игрока ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сделать для каждого игрока бумажную медаль. Название медалей должны соответствовать истине (за бесподобный вкус, за честность и т.д.) ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'С помощью мимики изобразить на лице 10 разных эмоций ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Составить шуточную карту квартиры. Подписать все наиболее важные топографические объекты',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Нарисовать усы себе и игроку <N> и ходить так до окончания вечера',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изображать самолет',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Орать с балкона 10 раз "Люди! Я вас люблю" ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Произнести 10 раз на разные лады "Ах, какой я красивый!", глядя в зеркало, и не смеясь ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить свинью в свинарнике ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Исполнить мелодию песни «в лесу родилась елочка», щелкая пальцем по щеке или шаркая подошвами по полу ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Спеть песенку, зажав в зубах 3 спички ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Показать сценку «заключенный в одиночной камере водит хоровод» ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить выбранное игроком <N> животное  ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить спортсмена, чтоб публика отгадала вид спорта. Игрок <N> загадывает',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сделать необычное групповое фото. Расставить участников, подобрать антураж ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Обними игрока <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'С абсолютно разными интонациями (доброй, печальной, злой, радостной) сказать выражение «Олололошеньки-лоло!» ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить руками, жестами, птичку-секретарь и постараться не засмеяться. ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Попытаться нарисовать портрет игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Попробовать показать жестами, чем люди обычно заняты на работе. ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Играть роль английской королевы два кона',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'В течение следующих нескольких минут на любую фразу гостей отвечать «И чо?» ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить животное (пингвин, змея, медведь, ленивец и так далее) ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Встать на голову и прочитать любой стишок',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Поздороваться с каждым гостем и сказать каждому комплимент',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Говорить следующие 30 минут только на английском/немецком',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сделать массаж любому игроку',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сказать игроку <N>, свое первое впечатление о нем',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Без слов, признаться в любви игроку <N> ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сесть на воздушный шарик так, чтобы он лопнул',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'положи монету на пол, двигай ее носом к противоположному углу',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Покувыркаться до противоположной стены',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Подняв одну ногу и маша руками допрыгать до противоположного угла, крича при этом «Я бабочка»',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Нарисовать игроку <N> усы',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Укусить себя за локоть',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Положить в рот 5 долек лимона и рассказать стишок про игрока <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобрази фыркающего кота, который чего-то боится',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Показать пингвина',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': '5 минут передразнивать игрока <D>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Скажите комплимент себе, а затем скажите себе же спасибо',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сделайте смешную рожицу. Игрок <N> фотографирует',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Спеть пару строчек песни МИЛЛИОН АЛЫХ РОЗ, произнося только гласные буквы',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобрази пылесос без слов',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сделать игроку <N> массаж головы',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Придумать стих со словами нос–понос и с именем <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Съесть что-нибудь из своей тарелки без помощи рук',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'С помощью мимики изобразить на лице 10 разных эмоций и сфотографировать каждую эмоцию ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'станцевать любой танец ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'инсценировать дрессировщика и дрессированное животное ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'изобразить собственной фигурой какую-нибудь знакомую картину ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'сочини частушку о сегодняшнем вечере ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'при помощи пантомимы рассказать о событии, известном всем присутствующим ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'подпрыгнуть на одной ноге 50 раз ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Съесть 3 кружка лимона ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Почистить зубы мылом или прополоскать рот гелем для душа',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Станцуйте танец африканского племени',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'нарисовать корову, держа фломастер в зубах ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'спеть песню, засунув в ноздри указательные пальцы ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'спеть песню для игрока <N>, набрав в рот воды ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'В одном углу комнаты заплакать, в другом - рассмеяться, в третьем - зевнуть, в четвертом - станцевать. ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Взять кастрюлю и половник. Стучать половником по кастрюле, ходить и дурным голосом орать "хочу борща" ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Показать фокус вместе с игроком <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Встать на стул и рассказать о себе в третьем лице от лица игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Залезть под стол и оттуда 3 раза прокукарекать',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Нарисовать портрет игрока <N>, держа фломастер в зубах',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Пропрыгать вокруг стола (или игрока <N>), как лягушка, квакая при этом',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить балерину',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Три раз обскакать вокруг стола на одной ножке',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Заставить рассмеяться трех присутствующих',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Съесть конфету под столом',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить бабочку, собирающую нектар',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить обезьяну, выпрашивающую банан у игроков',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Нарисовать свой портрет левой рукой',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Загадать присутствующим загадку',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сделать кораблик из бумажной салфетки',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Вспомнить алфавит. Если не смог(ла) - игрок <D> придумывает тебе наказание ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сделай бумажный самолетик из газеты одной левой рукой',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Спеть песню о любви для игрока <D>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить танец с пылесосом, рюкзаком, стулом, подушкой',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Поцеловать хозяина квартиры или игрока <D>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Проползти через комнату на коленках',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Попытаться встать на голову',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Назвать каждого гостя по имени и обнять',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Вспомнить и рассказать 3-4 анекдота подряд',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сплясать танец вприсядку',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить кипящий чайник',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'поговори с телевизором, когда он выключен ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сыграть пальцем на губе мотив песенки «Пусть бегут неуклюже...». ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Стоя прямо, заплакать, повернуться в левую сторону - рассмеяться, повернуться назад - зевнуть, повернуться в правую сторону – скорчить рожицу ',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Поздороваться с каждым из присутствующих разными способами, не повторяясь. ',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Крикните со всей силы что-то про игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить танцора со сломанной ногой в гипсе',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить певца, у которого началась икота или который заикается',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить назойливую муху. Надоедай другим игрокам',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Расхвалить блюда на праздничном столе так, как это была реклама',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Вдруг Вам показалось, что Вы – ведущий передачи «В мире животных» и вокруг Вас полно интересных экземпляров фауны (гостей), расскажите о них.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Произнесите поздравление, говоря все слова в уменьшительно-ласкательной форме. Говорите в таком духе еще 5 конов',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Взять кастрюлю, представить, что это барабан, и изобразить музыканта из Африки',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Надуть шарик, чтобы он лопнул',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Написать свое имя (любимое блюдо, название фильма, цветка, города и т.д.) на бумаге левой рукой',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить походку игрока <N>, который движется по скользкой дороге',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Перенести воображаемый таз с водой от одного стула до другого, так как бы это делал Чарли Чаплин.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Прочитать стихотворение «Идет бычок, качается, вздыхает на ходу – Ой, доска кончается, сейчас я упаду» - как будто это признание в любви игроку <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Произнести фразу «Мне нравится танцевать» разными интонациями – печально, радостно, плача, смеясь.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить движениями и звуками скучающего жирафа, веселую гусеницу, грустную мартышку',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Встать и застыть в позе вратаря, поймавшего шайбу зубами.стоять 3 минуты, остальные продолжают играть',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Прочитать любое стихотворение с интонацией, как будто он находится в комнате со спящим ребенком и его нельзя разбудить',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Пройти по комнате, как по минному полю',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'изобрази озабоченного зомби, который пытается совокупиться с присутствующими',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Застыть в позе горнолыжника, не успевшего убежать от горной лавины.Находиться в таком состоянии 3 минуты',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобразить хозяина террариума, у которого пауки разбежались по всей квартире',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Спеть веселую и бодрую песню, как колыбельную, при этом укачивая воображаемого ребенка.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Придумать фразу из пяти слов, которые начинаются на одну и ту же букву',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Рассказать свое любимое стихотворение, но после каждого слова говорить слово «Гав!».',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Высунуть голову в открытое окно и громко крикнуть: «Товарищ капитан, я вижу море!»',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Используя игроков <N> и <N>, изобразить картину «Три богатыря»',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Пройти по комнате, как будто она вся залита водой, а нужно срочно найти мобильник',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Рассказать сказку «Колобок», используя медицинскую терминологию.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Спеть песню на языке коровы',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Попроси у кого-нибудь еды, изображая собачку',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Назвать 5 городов на одну букву',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Присесть 10 раз подряд, после каждого раза говорить «Ку-ку!»',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Говорить что угодно быстро и без остановки 1 минуту, при этом руками держаться за уши',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Встать на стул и спеть что-нибудь про любовь для игрока <D>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Спеть любую песню, зажав нос бельевой прищепкой',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Съесть печенье, предварительно положив его на изгиб руки',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Съесть варенье без помощи рук',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Залезть под стол и изобразить объевшегося волка, который поет, как в мультике про волка',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Пройти по комнате, сделай вид, будто собираешь грибы',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Рассказать сказку "Про репу" наоборот, начиная:"И вытащили репку!".',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Насыпать в тарелку муку, зарыть туда конфетку и без рук губами ее достать и съесть',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Пройтись через всю комнату на коленях',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Рассказать шутку, которую не слышал никто из находящихся в комнате',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Рассказывать о слонах в течение 1 минуты',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Показать кота, который боится чего-то, но любопытствует',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить автомобиль, который забуксовал',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Посмотреть на себя в зеркало и рассмеяться, как будто там клоун',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Назвать десять имен на одну и ту же букву',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'С помощью иголки и ниток сделай себе бусы из конфет',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Зевать до тех пор, пока не заставите зевнуть еще кого-то',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Проскакать вокруг комнаты, взявшись одной рукой за ступню',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Пролезть под столом на четвереньках и пролаять, как собака',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Объясни, как сделать пирог, не говоря ни слова',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'станцуй танец маленьких утят',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Рассказать любимое стихотворение: а) с тихой скорбью; б)с выражением ужаса; в) с нескрываемым смехом; с) мяукая, после каждого слова',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сказать скороговорку',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сесть перед зеркалом и произнести 10 раз с разной интонацией: "Какой я красивый!" или "До чего я очаровательна!".',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Взять метлу и лететь на ней как Гарри Поттер',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Лаять как собака на игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'скажи игроку <N>, какая в нем лучшая черта',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'ты - кукловод! Изобрази говорящего персонажа с помощью носка игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'сделай массаж головы игроку <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'обними игрока с самой длинной фамилией',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'попытайся сесть на шпагат',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'расскажи о своем первом впечатлении об игроке <N>, когда ты его в первый раз увидел(а)',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'станцуй брейкданс',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'сочини рэп-фристайл про игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'спой песню, которая вертится у тебя в голове',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'поспорьте 3 раза с игроком <N>. Проигравший делает массаж победителю',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'проговори алфавит в обратном порядке за 2 минуты, не успел - выполняй наказание',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'сойди с ума вместе с игроком <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'изобрази улыбку Дукалиса',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'накорми игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'узнай отчество всех игроков',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'теперь ты - властелин времени! Надень себе на руки наручные часы всех присутствующих и сиди так полчаса, по желанию оповещай всех о текущем времени',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'говори и отвечай всем бредом в течение 5 минут',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'подари игроку <N> что-нибудь на память',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'подергай уши игрока <N> 10 раз',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'в течение 5 минут носи очки того игрока, который носит очки',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'представь, что давно не видел игрока <N>. Изобрази, насколько сильно ты рад(а) его видеть',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'вместе с игроком <N> обсуждайте игрока <N> в течение 2 минут',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'с помощью носков и прочих элементов одежды или аксессуаров вместе с игроком <N> устройте кукольный театр',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'между тобой и игроком <N> - танцевальный баттл! Пусть остальные выбирают победителя',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'притворись игроком <N>. Позвони кому-нибудь из его знакомых и представься им',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'обними что-нибудь, сделанное из дерева',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'потереби руками волосы игрока с самыми темными волосами',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'придумай новое слово и объясни его значение',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'покажи всем какое-нибудь свое фото',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'изобрази собаку, которая метит территорию',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'продай себя на аукционе, игрок <N> - ведущий аукциона',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'танцуй на стуле для игроков <D> и <D>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'выключи свет на 3 минуты',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'ты и игрок <N> - смотрите друг на друга. Кто первый моргнет, должен исполнить желание победителя',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'заставь игрока <N> чихнуть',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'почисти зубы игроку <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'поговори со стулом',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'представь, что читаешь дневник игрока <N>. Придумай и скажи вслух, что там написано',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'кудахтай всегда, когда кто-нибудь обращается к тебе по имени в течении 5 минут',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изобрази лохнесское чудовище с помощью своей ноги. Попробуй покусать игрока <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Станцуйте кан-кан с игроками <N>, <N> и <N>',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Тебя пытаются съесть игроки <N> и <N>',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Ты пытаешься догнать и поцеловать игрока <D>. Единственное условие - вы передвигаетесь только на корточках',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Игроки <N> и <D> одновременно кусают тебя за уши',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Игроки <N> и <D> одновременно целуют тебя в щеку',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Сделай репост фоток 5 твоих лучших друзей себе на стену в соцсети',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Попробуй засунуть свой кулак себе в рот',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Вместе с игроком <N> изобрази роды пингвинов',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Поспорьте на камень-ножницы-бумага с игроком <N> на 10 щелбанов',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'позвони на любой номер и скажи \'выходи за меня\'',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изобразить ребенка, у которого отобрали игрушку, не покупают мороженное, на пляже, на приеме у врача, рассказывающего, как упал и ударил коленку и т.п.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'передать с помощью пантомимы. Ты в роддоме, только что родил(а) мальчика. Похож на папу. Глазки – мамины, волосы – в дедушку. Светленький. Хорошо ест.',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сoчинить зaгaдку пpo фpукты или oвoщи нa стoлe, зaтeм угoстить учaстникa, кoтopый быстpee всeх oтгaдaл.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Из кусoчкoв фpуктoв и oвoщeй сoстaвить смeшную poжицу (мaслины – глaзa, клубничкa – poт, кусoчки oгуpцa – бpoви, вoлoсы – пeтpушкa или укpoп).',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Пpeдстaвить игрока <D> мaлeньким peбeнoчкoм, пoвязaть нaгpудник и пoкopмить с лoжeчки йoгуpтoм.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Пpидумaть и пoкaзaть, из чeгo мoжнo пить вoду, eсли вдpуг пpoпaлa вся пoсудa (из лaдoшки, бумaжнoгo кулькa).',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Изoбpaзить кoтeнкa, кoтopый лaкaeт мoлoчкo из блюдeчкa',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Изoбpaзить пeтушкa, кoтopый клюeт зepнышки',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Сдeлaть из кусoчкoв фpуктoв сaлaт и угoстить пpисутствующих',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'С зaвязaнными глaзaми нapисoвaть дoмaшнee живoтнoe: кoшку, кoзу или сoбaчку, игрок <N> угадывает',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'С зaкpытыми глaзaми oпpeдeлить нa oщупь, кaкoй пpeдмeт тебе пoлoжили в pуку.',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
    {
      'text': 'Стaнцeвaть с пoлным стaкaнoм вoды в pукe',
      'pack_id': 7,
      'pack_name': 'dares_family2',
    },
    {
      'text': 'Вспoмнить кaк мoжнo бoльшe вeжливых слoв',
      'pack_id': 6,
      'pack_name': 'dares_family1',
    },
  ],
  'dares_general': [
    {
      'text': 'Произнести тост с иностранным акцентом',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изобрази полет шмеля',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'разрекламируй игрока <N> так, будто он лапша быстрого приготовления',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобрази сумасшедшего и начни приставать к игроку <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'С завязанными глазами отгадать на ощупь всех присутствующих',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Исполнить танец живота на табуретке для игрока <D>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'танцуй всегда, когда игрок <N> называет тебя по имени',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты попугай! Ты должен(должна) повторять все, что скажет игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Переобувшись, то есть обувь с правой ноги надев на левую, и наоборот, обежать вокруг игрока <N>, сделав тем самым круг почета. ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Отдать честь правой рукой, а левую, сжатую в кулак, с поднятым вверх оттопыренным большим пальцем одновременно вытянуть вперед и сказать при этом: «Я поехавший!» Затем хлопнуть в ладоши и проделать то же самое, но быстро сменив руки. ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'С игроком <N> соревнуетесь в скоростном выпивании какого-нибудь напитка - кто больше выпьет за полминуты, имеет право поцеловать любого человека на свой выбор',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Трое самых высоких игрока делают тебе массаж',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'говори слова задом наперед',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'пусть игрок <N> придумает Вам обидное прозвище на весь день',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'надеть футболку наизнанку и задом наперед и ходить так все время',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Спародируйте игрока <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен(а) перецеловать всех присутствующих гостей в выступающие части тела, при этом ни разу не повториться ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Вы – председатель разваливающегося колхоза. За совещательным столом собрались доярки, пастух, тракторист, кузнец и т.п. Дайте каждому втык и заставьте отчитаться. Но после каждой речи, даже одного слова, фанатично восхищайтесь сказанным.',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Угостите нескольких игроков разными блюдами, словно Вы привезли гостинцы в программу «Поле чудес».Игрок <N> - леонид аркадьевич',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'В незнакомом человеке на празднике (игрок <D>) вы обнаруживаете своего родного брата/сестру. Радостно бегите обнимать его/ее и расскажите всем Вашу историю так, будто бы Вы онемели от счастья (жестами, мимикой).',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Выполняя приседания, быстро три раза подряд прочитайте скороговорку «Возле ямы холм с кулями, сяду на холм, куль поправлю».',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Собрать как можно больше отпечатков губ на своем лице',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Съесть без помощи рук виноградинки, лежащие на блюде',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Посиди по 10 секунд у каждого на коленях',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Сесть на стул, как на коня, и изобразить полководца',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Без слов, признаться в любви игроку <D>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Произнести речь на другом языке',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'С завязанными глазами поймай игрока <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Cтой на одной ноге, вытянув руки в стороны',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изобразить пьяную лошадь',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Быстро повторить пять раз: «Шла Саша по шоссе и сосала сушку»',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Быстро повторить пять раз: «Еду я по выбоинам, из выбоин не выеду я»',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Поцеловать стену у себя за спиной: стоя примерно в 50 сантиметрах от стены',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изобразить без слов, что хотите пойти в школу, но не можете найти ранец',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Рассказать сказку «колобок» от имени колобка',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Рассмешить хотя бы трех человек',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Поздороваться с каждым за руку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Станцевать танец с каким-нибудь предметом',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Придумать  для каждого из присутствующих ласковое слово, типа: цыпочка, котик...',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобразить без слов, что хотите купить трех зайцев в подарок другу',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Изобразить игрока <N>, который боится съехать с горки на лыжах',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Выйти на улицу и прокричать, что скажут другие игроки',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Встать на стул и рассказать в трех предложениях о своей жизни.',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Поцеловать в губы игрока <N>, даже если он того же пола, что и ты',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'С завязанными глазами найти где-то в комнате две пары ботинок, связать их вместе и повесить на стуле.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Рассказать историю о пьяном жирафе',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Прокричать тост из другой комнаты',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Взять в одну руку вилку, а в другую ложку и стоять одну минуту, не смеясь. Игрок <D> пытается вас рассмешить, не касаясь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Выйдите на улицу, встаньте под окнами квартиры, в которой Вы отмечаете праздник, и громко, с чувством спойте любую песню про любовь',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'С игроком <N> изобразите процесс соблазнения курицы петухом',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'С игроком <N> подготовьте и сыграйте сценку семейной ссоры и примирения в доме у зайчиков',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Сделайте расслабляющий массаж игрокам <N> и <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Поцелуйте игрока <N> в коленку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Вместе с игроком <N> без помощи рук, очистите и съешьте банан',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': '<F>Накрась ногти на ногах лаком ближайшему к вам мужчине',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Сделать массаж шейно-плечевой зоны игроку <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Признаться в любви самому трезвому из присутствующих',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Скажите всем: «Я на вас обиделся» и сидите с соответствующим выражением лица в течение 5 минут. Окружающие должны постараться Вас рассмешить',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'напиши своему преподавателю, что в тайне влюблен(а) в него(нее)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Напиши сообщение с текстом "Извините, я поцарапал/а вашу машину", номер говорят другие игроки',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Ты и игрок <N> встаёте на одну ногу. Задача каждого - продержаться как можно дольше. Остальные могут мешать, но не прикасаясь. Кто простоит дольше получает возможность поцеловать любого человека на своё усмотрение',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'прижмись лбом к игроку <N> и просиди так 5 минут',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'сделай нестандартный массаж игроку <N>. Для этого можешь задействовать какие-нибудь предметы или даже кого-нибудь из присутствующих',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'у тебя иммунитет на одно любое действие! При этом ты переправишь действие на любого игрока, на которого захочешь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты жаждешь денег так сильно, что у тебя появился еврейский говор. Своим говором расскажи всем на что потратишь их.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'вместе с игроком <N> изобрази кентавра! Решайте сами, кто будет передом, а кто - задом! Ржите реалистично!',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'спрячь какой-нибудь предмет (договоритесь заранее, что это будет за предмет), теперь пусть игрок <N> ищет. Если не успел найти за минуту - он твой раб на 10 минут',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'теперь ты - секретарь игрока <N>! Записывай на листочек все, что он скажет',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'побудь фотографом, сделай десяток снимков на память',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'сидеть 5 конов в обнимку с игроком <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'наденьте что-нибудь необычное и носите до конца игры',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'держите игрока <N> за руку до конца игры',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'укуси игрока <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'вместе с игроком <N> изобрази гопника',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'съешь что-нибудь в нестандартном сочетании (например, печеньку с кетчупом). Сочетание придумывается остальными участниками исходя из наличия компонентов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': '<F>теперь ты парень. Веди себя как парень, оденься как парень',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': '<M>теперь ты девушка. Веди себя как девушка, оденься как девушка. Можно даже накрасить тебя',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Спеть песню о любви, как если бы вы были сильно пьяны ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Показать без слов, чем вы занимаетесь на работе ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Сказать тост на неизвестном языке  ',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Расскажите веселую историю из школьной/студенческой жизни ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Изобразить труп ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Сделать комплимент каждому из присутствующих гостей противоположного пола ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Изобразить сценку «Ты должен на мне жениться» с игроком <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Всем продемонстрировать свою силу. В течение часа отжаться от пола 300 раз ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Сходить к соседям и принести от них полкило соли/ведро воды/семейный альбом ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Достать для ближайшей девушки звезду с неба (звезда бумажная, задание постановочное) ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Осыпать ближайшую девушку бумажными цветами ',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'В пижаме выйти в магазин и купить кетчуп',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Раскрыть и съесть банан без помощи рук ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Бухнуться на колени перед игроком <D> и покаяться в 3 наиболее существенных грехах этого года ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Изобразить пьяного стриптизера, если бы им был игрок <D> ',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Если ты любишь геометрию, вывести число "Пи" с помощью чашки, нитки, карандаша и линейки до 15 знака ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Прожонглировать 3 сырыми яйцами. В случае неудачи убрать все последствия ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В течение часа следить за тем, чтобы все стаканы были наполнены до краев (вовремя доливать необходимые напитки) ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Стать самолетом. Покатать на своих плечах всех желающих ',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Подними на руки игрока <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Зайти на какой-нибудь популярный женский форум и создать тему «Все бабы тупицы, вы тут полную фигню обсуждаете». ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Спросить у одного из гостей, почему клей не пристает к тюбику изнутри, ведь он же КЛЕЙ!!!!При этом изображать полное непонимание. ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Изобразить из себя астролога и предсказать будущее каждого гостя на следующую неделю',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Поместить шарик между собой и игроком <N>, обняться так сильно, чтобы шарик лопнул',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Завяжи глаза и поймай игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Сделать авторский коктейль игроку <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Обменяться двумя предметами одежды с игроком <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Открытым ртом сказать громко букву «П»',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Показать гипсокартон жестами',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Напиши попой в воздухе имя <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'в течении 3 конов придумывай рифму на любую фразу игрока <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобразить Джигурду',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Выпей залпом сок или стакан воды как будто это водка и скажи «хорошо пошла!»',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Расскажите за что вы не любите своих соседей, эмоционально, громко не стесняясь в выражениях.',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'бегать с подушкой на голове и орать"я наполеон" ',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Взобравшись на стул посреди комнаты, поздравить всех с днем сантехника, стоя на одной ноге',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Рассмеши игрока <N>. А пока это у тебе сделать не удалось - стой на одной ноге',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В течение 15 секунд вспомнить 10 слов на букву «Д» (или любую другую). Если не сможешь - игрок <D> придумывает тебе наказание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Придумай смешные рифмы для имен всех присутствующих',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Написать правительству петицию о разрешении однополых браков',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Упасть на колени перед вошедшим в помещение и попросить прощения',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Помыть посуду после вечеринки',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Исполнить танго втроем с игроками <N> и <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобразить пьяного игрока <D>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Объясните и докажите игроку <N>, почему он просто обязан на Вас жениться!',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Поцелуйте каждого из присутствующих, включая домашних животных, кроме рыбок, разумеется',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Всем, собравшимся за столом, встать в круг. С завязанными глазами опознайте каждого из присутствующих только с помощью прикосновений.',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'найти рулон туалетной бумаги и из нее с помощью скотча сделать себе бороду',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'изобрази мумию с помощью туалетной бумаги',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В подъезде пробежать с нижнего этажа вверх и позвонить в каждую квартиру',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': '<M>Побрей свою ногу',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': '<M>Побрей свою руку',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Съесть щепотку (пару горошин) перца и изображать огнедышащего дракона',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В течение часа, если кто-нибудь засмеется, изображать его смех в два раза громче.',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Съесть целый лимон с кожурой и после каждого укуса рассказывать, как вкусно',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Придумайте неожиданные варианты использования 10 предметов, находящихся в комнате. Аргументируйте свои варианты',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Вы Евгений Ваганыч Петросян, шутите в его стиле на протяжении 10 минут',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Произнесите тост, используя только слова начинающиеся с буквы “П”',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Разговаривайте шепотом, в течении 10 минут, и обязательно приговаривайте всем. “Потише пожалуйста, мы здесь не одни”',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Теперь вы Пингвин, в течение 10 минут передвигайтесь только по-пингвинячьи',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Следующие 5 минут, ты должен смеяться над всем, что кто либо что-то скажет.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Перед тобой твой внуки, умиляйся как дедушка (бабушка) каждому слову и постоянно произноси “Ой Баловники, ой жуки, в кого вы такие?” на протяжении 5 минут.',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Расскажи сказку Репка от лица Репки',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Приклеить тазик к спине с помощью скотча, например, и этот человек должен немного походить на четвереньках, изображая черепаху',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'сказать каждому присутствующему комплимент на букву, с которой начинается имя',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В течение 20 минут начинать все фразы со слов «Нет времени объяснять»',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Надеть треуголкой подушку на голову и повторять «Бог дал мне корону. Горе тому, кто ее тронет.» делать так 5 минут',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Просидеть с каменным лицом (не смеясь и не улыбаясь) 10 минут',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'молчать в течении 10 минут',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'защекочи игрока <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'добыть губную помаду (яркую), обвести вокруг глаз себе и уговорить еще кого-нибудь сделать тоже самое, при этом приговаривая «чтобы ПАНДЫ в компании было две!!!»',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Покрась себя в необычный цвет и выйди на улицу. Стань Шрэком!',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Встань, походи, попрыгай, прокукарекай, сам придумай, что поделать после такого.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Побудь обезьяной целый день',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'всячески игнорируй людей в течение 10 минут',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Открой все что видишь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Продержи карандаш на кончике носа 1 минуту',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Поговори с ногой.Своей или игрока <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Задай тупой вопрос и сам на него ответь',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Съешь луковицу за 1 минуту и закуси чесноком',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Посвяти себя в рыцари. Что может быть приятней, как понять, что теперь ты настоящий рыцарь.Игрок <N> помогает тебе стать рыцарем',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Не шевелись. Представь, что ты застыл, замерз как динозавр во льду',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Притворись привидением. Помнишь мультик, где Карлсон накинул на себя простынку, нарисовал глаза и начал пугать воров. Попробуй сделать так же! Вдруг и ты кого-то испугаешь.',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Надеть женское-мужское чистое белье на голову и поиграть следующий раунд в таком виде',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Засунуть в рот огурец, банан или что-то похожей формы и сказать предложение «Дорогой, а ты скоро?» или что-то в этой форме.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Сделать дорожку из конфет и съесть их без рук',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Съесть целый лимон, посыпанный солью',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Надеть свои носки на уши и сидеть так весь следующий раунд',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Готовь всем бутерброды и чай',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Закажи пиццу и оплати ее',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Выпей очень крепкую чашку кофе или чая',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Съесть целый хлеб, не запивая. В конце можно выпить стакан',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Танцевать под свою же музыку. То есть человек должен сам создать музыку губами, постукиванием и так далее и под нее же танцевать.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Рассказать, как страстно ты хочешь фрукт (арбуз, виноград, яблоко). Обязательно проявить страсть.',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Попроси у соседей стаканчик воды (соли, сахара и т.д.)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Выпить залпом 1 литр воды',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Написать что-то совершенно ужасное на стене в своем аккаунте в соц. сети, например совершенно серьезный отчет о том, как отнял у 4-летнего мальчика игрушку, совратил старушку, украл и поджарил дельфина из дельфинария, и продал мясо соседям. Желательно снабдить отчет реалистичными фотографиями!',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': '<M>отправь сообщение лучшему другу с текстом: "Все решено, я гей!"',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': '<F>отправь сообщение лучшей подруге с текстом: "Все решено, я лесбиянка!"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Нарисуй портрет игрока <N> на его спине',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Пусть игрок <N> напишет тебе на лбу слово, которое захочет',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': '<M>Поставь аватарку в соцсети с изображением Азиса (Мразиш)',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Сними ролик из серии Гарлем Шейк и залей на YouTube или Instagram',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Поменяйте местами кофту и штаны',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Пусть игроки <N> и <N> сыграют в крестики-нолики у тебя на животе',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Подарите любую свою вещь игроку <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Выполните любое желание игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Разрекламируйте игрока <N>, будто вы продавец-консультант',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Пусть игроки <N> и <N> придумают по слову. Теперь ищи эти слова в поисковике. Поставь на аватарку в соцсети первую картинку из поиска',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Следующие 10 минут ты - пикачу',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': '<M> поставь себе на звонок песню Стрыкало "Мама, я гей!" и не меняй 2 дня',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'До конца игры веди себя как гей (лесбиянка)',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Накормить разными продуктами всех присутствующих, повторяться нельзя',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'в течении минуты делает самые неадекватные комплименты игроку <N>, которые только можно придумать (но не обидные)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'признайся в любви игроку <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'придумай стишок про игрока <N>, желательно смешной',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'гадай по ладони игроку <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'выйди из комнаты. Пусть остальные спрячут небольшой предмет (кольцо, ручку и др) куда-нибудь. Теперь тебя надо за минуту отыскать предмет. Остальные могут подсказывать тебе ("горячо", "холодно"). Если не успел - тебе придумывают наказание.',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': ' <N>, <N> и <N> играют в игру, когда стулья ставятся в круг, а игроков на одного больше, чем стульев. По хлопку игроки садятся на ближайший стул. Кому стула не хватило, тот выбывает из игры, унося один стул. (Вместо стульев можно использовать какие-нибудь маленькие предметы, которые нужно хватать). Победивший игрок получает возможность отказаться от выполнения какого-нибудь задания, если захочет.',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'начинаешь ты! Игроки по очереди должны называть песни, в которых использовалось название какого-нибудь алкогольного напитка. На обдумывание дается минута. Тот игрок, который не смог вспомнить - выполняет какое-нибудь наказание (придумывают присутствующие).',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'начинаешь ты! Играем в "Я никогда не". Игроки должны по очереди называть что-то такое, что он никогда не делал, а остальные присутствующие делали. На придумывание дается минута. Тот игрок, который не смог придумать - выполняет какое-нибудь наказание (придумывают присутствующие).',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': '<F> <F> и <F> играют в игру, когда стулья ставятся в круг, а игроков на одного больше, чем стульев. По хлопку игроки садятся на ближайший стул. Кому стула не хватило, тот выбывает из игры, унося один стул. Однако стулья не свободные - изначально на них сидят <M> и <M>. Победивший игрок получает возможность отказаться от выполнения какого-нибудь задания, если захочет.',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'пусть все присутствующие кроме тебя придумают по одному слову. Тебе нужно придумать тост, поздравление или интересную историю, используя все слова.',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'выйди из комнаты. Пусть остальные произведут 5 различных изменений в облике (смена одежды, изменение прически и др). Теперь вернувшись, ты должен за 5 минут обнаружить все изменения. За каждое ненайденное изменение ты должен сделать выполнить какое-нибудь наказание (придумывают присутствующие).',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'выйди из комнаты. Пусть остальные придумают слово-существительное (это может быть предмет, персонаж или реальная личность). Ты должен отгадать слово за 3 минуты, задавая вопросы, на которые остальные будут отвечать "Да" или "Нет". Если не успел - выполни какое-нибудь наказание (придумывают присутствующие).',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'расскажи 3 факта о себе (один из них - вымышленный). Пускай остальные думают, какой именно. Если отгадали - отожмись 10 раз.',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'нарисуй любого игрока. Пускай теперь остальные угадывают, кого ты нарисовал',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'нужна денежная сумма в размере 150 (рубли, тенге, доллары - не важно). Попробуй собрать ее. Остальные игроки должны предоставить свои деньги, чтобы ты смог выполнить задание.',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'начинаешь ты! Игроки по очереди называют числа по порядку, начиная с 1, но пропуская те, которые либо делятся на 7, либо содержат в себе цифру 7. Тот, кто первый ошибется, должен выполнить задание, которое придумывают остальные',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'начинаешь ты! Предложи тему для разговора - такую, чтобы на эту тему можно было что-нибудь перечислять (например, марки автомобилей, фильмы с Леонардо Ди Каприо или напитки). Начиная с тебя, игроки по очереди называют, не повторяясь, что-то из этой темы. Тот, кто не смог назвать - выполни какое-нибудь наказание (придумывают присутствующие). ',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'выбери любую песню, и пусть все присутствующие кроме тебя ее поют',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Поцеловать всех игроков противоположного пола и одного игрока своего',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'В течение минуты все щекочут тебя',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'играют все! Игроки должны передавать друг другу игральную карту (или какую-нибудь бумажку) с помощью губ (без рук). Если вдруг кто-то уронит - должен выполнить какое-нибудь наказание',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'все называют по одной черте в тебе, которая им нравится и не нравится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'играют все! все должны поменяться друг с другом каким-нибудь аксессуаром или частью одежды',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'массовая драка подушками!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'групповые обнимашки!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'тебе завязывают глаза, и ты должен поймать кого-нибудь противоположного пола и поцеловать',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'играют все! соревнования по прыжкам вверх! кто выше?',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'покажи всем свое фото из какого-нибудь документа (паспорта, студенческого)',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'придумай прозвище всем игрокам',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'парни и девушки делятся на 2 команды. По очереди исполняют песню, которую выберут сами. Ты - судья, решай, кто спел лучше и победил',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'общее состязание! кто быстрее разденется до нижнего белья и оденется обратно, получает право поцеловать любого игрока на выбор',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'пройдись по всем игрокам и скажи, на какого известного человека похож тот или иной игрок',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'общее соревнование! игроки пьют что-то из одинаковой посуды через соломинку. Кто сделал это дольше всех должен снять часть одежды',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'найдите бутылочку и поиграйте в нее 5 минут',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'поцелуй игрока с самым коротким именем',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'потанцуй с игроком <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'сделай массаж стоп игроку <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'выпей пол-литра воды залпом',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'назови все алкогольные напитки, которые ты знаешь',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'покажи тату, пирсинг, если они у тебя есть',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': '<M>позвони другу и скажи, что тебя забирают в армию',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': '<F>позвони подруге и скажи, что ты беременна',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'найди игрока с самым приятным ароматом волос',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты участвуешь в быстрых свиданиях. Спроси игрока <D> о чем-нибудь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ругайся в течении 20 секунд',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'говорите 10 минут на интернет-жаргоне ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'говорите 10 минут на тюремном жаргоне ',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'сними с себя часть одежды, бегай по помещению, крутя снятую деталь одежды над головой и крича',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'игрок <N> пишет тебе на спине послание маркером, ты должен догадаться, что он написал',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'поставь статус в соцсети "влюблен в <N>"',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'сделай массаж ступней игроку, у которого дырявые носки',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'нарисуй себе монобровь без зеркала',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'расскажи, что значит твое имя. Если не знаешь - придумай',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'делай все в слоу-мо в течении 5 минут',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'возьми телефон у игрока <N> и напиши любому контакту что-нибудь необидное и смешное',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'тебе завязывают глаза. Каждый игрок по очереди подходит к тебе и аккуратно кусает за ухо. Ты должен отгадать каждого',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'выбери телефон жертвы, позвони, а затем когда она возьмет трубку, сбрось. Перезвони и скажи: "Мы звоним вам, чтобы сказать, что вы не выиграли iPad, т.к. не успели не ответили сразу на звонок и приз ушел другому абоненту"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Игроки <N> и <N> соревнуются в умении рисовать! Рисуйте в течение трех минут портреты друг друга на спине игрока <N>! Пусть игрок <N> определит, кто лучше рисует',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изображай червяка: проползи по полу от одного конца комнаты до другой',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Клюнь своим носом всех игроков по очереди, при этом ты должен/а прыгать на одной ноге',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобразите с игроком <N> игру в Mortal Combat - вы якобы деретесь, используете различные приемы, фаталити и бабалити',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Изобразите с игроком <N> поединок карликов - встаньте на колени и сделайте вид, что деретесь',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изобразите маньяка',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Сделайте вид, что вы игроком <D> прилипли друг к другу волосами и никак не можете расцепиться',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Бегай вокруг игрока <N> и кричи что-нибудь, а он должен придумывать несуществующие слова',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'С игроком <N> соревнуетесь в придумывании несуществующих слов и их определений - кто придумает смешнее, тот выиграл, это определяют остальные игроки',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Сфоткайся как тп и поставь полученное фото на аватарку',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'С игроком <N> соревнуетесь в скоростном поедании пирожков/печенья/проч. - кто больше съест за полминуты, имеет право поцеловать любого человека на свой выбор',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Сказать поздравление или тост в честь хозяина, используя только слова, начинающиеся на букву П (должно быть не менее 7 слов)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Прокуси надутый воздушный шарик',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'С игроком <N> соревнуетесь, кто дольше сможет не моргать. Победивший имеет право поцеловать любого человека на свой выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изобразите дикий танец с игроком <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': '<M>Игрок <F> - твоя жена, а игрок <M> - ее любовник. Изобразите сценку: муж возвращается из командировки слишком рано',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Игрок <N> - твоя мочалка, натрись ею',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': '<M>расхвали себя так, будто ты альфа-самец и супер пикап-мастер',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'прижмись щекой к игроку <N> и просиди так 5 минут',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'позвони на любой номер',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'постой на руках у стенки 10 секунд',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'возьми в рот жвачку, пожуй немного, отдай дожевывать ближайшему игроку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Произнеси звук, который издает животное, в год которого вы родились',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'гладить всех по голове',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'падай на колени перед игроком напротив тебя',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'изобрази веселую лягушку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Все игроки должны прижаться друг к другу лбами и сидеть так 5 минут',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'изобрази назойливую муху. Приставай к игрокам <N> и <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'сделай 5 фото со игроком <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'нарисуй себя левой рукой ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'надень все наизнанку ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'кидай в игрока <N> все, что попадется под руку в течение 1 минуты',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'возьми за руку самого высокого игрока',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': '3 следующих задания делаешь ты',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'изобрази пингвина, танцующего самбо',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'просиди с высунутым языком 2 кона',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'побрей ноги игроку <M>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'сделать 10 комплиментов себе',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'укуси всех, кроме игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'дать пощечину игроку <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'поменяйте местами майку и штаны',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'съесть 2 кружочка лука и умыться холодной водой',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'накрасить ногти темно-синим лаком или черным',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'почесать что-нибудь или кого-нибудь 2 мин',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'съешь без рук что-нибудь',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'в течении 5 конов изображай единорога, при тебе должен всегда быть твой рог',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'подойди к первому встречному незнакомцу и спроси, как дойти до музея поле чудес',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'до следующего дня вы с игроком <D> - пара',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'запихать в рот любую еду и сказать 3 раза «пельмешки»',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'изобразить поездку на велосипеде, игрок <N> - твой велосипед',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Облизни  руку игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'если среди игроков есть те, кто должен вам денег, вы прощаете им долги ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'сфотографируйся с каждым игроком в обнимку',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Изобразить человеческую многоножку с игроками <N> и <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'До конца игры все игроки должны называть тебя Джордж',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Зайди в соцсеть и поставь в качестве аватара фото игрока <N>, он должен поставить твое фото',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Изобразить сцену из фильма, который предложит игрок <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'изобразить сцену из фильма “Титаник” с игроком <D> под оригинальный саундтрек (my heart will go on)',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'в течение 3 минут приставай ко всем с фразой “У меня чешется нога! нога чешется!”',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобрази человека, скрывающего свою боль (Гарольд)',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Покажи всем присутствующим 3 последние переписки в соцсети',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Напиши в соцсети о том, что ты собираешь пожертвования на операцию по смене пола. Прикрепи реквизиты, чтобы было реалистичней',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Приготовь всем поесть, игрок <D> помогает',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Завтра ты весь день должен ходить без нижнего белья. Игрок <D> должен проконтролировать',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Позвоните по случайному номеру (проще всего найти его на сайте объявлений) и скажите, что собираетесь посмотреть фильм, но не знаете, какой. Пусть ваш собеседник посоветует 3 его любимых фильма',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобрази любого покемона, которого назовут остальные',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Игрок <N> берет твой телефон и отправляет любое сообщение 10-му контакту в справочнике',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Докажи аргументированно, что курица - не птица, баба - не человек',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Докажи аргументированно, что нудистом быть стильно, модно, молодежно',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'До конца игры, если ты назовешь любого игрока по имени, ты должен будешь поцеловать случайного игрока своего пола',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Переезжай жить в Гондурас',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Игрок <M> набирает в рот воды, а ты всеми способами пытаешься её выпить',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Призови мистера Пропера. Если не выйдет, приберись сам(а)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Ты должен напугать игрока <N>. Сделай это тогда, когда он не ожидает',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'скажите речь на похоронах своих наушников',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Садись на ручки к игроку, который тебе нравится',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Достань, достань и наливай всем чай, достань, достань и наливай всем чай, будь в центре внимания, большой компании, достань и наливай всем чай, у-у-у…',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобрази Александра Пистолетова - пой “Я стал новым пиратом” и двигайся так же',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Получи от каждого игрока по 10 рублей. Кричи “Ура, я богат!”. Обмазывайся деньгами',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Обними каждого, с кем целовался из присутствующих',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Изобрази Дона Корлеоне, пусть остальные тебе подыгрывают',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'На 3 минуты все игроки, кроме тебя, берутся за руки и в рамках спиритического сеанса вызывают понравившегося им духа! ты - этот самый дух, должен отвечать на все вопросы, тех людей которые тебя вызвали и при этом издавать устрашающий вой.',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Скрытое действие - начни сидеть в максимально странной и неудобной позе до следующего кона.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'скрытое действие - постарайся вести себя, как темный властелин Дарт Вейдер, что бы это ни значило',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'невзначай обними <D>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Добавьте вконтакте в друзья Павла Вздрочко',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'в течение 5 минут подкармливай игрока <D>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Сфотографируй игрока <D> и поставь его себе на телефон в качестве обоев',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Шепчи на ухо игроку <D> какой-нибудь свой секрет',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'отдай телефон игроку и пусть он поменяет любые 2 номера в телефонной книжке',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'действие следующего игрока ты выполняешь вместе с ним',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'изобрази баклажан, который пошел на прогулку во время дождя и не взял с собой резиновую уточку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'игрок <D> шепчет игроку <N> на ухо имя своего любимого исполнителя/название группы. Ты должен угадать. Угадал - целуй',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'свое следующее действие ты сможешь перенаправить на любого игрока по желанию',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'до конца игры ты должен будешь обращаться ко всем \'Господин/жа\', кроме игрока <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'сядь на игрока <N>. На тебя сверху садится игрок <N>. сидите так 3 хода',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'изобрази игру на музыкальном инструменте. Музыкальный инструмент - игрок <D>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'изобрази любую сцену из игры престолов. Используй остальных игроков по своему усмотрению',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'до конца игры ты должен поднимать руку, прежде чем что-то сказать',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'на протяжении всего дня ты не должен материться. За каждое матное слово ты должен игроку <N> по 10 рублей',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'докажи игроку <N>, что он должен купить у тебя телевизор',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Обними самого симпатичного игрока',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Положи книгу на голову и сиди так 5 минут. Если упадет - выполняй наказание, придумывают остальные игроки',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Накорми домашнее животное',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Поделись каким-нибудь фактом о себе, который не знает никто из присутствующих',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Изобрази бомжа-хипстера-видеоблоггера',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Садитесь в обнимку на 2 кона с игроком противоположного пола, который последним из присутствующих ходил на учебу',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'игроки <N>, <N>, <N>, <N> - ваши рабы на 5 минут. Они должны делать все, что вы пожелаете',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Все игроки целуют тебя в щечку',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Спрашивайте у себя и всех присутствующих, куда делся жук Аркадий',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Потритесь спиной об игрока <D>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Поставь на аватарку последнюю фотку с камеры своего телефона',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Поставь на аватарку последнюю фотку с камеры своего телефона, на которой есть ты',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Укажите на игрока, который по вашему мнению является самым молодым из присутствующих. Если угадали - целуйте любого игрока на ваш выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Укажите на игрока, который имеет наибольшие шансы выжить во время зомби-апокалипсиса',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Отправь своим родителям сообщение, в котором сообщаешь им о своем намерении побриться налысо',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Всю остальную часть игры ты должен всегда выбирать Действие',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Выбери игрока, который должен будет до конца ходить задом наперед',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'все игроки пишут на одинаковых листочках какой-то факт о себе, о котором никто не знает. Потом листочки перемешиваются, и игроки отгадывают, о ком тот или иной факт',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Вжух - и ты на 10 минут превратился в опоссума',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Спой "Ты поторопись, у нас щас котлетки, с макарошками, нет, с пюрешкой"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Смешай ментос и кока-колу',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Сними видео "Pen-pineapple-apple-pen"',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Подпишись на страницу "Правда или Действие" в соцсети',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изобрази любого видеоблоггера',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Залезай в ванну в одежде и включай душ на 2 минуты',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Обними игроков, с которыми ты знаком больше 1 года',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Надень книгу на голову и говори всем "я в домике"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'С игроками <N> и <N> устройте конкурс песни, кто лучше споет. Песню каждый выбирает сам. Победитель (решают остальные игроки) получает право поцеловать любого игрока на свой выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Игрок <N> готовит тебе салат из 4х ингридиентов, ты должен съесть',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'напугай любого игрока. Сделай это тогда, когда он не будет этого ожидать. Не говори, кого ты будешь пугать',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Оплати покупку полной версии - отдай деньги игроку, на чьем телефоне вы играете',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Придумай штраф (некое действие, задание), которое будут выполнять участники в случае отказа (или провала) выполнять действие или отвечать правду',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В случае отказа выполнять задание или отвечать на вопрос теперь любой игрок должен отдавать тебе 100 рублей',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'В случае отказа выполнять задание или отвечать на вопрос теперь любой игрок должен вносить в общак 100 рублей. Эти деньги можно потратить на еду, питье и покупку полной версии этой игры :)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Купи полную версию на свой телефон',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Антиправда! Задай вопрос, все игроки кроме тебя должны на него ответить',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Придумай любую тему (школа, водный спорт, психбольница и пр.). Все игроки по очереди, включая тебя, должны назвать любую ассоциацию на эту тему',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Обними игроков такого же знака зодиака',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Встаньте перед любым помещением и отговаривайте всех туда заходить',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Поменяйте прическу (подстригите немного волосы)',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Сделай косплей любого персонажа из компьютерной игры',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Скажи 20 пословиц за 2 минуты - если не успел(а) - тогда выполняй желание других игроков',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Тебе заклеивает рот скотчем игрок <D> на 10 минут',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'пригласи на танец любого человека своего пола',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'В течение 10 минут на любой вопрос отвечай "Это норка"',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Вжух - и ты на 10 минут превратился в Александра Невского',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Хардкор! Выполняй 10 следующих заданий вместе с игроками, выполняющими задания',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'После каждой своей фразы говори "если вы понимаете, о чём я"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'возьми интервью у игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'изобрази сергея дружко! Хайпани немножечко',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'назови плюсы и минусы всех игроков по очереди',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'вызови игрока <N> на версус-баттл',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'нарисуй что-нибудь на свое усмотрение на спине игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'изобрази вместе с игроком <N> молодую счастливую семью',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'представь, что игрок <N> - крестьянин из 1850 года. Объясни ему, что такое интернет',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'покажи всем, что такое настоящий храп!',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'придумай самый тупой и бессмысленный лайфхак',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен разрисовать маркером первого, кто сегодня уснет!',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'в течение следующей недели ты должен ежедневно выполнять одно желание игрока <D>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'всю следующую неделю вы с игроком <D> должны делать вид, что встречаетесь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Постучись к соседям и дай им немного денег',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Другие игроки завязывают тебе глаза на 10 минут и наряжают тебя',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Установи будильник на своем мобильном на 6 утра',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Ты должен молчать до тех пор, пока кто-нибудь не назовет тебя по имени',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Стань человеком-одеялом (согрей кого-нибудь)',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Спой любую песню, подыгрывая себе на воображаемой гитаре',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'выбери игрока, который пощекочет твои стопы',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Разыграй кого-нибудь по телефону, настаивая, что ты его/ее тайный поклонник',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Пусть игрок <N> сделает тебе прическу на свое усмотрение. Ты должен/жна сохранить ее до конца игры',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Прочитай вслух последнее полученное тобой сообщение',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты - человек, который озвучивает громкую сцену поцелуя в фильме. Выбери фильм сам(а)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Потрись носом об каждого из игроков',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Позвони человеку, в которого влюблен, и признайся в любви',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Позвони на случайный номер и притворись, что позвонил тебе человек на том конце провода, а вовсе не ты',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Позвони человеку, в которого влюблен, и просто дыши в трубку',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Подними самого легкого игрока в комнате',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Отправь сообщение со словами "Я тебя люблю" 5 людям',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Отложи свой смартфон в сторону до конца дня',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Поставь лайки на странице любого человека на выбор игрока <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Открой окно и постарайся сделать так, чтобы кто-нибудь на улице помахал тебе',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Облей себя стаканом воды',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Завяжи себе глаза и танцуй медленный танец с другим игроком. Ты можешь наощупь определить, кто это?',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Достань содержимое своего кошелька, карманов и сумочки и объясни каждый предмет',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Широко улыбайся, но не смейся в течение 3 минут, пока другие продолжают игру',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Ты не можешь говорить Да или Нет до конца игры. Другие игроки придумывают наказание за нарушение этого правила',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Продержи пластиковый стаканчик с водой у себя на голове в течение 5 минут. Не пролей воду',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Преподай двухминутный урок йоги',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Повтори предыдущее задание',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Назови человека, которого ты ненавидишь больше всего',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Укажи на того, кто, на твой взгляд, смог бы стать людоедом, чтобы пережить апокалипсис',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Укажи на того, кто, на твой взгляд, может попасться мошенникам в интернете',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Укажи на того, кто, на твой взгляд, мог бы украсть твою еду, пока ты не видишь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Укажи на того, кто, на твой взгляд, мог бы пойти на фестиваль аниме',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Опиши себя в 30-летнем возрасте',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Назови 3 вещи, которые ты больше всего ценишь в себе',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Расскажи о том, как ты использовал/а кого-нибудь для своей личной выгоды',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Признавайся, кто тебе нравится',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Позволь друзьям задать тебе вопрос и ответь на него',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Придумай тост в честь клуба анонимных алкоголиков',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'выучи на испанском любую фразу, которую предложит игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'С использованием игроков <N>, <N> и <N> "напиши" на полу слово БДСМ. Ну или ЛДПР',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Удали свою страницу вконтакте',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': '<M>пусть игрок <D> накрасит тебе глаза. Сиди так до конца игры',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'пусть игрок <N> загадает тебе слово. Объясни остальным это слово, используя только слова, начинающиеся на букву "П". Если удалось - целуй любого игрока, иначе выполняй наказание, которое придумают остальные игроки',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Запиши видео, как ты поешь в душе',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Пусть игрок <N> нарисует тебе на щеках помадой красные спирали как у Пилы. Сядь на велосипед (желательно трехколесный) и скажи "Я хочу сыграть с тобой в игру"',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': '<F>залезь на шею к игроку <M>. Надень длинное пальто, застегни. Сделай фото',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': '<M> надень юбку и сиди так до конца игры',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': '<F> переоденься в мужскую одежду и сиди так до конца игры',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Тебе завязывают глаза. Теперь в течение 10 минут каждый может щекотать тебя',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'В людном месте залезь на дерево и кричи "ку-ку" каждому проходящему человеку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'распечатай на цветном (ну или на ч/б) принтере твоё лицо столько раз, сколько игроков в игре так, чтобы оно было в масштабе примерно 1:1. Вырежи по контуру и раздай каждому игроку, чтобы они могли использовать твое лицо как маску. Сделай общее фото/селфи',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'закинь ноги на игрока <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Сделай сюрприз игроку <D> через полтора часа',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Спой любую песню Валентина Стрыкало, выложи в Instagram или другую соцсеть',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Спой под любую песню Верки Сердючки, выложи в Instagram или другую соцсеть',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Вынесите мусор вместе с игроком <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'объясни, кто такой свингер-метросексуал так, будто объясняешь своему ребенку ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Подкидывать и ловить ртом какую-то небольшую еду (орешки, ягоды, конфетки). Если ни разу не поймал из 5 раз - выполняй наказание, которое придумают окружающие',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Надуть щёки и в таком положении сказать: "Я хомячок, я ем зерно, его не трожь оно моё. А если тронешь тебе капец!"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Представьте что вы мандариновый наркоман, пытающийся бросить зависимость',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'нарисуй игрока <D> так, если бы ты был Малевичем',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Надуть шарик носом',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Заглаживайте волосы назад, каждые 10 секунд, в течение 5 минут. Вздыхайте и говорите “ Да уж ситуация, так ситуация”',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Изобразить статую Свободы с бутылкой в руке',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Переведи песню Владимирский централ на Итальянский язык и спой',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Каждый раз, когда кто-то чихает, кричать “Ахтунг!” и впадать в истерику',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Каждый раз, когда кто-то называет тебя по имени, засовывать в рот конфетку',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Манки бизнес! Купи в магазине бананы, залезь на дерево и криками изображай обезьяну. Кидай в сторону прохожих кожуру',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Сходить в ванную и помыть голову гелем для душа',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'С серьезным видом обратиться к игроку <N> — «Миша, Мишенька медведь, научи меня пердеть» ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Изобразить кандидата (в депутаты, мэры, губернаторы) и наобещать такого, чтобы гарантированно избраться. Игрок <N> должен сказать: “Давай по новой, Миша, всё х-ня.   У тебя скучное лицо! Тебе никто денег не даст!”',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'изобрази Юрия Дудя, который берет интервью у порноактрисы (игрок <N>), победившей в номинации “глубокая глотка 20!8”',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Вставить себе в рот две зубочистки и расположить их как у моржа, сделать фото',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Засунуть лицо в таз с водой и сказать «Я капитан подводной лодки»',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'съесть яблоко , привязанное на веревке, без использования рук',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'съесть яблоко, плавающее в тазике с водой.',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Ты проиграл(а) зарплату своих подчиненных в онлайн-казино. По крайней мере, у тебя не было проблем с доступом к джойказино”',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Вас случайно заперли на работе поздно вечером. Вы работаете в бюро похоронных услуг “Солнышко""',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Ваш пес Адольф съел флешку с вашей курсовой работой, которую вы должны защищать утром"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Вы застряли в лифте с генеральным директором вашей фирмы по производству фаллоимитаторов"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Вы приходите на работу, а на Вашем месте сидит другой работник. Он негр"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “У Вас завтра важный экзамен, а у Ваших соседей громко играет “О боже, какой мужчина” и “Лада седан""',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Вы пришли домой, а на Вашей кровати спит голый незнакомый мужчина"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Вас пригласили в ресторан. Ужин, шампанское, свечи, короче интим. Вы поужинали, и вдруг Ваш(а) спутник(ца) исчезает, не расплатившись”',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты должен(а) рассказать (желательно в форме веселой истории), как выкрутишься из предложенной ситуации: “Вы купили краску для волос, покрасили волосы, а оказалось, что она зеленого цвета, но времени перекрашиваться у Вас нет, т. к. сегодня свадьба вашего внука”',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Выбери среди гостей своего «близнеца», объясни, что между вами общего: цвет глаз, волос, умение вывести из строя любую технику, любовь к рыбалке и т.п.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изобразить свинку Пеппу',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Каждые 5 минут в течении получаса вытирать салфеткой губы игроку <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Скажите комплимент игроку <N> и передайте это задание по кругу',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Станцуй вальс с игроком <D>. каждый из вас должен стоять на одной ноге',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Позвонить на любой номер и спросить: »Вам холодильник нужен?» если ответят: «Нет?» сказать:»Тогда мы сейчас приедем и заберем!» А если ответят: «Нужен», тогда придётся импровизировать!',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Пронести ложку с водой (или любой другой жидкостью) в зубах 15 метров так, чтобы не пролить. Иначе выполни наказание ',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Твоя задача – начиная с фразы «я никогда не … », назвать 5 вещей, которых ты никогда не делал, а все остальные делали. Справился - целуй любого игрока на свой выбор',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Ручкой нарисовать на теле игрока <N> татуировку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Убeдить дpузeй вступить в клуб анонимных Антонов и пoдписaть (в тopжeствeннoй oбстaнoвкe) сooтвeтствующий дoгoвop',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Изобразить человека в кресле у стоматолога',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Записать на диктофон свой смех. Включать каждый раз, когда кто-то не смешно шутит ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Захлопать в ладоши, продолжать 30 секунд',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Изображать 5 минут игрока в баскетбол',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'презентовать перед всеми свою новую книгу, которую вы якобы написали',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Троллейбус. Надень колготки на голову, а чулки закрепи где-нибудь наверху',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'все игроки дают тебе пендель',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В течение 20 минут разговаривай только как йога из звездных войн - привычный слов меняя порядок ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'изобрази виталия кличко и следующие 10 минут разговаривай в его стиле',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'остальные игроки готовят для тебя коктейль, смешивая съедобные ингредиенты в необычном сочетании ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'в течение следующих 30 минут, при обращении к кому-либо, целовать руку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Пойти в ванную и облиться холодной водой',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Проэпилируй любую часть своего тела, игрок <D> помогает',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты играешь с игроком <D> в камень-ножницы-бумага. Необходимо выкинуть 3 раза ничью. Если не ничья, то твой соперник дает тебе пощечину ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'побудь руками игрока <N>. Он прячет свои руки за спину, а ты пристраиваешься к нему сзади, чтобы казалось что твои руки - это руки игрока. Напои его каким-нибудь напитком и накорми каким-нибудь блюдом, жестикулируй и импровизируй ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': '<M>в соцсети добавить 2 комментария под своей фотографией: “Что это за гей на фото?” и “А, это же я” ',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'в соцсети добавить 2 комментария под своей фотографией: “Как дела?” и “Все отлично) ))” ',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'в любой соцсети или мессенджере в групповом диалоге начать беседу с самим собой на любую тему, будто у тебя раздвоение личности ',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'поставить 100 лайков на странице любого человека, которого выберет игрок <N> ',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Добавь странное и забавное объявление на авито или любой другой сайт, например: "продам килограмм нестиранных носков", "продам стул, на котором сидел аркадий укупник" или "куплю 123 бутылки из-под пива". Обязательно прикрепи фотографии',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь странное и забавное резюме на сайт по поиску работы, например: "оказываю услуги профессионального имитатора бурной деятельности - пристально смотрю в монитор с умным видом",  "профессионально открываю пивные бутылки пузом" или "изображаю вашу девушку на встречах с друзьями, оплата почасовая"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Поставить себе на аватарку фотку некрасивой девушки/парня и написать в статус "Люблю тебя, моя(й) милая(ый)"',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'на столе в школе, вузе или офисе ты должен(на) поставить фотографию, на которой будет изображен(а) очень некрасивый(ая) мужчина (женщина) с подписью: «Обожаю тебя, мой(я) любимый(ая)»',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'позвони на радио, скажи необычное поздравление и попроси поставить самую нелепую песню',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'покрасить волосы в другой цвет и проходить в таком виде пару недель',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Зайди в переполненный лифт и произнеси перед всеми слова: «Итак, всем, наверное интересно, почему я здесь вас собрал?»',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Измазаться в с ног до головы различными продуктами темных тонов, и зайти к соседу снизу. Скажите, что сверху на вас прорвало канализацию, и что скоро потоп будет и у них.',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'запишись на танцы и ходи целый месяц',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'После того, как кто-то сделает действие или ответит на вопрос, хлопайте в ладоши и хвалите.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Когда игроки расслаблены, сделайте вид будто из вас рождается «Чужой»',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'В течение следующих трех вопросов рассказывайте всем что у вас был случай намного интереснее и обязательно расскажите о нем (можно приврать).',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Купить самый дешевый билет на самолет, остальные решают, куда именно ты полетишь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'позвони своим родителям и скажи, что ты их любишь',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'выложить в соцсеть свою последнюю фотографию',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'выложить в соцсеть любую фотографию места, куда бы ты хотел(а) отправиться путешествовать (город или страна)',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'распечатай и и повесь у себя в комнате любую цитату Кличко',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'напиши у себя в статусе, что отныне твоя жизненная цель - уехать в Таиланд и  трахаться с трансвеститами',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Закажи доставку цветов второй девушке из списка твоих друзей в соцсети. В записке укажи: “от тайного поклонника”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'покажи страницу человека в соцсети, которого ты считаешь очень красивым',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'запрись один(на) в комнате без света и включи отрывок из какого-нибудь фильма ужасов (на 10 минут)',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'укуси игрока <D> за щеку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'весь следующий день путай имена друзей и знакомых',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'изображай петуха в течение минуты',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'кукарекай всегда, когда игрок <N> хлопает в ладоши',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'выбеги на улицу в трусах, крича “Я есть совершенство!”',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'заведи свой блог на youtube и выложи первое видео',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'позвони в сервис по ремонту телефонов и попроси починить банан',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Придумай рекламу любому блюду на столе',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'позвони на первый попавшийся номер в телефоне игрока <N>, начинающийся с буквы Р, и скажи, что ты хочешь продать килограмм колбасы “Танюша”',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'запости в соцсеть свою детскую фотографию',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'запости в соцсеть свою нелюбимую фотографию',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'запости в соцсеть фото некрасивого человека противоположного пола и подпиши: люблю тебя, сладенький(ая)',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'дай тупейший совет игроку <N> о том, как стать успешным среди противоположного пола',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'закажи и оплати суши или пиццу, пусть игрок <N> выбирает',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'в течение дня здоровайся со всеми, кого видишь',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'покажи на карте, где находится Гваделупа. Не смог(ла) - выполняй следующее задание вместо следующего игрока',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'придумай название своего родного города, если бы он находился в Монголии',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Открыть словарь на случайной странице, выбрать слово и показать его жестами, не используя слов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Рассказать очень страшную историю',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Запиши и выложи видео с вызовом Золотова на дуэль',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'напиши у себя в соцсети, что скорбишь по погибшему Вове Висту',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'закупись биткоином на 80 рублей',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Напиши у себя в соцсети “Я хочу как лысый из браззерс, можно даже без соцпакета”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'сними и выложи видео о том, как ты смотришь видео о том, как ты смотришь видео о том, как игрок <N> зевает. Поставь хештег #мамаявтелевизоре',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Запости в соцсети смешную картинку и подпиши ее: “Пожалуйста, не сажайте меня за мемас” и хештегом #нетрогайтенашимемы',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': '<F>запусти в сети сбор средств тебе на увеличение груди',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': '<M>запусти в соцсети сбор средств тебе на увеличение пениса',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'сними слоу-мо видео, в котором ты танцуешь чечетку, и выложи в соцсеть с хештегом #ачопотанцеватьнельзя',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'из любых предметов сооруди башню, чтобы она была выше тебя',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'позвони своим родителям и скажи, что ты их любишь. Добавь, что пельмешки все-таки ты любишь больше',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'оближи локоть игрока <D>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'расскажи шутку. Если никто не засмеялся - игрок <N> придумывает тебе наказание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'армреслинг с игроком <S>! Победивший целует любого игрока на свой выбор',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'с игроком <D> играют в гляделки, кто первый моргнет, тот проиграл - тому игрок <N> придумывает наказание',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Кто встанет последним, тот делает следующее задание',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'у тебя суперсила! человек, которому ты посмотришь в глаза, должен встать',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Первый, кому удастся лизнуть свой локоть, целует любого игрока на свой выбор',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Все левши делают 20 приседаний',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Все правши делают 20 приседаний',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Те, чьи телефоны лежат на столе, делают 10 отжиманий',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Первый, кто укажет на самого молодого игрока, целует любого игрока на свой выбор',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Первый, кто укажет на самого старого игрока, целует любого игрока на свой выбор',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Самый волосатый игрок делает 10 отжиманий',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Те, в чьем имени присутствует буква А, делают селфи на фоне унитаза',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Ты можешь задать любой вопрос любому игроку, он обязан честно ответить',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'называй всех игроков “Господин” или “Госпожа” в течение <A> раундов. Ошибся - снимай один элемент одежды',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'повторяй все за игроком <N> в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты король. Ты можешь вносить коррективы в задания в течение <A> раундов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'молчать и сидеть с каменным лицом в течение <A> раундов. Штраф - 5 приседаний',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'называй всех “сладенький” или “сладенькая” в течение <A> раундов. Штраф - 5 отжиманий',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'придумай наказание для игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'в течение <A> раундов изображать одноглазого пирата, зажав глазом пробку',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'сделай 10 отжиманий, если назвал(а) кого-нибудь по имени',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'надень верхнюю одежду и сиди так 10 минут',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'собери телефоны у всех и не отдавай в течение часа',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'придумай смешное правило на всю игру для гостей',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'включи любой клип на свой выбор без звука. Ты должен(на) петь. Другие игроки могут помогать',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Зачитай текст любой песни в стиле рэп под бит',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Не ходи в туалет в течение часа',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'на любые вопросы отвечай фразами Сергея Дружко (“Вы не правы, всего доброго”, “Вы понимаете о чем говорят все эти люди? Я нет!”, “Сильное заявление, проверять я его, конечно, не буду” и т. д.',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Спроси у всех, что бы они сказали, оказавшись перед Путиным?',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Ты можешь отказаться от следующего задания, если хочешь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Пусть игроки <N>, <N> и <N> поднимут тебя на руки',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'В течение получаса тебе запрещается дотрагиваться до игрока <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'собери у всех присутствующих шапки и сооруди себе царь-шапку. Сфотографируйся с максимально отрешенным лицом',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Ты - диктатор, каждый присутствующий должен выполнить одно твое желание',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'В течение следующего получаса тебе нужно ходить только задом',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Тебе нельзя прикасаться к предметам руками в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'накорми игрока <N> со словами “Братишка, я тебе покушать принес”',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'представь всех присутствующих так, словно они индейцы племени майя',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'изобрази мем “Неверный парень” с игроками <F> и <D>. Сделайте фото и выложите в соцсеть',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Крикни “Пол - это лава!”. Кто последний оторвет ноги от пола, тот сгорел. Ему нельзя касаться ногами пола в течение получаса',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'вызови на рэп-баттл игрока <N>. Вы должны хвалить друг друга',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Сделай фото с каким-нибудь блюдом',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Набей себе в рукава вату, салфетки или одежду, чтобы сделать себе руки-базуки. Ходи так в течение получаса',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Набери полный рот еды и спой песню, другие должны ее отгадать',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'намажь лицо чем-нибудь белым и сиди так в течение <A> раундов',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Ты - спиннер, покрутись вокруг своей оси',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'рассказывай интересные факты до тех пор, пока не найдется такой, о котором никто из присутствующих раньше не слышал',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'нарисуй себе татуировки на лице. Игрок <N> помогает',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'После каждой фразы игрока <N> говори: “Это фиаско, братан”',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Ты - популярный блогер, снимай на видео самые интересные моменты вечеринки и комментируй действия присутствующих. Не забудь придумать свое фирменное приветствие',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Самый старый игрок залезает под стол',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Все, кто младше тебя, делают по 10 отжиманий. По твоей команде',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'На все вопросы “Почему?” отвечай: “Потому что гладиолус”',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Все, кто ниже тебя, делают по 10 приседаний. По твоей команде',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Все, кто загорелей тебя, пишут у себя в соцсети: “Я шоколадный заяц, я ласковый мерзавец”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Все, у кого дырявые носки, делают тебе массаж',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'дай полный доступ к своей страничке в соцсети на 2 минуты игроку <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Кто родился в Центральной России, пишут у тебя на странице в соцсети слова на букву Х',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Кто родился на Камчатке, делают всем чай',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Кто родился на Юге, делают всем поесть',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Кто родился на Дальнем Востоке, делают совместное фото',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Те, кто бреют подмышки, делают тебе прическу',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'и игрок <S>: сравните ладони: у кого больше, тот делает 10 отжиманий',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Кто последний выходил в туалет, делает тебе напиток',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Все, у кого голубые глаза, кусают тебя за уши',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'если твои ноги не идеально гладкие, делай эпиляцию с помощью игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'расскажи забавный факт об одном из игроков',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'расскажи забавный факт об игроке <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Все должны поднять руки вверх! Тот, кто поднял последним, исполняет твое желание',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Те, кто знакомы с тобой меньше месяца, делают совместное фото с тобой',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Первый, кто возьмет в руки свой телефон, будет наказан тобой любым способом',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Те, у кого Samsung, отправляют тебе свои смешные фото',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Кто сегодня играет в эту игру впервые, целует тебя в губы',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Все курильщики отдают тебе все свои сигареты',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'те игроки, которых нет в твоем списке контактов, присылают тебе смешную картинку',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'какой последний фильм ты смотрел в кино? Те, кто его не смотрел, должны оплатить тебе следующий билет в кино',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'выбери своего раба. Ты сможешь дважды передать ему свое задание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Дай пять, братан! С игроком <N> придумайте способ здороваться, который вы будете всегда использовать при встрече',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Тот, кто последним поднимет обе ноги (одновременно), становится твоим рабом на 10 минут',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Те, кому было меньше 8 лет в 1998, показывают свое детское фото',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'если ты когда-либо какал в лесу, делай 10 приседаний',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Тот, у кого больше всего друзей в соцсети, делает 10 приседаний',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'сделай три танцевальных движения',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Следующий, кто улыбнется, делает 5 отжиманий',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Тот, у кого появился мобильный телефон раньше всех, должен обмотаться туалетной бумагой на следующие <A> раунда(ов)',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Тот, кто не сможет достать ладонями до пола, стоя на прямых ногах, должен исполнить желание игрока <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'молчи на протяжении 5 минут, начиная прямо сейчас',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Как давно ты был в душе? Если прошло больше 6 часов, иди прими душ сейчас',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Минута улыбашек! Ты должен улыбаться на протяжении 1 минуты',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'отбивай чечетку на протяжении 20 секунд',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Тот, у кого меньше всего волос, рисует тебе усы',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'рассказать самую несмешную пошлую шутку, которую знаешь',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'выбирай игрока, в чьи глаза ты будешь смотреть в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Отныне, все должны гладить свою грудь, когда разговаривают. Правило действует в течение <A> раундов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'встань на четвереньки и выгни хорошенько спину на <A> раунда(ов)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты мент! Можешь обыскать любого игрока',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'нежно держи за руку игрока <D> в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'выбери игрока, который будет тебе массировать руку, пока ему не будет велено прекратить',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'тритесь друг об друга ногами с игроком <D>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы ты выбрал(а): видеть сквозь стены или быть невидимкой? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты начинаешь! Каждый игрок выбирает игрока, который потрогает его гениталии',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'ты начинаешь! По очереди каждый игрок крутит бутылочку и целует того игрока, на кого покажет горлышко',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'ты начинаешь! По очереди каждый игрок должен потрогать своего соседа/свою соседку <X> между ног',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'ты начинаешь! По очереди каждый игрок должен потрогать грудь своего соседа/своей соседки <X>',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'ты начинаешь! По очереди каждый игрок должен показать родинку на теле, скрытую под одеждой',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'изобрази, будто у тебя запор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Последний, кто прокричит "Каналья", делает 10 отжиманий',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Все падают на колени перед тобой и кричат “выходи за меня”. Последний сделавший должен напеть свадебный марш',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'и игрок <N>: тот(та), кто пойдет в туалет первым(первой), должен написать у себя в соцсети “Я не мог(ла) этого больше терпеть”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'и игрок <S>, начинайте отжиматься! Тот, кто устанет первым, должен написать у себя в соцсети “Почему жизнь так несправедлива?!”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'сделай 10 отжиманий на 1 руке',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'выщипни волосок со своего живота',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'позволь игроку <N> поменять аватарку на твоей страничке в соц. сети до конца вечера',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'произнеси имя игрока <N> наоборот',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'поцарапай спину игроку <D>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'сделай 5 кругов вокруг своей оси',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'и игрок <S>, кто из вас сможет прокрутиться на месте дольше, тот победил! Победитель целует любого игрока на свой выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'и игрок <S>, кто из вас сделает больше приседаний, тот победил. Проигравший делает следующее задание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'и игрок <D>, кто из вас сможет как можно дольше повторять "я люблю анал", победил. Проигравший делает надпись на руке с таким же текстом',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'и игрок <D>, кто из вас сможет как можно дольше повторять "я сладкий бубалех", победил. Проигравший делает надпись на руке с таким же текстом',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'и игрок <D>, кто из вас сможет как можно дольше повторять "я ломал стекло", победил. Проигравший делает надпись на руке с таким же текстом',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'и игрок <S>, кто из вас сможет как можно дольше простоять в планке на локтях, победил. Победитель целует игрока на свой выбор',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'и игрок <N>, кто из вас отправит как можно больше сообщений разным людям в течении минуты, тот победил. Проигравший делает пост в соцсети “У меня шаловливые пальчики”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'ты затыкаешь уши на 5 минут',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'досчитай вслух до 200',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': '<F>ты должна продержаться 10 секунд на игроке <M>, который изображает бешеного быка на родео',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'возьмите игрока <D> за руку, тот, кто первый отпустит руку, проиграл, должен выполнить следующее задание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'позвони в дверь соседа',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'отправь сообщение с текстом "дорогая(ой), я опять обкакался". Игрок <N> выбирает, кому именно',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'надень халат, сходи к соседям и попроси у них веник для баньки',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Тот или та, у кого самая большая грудь, решает, что тебе делать',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'сделай колесо',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'объясни всем, как лучше всего какать',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'поставь статус в социальной сети, что у тебя отношения со своей рукой',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Все игроки меняются пачками сигарет между собой',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'отправь селфи тому человеку, которого выберет игрок <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'тебе дает пощечину игрок <S>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'позвони кому-нибудь и скажи ему комплимент. Кому - решает игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'отправь кому-нибудь свое фото. Кому - решает игрок <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'крикни с полным ртом',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'любой игрок может написать тебе что-нибудь на руке',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'любой игрок может написать тебе что-нибудь на лбу',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'любой игрок может написать тебе что-нибудь на щеке',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Те, кто весят меньше 57 кг, должны следующие <A> раунда(ов) сидеть на корточках',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен(а) заканчивать каждую фразу, говоря  "ну и чееее"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ляг на пол на <A> раунда(ов)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Все игроки должны вытащить свои языки, как собаки, и сидеть так в течение <A> раундов',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'все должны говорить, положа два пальца в рот в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'все преклоняются перед тобой, нашим Божеством! В любой момент ты можешь указать на того, кто будет выполнять задания вместо тебя. Действует в течение получаса',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'натяни свою кофту на голову, чтобы другие не видели твоего лица!',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты - бомж вечера! Говоришь спасибо каждый раз, когда игроки тебе будут давать 50 копеек!',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты богач! Ты можешь покупать игроков, давая им по 1 рублю. Они должны выполнять твои желания. Не более 10 желаний!',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты директор зоопарка! Любой игрок должен изобразить того животного, какого ты пожелаешь!',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'дергай за уши игрока <N> в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'щелкай пальцами и говори "да, сучка" каждый раз, когда кто-нибудь называет тебя по имени',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты Пикачу! Ты  должен говорить как Пикачу в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'отныне, вы должны говорить одновременно с игроком <N>. Не получилось - выполняете следующее задание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Все игроки должны использовать отрицание (не, никогда и тд.), когда разговаривают',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Все игроки должны говорить высоким, пронзителным голосом',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'у тебя нервный тик! Моргай как можно чаще',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'вы должны говорить как Тарзан!',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'у тебя полно вшей! Чешись в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'отныне тебе нельзя произносить согласные!',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен/должна надеть задом наперед минимум два элементы одежды',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Отойди от всех игроков на 3 метра',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты милый котенок! Облизывай тыльную часть ладони и умывайся как кошечка',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты динозавр Рекс! Твои локти должны быть постоянно прижаты к телу, пока игрок <N> не скажет прекратить',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен говорить и корчить гримасы',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен/должна мяукать после каждый фразы',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты должен/должна гавкать, как собака, после каждый фразы',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Играем в ладушки! В любой момент каждый игрок может начать играть в ладушки со своим соседом',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Отныне, если любой игрок сказал матерное слово, это слово надо написать на его теле',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Отныне, обращаясь друг к другу, надо показывать средний палец',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'никому нельзя выходить в туалет в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'выбери мысленно отстойный фильм. Все игроки по очереди должны угадать, что это за фильм. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'выбери мысленно человека, которого ты считаешь круглым дураком. Все игроки по очереди должны угадать, кто это. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'вспомни, какую глупость ты сегодня сделал (не озвучивай ее вслух). Все игроки по очереди должны угадать, что это было. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'подумай про себя, где бы ты хотел(а) отдохнуть. Все игроки по очереди должны угадать, что это за место. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'подумай про себя, где бы ты хотел(а) оторваться по полной. Все игроки по очереди должны угадать, что это за место. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'выбери мысленно самого глупого человека, которого знают все присутствующие. Все игроки по очереди должны угадать, кто это. Тот кто угадает, целует любого игрока на свой выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'встань, чтобы игрок <D> смог(ла) тебя шлёпнуть 2 раза',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы выбрали: выпить флакон духов или банку шампуня? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Выберите прозвище для игрока <N>. До конца игры все обращаются к нему/ней по придуманному прозвищу',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'скажи пословицу про игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'если у тебя кудрявые волосы, сделай 10 отжиманий',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'спародируй одного из игроков, первый, кто угадает, целует любого игрока',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'сделай то, что скажет игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'дай игроку <N> отправить фотографию с твоего телефона',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'корчь рожи, пока игрок <N> будет тебя фотографировать',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Те, кому четное число лет, должны отправить смешную фотографию кому-либо из списка контактов',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'укуси игрока, который опоздал на вечеринку / пришел позже всех',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'сядь на коленки к игроку, который предложил идею поиграть в эту игру',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'назови по одному достоинству всех игроков',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'назови по одному недостатку всех игроков',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'пригласи друга/подругу на вечеринку',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'изобрази змею на протяжении 20 секунд',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'изобрази червяка на протяжении 20 секунд',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'изобрази черепаху на протяжении 20 секунд',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'напиши горячее сообщение тому человеку, которого выберет игрок <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'отправь сообщение с фразой "я тебя люблю" тому человеку, которого выберет игрок <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'добавь 10 незнакомых людей в друзья',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'добавь в друзья незнакомца, которого выберет игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'добавь фотографию, которую сделает игрок <N>, к себе на страничку в соц. сети',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Тот, у кого размер ноги больше 46, сажает тебя к себе на коленки',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Та, у кого размер ноги меньше 38, садится к тебе на коленки',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Тот, кто не смотрел Звездные Войны, садится на пол. Ты ложишься к ним на руки',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Тот, кто не смотрел Властелин Колец, ищут тебе кольцо всевластия',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Тот, кто не смотрел Гарри Поттер, ищут и надевают на себя любые очки',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'каждые 10 минут кричи: "черт, я забыл покормить своего единорога"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Начиная с данного момента и до конца игры, всем кроме тебя запрещается поджигать сигарету',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'за один день ты тратил(а) больше 30 тысяч?',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'твоя половинка - это лучший союз в твоей жизни?',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Сделай любое фото, если ты обожаешь носить кепки',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'выбирает музыку, которая будет играть фоном',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'покатайся верхом на игроке <M>, если ты когда-нибудь катался верхом на лошади. Нет? тогда на игроке <M>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ложись на пол, если у тебя два или более высших образований',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'надень что-то из одежды наизнанку, если у тебя больше двух дипломов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Обними игрока <D>, если в твоих социальных сетях указан выдуманный ник',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Парни делают столько отжиманий, сколько красивых девушек перед собой они видят',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Девушки делают столько приседаний, сколько красавчиков перед собой они видят',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Если тебя когда-нибудь оперировали, покажи свои шрамы',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Если ты когда-нибудь попадал в автомобильную аварию, укуси за ухо игрока <D>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'нарисуй себе усы, если цвет твоих носков белый',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'игрок <N> рисует тебе бороду, если ты был/остаешься безработным',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Если ты не вегетарианец, сделай всем бутеры',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Владелец этого телефона решает, какое наказание тебе придумать',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'поставь статус у себя в соцсети “Влюблен в (игрока)” <S>, если ты когда-нибудь флиртовал(а) с девушкой(парнем) своего друга(подруги)',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'ты когда-нибудь скрывался(ась) от полиции?',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты когда-нибудь подделывал подпись?',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'спой свою любимую песню, если ты когда-нибудь искал повод, чтобы не идти на работу',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'поставь на аватарку Александра Пистолетова, если ты занимался любовью в последние 48 часов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'считаешь ли ты смешным игрока <N>?',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'считаешь ли ты умным игрока <N>?',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Если за последнюю неделю ты занимался(лась) любовью больше двух раз, надуй презерватив',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'покажи свою страницу в любой соцсети, если ты дружишь со своей бывшей/своим бывшим',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'ложись на игрока <D>, если ты считаешь ВСЕХ игроков хорошими людьми',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'если ты занимался(лась) любовью в кровати своих родителей, отправь им любое фото с сегодняшней встречи',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Хлопни в ладоши, если ты считаешь, что половые органы твоего партнера/партнерши имею странную форму',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты когда-нибудь спал с членами одной семьи (с сестрой/мамой твоей девушки/подруги и т.п)?',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'надень что-нибудь из одежды, если баланс на твоей банковской карте регулярно ниже нуля',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Все скачивают это приложение себе на телефон, ты проверяешь',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Игрок <N> пишет на твоем теле любую фразу, если ты когда-нибудь говорил(а) ребенку, что Деда Мороза не существует',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'когда ты захочешь что-то сказать, ты должен(должна) поднять вверх указательный палец, игрок <N> решает, дать ли тебе слово',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'крикни за столом внезапно во время тоста пять слов, начинающихся на з ',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'отдай свой телефон игроку <N> до тех пор, пока он тебе не разрешат его забрать',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен говорить с китайским акцентом',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'остальные игроки могут тебе задавать любые вопросы в любое время в течение 3 раундов, ты обязан(а) отвечать',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'после каждого действия ты должен(должна) имитировать звук животного, которое выберет для тебя игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты одноглазый пират! Закрой один глаз и держи его закрытым, пока игрок <N> не разрешит тебе перестать быть пиратом',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен сохранять паузу в две секунды между каждым произнесенным словом в течение <A> раундов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты болтун! Ты должен(на) говорить не переставая ни на секунду в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты должен(на) говорить с эстонским акцентом в течение <A> раундов',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Все игроки могут оскорблять игрока <N>, он(она) не может ничего сказать в ответ',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'и игрок <N> должны поменяться футболками или делать по 2 глотка каждое новое задание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты матершинник! Каждый раз, когда ты говоришь матерное слово, все должны повторить за тобой, кто повторит последним, тот должен сделать <A> отжимания(ий)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты ворчун! Если ты улыбнешься или посмеешься, должен сделать <A> отжимания(ий)',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен(на) говорить полную противоположность тому, о чем думаешь в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Назад в будущее! Ты должен(на) говорить все в будущем времени в течение <A> раундов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты должен(на) говорить с французским акцентом в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты должен(должна) говорить с акцентом в течение <A> раундов',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен(должна) говорить фразу "точняк" каждый раз, когда другой игрок перестает говорить в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен повторять всю жестикуляцию за игроком <N> в течение <A> раундов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты должен(а) отрицательно отвечать на все вопросы и добавлять аргумент в поддержку сказанного в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'садись на колени в течение <A> раундов',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен(а) стоять на одной ноге в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'повернись спиной к другим игрокам, тебе скажут, когда можно будет повернуться!',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'танцуй на месте и не останавливайся в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты должен(должна) шагать и не останавливаться в течение <A> раундов',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты не можешь использовать свои пальцы в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'держи руки за головой в течение <A> раундов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'IST DEUTSCH! Ты должен(должна) говорить с немецким акцентом в течение <A> раундов',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Ты можешь не отвечать на любые вопросы в течение <A> раундов',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты должен(а) говорить с полным ртом в течение <A> раундов',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты сама невоспитанность! Положи локти на стол и сиди так в течение <A> раундов',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты очень нежен(нежна) этим вечером! Каждый раз, когда ты гладишь игроков по затылку, они должны мурлыкать',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'сделай <A> щелбана(ов) игроку <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'ты Бэтмен! Разговаривай как он',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'ты должен повторять за игроком <N> все жесты',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты диджей! Ты можешь ставить ту музыку, какую захочешь',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты можешь разговаривать только с игроком <N>, он(она) твой единственный друг(подруга)',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'каждый раз, когда кто-нибудь из игроков смотрит в твои глаза, он(она) должен пританцовывать',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'каждый раз, когда ты что-то говоришь, ты должен делать комплимент игроку <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Перейдем на Вы! Отныне, все игроки должны обращаться друг к другу на Вы, ты должен(а) отшлепать того, кто забудет про это правило',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'никому нельзя использовать правую руку. Отшлепай игрока, который нарушит это правило',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'теперь тебя зовут <N>! Игроки <N> и <N>, <N> и <N> тоже меняются своими именами. Отшлепай игрока, который спутается в новых именах',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Отныне, разговаривая между собой, нужно произносить вслух знаки препинания (пример:" Маша запятая ты красивая точка"). Отшлепай игрока, который забудет про это правило',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'При обращении к кому-либо из игроков, заканчивайте фразу словами "я тебя люблю"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Играем в игру “Да/Нет” не говори! Отшлепай того игрока, кто произнесет эти два слова',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Запрещается показывать пальцем на игроков. Отшлепай игрока, который нарушит это правило',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'в любой момент ты можешь незаметно положить большой палец на стол и тот, кто из игроков последним повторит за тобой, должен выполнить твое задание',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Все игроки должны обращаться к тебе  "Мой господин"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'придумай новое правило, которому должны будут следовать все игроки. Игрок <N> должен будет отшлепать игрока, который нарушит это правило',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Запрещено обращаться к игрокам по имени. Отшлепай игрока, который нарушит это правило',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Всем игрокам запрещено задавать вопросы. Отшлепай игрока, который нарушит это правило',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Игрокам запрещено отвечать на любые вопросы. Отшлепай игрока, который нарушит это правило',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Все игроки должны игнорировать и не разговаривать с игроком <N>. Отшлепай игрока, который нарушит это правило',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'выбери слово, которое никто не должен произносить. Отшлепай игрока, который нарушит это правило',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'все игроки должны заменять букву "р" на букву "л", во время разговора. Сними 1 элемент одежды с игрока, который нарушит это правило',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Рядом сидящие игроки не могут смотреть друг другу в глаза. Отшлепай игрока, который нарушит это правило',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'При обращении к тебе, в конце добавляем "ты-дыщ" и хлопаем тебя по руке',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Когда твой игрок <N> ест или пьет, хватай его за любую часть тела',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Каждое предложение нужно заканчивать фразой  "бл*, за*бал"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'замри на <A> раунда(ов)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'ты снайпер! Ты должен(должна) незаметно подмигнуть одному из игроков, тот, кому подмигнули, говорит какую-нибудь нелепую фразу, в которой все слова начинаются на букву “П”, и подмигивает следующему, и так далее',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Игра для всех: правши не должны держать предметы в правой руке, левши - в левой. Отшлепай того, кто перепутал руки',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Все должны разговаривать как магистр Йода. Отшлепай игрока, который нарушит это правило',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Новое правило! Каждый игрок придумывает себе специальный жест. Теперь, когда к нему обращаются другие игроки, они должны повторять этот жест',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Тихо, вы в библиотеке! Все должны говорить тихо, как в библиотеке. Отшлепай игрока, который нарушит это правило',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Новое правило: скажем нет невоспитанности! Материться нельзя. Отшлепай игрока, который нарушит это правило',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Новое правило: все должны говорить, как в замедленном видео! Отшлепай игрока, который нарушит это правило',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Новое правило! Всем: отныне, обращаясь к кому-либо из игроков, стройте фразу в форме вопроса! Отшлепай игрока, который нарушит это правило',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Говори так, как будто вас укусила в язык оса!',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Играем в "Орел и решка": каждый из игроков говорит орел или решка и ставит на кон то или иное количество победных очков. Набравший минимальное количество победных очков становится рабом игрока, набравшего максимальное количество.',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Новая игра: включаем музыку, как только музыка останавливается, игроки делают круг вокруг своей оси. Отшлепай того, кто покружился последним',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Никому нельзя трогать лицо или волосы! Отшлепай игрока, который нарушит это правило',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Никому нельзя трогать стол. Отшлепай игрока, который нарушит это правило',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Новое правило: запрещено передавать что-либо другим игрокам. Отшлепай игрока, который нарушит это правило',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать вид пиццы. Отшлепай игрока, который не сможет ответить или назовет уже сказанное',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать, что мы делаем, чтобы спастись от похмелья? Отшлепай игрока, который не сможет ответить или назовет уже сказанное',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен описать прилагательным игрока <N>. Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синоним слова "пенис". Сними 1 вещь с игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синоним слова "вагина". Сними 1 вещь с игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синоним слова(фразы) "быть пьяным". Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синоним слова "проститутка". Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синоним фразы "заниматься любовью". Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синоним  слова "анус". Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синоним слова "мастурбировать". Сними 1 вещь с игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать качества игрока <N>. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать то, что игрок <N> любит больше всего. Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать то, что ненавидит игрок <N>. Отшлепай игрока, который не сможет ответить или назовет уже сказанное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать знаменитость на букву Ж. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать реально отстойные российские фильмы. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать фильм Стивена Спилберга. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать команду КВН. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать песню Руки вверх. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа из Симпсонов. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать нечетное число между 324 и 342. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать такое оскорбление, которое произносят в высшем обществе. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать что может убить любовь. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа South Park. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать женские эрогенные зоны. Сними 1 вещь с игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать, что рифмуется со словом "огурцы"? Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать, что рифмуется со словом "бульон". Отшлепай игрока, который не сможет ответить или скажет уже названное слово',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать, что рифмуется со словом "головка". Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать покемона. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа из Советских мультиков. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа Властелина Колец. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать часть тела. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен дать синоним женской груди. Сними 1 вещь с игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа фильма Гарри Поттер. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать часть фильма Гарри Поттер. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа из компьютерных игр (или только из серии GTA, если вы в компании геймеров). Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа из Игры престолов. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа фильма Звездные Воины. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать что-либо, где присутствуют два цвета: красный и белый. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать одно медлительное животное. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать позицию из меню в Макдоналдс. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажей из Черепашек-ниндзя. Нарисуй что-нибудь на теле игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать мультик Уолт Дисней. Нарисуй что-нибудь на теле игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Тот, кто первым скажет, в каком фильме снималась Меган Фокс, шлепает тебя по попе',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Тот, кто первым скажет, в каком фильме снималась Скарлет Йоханссон, шлепает тебя по попе',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Тот, кто первым скажет, в каком фильме снималась Натали Портман, шлепает тебя по попе',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать породу собак. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать страну Африки. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать знаменитую собаку. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать иностранную валюту. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать знаменитого диктатора. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать слово, заканчивающееся на Х. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать знаменитого бандита. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать персонажа в обтягивающих колготках. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать, что можно найти в дамской сумочке. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать город, начинающийся на букву А. Отшлепай игрока, который не сможет ответить',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен сказать рекламный слоган. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать красный предмет в комнате. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать синие предметы в комнате. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать соус. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать социальную сеть. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать схожие черты игроков <N> и <N>. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать советский мультик. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать титул Александра Невского (Курицына). Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать ведущего на телевидении. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать героя сериала Друзья. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать радиостанцию. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать ночной клуб в городе. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать трек Дэвида Гетты. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок по очереди должен назвать всемирно известную достопримечательность. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть преимущества быть мужчиной, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть преимущества быть женщиной, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди сказать, каким животным можно назвать человека, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть плюсы быть пьяным, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть негативные последствия пьянки, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди сказать чего у игрока <N>, больше, чем у игрока <N>. Игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди дать названия коктейлей, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть персонажей из мультфильма Король Лев, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть персонажей из мультфильма Futurama, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть известных политиков, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть песни группы Linkin Park, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть знаки зодиака, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть города Германии, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть футбольную команду, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть страну, в которой проходил чемпионат мира по футболу, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть негативного персонажи фильмов, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть песню Beyonce, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть песню группы ВиаГра, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть песню группы Rammstein, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен назвать песню группы The Beatles, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен назвать самый неловкий момент, который может произойти, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть телесериалы, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть телевизионную передачу, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Каждый игрок по очереди должен назвать слово, заканчивающееся на "ака". Сними 1 вещь с проигравшего! игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Каждый игрок по очереди должен назвать слово, заканчивающееся на "ок". Сними 1 вещь с проигравшего! игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Каждый игрок по очереди должен назвать слово, заканчивающееся на "сос". Сними 1 вещь с проигравшего! игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Каждый игрок по очереди должен назвать слово, заканчивающееся на "да". Сними 1 вещь с проигравшего! игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Каждый игрок по очереди должен назвать слово, заканчивающееся на "кно". Сними 1 вещь с проигравшего! игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен рассказать загадку, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен рассказать поговорку, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен назвать составную часть компьютера, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен назвать персонажа, вооруженного мечом, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен спеть матерную частушку, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок делает смешной жест, следующий игрок повторяет за ним и добавляет новый. Тот игрок, кто ошибется, делает 3 следующих действия!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен назвать праздник, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен назвать вид рыбалки, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен назвать болезнь, передающуюся половым путем, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: каждый игрок по очереди должен называть фильм со злыми пришельцами, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Новая тема! Отшлепай того, кто проиграл: по очереди называть знаменитых спортсменов и спортсменок, игрок <N> начинает!',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Игроки по очереди должны назвать сайт знакомств. Игрок, который не сможет ответить или повторится, делает тебе массаж',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Игроки по очереди должны назвать известных юмористов. Игрок, который не сможет ответить или повторится, делает тебе массаж',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Игроки по очереди должны назвать животных, занесенных в красную книгу. Игрок, который не сможет ответить или повторится, делает тебе массаж',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Игроки по очереди должны назвать фильмы, в которых играют близнецы. Игрок, который не сможет ответить или повторится, делает тебе массаж',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'По кругу все игроки называют буквы алфавита (подряд). Отшлепай игрока, допустившего ошибку',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'сделай придурошный вид: время от времени кричи, как сумасшедший',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'этим вечером ты мега социально активный, здоровайся с каждым человеком, который проходит мимо тебя',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'залезь под стол. Тебе скажут, когда можно будет вылезать',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Угадай мелодию! Включи любой трек. Первый, кто даст правильное название песни, целует игрока на свой выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Поиграем в испорченный телефон! Скажи на ушко фразу соседу слева. Передаем эту фразу друг другу, пока круг не замкнется. Отшлепай игроков, которые испортят фразу',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'возьми монетку и закрути ее. Каждый игрок по очереди должен подтолкнуть монетку так, чтобы она продолжала крутиться. Отшлепай игрока, после которого монетка упадет/остановится',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Угадай, какой любимый фильм у игрока <N>. Не угадал(а) - тебя отшлепывает игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'решай, кто купит всем еду',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'купи всем еду',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'напиши у себя на лбу "кислая капуста"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'напиши у себя на лбу "анальный шарик"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'напиши у себя на лбу "фаллос"',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'напиши у себя на лбу "опоссум"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'напиши у себя на лбу "болтун"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'напиши у себя на лбу "вазелин"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'напиши у себя на лбу "подонок"',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'напиши у себя на лбу "понос"',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'напиши у себя на лбу "зелибоба"',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'напиши у себя на лбу "простата"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'напиши у себя на лбу "лузер"',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'напиши у себя на лбу <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'напиши у себя на лбу словосочетание, которое придумают игроки <N> и <N>',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'напиши у себя на лбу "бутерброд"',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'напиши у себя на лбу "петушок"',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: летать или телепортироваться? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: послушать о личной жизни Джастина Бибера или выпить стакан уксуса? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: слушать оперу на протяжении 4 часов или выпить стакан морской воды? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: отрезать себе руку или ногу? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: съесть земли или пробежать марафон? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: съесть кошку или собаку? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: смерть 100 незнакомцев или смерть одного друга? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: 1 миллион или меч джедая? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: говорить на 9 языках или есть и не толстеть? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: посмотреть футбольный матч или выиграть в лото?  Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: ром или виски? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: быть красивым(ой) или умным(ой)? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: азиатку(азиата) или латинос(а)? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: бургер или шаурму? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: футбол или хоккей? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'За или против: блевануть на вечеринке? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'За или против: брать много налички на вечеринку? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: ковер-самолет или холодильник, который всегда полон еды? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'За или против: использовать гель для волос? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'За или против: совместных туалетов м+ж? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'За или против: вернуться в свое прошлое? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: жизнь Гарри Поттера или Билла Гейтса? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: выиграть миллион или проходить сквозь стены? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: пюрешку или салат? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: выиграть новую машину или путешествие по России? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: "Каникулы в Мексике" или "Дом 2"? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: остаться без интернета или без телефона? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: безлюдная свадьба или безлюдные похороны? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: мир во всем мире или быть мировым лидером? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: найти настоящую любовь или 10 миллионов? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: пирсинг или тату? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: быть доктором или адвокатом? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: мясо или рыбу? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: рок или электро? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Что бы вы предпочли: PlayStation или Xbox? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: выиграть в лотерею или жить в два раза дольше? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: быть звездой или что бы ваш лучший друг(подруга) был(а) звездой? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Что бы вы предпочли: знать дату или причину своей смерти? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'За или против сыграть в русскую рулетку с возможностью выиграть 100 миллионов? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Что бы вы предпочли: иметь больше времени или больше денег? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Что бы вы предпочли: быть черным рабом в Америке или женщиной в Европе во времена инквизиции? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'За или против мужских облегающих трусов? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'За или против иметь трактор? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'За или против иметь возможность менять пол? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'За или против стать другим человеком? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'За или против назвать свою собаку "Филька"? Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Вы хотели бы быть похожи на игрока <N> или <N>?  Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Вы "за" или "против" брака по расчету?  Аргументируйте свой ответ, остальные игроки показывают свое согласие пальцем вверх или вниз',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: теребонькать, лосось, великовозрастный, <N>. Прикрепи любую картинку из поиска по запросу “выдра” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: Саша Грей, Адронный коллайдер, винегрет, <N>. Прикрепи любую картинку из поиска по запросу “стыдно” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: Ангела Меркель, вантуз, летящий, <N>. Прикрепи любую картинку из поиска по запросу “чукча” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: скрепы, солдаты НАТО, заживем, <N>. Прикрепи любую картинку из поиска по запросу “путен царь”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: каналья, вприсядку, агрессивный <N>. Прикрепи любую картинку из поиска по запросу “баян бабаян” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: Сергей Дроботенко, анальный, ползунок, <N>. Прикрепи любую картинку из поиска по запросу “выхухоль” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: сайгак, Иван Гамаз, переполненный, <N>. Прикрепи любую картинку из поиска по запросу “я несу тортик” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: язь, здоровенный, тапок <N>. Прикрепи любую картинку из поиска по запросу “Стив Бушеми” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: нарния, батя-алкоголик, позитивненько <N>. Прикрепи любую картинку из поиска по запросу “тапок дерни” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: майка-алкоголичка, не влезает, фракальный, <N>. Прикрепи любую картинку из поиска по запросу “с капусткой но не красный” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: пенек, косарь, бабушка, <N>. Прикрепи любую картинку из поиска по запросу “я ломал стекло” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: стекловата, многовато, пельмешки, <N>. Прикрепи любую картинку из поиска по запросу “игорь крутой” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: валенок, трахнуть, велосипед, <N>. Прикрепи любую картинку из поиска по запросу “петушок” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: веган, полукруглый, сиська, <N>. Прикрепи любую картинку из поиска по запросу “крабовая палочка” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: жопа, жизнь, жаворонок, <N>. Прикрепи любую картинку из поиска по запросу “счастье” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: уточка, для, домик, <N>. Прикрепи любую картинку из поиска по запросу “загнивающий запад” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: молодость, туалетный, великолепно,  <N>. Прикрепи любую картинку из поиска по запросу “сергей пенкин” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: кукарекать, транформация, телепузики, <N>. Прикрепи любую картинку из поиска по запросу “вонять” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: крендель, взлетаем, пупок, <N>. Прикрепи любую картинку из поиска по запросу “серьезно” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: лоботомия, пафосный, пельмень, <N>. Прикрепи любую картинку из поиска по запросу “пюрешка” и добавь хештег “правдаилидействие”',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: андеграунд, писулька, фистинг, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: Милонов, вазелин, центробежная, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: кончик, весьма, Поле чудес, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: посасывать, Марианская впадина, Леонид <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: падеж, мемесы, целомудренная, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: вагинальный, копчик, ладушки, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: утята, инверсия, подгорает, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: интим, айфон, печеночный паштет, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: Зигмунд Фрейд, полено, копченый, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: баклажан, оголение, покемон, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: Илон Маск, РЖД, интересный, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: пенис, Арнольд, каждый, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: бдсм, краеугольный, Зимбабве, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Добавь пост себе на страницу в соцсети с шуточным текстом, в котором использовались бы слова: лгбт, каркуша, уполномоченный, <N>. Прикрепи идиотское фото игрока <N>',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'обклей все помещение стикерами',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'игрок <N> обклеивает тебя стикерами',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Первый игрок, кто найдет белый предмет, отшлепывает тебя по попе',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'задай вопрос. Первый, кто ответит, целует игрока на свой выбор',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'пой с полным ртом. Первый, кто угадает мелодию, целует игрока на свой выбор',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'ты начинаешь! Каждый игрок вслух читает последнее сообщение, которое он отправил',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Тот, у кого самая дорогая пара обуви, делает <A> отжиманий',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Тот, у кого самая дешевая пара обуви, делает <A> приседаний',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Каждый игрок называет слово, из них ты должен(а) составить осмысленное предложение',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Каждый игрок называет слово, из них ты должен(а) составить тост',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Каждый игрок называет слово, из них ты должен(а) сочинить стихотворение',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Каждый игрок называет слово, из них ты должен(а) сочинить рэп',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Каждый игрок называет слово, из них ты должен(а) придумать поздравление (или комплимент) для игрока <N>',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Каждый игрок называет слово, из них ты должен(а) составить предложение и опубликовать его в соцсети как свою мысль-размышление',
      'pack_id': 1,
      'pack_name': 'dares_social',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок должен сказать по очереди одну букву. Цель задания - составить нормальное слово. Тот игрок, который скажет последнюю букву и получится не слово, а черт знает что, выполняет любое наказание',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Выбери: oрел или решка? Брось монетку, не угадал - делай <A> отжимания(ий), угадал - отжимается игрок <N>',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Играем в игру "что есть в моем чемодане". Ты говоришь: "в моем чемодане есть...", каждый последующий игрок добавляет еще один предмет и повторяет предыдущий. Первый, кто ошибется, делает 2 следующих действия',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'начинает с фразы "давным давно ..." и добавляет максимум 3 слова. Друг за другом игроки повторяют сказанное и добавляют несколько штрихов в рассказ. Первый, кто ошибется, делает 2 следующих действия',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'Ты начинаешь! Каждый игрок делает движение, друг за другом игроки повторяют движение и добавляют новое. Тот игрок, кто ошибется, делает 2 следующих действия',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Один игрок говорит слово, следующий говорит слово на последнюю букву сказанного слова первым игроком. Цель игры составить связное предложение. Тот, кто облажается, делает <A> отжимания',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Друг за другом произносим по буквам фамилию игрока, сидящего справа. Тот, кто ошибется, снимает 1 вещь',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'Ты начинаешь! Друг за другом произносим по буквам полное имя игрока, сидящего справа. Тот, кто ошибется, снимает 1 вещь',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
    {
      'text': 'подготовь бумажки с номерами. Например, если всего играет 10 человек, номера от 1 до 9. Раздай бумажки случайным образом. Теперь придумай любое задание для игроков. Например: игрок 5 должен поцеловать игрока 2, а игрок 8 должен сесть на коленки игрока 3',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'играем в чепуху! Ты громко задаешь вопрос: “Кто?”. Каждый игрок пишет что придумает вверху своего листочка, затем заворачивает, и игроки меняются листочками (чтобы не запутаться, передают по кругу). Далее следует вопрос: “С кем?”. Пишут, заворачивают, передают по кругу, каждый раз отвечая на вопрос. По окончании игры каждый разворачивает листок, оказавшийся у него, и все по очереди зачитывают, что получилось. Список вопросов: Кто? Еще кто? Где? Когда? Что делали? При каких обстоятельствах? Чем все закончилось?',
      'pack_id': 3,
      'pack_name': 'dares_general2',
    },
    {
      'text': 'Каждый по очереди должен сказать три раза подряд "на дворе трава на траве дрова". Кто не сможет, делает <A> отжимания(ий)',
      'pack_id': 4,
      'pack_name': 'dares_general3',
    },
    {
      'text': 'Спой песню, в которой есть слово, которое выберет игрок <N>',
      'pack_id': 5,
      'pack_name': 'dares_general4',
    },
    {
      'text': 'сколько лет каждому из игроков? Тот игрок, чей возраст ты не угадал, может задать тебе любой вопрос',
      'pack_id': 2,
      'pack_name': 'dares_general1',
    },
    {
      'text': 'Ты начинаешь! Игроки по очереди должны называть фильмы, которые были сняты по книгам. Отшлепай игрока, который не сможет ответить или повторится',
      'pack_id': 29,
      'pack_name': 'dares_mass',
    },
  ],
  'dares_newyear': [
    {
      'text': 'Выйти на улицу и спросить первого попавшегося прохожего о том, как добраться до Деда Мороза',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Выйти на балкон и как можно громче пропеть песню «В лесу родилась елочка»',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Выйти на лестничную площадку, постучаться в любую понравившуюся дверь и от всей души поздравить хозяев квартиры с Новым годом',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Спеть песню про елочку с акцентом',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Пропрыгать вокруг елочки зайчиком 2 круга',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Сделать Снегурочке пять комплиментов. Если ее нет, то игроку, который больше всего на нее похож',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобрази бой курантов',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Вырезать из бумаги снежинки и повесить на игрока <D>',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Выпить с Дедом Морозом на брудершафт. Если его нет - тогда с игроком <D>',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Рассказать анекдот про Новый год',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': '10 раз прокричать с балкона: «С Новым годом!»',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобрази подсвечник с горящими свечами',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Вспомнить, как называется Дед Мороз у других народов. Придумай сам, если не знаешь',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Станцевать ламбаду вокруг елочки с игроком <D>',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобразить символ наступающего года ',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобразить новогоднее обращение президента',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Назвать пять признаков, по которым мы можем узнать Снегурочку. Сказать, кто из игроков больше всего похож на нее',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Встать на табурет и прочитать стишок Деду Морозу, роль которого играет игрок <N>. Если ему понравилось - он дарит тебе какой-нибудь подарок',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобразить новогоднюю наряженную елку',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Произнести новогодний тост вместе с игроком <N>',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Сделать новогодний коктейль из имеющихся продуктов для игрока <N>',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Надеть бороду и поздравить соседей с Новым годом',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Сделать из воздушных шаров снеговика',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Исполнить танец с бенгальскими свечами',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобрази оленя Деда Мороза (игрок <N>)',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Набрать по телефону три любых номера и поздравить абонентов, не повторяясь',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Сделать репортаж о вашем праздновании Нового года',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Произнести поздравление президента на английский манер',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Выбрать себе партнера и исполнить песню «Расскажи, Снегурочка, где была?»',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Снять без рук (зубами) любое украшение с елки',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Вспомнить интересный и забавный случай на Новый год',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобразить из себя цыганку и каждому присутствующему погадать по руке на следующий год',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'По китайскому календарю каждый год имеет символ (лошадь, дракон, петух и т.д.), надо достоверно изобразить его без слов. Игрок <N> - тебе в помощь',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Придумать и пожелать всем присутствующим такого, чего еще никто никогда не желал',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Расцеловать всех присутствующих',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобразить елочную гирлянду всеми частями тела (глазами, руками и т.д.)',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Накрасить губы игроку <N> позаимствованной у дам губной помадой',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Положить рублевую монетку в центр стола, двигать носом ее до края стола и сбросить на пол',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Изобразить ледяную фигуру "Санта и олени" вместе с игроками <D> и <D>',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Станцевать танец снежинки',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Одарить всех присутствующих подарками с новогоднего стола со словами: "Это тебе пригодится в Новом году, потому что..."',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Нарисовать на пустой тарелке портрет Деда Мороза с помощью майонеза и кетчупа',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'С завязанными глазами положи игроку <N> в тарелку закуску и налей напиток в бокал',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'С помощью ножа и вилки сыграть на пустых бутылках "В лесу родилась елочка"',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Выйти на улицу и обнять первого встречного, поздравив с Новым годом',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Станцевать стриптиз в образе Деда Мороза (или Снегурочки)',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Выйти на улицу, добыть и принести любой новогодний атрибут',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Заесть снегом с подоконника бокал шампанского',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Поджечь сторублевой купюрой из своего бумажника праздничную или бенгальскую свечку',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Вместе с игроками <N> и <N> спой песню Стекловаты "Новый год" (текст можно найти в интернете)',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Включи новогоднее обращение президента и постарайся смешно комментировать каждую его фразу',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Если у тебя нет аллергии на цитрусовые, съешь как можно больше мандаринов за минуту',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
    {
      'text': 'Напиши в соцсети (например, на стену) неадекватное поздравление с Новым Годом. Пусть фантазию включат все присутствующие',
      'pack_id': 15,
      'pack_name': 'dares_newyear',
    },
  ],
  'dares_outdoors': [
    {
      'text': 'Встретить на входе в подъезд 15 человек, с каждым поздороваться (не повторяясь) и сказать комплимент',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подсесть на скамейку к незнакомцу и спросить: "можно ли тут переночевать?"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Дойти на руках (можно с поддержкой за ноги) до ближайшей влюбленной пары и пожелать им счастья. ',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Признайся в любви автомобилю в людном месте и громко',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойти к незнакомцу и сказать, что вы хотите в Турцию',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'распечатать на принтере листовки с абсурдным текстом, например, “Заходите в наш магазин надувных бобров” или “Голосуйте за партию сладострастных некрофилов”. Встань в людное месте и раздавай прохожим ',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Купите в магазине лимон или несколько и съешьте в людном месте',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Поцеловать любого прохожего ',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Пролежать на полу в людном месте минуту ',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Постучать в окно жилого дома и попросить стакан воды',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Разденьтесь до нижнего белья (если позволяет время года) и пройдитесь пару минут ',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подходить к прохожим и говорить: "я с (любой планеты, хоть вымышленной), пришел что бы поработить вашу низшую расу"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Накрасьтесь и пройдите по людному месту',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'пройтись по парку/улице/двору и каждому прохожему делать комплимент, не повторяясь',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'зайти в кафешку и притвориться официантом, найти людей, сидящих с меню, взять у них заказ и уйти, что-нибудь сказать, например, не советую вам есть в этом кафе или еще что.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Вместе с <N> и <N> громко спеть "Новый год к нам мчится"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'надеть одежду задом наперед и пройтись спиной вперед',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'устрой одиночный пикет, выступая за отставку Димона. По возможности сделай плакат',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'иди по улице, танцуя',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'ходить, крича: "Ура, аллилуйя, победа"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'заглядывать в лицо и смотреть в глаза несколько секунд, потом спрашивать: "Мы с вами не встречались?" а потом выдержав паузу, со словами "нет, нельзя" быстро уходить.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'познакомиться на улице с девушкой/парнем',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'крикнуть "У МЕНЯ ДИАРЕЯ!!!"',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'переодеться в проститутку и 5 минут ходить по улице',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'выйди на улицу и упроси 10 прохожих подпрыгнуть вместе с тобой. Одновременно',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подойти к прохожим: "хотите ли купить кефир по сниженной цене?"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'орать во всю глотку: "меня на марс увозят, ааааа"',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подари прохожему цветок',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'выйди с пылесосом на улицу и пропылесось асфальт',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'пробеги с метлой по улице с криком: "Земля в иллюминаторе, земля в иллюминаторе видна"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'выбежать как макака, орать и прыгать на деревья',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Поздравить первого встречного на улице с днем сантехника',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Сорви цветок с клумбы и подари прохожему',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Кидаться в прохожих снежками, попасть три раза (рекомендуется уметь быстро бегать)',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Снять со стены часы, перевести назад, и на улице приставать к прохожим с вопросом «А когда Новый год?»',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Испугай кого-нибудь. Главное найди достойную добычу, чтобы не пришлось, потом, самому пугаться',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Пугай людей своим взглядом. Пристально смотри на прохожих и строй рожи, наблюдай за реакцией',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойти к мусорке, наклониться и сказать «Ммм, как вкусно»',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Пробежаться на руках и ногах в подъезде на несколько этажей со словами «Я в танке!»',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойти к прохожему и сказать «Здравствуйте, я милый человечек, который хочет с вами перепихнуться, можно?»',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'На весь магазин признаться продавщице в любви',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Надеть 2 свитера, 3 шапки, перчатки и валенки и пойти в таком виде в ближайший магазин за бутылкой пива',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Встаньте в собачью позу и сексуально скажите «Иаа, Иаа, Иаа» или «Йа, Йа, Зер гуд майн Фюрер!»',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Встать возле многоэтажки и 40 раз прокричать «Печеньки! Где мои печеньки?!»',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Пробежать вокруг дома с поднятыми руками со словами «Белые розы, беззащитны шипы»',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Поцеловать первого незнакомого парня/девушку',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойти к незнакомому человеку и сказать «Мой палец был в моей попе и я этого не забуду!!!»',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Надеть лыжи и выйти на улицу. Летом',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'В общественном транспорте встать посередине и присесть 10 раз',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Спроси у прохожего, как проехать до Пекина',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Всех поздравить с 8 марта, когда на самом деле сейчас не март',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Изобразить самолет со звуками бжжж, виииу, оббежать вокруг дома',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойти к человеку на улице и признаться, что на самом деле ты - супергерой, и твоя миссия - защищать Землю от суперзлодеев. Придумай себе эпичное прозвище, типа "Человек-Вселенная" или "Мистер-Вселенная". Уот так уот',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойти к человеку своего пола и познакомиться (осторожно)',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Сделать комплимент незнакомому человеку',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'ты и игрок <N> - свидетели иеговы. Подходите к незнакомым людям и рассказывайте про грядущий конец света',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойди к незнакомому человеку и под любым предлогом расскажи анекдот',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойди к незнакомому человеку, покажи ему в сторону, например, дерева, и скажи "Улыбнитесь и помашите ручкой, вас снимает скрытая камера"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Сфотографируйтесь с 10 незнакомыми людьми под любым предлогом (можете прикинуться иностранцем)',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Прикиньтесь иностранцем, и, подойдя к незнакомому человеку, с акцентом расспросите про местоположение достопримечательностей города, а после это с удивлением спросите "А разве это не Сан-Франциско?"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойдите к прохожему и скажите "Подайте на пропитание бедному сисадмину"',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Зайдите в магазин и представьтесь членами команды передачи "Контрольная закупка". Перед этим найдите какой-нибудь просроченный товар (не обязательно)',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Спросите у прохожего что-нибудь про секс',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'В людном месте сделайте вид, что вы иностранный шпион-неудачник. Передвигайтесь нелепо, пытаясь спрятаться за объектами: деревьями, машинами и пр',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Зайдите в магазин и спросите, где можно купить сушеное мясо слона',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Зайдите в магазин электроники и притворитесь консультантом. Затем после вопросов о конкретном товаре, начинайте нести полную ахинею (придумайте что-нибудь оригинальное, в зависимости от товара)',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Просите  у всех  милостыню(на проезд, хлеб и т.д.) просите, пока не наберете 100 рублей',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'вы все должны подходить к прохожим и предлагать дать “пять”. Выигрывает тот, кто соберет большее количество “пятюнь” за определенное время',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Найдите любого незнакомца и сделайте с ним селфи',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойди к незнакомому человеку и скажи “ммм, секси лайф!”',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойди к незнакомому человеку и скажи, что изнасиловал свинью',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Продай прохожему какую-нибудь свою вещь',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Продай прохожему игрока <N> в рабство',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойди к незнакомцу и скажи "Большой брат наблюдает за нами"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойди к незнакомцу и скажи "Конец близок, мы все умрем"',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подойти с игроком <D> к встречной парочке и предложить поменяться партнерами',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'собирать подписи к несуществующей петиции в защиту брокколи',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'лечь морской звездой на землю возле круглосуточного магазина или другого людного места и минут 5 выразительно смотреть на звёзды',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': '<M>Познакомиться с девушкой, строя из себя застенчивого парня',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'встать у какого-нибудь магазина или заведения и в течение 5 минут держать открытой дверь, а каждому входящему говорить "Добро пожаловать в царство разврата" (или что-то другое), при этом мило улыбаясь',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойти к человеку с собакой и спросить "Можно погладить?". Получив согласие, погладить хозяина и молча уйти',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойти к человеку своего пола и позвать на свидание',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойти к прохожему противоположного пола и предложить ему купить у вас нижнее белье со скидкой',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'предложить усыновить/удочерить себя любой паре',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Сделать селфи с прохожим',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'с покерфейсом идти рядом с прохожим, пытаясь копировать его движения',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подходить к прохожим и предлагать купить у вас песок для песочных часов всего 99 рублей за килограмм',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Сидя на корточках, спрашивать у людей "Кабачки, баклажаны есть? А если найду?!"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Позвонить любому номеру на выбор остальных игроков и изображать "секс по телефону". Выполнять в людном месте.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Притворись пьяным, пристань к прохожему и натуралистично упади в обморок',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойти к 3м прохожим со словами "let\'s have some fun tonight" или "давай развлечемся сегодня ночью". Делать это с похотливым взглядом',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Сесть рядом с незнакомцем противоположного пола и прошептать на ухо "Отдамся за айфон"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойти к кому-нибудь старше 40 лет и спросить: "где тут можно купить презервативы?"',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Подойти к сидячему человеку и предложить почистить обувь',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Выйти на улицу и обнять первого встречного, поздравив с днем святого Валентина стрыкало',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Засесть в кусты и предложить прохожим присоединиться. Можешь добавить, что за тобой следят уругвайские спецслужбы',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Если вы недалеко от водоема, искупайся голышом с кем-нибудь на свое усмотрение',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'сфотографируйся на фоне какого-нибудь угрюмого незнакомца',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'узнать, сколько будет корень из 88005553535 любым способом, не используя калькулятор. Как вариант, можно кому-нибудь позвонить или спросить у прохожего',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'бегать по улице и орать: "я наполеон!"',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подойти к незнакомцу и сказать что вы хотите в Таиланд, чтобы сменить пол',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Ты должен пробежать мимо людей, громко крича: «Гав! Гав!» Игрок <N> должен бежать следом, подбегая к каждому человеку и спрашивать: «Вы моего пса не видели?»',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Раскрасить себе лицо фломастерами, и выйти на улицу',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'грациозно прыгни через костер, изобразив на лице удивление',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'надеть на голову черные капроновые колготки и сходить так за хлебом',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'взять пачку бесплатных/старых газет и выйти на улицу раздавать их прохожим',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'танцевать стриптиз вокруг столба ',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'пройдись по улице на четвереньках с поводком на шее (игрок <N> держит тебя за поводок). Гавкай на прохожих ',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Собери определенную сумму, исполняя песню или танец в людном месте',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'надеть рубашку так, будто это смирительная рубашка, и в таком виде бегать по улице, пока прохожие не вызовут скорую или наряд полиции',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подходи с шариковой ручкой вместо микрофона к прохожим и бери у них интервью',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Необходимо лечь на лавку и спросить «Разрешено ли бомжевать здесь?».',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Выйди на улицу, беги и кричи «моя девушка (жена, парень, муж) сбежал(а), пожалуйста, помогите!»',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'познакомиться с девушкой/парнем, прикинувшись иностранцем',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'предложи первому попавшему незнакомому человеку покататься на твоем жигуле',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'распечатай несколько листов с фотографией Милонова и надписью “Очень нужна ваша помощь! Требуется дорогостоящее лечение! Пожалуйста, помогите собрать средства на лоботомию” и раздавай прохожим на улице',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'раздай 30 рублей 30 прохожим, по рублю каждому, со словами “Мне не нужны больше деньги, я нашел счастье в служении людям” ',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'лай на прохожих как собака',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойди к незнакомцу и сделай вид, что вы знакомы, просто он не помнит',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'спроси у прохожего, как доехать до Сомали на велосипеде',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойди к прохожему и скажи, что скоро рептилоиды поработят человеческую расу',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'сфотографируй симпатичного прохожего противоположного пола и поставь фото на рабочий стол',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойти к прохожему и спросить, где ближайшая порностудия',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': '<M>подойти к незнакомке и предложить ей сняться в порно за iPhone',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойди к прохожему и сделай вид, что ты иностранец, пытающийся найти туалет',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'незаметно подложи в карман или сумку прохожего противоположного пола бумажку с номером телефона и текстом “хочу страстного секса, позвони мне!”',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Отшлёпать себя на виду у прохожих',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'Пожаловаться прохожему на отсутствие в городе велодорожек и общественных пространств',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'попытайся продать свою обувь прохожему',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'спроси у незнакомца, знает ли он игру Правда или действие',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'отгадай, сколько лет незнакомцу, на которого покажет игрок <N>. Сходи и узнай его возраст. Если не угадал(а), тебе придумывает наказание игрок <N>',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': '<M>отгадай, какого размера грудь у незнакомки, на которую показал игрок <N>. Сходи и узнай ее размер. Если не угадал, тебе придумывает наказание игрока <N>',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'отгадай, какого размера нога у прохожего, на которого показал игрок <N>. Сходи и узнай у него размер. Если не угадал, тебе придумывает наказание игрок <N>',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'выбери незнакомку. Если у нее нет парня и она не жената, познакомь ее с игроком <M>. Разрекламируй его как страстного любовника',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'выбери незнакомца(ку). Познакомь его с игроком <D>. Разрекламируй ее(его) как страстную(го) любовницу(ка)',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'расскажи незнакомцу шутку. Если он засмеется или хотя бы улыбнется, поцелуй игрока на свой выбор',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойди к группе незнакомых людей и покажи им фото бобра',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подойди к группе незнакомых людей и покажи им фото Кончиты Вурст',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойди к группе незнакомых людей и покажи им фото Александра Пистолетова',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подойди к группе незнакомых людей и покажи им фото ершика для унитаза',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'спроси у группы незнакомых людей, интересует ли их твоя коллекция виниловых пластинок с дискографией группы Дюна (и покажи им объявление на сайте avito)',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'спроси у группы незнакомых людей, интересует ли их твой пылесос (и покажи им объявление на сайте avito)',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'спроси у группы незнакомых людей, интересует ли их твой запорожец (и покажи им объявление на сайте avito)',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'спроси у группы незнакомых людей, интересует ли их твой(я) муж(жена) (и покажи им любое объявление на сайте знакомств)',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'спроси у группы незнакомых людей, интересует ли их твой ребенок (и покажи им любое фото ребенка)',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'признайся в любви незнакомому человеку, которого выберет игрок <N>',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'спроси у группы незнакомцев, можно ли тебе их сфотографировать, так как ты считаешь их очень привлекательными',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'попроси незнакомого человека сфотографировать вас вместе и отправить тебе фотографию',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй слоника на бумажке и подари ее незнакомцу, которого выберет игрок <N>',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй обнаженную девушку на бумажке и подари ее незнакомцу, которого выберет игрок <N>',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй кота на бумажке и подари ее незнакомцу, которого выберет игрок <N>',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'сыграй в камень/ножницы/бумага с незнакомцем, которого выберет игрок <N>',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'попроси незнакомца, которого выберет игрок <N>, угадать твой возраст. Если он не угадает, ты должен прокричать: “О боже, почему я так стар(а)?!”',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'попроси незнакомца, которого выберет игрок <N>, угадать твой рост. После этого ты должен сказать: “На самом деле я выше, это всего-лишь мой человеческий облик”',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Возьми пятиминутное интервью у прохожего, которого выберет игрок <N>. Обязательно спроси про трех лучших реперов, про его зарплату и про Путина.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'попроси незнакомца, которого выберет игрок <N>, угадать твой размер ноги. После чего скажи, что он выиграл возможность участвовать в программе Поле чудес',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'возьми номер телефона у прохожего, которого выберет игрок <N>',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'у тебя есть 5 минут, чтобы отыскать женатого человека среди незнакомцев',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди человека, который знает про игру “Правда или действие”. Убеди его скачать это приложение',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подмигни тому, кого выберет игрок <N>',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'спроси у незнакомца он "за" или "против" аборта у креветок',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'спроси у незнакомца он "за" или "против" считать расистами тех, кому не нравятся обезьяны-альбиносы',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'возьми у незнакомца номер телефона',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'дай свой номер телефона незнакомцу',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'намочи себе штаны и пройдись по людной улице',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подходи к людям и нюхай их волосы',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подходи к людям и пристально смотри им в глаза сумасшедшим взглядом',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'подойди к прохожему и возьми у него автограф',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'подойди к прохожему, делая вид, что он знаменитость. Скажи, что давно мечтал с ним встретиться, возьми автограф',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди парня по имени Антон',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди парня по имени Рома',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди парня по имени Дима',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди парня по имени Миша',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди парня по имени Сергей',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди парня по имени Денис',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди парня по имени Саша',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди парня по имени Стас',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди парня по имени Артем',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди парня по имени Игнат',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди парня по имени Вахтанг',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди девушку по имени Вика',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди девушку по имени Алиса',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди девушку по имени Варя',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди девушку по имени Света',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди девушку по имени Надя',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди девушку по имени Настя',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди девушку по имени Марина',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди девушку по имени Света',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди девушку по имени Катя',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'найди девушку по имени Рита',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'найди девушку по имени Ксюша',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй проститутку на лошади. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй мамонта, какающего лемуром. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй единорога-лесбиянку. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй сороконожку-гимнастку. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй разговаривающий фрукт. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй собаку, у которой понос. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй ребенка-психопата. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй таракана в шортах. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй кастрированного стриптизера. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй Бетмена, который прыгает со скакалкой. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй бегущего хоббита. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй жирафа, которого тошнит. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй какающего младенца. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй пикачу-женщину. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй ублажающую себя обезьянку. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй Железного человека в плавках. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй барсука Игоря Николаева. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй как депутат занимается сексом по собачьи с лягушкой. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй кота, который носит презерватив. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй живой стул. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй танцующего медведя. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй яйцо, которое разговаривает по телефону. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй дерущегося вампира. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй мертвую мышку. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй возбужденного крокодила. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй Пинокио, кончающего жизнь самоубийством. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй пьяного лиса. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй кролика на скейтборде. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй льва-гея. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй летающую детскую горку. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'нарисуй фаршированную индюшку. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'нарисуй лошадь с эрекцией. Покажи рисунок незнакомому человеку, которого выберет игрок <N>, и выложи в соцсеть с хештегом #яумамыхудожник.',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'танцевальный флешмоб, участвуют все!',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'все игроки заходят в супермаркет и одновременно застывают в одной позе. Стоять так не двигаясь 5 минут',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
    {
      'text': 'задай какой-нибудь интеллектуальный вопрос людям на улице. За правильные ответы раздавай конфеты',
      'pack_id': 17,
      'pack_name': 'dares_outdoor2',
    },
    {
      'text': 'Подходи к парням на улице и спрашивай: "Почему ты мне не звонишь?", или "Поматросил и бросил?", закатывай им скандалы. Не важно, какого ты пола',
      'pack_id': 16,
      'pack_name': 'dares_outdoor1',
    },
  ],
  'dares_school': [
    {
      'text': 'Встань и скажи, что хочешь в туалет, а затем сядь со словами: "А, уже не надо"',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Спроси что-нибудь совершенно неадекватное и не относящееся к предмету у преподавателя',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Изобрази храп игрока <N>',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Сложи самолетик и запусти его в аудиторию (класс)',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Поцокать, как лошадка. Помяукать, погавкать',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Стараясь не привлекать к себе излишнего внимания, тихо постанывать с периодичностью в 1 минуту, делать вид, что вы с трудом не теряете сознание.',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Кидай дозвон всем тем, у кого знаешь номер телефона, чтобы звенели звонки поочередно, наблюдай реакцию и наслаждайся',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Написать сообщение человеку неподалеку с текстом "Я тебя хочу, давай выйдем!"',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Пересядь на соседнюю парту. Чуть погодя - на следующую, и так далее, пока не дойдешь до края аудитории. Делай это с покерфейсом',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Начни тихонько напевать песенку. Если на тебя обращают внимание - притихни. Чуть погодя продолжи',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Под любым предлогом выйди к доске, постоять 10 секунд и сесть обратно',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Крикнуть: "Смотрите, самолет!"',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'Выйди к доске и скажи учителю, что ты пьян',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'рассмеши весь класс',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'обклей весь класс стикерами',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
    {
      'text': 'разыграйте одноклассников/одногруппников',
      'pack_id': 14,
      'pack_name': 'dares_school',
    },
  ],
  'truths_erotic': [
    {
      'text': 'На какой порносайт вы чаще всего заходите?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Секс с незнакомцем, секс втроем, есть ли у вас смелая эротическая мечта? Вы собираетесь ее реализовать?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Часто ли тебя снятся эротические сны? расскажи про самый запоминающийся',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'С кем из знаменитостей ты бы переспал(а)?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'В каком возрасте ты впервые занялся(ась) сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'В каком необычном месте ты хотел(а) бы заняться сексом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Застукивали ли вас за просмотром порно или мастурбацией?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'У тебя был секс на одну ночь? Сколько раз?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'привязывали ли вас или вашего партнера к чему-нибудь во время секса? расскажите об этом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Расскажи нам о своей попытке соблазнить кого-то, когда это было ужасно аморально!',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как ты называешь свои интимные места?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как думаешь, романтично будет заняться любовью на берегу моря?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты бы снял(а) свой секс за деньги? Видео было бы доступно в интернете',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Во время секса… о чем ты думаешь?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты сексоголик (чка)?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Думал(а) когда-нибудь о сексе втроем?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как думаешь, заниматься любовью в невесомости круто?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Под какую песню ты бы хотел(а) заниматься любовью?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как часто ты смотришь порно? Какое?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какой персонаж мультфильма самый сексуальный?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>Какой у тебя размер груди?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>Для тебя важен размер члена?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какое самое необычное место, в котором ты занимался(-ась) сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Сколько у тебя было девушек (парней)?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Секс до свадьбы. Твое отношение к нему?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Секс это важно, чтобы быть счастливой парой?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'В чем различие между "заниматься сексом" и "заниматься любовью"?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какой аспект ваших сексуальных взаимоотношений вы бы хотели улучшить?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Вы чувствуете себя 100% комфортно в вашей сексуальной жизни? Почему да или почему нет?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Насколько важно для вас сексуальное прошлое вашего партнера?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вы думаете, что знаете все о сексуальных желаниях вашего партнера?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как вы думаете, разнообразие в сексе важно для длительных взаимоотношений?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какая ваша любимая прелюдия?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какой ваш любимый поцелуй?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какая ваша любимая сексуальная позиция?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как вам больше нравится, чтобы к вам прикасались, гладили, ласкали?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как вам больше всего нравится ласкать партнера? Можете показать?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какая ваша самая секретная сексуальная фантазия?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Где вам больше всего нравится заниматься любовью?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'А в каком самом необычном месте вы занимались любовью?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'В какое время дня вам нравится заниматься любовью?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что вам нравится делать после занятий любовью?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что вас наиболее возбуждает в вашем партнере?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Если бы у вас была возможность что-либо изменить в вашей сексуальной жизни, что бы это было?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M>на сколько девушек тебя хватит за раз? При условии, что каждую нужно довести до оргазма.Как можно это доказать?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>любишь соблазнять парней сама или предпочитаешь, чтобы соблазняли тебя? Расскажи как это обычно происходит!',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M>если бы ты был девушкой, какие парни бы тебя привлекали?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'бывал(а) ли или хотел(а) бы побывать на нудистском пляже?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'если бы не было другого выхода, чтобы ты предпочел(чла): сексуальное рабство или вечную нищету?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'под страхом смерти, если бы пришлось заняться сексом с конем, предпочел(чла) бы умереть или сделать это?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'использовал(а) ли бы овощи или фрукты в качестве сексуальных игрушек?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>если бы твоя девушка сделала подарок в виде другой девушки на один день, с которой можно делать все, что угодно, как бы ты отреагировал?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'в каких местах ты бы ни за какие деньги не занялся(-ась) сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>поехала бы на отдых в страну своей мечты с незнакомым парнем, если бы он все оплачивал? При этом ты бы расплачивалась сексом',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'приходили ли мысли об изнасиловании кого-нибудь? Если да, то с чем это было связано?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'секс ради достижения цели оправдан? За какие цели, ты бы занялся(-ась) сексом с неприятным тебе человеком?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'расскажи какую-нибудь эротическую историю! Не важно, был(а) ли ты вовлечен(а) в нее или нет',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как вы относитесь к стриптизу? ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'мастурбируешь ли ты и как часто?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'изменял(а) ли ты своим девушкам (парням)? Если да, то почему?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>был ли у тебя сексуальный опыт с несовершеннолетней девушкой, когда тебе уже было 18 или больше?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'как думаешь, кто из игроков "скорострел" и не может заниматься сексом долго?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M>были ли случаи, когда в самый ответственный момент твой член не хотел вставать? Чем это было вызвано?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'У Вас было когда-нибудь желание схватить за попку в общественно транспорте рядом стоящего(ую) парня/девушку?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'через какой срок после знакомства вы уже допускаете возможность интимных отношений?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какие виды секса вы допускаете с любимым человеком?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'по ночам тебя будят ради секса?Хотели бы?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Целовались ли вы, не зная даже имени человека?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что бы вы делали, если бы у вас посреди улицы лопнула резинка на трусиках?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>Что бы вы делали, если бы у вас посреди улицы встал член?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Хотите ли Вы своего(свою) любимого(ую) тогда, когда это не совсем прилично? На улице, в общественном транспорте...',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'во сколько лет вы лишились невинности?   ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ваша самая извращенная фантазия?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'вы часто симулируете оргазм?   ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'на какую просьбу любимого человека вы бы точно ответили "Нет! Ни за что!"? А как бы Вы отнеслись к такой ситуации и просьбе?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Твоя реакция, если бы ваш(а) девушка (парень) предложил(а) бы вам какой-нибудь нетрадиционный вид секса?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'вам нравится, когда девушка (парень) во время близости применяет грубую силу? в словах,в движениях...',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Когда дело касается секса, кто обычно инициатор страсти?   ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'есть ли у вас какой-то непреодолимый комплекс по поводу своей внешности, который мешает вам в интимной жизни (например, стесняетесь полностью раздеваться и т.п.)?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'как вы относитесь к порно-фильмам?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'О чем вы думаете в дУше?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ваш первый секс вам понравился?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты девственник(ца)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Вы ЗА безопасный секс или обычно бывает так, как получится..?  ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'в постели вы больше романтик или дикий зверь?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'вам нравится, когда иногда девушка (парень) в интимные моменты говорит (или делает) грубости всякие..?   ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'как вы относитесь к гей-культуре?к лесбиянкам?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что делаете после секса?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'что вам больше всего не нравится в сексе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Если во время секса очень надо в туалет, вы терпите или идете?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вас когда-нибудь застукивали(родные, например) во время секса?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'для вас что важнее: секс, любовь или же человеческие отношения?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'какая ваша сама заветная эротическая мечта?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'как вы относитесь к пирсингу в интимных зонах?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'как вы относитесь к оральному сексу?Хотите заняться им прямо сейчас?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'А вы как-нибудь называете половой орган своего партнера?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ваши необычные места для секса?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ваш неудачный случай, связанный с сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ваш смешной случай, связанный с сексом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что лучше, любовь без секса или секс без любви?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Вы когда-нибудь занимались любовью с двумя разными партнерами в течение одних суток?   ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как часто вам необходим секс? Сколько раз в день, неделю, месяц, вам бы было достаточно?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вы когда-нибудь пользовались "игрушками" из секс-шопа? и как к ним относитесь?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'как насчет М+М+Ж? или М+Ж+Ж?Хотите?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Вы будете встречаться дальше с человеком, если он не удовлетворяет вас в сексе?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Пробовали ли Вы ролевые игры, если да, то какие впечатления? (и какой был сюжет игры)',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Занимались ли вы виртуальным сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'самое непристойное предложение, которое вы когда-либо получали? делали сами?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'как вы относитесь к кунилингусу?Желаете заняться этим сегодня?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ходили ли Вы на тайное свидание (то есть не зная человека вообще и не видя его ни разу)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'случалось ли вам имитировать оргазм? каковы ощущения?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как относитесь к анальному сексу?Есть ли у вас лубрикант?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'была ли у вас близость в машине? если да, то какая машина была и как ощущения?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Хотелось ли вам заняться сексом в лифте?Хотите попробовать сегодня?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вы когда-нибудь представляли интимные отношения с человеком своего пола?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'А вы когда-нибудь делали это на чертовом колесе или вообще на высоте?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'самое слабое место на вашем теле? то, от прикосновения к которому возбуждаешься с полоборота?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'когда-нибудь танцевали стриптиз?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как вы относитесь к минету?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Был ли у вас секс в экстремальных условиях?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'приемлем ли для вас секс по телефону?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'самое незабываемое место, где вы занимались сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ваше отношение к сексу на одну ночь?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>Делали ли вы аборт?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'в каком возрасте у вас был первый поцелуй?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>Ваши ощущения, когда Вас осматривает гинеколог-мужчина?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Занимались ли вы когда-нибудь сексом с человеком, но представляли себе в этот момент с собой совсем другого? И если да, то получали ли вы удовольствие в этом случае?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Вас когда-нибудь брали силой? если да, то насколько вам это понравилось?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>Делали ли вы минет после анального секса? Какие ощущения?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как часто вы разговариваете с вашим любимым человеком о сексе, обсуждая желаемые действия и позы?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какая поза вам больше всего нравится и какую бы хотели попробовать?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Кто у вас чаще доминантен в сексе? Если вы, можете доказать?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Испытывали ли вы когда-нибудь чувство стеснения перед врачом?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'как вы смотрите на секс м+ж+ж (при этом вторая ж - самый близкий человек) или же м+м+ж (при этом второй м - самый близкий человек)? ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Были бы вы довольны своей женой или мужем, если бы вы случайно, после многих лет совместной жизни узнали, что до вас у него-нее было много партнеров по сексу? и что изменит данный факт?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ваш самый быстрый секс после знакомства с человеком?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Был ли у вас секс по дружбе и сколько времени длился?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'какая разновидность секса для вас "табу"?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какое отношение к зоофилии?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Отношение к домашнему видео? И реакция, если бы это увидели другие?Есть ли подходящая камера?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Секс на природе, за или против?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как ты относишься к сексу за деньги?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какое отношение к сексу на публике?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Отношение к онанизму?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ходить по дому обнаженными, за или против?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Секс в море или на пляже, каково мнение?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'В мыслях вы когда-нибудь изменяли своим любимым?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как вы смотрите на отношения, в которых девушка старше парня почти вдвое?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Поехали бы к человеку только ради секса, если он готов оплатить ваши расходы?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как Вы относитесь к свободным отношениям?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Самое первое условие партнеру в сексе? (эмоции не считаются, мол, я должен любить, знать и тд)',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Любимая поза в камасутре?Хочешь повторить сегодня?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Где ты больше всего любишь заниматься сексом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Когда ты лишился(-ась) девственности?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что тебе больше всего нравится в сексе? Есть ли что-то, что объединяет тебя с игроком <D> в этом вопросе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Где ты мечтаешь заняться сексом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Расскажи про свой самый яркий момент из секса',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'У тебя когда-нибудь был секс на первом свидании?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'О чем ты думаешь, когда занимаешься сексом?  ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как ты называешь интимные места своего партнера?  ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<F>У тебя красивая грудь, но какого цвета твои соски? Розовые или коричневые?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Бывали ли у тебя эротические фантазии гомосексуального характера?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'С кем бы из присутствующих ты занялся(-ась) сексом?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<F>С кем бы из присутствующих девушек ты занялась сексом? Ответ "Ни с кем" не принимается',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'С кем бы из игроков твоего пола ты занялся(ась) сексом? Ответ "Ни с кем" не принимается',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'В каком году ты первый раз посмотрел порно? расскажи об этом',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Когда ты последний раз занимался сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Когда ты последний раз занимался(ась) онанизмом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Нравится ли тебе подглядывать за обнаженными людьми?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Участвовал(а) ли ты в групповом сексе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Приходилось ли тебе полностью раздеваться на людях? врачей не считаем',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как часто ты смотришь порно? где при этом находятся твои руки?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Занимался(-ась) ли ты сексом под просмотр порно?Хочешь ли ты включить сейчас порно?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Есть ли у тебя сексуальные игрушки?Покажи, если есть',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'В сексе ты любишь быть сверху или снизу?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как больше нравится заниматься сексом? при свете или в темноте?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'У тебя есть эротические фотографии?Хочешь сделать сейчас?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Во сколько был первый поцелуй, сигарета, выпивка, секс?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M>С кем из мужчин-знаменитостей ты бы переспал? Ответ "Ни с кем" не принимается',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'С кем из знаменитостей твоего пола ты бы переспал(а)? Ответ "Ни с кем" не принимается',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что ты можешь рассказать о своем первом партнере?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как тебя быстрее всего возбудить?Возбужден(а) ли ты сейчас?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Твои эрогенные зоны?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Нравится ли тебе, когда тебя кусают/шлепают во время секса?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Считаешь себя сексуальным(-ой)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Опиши размеры, которые тебе нравятся в сексе',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какая часть тела у тебя самая сексуальная?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Кто из присутствующих возбуждает тебя больше всего?Расскажи, как именно',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Делаешь ли ты себе интимную стрижку?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Сколько сексуальных партнеров у тебя было?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'у тебя шаловливый язычок?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Чем больше любишь работать, руками или язычком?Как можно сейчас это проверить?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Рвался ли у тебя когда-нибудь презерватив?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Хотел(а) бы ты поучаствовать в оргиях?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как часто ты радуешь своего партнера генитальными ласками?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Занимался(-ась) ли ты петтингом?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Занимался(-ась) ли ты фистингом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M>Часто ли у тебя встает член в общественном транспорте?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Часто ли у тебя появляется внезапное сексуальное желание в общественном месте, например, в транспорте?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как ты относишься к сексу с элементами мазохизма?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что ты любишь больше, чем секс с любимым человеком?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как ты относишься к сексу с элементами садизма?Хотел(а) бы?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Подглядывал(а) ли ты за обнаженными людьми?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Считаете ли вы свою половую жизнь полноценной?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Кто, по-твоему, самый сексуальный актер (актриса)?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Возбуждаешься от боли?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Связывали ли тебя во время секса?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Любуешься ли ты своим обнаженным телом в зеркале?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Есть ли у тебя эксгибиционистские наклонности?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Насколько ты хорош(а) в постели по 10-бальной шкале?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Спал(а) ли ты за деньги?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'В каком состоянии ты чаще всего занимаешься сексом: в пьяном или трезвом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какая часть тела представляется вам самой эротичной?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Часто ли тебя снятся эротические сны? расскажи про самый последний',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Самая неудобная поза в сексе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'какая интимная прическа нравится больше всего?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Занимался (-ась) сексом в подъезде?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M> нравится ли тебе кончать на партнера?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F> нравится ли тебе, когда кончают на тебя?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Хотел(а) бы ты понаблюдать со стороны, как вы с партнером занимаетесь сексом?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Хотел(а) бы ты понаблюдать со стороны, как ваш партнером занимается сексом с другим человеком?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'опиши в деталях последний секс',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'опиши в деталях свое последнее свидание',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'опиши свою самую романтическую ночь',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'назовите, в каких позах вы бы занялись сексом с присутствующими игроками. Повторяться нельзя, пропускать игроков тоже (даже если они того же пола, что и вы)',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'расскажите в подробностях про то, как вы лишились девственности',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'какое занятие приносит вам больше удовольствия, чем секс?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'если бы вы стали порнозвездой, в каких жанрах снимались бы?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ваш любимый порноактер (актриса)? Почему?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ваш любимый порнофильм? чем запомнился и почему понравился? Хотели бы повторить сегодня некоторые сцены из него?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'сколько денег вы готовы были бы заплатить за секс с человеком, который нравится?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'самый пошлый эротический сон, который вам снился. Расскажите в подробностях',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'когда ты последний раз смотрел(а) порно? Расскажи о том, что там было подробно',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что ты любишь делать после секса?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'какую позу вы попробовали в последний раз? Хотели бы повторить сегодня?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'какую позу вы бы хотели попробовать? Как насчет сегодня?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'что бы вы сделали, если бы узнали, что ваш партнер снимается или снимался в порно?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'что бы вы сделали, если бы увидели своего сына/дочь за просмотром порно?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'что бы вы сделали, если бы увидели своего партнера за просмотром порно?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'смотрели ли вы порно на работе? Что в нем вам запомнилось?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вы занимаетесь любовью хотя бы раз в день? А как часто хотелось бы?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Могли бы вы вполне счастливо жить, вообще не занимаясь любовью? ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Вы занимаетесь любовью только в том случае, когда этого хочет ваш партнёр?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вам нравится надевать красивое нижнее бельё?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Вы стремитесь специально возбуждать своего партнёра прежде, чем заниматься любовью? ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Нравится ли вам экспериментировать и использовать новые сексуальные позы?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вас привлекают порнографические журналы?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Согласились бы вы пойти на оргию, если бы вас пригласили? Что насчет сегодня?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Вас возбуждает желание иметь разных сексуальных партнёров каждую ночь?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Является ли секс самым большим удовольствием в вашей жизни?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Вас беспокоит, что вы слишком много думаете о сексе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Думаете ли вы о сексе хотя бы раз в день? ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вам бывает трудно общаться с представителем противоположного пола? ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Вам снятся сны о сексе? ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': ' Выбирая одежду, вы думаете о том, чтобы привлечь внимание представителей противоположного пола? ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как часто вы флиртуете? ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': ' Вам когда-нибудь приходилось воображать, что вы занимаетесь любовью с друзьями или знакомыми? ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Вы мечтаете о том, чтобы вашими сексуальными партнёрами были знаменитые люди? ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Считаете ли вы, что секс без любви не имеет смысла? ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': ' Вам приходилось бороться с собой, что бы заглушить мысли о сексе? ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Влияет ли религия на ваше отношение к сексу?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какое из выражений, обозначающих половую близость, вы чаще употребляете?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какую из этих профессий вы бы выбрали, если не было альтернативы? (Съёмки в порно, Проститутка/сутенер, Стриптизёр(ша))',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'как относитесь к свингерству? Как вы бы отнеслись к этому, если бы вам предложили заняться этим сегодня?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'как вы думаете, какая любимая поза в сексе игрока <N>? Как вы пришли к такому выводу и как будете это проверять?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'какой порнофильм получился бы, если бы вы были режиссером, а игроки <N>, <N> и <N> - актерами?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'когда последний раз были в сексшопе? Не думаете, что пора бы туда сходить?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'как бы вы отреагировали, если бы узнали, что игрок <D> - нетрадиционной сексуальной ориентации? Как попытались бы переманить на другую сторону?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'некоторые считают, что девушка должна всегда иметь при себе презерватив. Разделяете ли вы это мнение? У девушек в вашей группе есть с собой презервативы?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что вам помогает раскрепоститься в постели?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вы имеете столько секса, сколько вы захотите?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Вы получаете именно тот секс, который вам нравится, т. е. вы обычно делаете то, от чего получаете наибольшее удовольствие?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ваш постоянный сексуальный партнер до сих пор вас возбуждает?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Считаете ли вы, что значение секса преувеличивается?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Получаете ли вы обычно большее удовольствие от предвкушения секса?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Чувствуете ли вы обычно после сексуального общения ощущение расслабленности и счастья?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как Вы относитесь к тому, что Ваш партнер будет рассказывать о своей сексуальной жизни тех времен, когда он не был еще знаком с Вами?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Насколько важна для Вас прелюдия?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как долго должен длиться половой акт?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Возбуждает ли Вас, если партнер продемонстрирует свое возбуждение? Вот прямо сейчас? Хотите проверить?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как Вы думаете, является ли секс лучшим средством примирения после ссоры?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как вы думаете, во сколько лет игрок <N> лишился девственности?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'хотели бы вы, чтобы в вашей стране легализовали проституцию/публичные дома?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'смотрели ли вы эротические мультфильмы? если да, то какие?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'как бы вы называли игрока <D> во время секса с ним? Хотите это проверить?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Жесткий секс или нежный романтический?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что больше возбуждает - секс в одежде или без? если в одежде - то в какой?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Вы когда-нибудь рвали одежду на партнере в сексуальном порыве?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Сколько сексуальных партнеров у вас было? а одновременно?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Если ролевые игры, то кто - медсестра, полицейский или выпускница?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Насколько ты громкий/ая в сексе?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какой тип презервативов предпочитаешь?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Кто был самым классным в сексе из твоих партнеров? Почему?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'В какое время суток тебе больше всего нравится заниматься сексом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Опиши свой оргазм',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какие извращения ты пробовал в постели?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Расскажи, какие действия партнера тебе больше всего нравятся',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Миссионерская поза, 69 или догги-стайл?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Был ли секс по пьяни? расскажи все в деталях',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Занимался/ась ли ты сексом в общественном месте?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Снимали ли вы хоумвидео?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<F>испытываешь ли ты оргазм во время орального секса?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>испытываешь ли ты оргазм во время анального секса?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Нравится ли тебе петтинг?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M>Если бы ты был султаном, сколько девушек было бы у тебя в гареме?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Использовали ли вы страпон?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что бы вы попробовали, если бы были в Таиланде?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что бы выбрали - жизнь без любви и секса или смерть?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как вам поза 69?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Занимались ли сексом в ванной?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Сколько лет было вашему первому сексуальному партнеру?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Когда и где вы впервые услышали о сексе?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что вас наиболее раздражает в сексе?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как вы думаете, до скольки лет вы будете заниматься сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как вы относитесь к БДСМ? Расскажите об этом',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какую музыку предпочитаете время секса?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как ты думаешь, что больше всего любят люди противоположного пола в сексе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>Как считаешь, большой член - это хорошо? Хочешь провести измерения?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>Расскажи и покажи на игроке <D>, где у мужчин находится уздечка',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Расскажи о том, за что тебе стыдно',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты мастурбировал(а) в людных местах? Расскажи',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Расскажи о том, как ты мастурбируешь',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как ты относишься к вибраторам? Они нужны? Есть ли у тебя?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Был ли у тебя секс по пьяни, когда ничего не вышло? Расскажи',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь спал(а) с человеком с сайта знакомств?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Видел(а) ли ты кого-нибудь из игроков полностью голым? кого?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'С кем из вселенной Властелина Колец ты занялся(ась) бы сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что ты сделаешь с пачкой презервативов?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Сколько раз в день вы подмываетесь ?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что должно произойти такого, чтобы ты стал(а) геем/лесбиянкой?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M>Ты когда-нибудь мастурбировал на Лару Крофт?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Опиши одну неловкую ситуацию из своей сексуальной жизни',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Бывает ли тебе стыдно за то, что тебе что-то нравится? Расскажи',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты застрял в лифте с игроком <N>. Чем вы будете заниматься?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'какой поступок должен совершить твой партнер, чтоб ты разорвал с ним отношения?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'что бы ты вставил(а) себе в зад из подручных предметов? Ответ "ничего" не принимается',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>Если бы парень во время минета попросил вставить ему палец в анус, ты бы согласилась?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'с кем бы ты переспал(а): с очень некрасивым человеком противоположного пола или с человеком своего пола?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Чего ты стесняешься в своей/м девушке/парне?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Укажи на того, у кого, скорее всего, был секс непосредственно перед приходом сюда',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'У тебя когда-нибудь случались провалы в соблазнении человека? Если да, то сколько раз?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'У тебя когда-нибудь диагностировали венерические заболевания?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'У тебя когда-нибудь был секс с человеком твоего пола? Как ощущения?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'У тебя когда-нибудь был секс в самолете/поезде? Если да, опиши как это было',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'У тебя есть с собой презервативы?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>У тебя когда-нибудь был залет по пьяни?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>У какого парня самый длинный член?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты лишил/а девственности несколько человек? Сколько?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты когда-нибудь целовался/лась с кем-нибудь из братьев или сестер своей/го подруги/друга?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь распахивал свою верхнюю одежду перед кем-нибудь, будучи без трусов?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты когда-нибудь разрешал/а кому-нибудь подглядывать за собой в обнаженном (или частично обнаженном) виде, делая вид, что тебя никто не видит?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты когда-нибудь разговаривал/а по телефону во время минета/куниллингуса?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Пользовался/ась услугами девочки/мальчика по вызову?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты когда-нибудь пользовался/лась лубрикантами?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты когда-нибудь отказывался/лась от секса с кем-то, увидев ее/его в обнаженном виде?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь носил/а нижнее белье человека противоположного пола?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты когда-нибудь использовал/а еду для сексуальных игр?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты когда-нибудь занимался/лась любовью на природе? Если да, то где именно?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь занимался/ась любовью в автомобиле?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты или тебе когда-нибудь платили за секс? Если да, то сколько?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты занимался сексом с кем-нибудь в свой предыдущий день рождения?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты - девственница/девственник?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Тебя когда-нибудь прерывали во время секса?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Спроси у игрока <N>, был ли у него/нее секс с тем, кого ты знаешь, если да, то с кем, и как хорош был секс',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Сколько раз максимум у тебя был секс в течении одного дня?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Сколько раз за одну ночь ты можешь достичь оргазма?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'По шкале от 1 до 10, насколько сильно ты возбужден/а в данный момент?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Открой какой-нибудь свой секрет',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Опиши себя в постели в трех словах?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'О ком ты мечтаешь во время мастурбации?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>Кто из девушек, которую знают как минимум 4 человека в этой группе, делает самый лучший минет?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<F>Кто из парней первым потрогал твою грудь?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Когда ты начал/а мастурбировать?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какой твой любимый порносайт?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какой была наибольшая разница в возрасте между тобой и тем, с кем ты переспал/а?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какое самое странное место на теле ты брил/а?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Каким было самое странное место, где тебе довелось заниматься сексом?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Как далеко ты мог/ла бы зайти с кем-нибудь из этой комнаты?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Если ты не гей/лесбиянка, кто в комнате мог бы заставить тебя сменить ориентацию скорее всего?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Если бы у тебя была возможность провести ночь с кем-то из своих бывших, кого бы ты выбрал/а?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Кто из твоих бывших был наилучшим в постели?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>В каком возрасте ты впервые прикоснулась к половому члену? Не считая родственников или маленьких детей',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Был ли у тебя секс втроем? Каким было соотношение мужчин и женщин?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что должен сделать человек, чтобы смочь тебя поцеловать?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что должен сделать человек, чтобы смочь провести с тобой ночь?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Укажи на двоих, между кем, на твой взгляд, могут завязаться отношения к концу вечеринки',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты когда-то соглашался/лась фотографироваться или рисовать себя голым/ой? Если нет, согласился/лась бы?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты когда-нибудь плавал/а голышом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь заставал/а своих родителей за занятием сексом?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты когда-нибудь занимался/лась чем-нибудь неприличным, не снимая одежды?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ты когда-нибудь занимался/лась чем-нибудь неприличным в душевой?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь заигрывал/а с кем-нибудь?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты когда-нибудь забывал/а надеть нижнее белье?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'когда-нибудь врал/а своей девушке/своему парню?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь бегал/а голышом на глазах у других людей?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Считаешь ли ты поцелуй изменой?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Стараешься избегать действия? Попался! Танцуй стриптиз для любого игрока противоположного пола',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Стал/а бы ты встречаться с человеком, с которым познакомился/лась в интернете?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Спишь ли ты обнаженным/обнаженной?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'С кем бы ты поменялся/лась своей девушкой/своим парнем, если бы пришлось выбирать?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Тебя заводят грязные ругательства?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Расскажи нам историю о своих пьяных похождениях',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Привлекал ли тебя кто-то из учителей? Кто? Почему?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Пошел/ла бы ты на разрушение чьих-то отношений ради того, чтобы встречаться с человеком своей мечты?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Почему ты расстался/лась со своей/им первой/ым девушкой/парнем?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Помнишь ли ты момент, когда в первый раз увидел обнаженным человека противоположного пола (не родителей)? Какие у тебя были мысли?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Покупал/а ли ты когда-нибудь белье для представителя противоположного пола?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Мылся/ась ли ты когда-нибудь голышом в присутствии других людей?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ловили ли тебя за чем-нибудь неприличным? Если да, то за чем именно?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Кто из присутствующих в этой комнате целуется лучше всех? Можешь проверить',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Кого из своих друзей ты считаешь самым красивым?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Кого из присутствующих в этой комнате тебе хотелось бы взять в рабство и что ты заставил/а бы его/ее сделать?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Расскажи про свой худший поцелуй',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какой была самая приятная вещь, которую сделали для тебя представители противоположного пола?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Каким должно быть идеальное свидание?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Как бы ты оценил/а свою внешность по шкале от 1 до 10?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'За какое свое умение тебе стыдно?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Доводилось ли тебе получить отказ на приглашение на свидание? Что произошло?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Влюблялся/лась ли ты одновременно в двоих?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'В чем секрет хорошего поцелуя?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'На какой вопрос ты не хотел/а бы отвечать в этой игре?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Кем является последний человек, с которым ты целовался/лась?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какая часть тела тебя больше привлекает в противоположном поле?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'У тебя был секс с двумя людьми одновременно?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Секс с утра или вечером?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Когда ты целовался(ась) в последний раз?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что ты выберешь: заплатить за секс или наоборот, взять деньги за него?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Когда-нибудь целовался(ась) с человеком своего пола?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Хотел(а) бы попробовать групповой секс?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Нравится смотреть порно?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>Зарплата парня имеет для тебя значение?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>Испытываешь оргазм во время секса?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Какие у тебя самые чувствительные точки на теле?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'У тебя есть секс-игрушки?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>Если бы у красивого незнакомца, который стоит сзади тебя в очереди, встал и ты бы почувствовала своей попкой, ты бы разозлилась или еще больше прижалась?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Когда-нибудь видел(а), как другая пара занимается сексом?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Хотел(а) бы, чтобы на тебя смотрели во время секса?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Догги-стайл или миссионерская?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Назови одну вещь, которая лучше всего у тебя получается в постели?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Выбери одну роль из двух для себя: хозяин или раб?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты любишь делать селфи ню?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<F>В какой позе ты наиболее часто испытываешь оргазм?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Назови свое самое развратное желание?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Когда-нибудь реализовывал(а) свою эротическую фантазию в реальной жизни?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Самый сексуальный комплимент, который тебе когда-либо делали?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Самый сексуальный комплимент, который ты когда-либо делал(а)?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>Каким ты представляешь идеальный член?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Хотел(а) бы переспать с человеком своего пола? А за деньги?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какой частью своего тела гордишься больше всего?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Встречался(ась) ли ты с несколькими людьми одновременно?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Опиши самую сексуальную одежду, которую ты когда-либо надевал(а)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M>Ты сидишь за столиком (в кафе или в ресторанчике)…. К тебе подходит девушка и предлагает заняться сексом. Твоя реакция?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>На что ты пойдешь ради секса с той красавицей, о которой ты давно мечтаешь? ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M>Ты доволен размерами (параметрами) своего члена?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какая часть тела считается самой эротичной (по твоему мнению)?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Целовались ли вы в общественном месте?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'У тебя есть какие-нибудь фетиши? Какие именно? ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Сколько раз в день ты думаешь о противоположном поле?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Покупал(а) ли ты когда-нибудь одежду для противоположного пола? Как это было?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M> покупал ли ты когда-нибудь прокладки или тампоны?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Считаешь ли ты себя пошлым? И если да, то почему?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Какие интимные темы тебя смущают?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что тебе категорически не нравится в сексе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Ходишь по квартире голышом? ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Cпишь ли ты голышом? ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь жалел(а) о том, что занялся с кем-то сексом? расскажи',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'когда ты в первый раз занялся(ась) оральным сексом? ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Ты когда-нибудь занимался(ась) сексом только лишь потому, что был(а) пьян(а)? ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'расскажи в деталях о твоем самом отстойном свидании',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M> как часто и в каких ситуациях (не связанных с сексом) у тебя встает член без видимой на то причины?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'расскажи про свою неудачу в постели  ',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'опиши в деталях своего идеального сексуального партнера ',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'назови 3 известных человек твоего пола, с которыми бы ты переспал(а), если бы был(а) геем/лесбиянкой. Ответ "ни с кем" не принимается ',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'сколько бы тебе понадобилось выпить, чтобы переспать с игроком <D>?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'как ты считаешь, кто из игроков умеет доставлять удовольствие во время оральных ласк?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты предпочитаешь секс оральный, анальный или вагинальный?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>опиши минет своей мечты',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<F>расскажи, как ты делаешь минет',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>опиши куни своей мечты',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>расскажи, как ты делаешь куни',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ты бы переспал(а) со своим боссом, если бы он(она) был(а) сексуальный(ной), для продвижения по карьерной лестнице?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Переспал(а) бы ты с противным старикашкой за 150 000 USD?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какую часть своего тела вы любите больше всего?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'В чем вы спите?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что вас возбуждает в вашем партнере?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Какие фразы возбуждают во время секса?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что вы думаете о сексуальном воспитании? Нужно ли оно?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<F>в мужчине вас больше привлекает накачанный пресс или накачанная грудь?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M>грудь или попа?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что ты предпочитаешь: актив или пассив? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что ты предпочитаешь: орал или анал? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что ты предпочитаешь: легкую интрижку или серьезные отношения? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Что ты предпочитаешь: стринги или шортики? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M>Выбирай: Меган Фокс или Скарлетт Йоханссон ? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что бы ты выбрал(а): пенис 9 см или 36 см? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Костюм полицейского или пожарника? Аргументируй свою точку зрения. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Чего вы больше всего боитесь? Отвечайте друг за другом',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Идеальная продолжительность полового акта?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Самая странная твоя эротическая фантазия?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Ваше самое длительное время воздержания?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Самая несексуальная фраза, который ваш партнер может сказать во время секса',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'Вы устали, а ваш партнер хочет секса, ваши действия?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Представьте: перед смертью у вас есть 5 минут на секс (с кем хотите и где хотите). Ваши действия?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как скоро вы достигаете оргазма?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'какую вещь в последний раз ты засовывал в попу?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь занимался(лась) любовью в присутствие своей собаки или кошки?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь занимался(лась) любовью в общественном транспорте?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты хранишь обнаженные фотографии своих бывших?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'у тебя есть сексуальные обнаженные фотографии твоей девушки(парня)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь покупал(а) порно журналы?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь делал(а) "золотой дождь"?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь занимался(лась) сексом с бабулей или дедулей?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты когда-нибудь занимался(лась) сексом с человеком, не зная его имени?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь ел фрукты с тела своего партнера?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь вбивал в поисковике "секс позиции"?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты когда-нибудь вбивал(а) в поисковике "что делать, если не стоит"?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M>ты когда-нибудь вбивал в поисковике "что делать, если у нее болит голова"?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь смотрел азиатское порно или групповушку, в которой было более 14 человек?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты когда-нибудь достигал оргазма, находясь под струей воды?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь кликал(а) на ссылку в интернете "как увеличить член/грудь"?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<M>ты когда-нибудь пихал свой член в пластиковую вагину?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>ты засовывала секс игрушку себе в вагину?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь смотрел порно с друзьями/девушкой/парнем и т.п.?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь застукивал своих родителей за сексом?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'в этом году ты занимался(лась) сексом больше, чем с одним партнером?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь включал свой компьютер/телефон в публичном месте, а там открывалось порно?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'кто-нибудь видел, что в истории твоих запросов в интернете есть порно сайты?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<M>тебя когда-нибудь застукивали со стояком в общественных местах?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': '<M>тебе часто случается маскировать свою эрекцию?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': '<F>ты когда-нибудь танцевала с парнем и чувствовала его эрекцию?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'за 50 тысяч ты переспишь с игроком <N>?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'у тебя был приступ смеха во время секса?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'у тебя было больше 20 сексуальных партнеров?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты когда-нибудь засовывал(а) что-либо себе в попу?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Сколько лет было вашему самому взрослому партнеру?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'опиши самую ужасную сцену из порно фильма, которую ты когда-либо видел',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты когда-нибудь был голым на публике?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь врал(а) о том, сколько тебе лет, чтобы склеить девушку(парня)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь домогался(лась) кого-либо, будучи пьяным(ой)?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'у тебя сегодня был оргазм?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь спал(а) с человеком по дурацкой причине?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'тебе нравится вкус гениталий твоего партнера?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты когда-нибудь мерился размером своего полового органа с друзьями (или обсуждала размер члена своего партнера с подругами)?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты когда-нибудь врал о размере своего полового органа или о размере полового органа своего партнера?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь нюхал(а) нижнее белье своего партнера(партнерши)?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': '<F>ты брала у своего парня майку или трусы, чтобы использовать их как пижаму?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты готов(а) переспать с первым(ой) встречным(ой) за 500 000 рублей?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'тебе снились эротические сны на этой неделе?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты видел(а) кого-то из игроков абсолютно голым(ой)? Кого?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'ты занимался сексом на своей работе?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Как быстро ты засыпаешь после секса?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты измерял(а) свой половой орган или половой орган своего партнера?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'хоть раз ты просыпался(лась) в чужой кровати и не помнил(а), как туда попал(а)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты занимался(лась) сексом в воде?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты лишал(а) кого-либо девственности?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'вы когда-либо спали с несовершеннолетней(ним), будучи совершеннолетним(ней)?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты занимался сексом в самолете?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'у тебя было несколько сексуальных партнеров в одно и то же время?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'тебе изменяли?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь говорил(а) "нет" нереально сексуальной девушке (парню)?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'тебе удавалось закадрить своего партнера в медленном танце?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'назови имена трех бывших',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'ты когда-нибудь целовал(а) в губы человека твоего пола?',
      'pack_id': 23,
      'pack_name': 'truths_ero2',
    },
    {
      'text': 'ты когда-нибудь ласкал(а) человека твоего пола?',
      'pack_id': 24,
      'pack_name': 'truths_ero3',
    },
    {
      'text': 'Что бы вы предпочли: Эмму Уотсон или Натали Портман?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
    {
      'text': 'Что бы вы предпочли: быть самым умным человеком в мире или самым сексуальным?',
      'pack_id': 22,
      'pack_name': 'truths_ero1',
    },
  ],
  'truths_general': [
    {
      'text': 'Самый нелепый случай в школе?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'За какую сумму ты бы согласился/ась побриться налысо?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Самый безбашенный поступок в вашей жизни?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Продолжи фразу: День удался, если...',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы ты сделал(а), если бы узнал(а), что ты приемный ребенок?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'С кем из знаменитостей ты бы хотел(а) встречаться?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть секреты?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Наиболее глупая ситуация в твоей жизни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты когда-нибудь позорился(ась) на глазах у толпы?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты бы смог(ла) пройтись в белье по торговому центру?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кем из супергероев ты бы хотел(а) быть?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какой ты фрукт?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты нарушал(а) закон?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любишь ли ты петь в душе?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'В каком шоу ты бы хотел(а) участвовать?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты можешь танцевать стриптиз?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как ты относишься к людям с нетрадиционной сексуальной ориентацией?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как ты относишься к неформалам?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Приходилось ли тебе убегать от полиции?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'В школе ты издевался (издевалась) над учителями, одноклассниками?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как тебя называют друзья (прозвище)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как тебя дразнили в детстве?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты часто участвуешь в драках?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'В какую игру ты сейчас хочешь сыграть?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'На велосипеде кататься умеешь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой новогодний костюм на тебя надевали в детстве?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы вдруг твой кот или собака, в один прекрасный момент, научились говорить. Что, по-твоему, они бы сказали в первый раз?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как бы ты назвал(а) свою яхту?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '10 фактов о себе, которые не знает о тебе игрок <D>',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Тебя не смущают поцелуи на людях?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Тебе нравится флиртовать?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как ты флиртуешь и привлекаешь к себе внимание?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как тебе больше всего нравится целоваться?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Чувствуешь ли ты неловкость, когда смотришь фильм с друзьями/родителями, а на экране идет постельная сцена?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как часто ты влюбляешься?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты предпочитаешь состязаться с равным соперником или с более слабым?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какие три желания ты бы загадал(а) при возможности?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какую последнюю книгу ты прочитал(а) и почему выбрала ее?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты идешь или стоишь на эскалаторе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'У тебя есть привычка заглядывать на последнюю страницу, только начав читать книгу?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы ты сделала, если встретил(а) бы своего двойника?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что ты прячешь, когда твои родители приходят к тебе?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Когда два человека женятся, говорят: «вы можете поцеловать невесту». А что говорят, если женятся два МУЖЧИНЫ?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Михаил Боярский моется в шляпе или без?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Каких животных ты любишь и за что?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если у тебя враги? Почему они появились?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты относишься к старости? Не пугает ли тебя старение?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как ты относишься к рассказам о параллельном мире и вообще потустороннем? Веришь в существование НЛО?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы у тебя появился бы шанс снять свой фильм...о чем он был бы?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твое любимое занятие?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Есть ли такой человек, которого ты хотел(а) бы вернуть? и которого хочется забыть?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Любимый мультик детства?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что для тебя является приоритетным в отношениях?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любишь целоваться? Согласился(ась) бы ты целоваться с незнакомыми людьми за деньги?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если тебе придется открывать свое кафе, какое имя ты ему дашь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кеды или туфли?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если ты влюбишься - сам(а) подойдешь, скажешь, или подождешь, когда к тебе подойдут?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любишь экстрим?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как реагируешь на критику совершенно незнакомого человека?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кем хотел(а) стать в детстве?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Умеешь играть в покер? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой вид спорта тебе больше всего нравится смотреть? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какие жанры фильмов любишь?Почему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'С кем были самые долгие отношения? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Имя, первое пришедшее в голову? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что выберешь "карьера, потом семейная жизнь", или "на первом месте семья, карьера потом"?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты хороший друг?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'К чему ты стремишься?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты обычно рано встаешь или спишь допоздна? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Когда последний раз был(а) в кино и на что ходил(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если в путешествие, то куда?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какая у тебя заветная мечта?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какая песня соответствует твоему настроению сейчас?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любимый цветок?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты любишь гулять в дождь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Опиши свой первый поцелуй',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что для тебя дружба?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что было твоим любимым занятием в раннем детстве?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Любишь рок?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Любимый напиток?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'По твоему мнению, кто главный в семье? муж или жена?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твой любимый психологический фильм?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что вкуснее шоколада?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как считаешь, как проще всего избавиться от мыслей о человеке?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Чем будешь заниматься летом?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твой психологический возраст?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты умеешь уладить конфликт? Всегда ли на грубость нужно отвечать грубостью?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как ты считаешь, люди меняются на протяжении всей жизни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Боишься трудностей?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любимая музыка? любимый фильм? цвет? черта в людях?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'А каков твой вес на сегодняшний день? И какой рост?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кудряшки или выпрямленные волосы?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как бы ты назвал(а) своих детишек, мальчика и девочку? Назвал(а) бы ты своего сына Ибрагим, если бы тебе за это заплатили?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'У тебя есть любимая пора года?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кем ты работаешь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Где ты учишься?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты бывал(а) за границей? Где?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Много ли у тебя друзей?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Сколько тебе лет?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты любишь получать в подарок?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какое твой девиз по жизни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твое самое любимое воспоминание?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты любишь жизнь по-настоящему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какие у тебя взаимоотношения с родителями?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что ты ценишь в человеке больше всего?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Где ты любишь бывать, когда тебе грустно?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты повышаешь свое настроение?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Хотел(а) бы ты, чтобы у тебя была машина времени?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что из прошлой жизни ты бы хотел(а) забрать в настоящую?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Где бы ты очень хотел(а) побывать?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты можешь дотронуться кончиком языка до носа?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какая твоя любимая марка автомобиля?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какие у тебя предпочтения в еде?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Почему индивидуальный разум всегда сильнее коллективной тупости?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Чем бы вы занимались, если бы вам не нужно было зарабатывать деньги?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой рукой правильно размешивать чаек или кофеек?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты был(а) арестован(а)? расскажи об этом',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Расскажи о своем первом путешествие на машине',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какую работу ты ненавидишь больше всего и почему?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'На кого из своих родственников по эмоциональности ты похож больше всего и почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любимые воспоминания, связанные с мамой?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Любимые воспоминания, связанные с папой?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как познакомились твои родители?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Расскажи смешную историю твоей семьи',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Расскажи о родственнике, гордишься за которого ты больше всего',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Есть ли у тебя знакомые в тюрьме? Почему они там оказались?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы была такая возможность, то кого из своих родственников ты бы хотел(а) наказать больше всего и почему?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Чем тебя увлекает или увлекала школа? Придумал(а) ли ты способ как убить время на уроке?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Назови хотя бы одно достоинство детства, которого тебе не хватает',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Были ли у тебя враги или люди, которые тебя доставали в детстве?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Когда и с кем ты впервые поцеловался(ась)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Твой самый тяжелый момент в жизни. Как ты справился/ась с ним?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твои самые сумасшедшие идеи развлечься?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой был твой самый стеснительный поступок? И почему ты стеснялся?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Твои самые лучшие и незабываемые каникулы?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Твой самый лучший прикол над друзьями или знакомыми?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Чтобы ты хотел(а) изменить в себе?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Чтобы ты хотел(а) изменить в мире, в котором живешь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Чтобы ты выбрал(а): настоящую любовь или 1 миллион долларов?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Хотел(а) бы ты изменить свой пол? Почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твои жизненные ценности?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Твой самый ответственный момент в жизни?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Твои лучшие достижения в жизни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Веришь ли ты в рай? И если да, то что бы ты спросил(а) у Бога, встретив его?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Работа твоей мечты?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Работал(а) ли ты когда-нибудь за границей? Какие впечатления?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Имея 3 желания, что бы загадал(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе пришлось изменить свое имя, на какое ты бы изменил(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Где бы ты хотел(а) побывать?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы ты хотел(а) изменить в своей машине? (Если есть)',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы ты создал(а) свой ресторан, как бы он назывался?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе дали 1 млн. долларов, которые можно тратить только на развлечения, как бы ты их тогда потратил(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты умер/ла через 24 часа, чтобы ты сделал/а за это время?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'С кем и куда бы ты хотел(а) отправиться в путешествие из знаменитых людей? Не важно, мертвые они или нет',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Бывал(а) ли ты в райских местечках?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какой самый необычный номер машины ты видел(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какая самая мерзкая еда, которую ты когда-либо ел(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какими качествами, по-твоему, должен обладать друг? У тебя есть лучший друг?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какая часть человечества, по твоему мнению, должна быть уничтожена?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кто твой герой?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кто, по твоему мнению, самый ужасный актер?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'За кого из своих знакомых или друзей ты бы заложил(а) в залог?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Может помнишь момент из жизни, когда ты с родителями попал(а) в большие неприятности?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какой супер-герой в детстве тебе нравился?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Чего ты стесняешься больше всего?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой самый милый поступок кто-нибудь когда-либо для тебя делал? Как ты отблагодарил(а) этого человека?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Имея машину времени, где бы ты хотел(а) побывать?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какие возможности имеешь ты?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какие вредные привычки тебя раздражают больше всего?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'В чем ты лучше остальных?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какое твое любимое животное? Если бы ты был(а) этим животным, что бы ты делал(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'К чему или к кому ты испытываешь отвращение? Почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Когда в последний раз ты испугался/ась до смерти? Почему?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кого бы из игроков ты спас(ла) во время пожара?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты меньше всего любишь делать? Почему?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какие качества человека тебя бесят больше всего?Есть ли они в игроке <N>?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как ты думаешь, в чем ты хорош(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Каких домашних животных ты недолюбливаешь? Почему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты не умеешь делать или умеешь, но делаешь недостаточно хорошо?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Есть ли у тебя родственники за границей? Ездил(а) к ним?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Нравятся ли тебе дети? Во сколько лет ты хочешь завести детей? Откажешься ли ты от ребенка, если у него будут серьезные отклонения?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'При каких обстоятельствах ты полностью отказываешься делать какие-либо вещи? Почему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что тебе больше всего нравится в котах?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе пришлось жить на Антарктиде, то каким животным ты бы стал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Выигрывал(а) ли ты когда-нибудь соревнования, конкурсы?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Любишь ли ты устраивать фотосессию?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Чем тебе нравится твоя работа?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'что люди не знают о тебе?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'О чем ты мечтаешь ночью?Есть ли в твоих мечтах место для игрока <N>?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'От чего в жизни ты получаешь удовольствие?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы джин смог исполнить твои 3 желания, какие они были бы?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе подарили бесплатный билет на самолет, куда бы ты полетел(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты умер/ла, то какие воспоминания о себе ты бы хотела оставить?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы тебе дали шанс изменить что-то в себе, что бы ты изменил(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какая твоя цель жизни?Карьеры?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как ты представляешь свою жизнь через 5 лет?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты знал(а), что умрешь через 24 часа, какие бы 3 вещи ты бы сделал(а) за это время?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы тебе предложили сделать бесплатную пластическую хирургию, что бы ты изменил(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'О каких экстремальных развлечениях ты мечтаешь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты поехал(а) в путешествие с одним человеком, то куда бы ты поехал(а) и кого бы взял(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какую веселую цель жизни ты хочешь выполнить пока жив(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Хочешь ли ты детей? Сколько? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как ты представляешь наш мир через 25 лет?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'издевался(ась) когда-нибудь над другим, более слабым человеком? Не важно, в школе, институте или на работе?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'чему бы ты мог научить других игроков? Что умеешь ты, но скорее всего не умеют они?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'как считаешь, у кого из игроков мужского пола наибольшая популярность среди женщин?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'сколько стоит твоя дружба? За какую сумму, ты бы прекратил все отношения с другими игроками.',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'в каких странах ты бывал(а) и какая из них тебе нравится больше всего?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'был(а) ли ты свидетелем какой-нибудь катастрофы или преступления?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'нарушал(а) ли ты когда-нибудь закон? Чем все закончилось?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'если бы другие игроки обучали тебя чему-нибудь, у кого бы ты хотел(а) учиться?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'как думаешь, чем бы сейчас занимался/ась, если бы Советский Союз не развалился?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Увлекаетесь ли вы экстравагантными молодыми людьми (девушками)? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ваше сердце свободно? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Любите ли вы делать подарки? Что бы вы подарили игроку <N>?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Вы ревнивы? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Хотите ли вы иметь парня (девушку)? Как насчет игрока <D>?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Любите ли вы читать чужие сообщения? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Часто ли вы попадаете в экстремальные ситуации? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Хотели бы вы целоваться чаще, чем сейчас?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Можете перебрать с алкогольными напитками? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Вы часто врете? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Вы хамите окружающим? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Любите готовить? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Вы романтик? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Вы ленивы? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Способны ли вы покупать любовь за деньги? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Часто ли вы берете деньги в долг? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Пробовали ли вы соблазнить чужого парня (девушку)? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'вы трусливы? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Охотно ли вы целуетесь в общественных местах? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У вас много тайн? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Считаете ли вы, что любимому человеку нужно говорить только правду? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Любите ли вы вмешиваться в чужие дела? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Могли бы вы изменить мужу или жене?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ваш самый ужасный поступок в жизни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Хотелось ли Вам когда-нибудь тыкнуть пальцами "человеку" в глаза?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что вам хочется сказать человеку, который при всех чистит нос?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Все хотят сделать мир лучше, а людей счастливыми. А могли бы вы усыновить брошенного ребенка?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Смогли бы вы родить ребенка вне брака?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'За какой поступок Вам больше всего стыдно в жизни?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Делали ли вы что-то любимому человеку назло, зная, что ваш поступок его обидит?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Было ли что-то такое, что родители запрещали вам делать под страхом "смерти", но вы все равно делали?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У вас что-нибудь крали?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'самое ваше большое разочарование в жизни?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ваша самая сокровенная мечта? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'кем вы мечтали стать в детстве?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'для вас имеет значение материальное положение любимого человека?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Вы когда-нибудь пробовали наркотики? Легкие, тяжелые?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'до какой степени вы можете напиться? есть ли "тормоза" и контролируете ли свои действия в таком состоянии?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>согласились бы вы сидеть дома и не работать, если ваш любимый так захотел?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Вас ловили за ковырянием в носу?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Вы бы хотели прыгнуть с парашютом?  ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Вас когда-нибудь предавал любимый человек?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы Вы могли играть главную роль в кино, какой бы она была?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Самое долгое сколько Вы не принимали ванну?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть ли у тебя татуировки или пирсинг?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Яблочный сок или апельсиновый? Чай или кофе? Кока-кола или Пепси?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Футбол или баскетбол?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Макраме или оригами?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты коллекционируешь что-нибудь?Почему?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Оптимист или пессимист?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Правша или левша?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Твои родители счастливы друг с другом?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Каким был самый лучший в твоей жизни концерт?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты веришь в инопланетян или в жизнь на других планетах?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты веришь в Деда Мороза?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты веришь в привидения?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть ли у тебя цель или призвание в жизни?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Есть ли у тебя скрытые таланты?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как думаете, есть ли свобода выбора?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Есть ли у тебя фобии?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть ли у тебя шрамы?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты любишь танцевать?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'У тебя есть фотоаппарат? Любишь фотографировать?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что ты любишь на завтрак?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'О тебе когда-нибудь писали в газетах?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты когда-нибудь купался/ась нагишом?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты часто обманываешь других людей?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты когда-нибудь встречал(а) знаменитость?С кем бы хотел встретиться?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты выигрывал(а) в лотерею?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты узнаешь о новостях?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Сколько времени ты тратишь на одноклассников, контакт и твиттер?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как часто ты смотришь телевизор? Какие передачи любишь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Что ты думаешь о моде? Стиле? Как должен выглядеть идеальный мужчина?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы ты хотел(а) изменить во внешности? Хотел(а) бы быть похожим на кого-нибудь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Хотел(а) бы ты оказаться на необитаемом острове? С кем? Что бы взял(а) туда?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что для тебя важнее: семья или деньги?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты любишь детей? Как ты бы назвала своего первого ребенка? В честь кого-то?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какие алкогольные напитки больше всего любишь пить?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебя устраивает твоя внешность, или ты бы что-то хотел(а) изменить в себе?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Чего больше всего тебе не хватает в жизни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты кому-нибудь признавался/лась в любви?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты любил(а) по-настоящему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'К тебе часто подходят знакомиться на улице? Как ты на это реагируешь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Где тебе больше всего нравится проводить время?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты любишь ходить в клубы?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой у тебя был лучший день в жизни?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'У тебя много врагов в настоящее время? Хотел(а) ли ты бы помириться с ними?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'В какую страну ты мечтаешь съездить отдохнуть?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Вам часто делают комплименты?Какой последний раз получили?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой твой любимый фильм? Какие фильмы ты смотришь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты веришь в дружбу между мужчиной и женщиной?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Когда у тебя свободное время, что ты больше всего любишь делать?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какое время года тебе больше всего нравится?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как часто ты сидишь в социальных сетях? Любишь ли знакомиться там?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Во сколько лет у тебя была первая любовь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты веришь в судьбу, или считаешь, что как человек решит, так и будет?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'В какой стране ты бы хотел(а) жить?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты умеешь плавать?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебя нравиться пирсинг? Хотел(а) ли ты бы украсить свое тело им?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У тебя когда-нибудь был поцелуй на первом свидании?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты ведешь дневник?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть кумир?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебе кто-нибудь признавался в любви?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты бы хотел(а) прыгнуть с парашютом?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Веришь ли ты в любовь с первого взгляда?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какие у тебя отношения с братом, вы часто ссоритесь? (если есть)',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты бы хотел(а) жить с родителями или отдельно?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как меняется твой характер, когда ты пьян(а)?  ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты выступала публично? (если да) Страшно было?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты где-то путешествовал(а)? (если да) Какие впечатления остались?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебе нравится профессия, которую ты себе выбрал(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какие виды спорта тебе нравятся?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'У тебя есть мечта?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Сколько настоящих друзей есть в твоей жизни?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты в детстве хулиганил(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Любишь мечтать? О чем мечтаешь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что тебя больше всего рассмешило за прошедшую неделю/ месяц?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты творческий человек? Почему так считаешь? Если да, то, что играет в роли твоей музы?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты выбираешь: Спонтанность или стабильность?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Тебе нравится получать подарки, или приятней дарить их?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Веришь в знаки зодиака? Какой твой?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Сериалы, которые ты любишь смотреть?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Твой любимый вид спорта?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Веришь в настоящую любовь? Почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть сестра или брат?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Нравится танцевать? Почему? Какие танцы нравятся?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'О чем жалеешь в своей жизни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Сколько языков ты знаешь? Какие хотел(а) бы еще выучить? Почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какое обычно у тебя утром настроение?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Хотел(а) бы ты прославиться?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У тебя было когда-нибудь желание уйти в монастырь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как оценишь по шкале от 1 до 10 свою неадекватность?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Оружие в руках хоть раз держал(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты владеешь французским языком?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какой у тебя был самый яркий момент в жизни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты где и с кем новый год отмечал(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как относишься к нудистскому пляжу?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какую песню ты бы выбрал(а) для описания своей жизни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Хочешь выучить какой-нибудь иностранный язык?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты на каком курсе (классе) учишься?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты когда-нибудь прыгал(а) с парашютом?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты смотришь телевизор?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Велосипед или прогулки на лошади? Почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Смог(ла) бы ты продать свою почку, если бы у тебя были серьезные проблемы с деньгами?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты уверенный в себе человек?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты хоть раз выигрывал(а) в карты на раздевание?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какое твое любимое время года?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что выберешь: деньги или любовь?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Матом часто ругаешься?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как ты назовешь своих детей? Как насчет того, чтобы дать им иностранные имена?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'С каким персонажем ты себя ассоциируешь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Каким спортом ты занимаешься?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть эротическое белье?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы тебе осталось жить один час, чтобы ты сделал(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'А ты когда-нибудь ходил(а) по городу всю ночь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твое любимое женское и мужское имя?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты относишься к измене?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кока-кола или Пепси?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты любишь загорать?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Умеешь рисовать?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты когда-нибудь ходил(а) на ночной сеанс в кино?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебе нравится, когда тебя называют ласковыми словами?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Любишь праздновать свой день рождения?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Футбол или хоккей?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Во сколько ты просыпаешься?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь целовал(а) кого-то, чье имя начинается с «А»?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Хочешь полетать на воздушном шаре?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любишь приключения?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой твой любимый цвет?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какие песни ты поешь в душе?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы все люди мира слушали тебя, то что бы ты им сказал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'В твоей жизни сбылась хотя бы одна мечта?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'За какую команду болеешь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Умеешь делать шашлыки?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У тебя есть тату на теле?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что доставляет тебе удовольствие?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Где ты сейчас учишься?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты хочешь: клубнику со сливками или мороженное с шоколадом и вишенкой?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Хочешь пострелять с пистолета?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Тебе нравятся красивые или умные?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Нравиться ходить в кино?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты выбираешь: обнимашки или поцелуй?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'В тебе есть загадка?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты ревнивый(ая)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какое у тебя образование?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какие три вещи ты хотел(а) бы иметь прямо сейчас?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты веришь в судьбу?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'А ты хочешь встретить рассвет с любимым человеком?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какую ты машину хочешь себе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебе посвящали стихи когда-нибудь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Пробовал(а) сниматься где-нибудь (фильм, клип)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой у тебя характер?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Остров или теплый и уютный коттедж в швейцарских альпах?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы тебе осталось жить один год, чтобы ты сделала?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты часто влюбляешься?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'У тебя была безответная любовь?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'А ты больше любишь смотреть фильм в центре или на задних рядах?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Любишь огурцы?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты относишь себя к какой-либо субкультуре?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты когда-нибудь хотел(а) начать жизнь заново?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Чего бы ты хотел(а) добиться?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какое твое любимое место в городе?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что ты любишь делать больше всего на свете?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Расскажи, чего ты ждешь от близкого человека?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Хочешь покататься на гондоле?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты какое вино предпочитаешь? Красное итальянское или белое испанское?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кого хочешь? Сына или дочку?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты обычно проводишь свободное время?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как ты думаешь, сколько денег стоит твоя жизнь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что в твоей жизни было самым романтичным?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'На скольких языках ты можешь говорить?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой самый странный напиток ты пил(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'за кого будешь голосовать на выборах?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что тебе дороже всего в жизни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'У твоей семьи есть дача?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какую музыку ты хочешь слышать на своей свадьбе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Хочешь влюбиться?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Любишь романтику?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы у тебя было три желания, чтобы ты загадал(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какую музыку ты больше всего любишь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ходишь в клубы?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты был(а) где-нибудь на море?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты какого года рождения?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть домашние животные?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как ты думаешь, что отличает тебя от других?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кем работают твои родители?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какое из всех празднований твоего дня рождения тебе больше всего запомнилось?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой роман о любви у тебя самый любимый?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какой вид бизнеса тебя привлекает?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какое твое любимое слово или фраза?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кто из известных женщин для тебя эталон красоты?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'У тебя была в детстве любимая игрушка?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какой будет твоя свадьба?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какие твои любимые и нелюбимые цветы?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой фильм произвел на тебя особое впечатление?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что шокирующего из своей жизни ты можешь рассказать незнакомому человеку?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что вызывает у тебя дикий восторг?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты любишь смотреть ужастики? Насколько сильно они могут тебя впечатлить?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть хобби? А чем ты больше всего любишь заниматься в свободное время?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Сколько языков ты знаешь? Ты чувствуешь, когда говоришь с акцентом на них?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Нравится ли тебе заниматься домашними делами? Что больше всего ты не любишь делать?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Насколько часто ты говоришь неправду?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какая черта характера в человеке тебе больше всего не нравится?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какие черты твоего характера тебе больше всего нравятся?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Тебя когда-нибудь кусала собака?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Часто ли ты бываешь за границей?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Бывает ли с тобой такое, что тебя ничем не заставить делать что-то?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты любишь кошек? Почему?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как ты думаешь, ты удачливый человек? В чем тебе обычно везет?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любишь ли ты фотографироваться? У тебя есть интимные фото?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Зарегистрирован(а) ли ты в социальных сетях? Как ты относишься к общению и знакомствам по интернету?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебе нравится то, чем ты занимаешься?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кем бы ты хотел(а) стать, если бы у тебя был еще один шанс выбрать профессию?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как ты думаешь, кем бы ты не стал(а) ни за что на свете?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты больше открытая или закрытая для общества личность?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что тебя больше интересует, карьерный рост или семья? Что может быть препятствием в каждом случае?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У тебя есть что-то, за что ты готов(а) была бы отдать свою жизнь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Можешь ли ты вспомнить, исполнилось что-нибудь из того, что ты загадывал(а) в новогоднюю ночь?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Бывали ли какие-то ситуации в твоей жизни, которые способствовали изменению твоего мышления в корне?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Есть ли у тебя кумир? На кого ты бы хотел(а) быть похожей?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'В какой компании людей ты проводишь большую часть своего времени?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как ты думаешь, что бы ты сделал(а) с огромной суммой денег, которую бы тебе подарили просто так?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Куда ты мечтаешь поехать, чтобы отдохнуть?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты бы хотел(а) вернуться в детство? Какие самые счастливые моменты из своего детства ты можешь вспомнить?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты был(а) спокойным ребенком или все время приносил(а) хлопоты своим родителям?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы тебе дали две путевки только на один конец в другую далекую страну, кого бы ты взял(а) с собой?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты думаешь, у тебя больше друзей или врагов?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты романтик или больше реалист по натуре?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе дали возможность выбора, где тебе родиться, какую страну ты бы выбрал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как ты думаешь, чем мужчина отличается от женщины?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что может тебя осчастливить? А что может привести в неистовый восторг?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Есть ли у тебя недостатки, и какие больше всего тебе мешают?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'В чем заключается твоя особенность, отличающая тебя от остальных?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Все ли тебя устраивает в твоей внешности, если нет, то что бы ты хотел(а) поменять?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть враги?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты веришь в карму и в то, что если ты сделаешь кому-нибудь что-то плохое, то это бумерангом вернется к тебе?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе предоставили одноразовые бесплатные авиабилеты, какую страну ты бы выбрал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы тебе пришлось изменить имя, какое бы ты выбрал(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы тебе оставалось жить 24 часа, какие три вещи ты бы обязательно сделал(а) напоследок?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'А если бы ты стал(а) невидимкой на 24 часа, что бы ты сделал(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какие три вещи ты бы вынес/ла из горящего дома?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть ли что-то, что ты отказался/ась бы делать при любых обстоятельствах?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какая твоя самая ненавистная домашняя работа?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Имя певицы, звук голоса которой ты не выносишь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Назови что-то, что о тебе знает только игрок <N>',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что ты умеешь делать лучше других?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Было ли что-то такое, чем ты не успел(а) насладиться в детстве?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты не умеешь делать?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Чему бы ты хотел(а) научиться в ближайшее время?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Расскажи какую-нибудь страшную историю из жизни',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Был ли у тебя момент, когда ты всерьез испугался/ась за свою жизнь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что, по твоему мнению, нужно для успеха в жизни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что ты считаешь самым важным событием своей жизни до этого момента?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что тебе не нравится в твоей работе?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что у тебя в карманах?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что было самым запоминающимся на твоем выпускном вечере?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какое блюдо ты готовишь лучше всего?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой была твоя самая безумная выходка?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какое твое самое первое воспоминание?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Твое любимое ругательство?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Твой любимый цветок?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Каким должен быть твой идеальный друг?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что, по-твоему, значит хорошо отдохнуть?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какое твое заветное число?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какая вещь в твоем доме самая любимая?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Было ли у тебя когда-нибудь прозвище?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что заставляет тебя смеяться?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какую музыку ты сейчас слушаешь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какой должна быть работа твоей мечты?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты когда-нибудь стрелял(а) из настоящего оружия?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<M>если бы вы с лучшим другом по уши влюбились в одну девушку, ты бы уступил ее ему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<M>нравятся ли тебе женщины старше тебя? Если да, то чем привлекают?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<M>во сколько лет начал бриться?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Тебе какие девушки (парни) нравятся?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Способен(а) на измену, если же нет, то почему? (или просто не можешь изменить определенному человеку?)',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>У тебя есть друг, с которым бы ты встречалась, изменяя своему парню?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какие чувства испытываешь к своей девушке (парню)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что ты ценишь в девушке (парне)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Есть сейчас девушка (парень), с которой(ым) ты хотел(а) бы быть? Расскажи о ней',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Хотел(а) бы ты на день стать женщиной (мужчиной)? Чем бы в таком случае занялся(лась) в первую очередь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что можно простить человеку?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'на что ты готов(а), чтобы быть с девушкой (парнем) своей мечты?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>нравятся ли тебе мужчины младше тебя? Если да, то чем?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>лучше интеллектуал с хилым телосложением или глупец с шикарным телом?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Что у тебя находится в дамской сумочке? Какие необычные вещи там бывали?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Какая твоя любимая часть косметики? Почему?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>Сколько пар туфель присутствует в твоем гардеробе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты делаешь, чтобы привлекать противоположный пол?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Любишь, когда дарят тебе цветы? Какие?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что должен уметь делать настоящий мужчина?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты активный(ая)? Как относишься к себе? Как видишь себя в будущем?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Пошел(а) бы на свадьбу к бывшей(-му)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какое белье носишь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Любишь парней-романтиков?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Верный(-ая) ли ты в отношениях ? И на что готов(а) ради любви?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>Ты когда-нибудь знакомилась первая с парнем?  ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Что у тебя есть такое, чем ты отличаешься от других девушек?  ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>С кем тебе больше нравится гулять: с парнем или друзьями?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>Ты когда-нибудь билась с девушкой? За что?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>Ты смотришь в глаза парню, когда встречаешь его на улице?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Когда первый раз ты поцеловалась с парнем?  ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Тебе нравится, когда на тебя смотрит парень?  ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>Ты бы вышла замуж за парня, который намного старше или моложе тебя?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>Ты когда-нибудь плакала из-за парня?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Во сколько лет ты бы хотел(а) жениться/выйти замуж?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Ты когда-нибудь посылала парня?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы пришлось выбирать друзей или любимого человека, что ты бы выбрал(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что в девушках (парнях) для тебя важнее, характер или внешний вид?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Ты часто смотришь на парней, которые тебе нравятся?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты кому-нибудь признавался(-лась) в любви?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что ты больше всего ценишь в мужчинах (женщинах)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>Ты когда-нибудь звонила первая, после ссоры с парнем?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты бы простил (а) измену?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты волнуешься, когда идешь на первое свидание?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты относишься к людям, которые ничего не делают?  ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь занимался(-ась) спортом?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Какой ты была в детстве? Хулиганкой или спокойной девушкой?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Насколько ты считаешь себя собранным(-ой)? В квартире твоей беспорядок?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты вегетарианец(-ка)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь мучился(-ась) от любви?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как ты относишься к людям, у которых было много сексуальных партнеров?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Хочешь стать папой (мамой)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>Ты в своей жизни хоть раз гадала на парня?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты влюблялся(-ась) когда-нибудь?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как зовут лучшего(ую) друга/подругу?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Во сколько лет ты первый раз поцеловался(-ась)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Тебе нравятся умные, сильные или красивые парни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Кого бы ты выбрала: парня с деньгами или супер-красавчика?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как в школе учился(-ась)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь динамила девушку (парня)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как часто ты следуешь моде?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что в наши дни является лучшим украшением для женщины?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>Какой аромат имели бы духи, названные в твою честь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы у тебя была машина времени, куда бы ты отправился(-ась)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Любишь ли краситься? Это доставляет тебе удовольствие, либо тебя радует результат?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Что ты обычно берешь с собой, когда выходишь на улицу? С содержимым твоей сумочки тоже можно прожить месяц на Северном полюсе?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>В каком возрасте ты в первый раз влюбилась в парня? Была ли это взаимная любовь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты не умеешь делать и что хотел(а) бы делать очень хорошо и с удовольствием научился(-ась) бы?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты представляешь свою жизнь на Северном полюсе/в деревне/в горах? Как ты думаешь, чем бы ты там занимался(-ась)? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Чем бы ты мог(ла) гордиться всю жизнь? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты относишься к своим возможным неудачам?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': '<F>Ты бы хотела стать кинозвездой или известной певицей? Если да, то почему?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': '<F>Ты представляешь, какой бы ты была, если была бы мальчиком?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Каким бы ты хотела видеть своего парня?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>Ты целовала парня первая?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты спонтанный(ая), или у тебя все распланировано?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты мог(ла) стать любым мультипликационным персонажем, кого бы ты выбрал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты мог(ла) выбрать себе попутчика в дальнюю дорогу, любого человека, в том числе из тех, которые уже не живут, кого бы ты выбрал(а)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы ты мог(ла) загадать три желания, какими бы они были?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы ты мог(ла) жить в любой точке мира, где бы ты выбрал(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты играешь на каком-нибудь музыкальном инструменте? Если бы ты мог(ла) выбрать умение играть на каком-нибудь инструменте, какой бы ты выбрал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': '<F>Ты могла бы полюбить девушку? А если бы на земле осталось только два человека: ты и она?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы ты сделал/а с игроком <N>?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Расскажи свой самый смешной сон',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Расскажи смешную историю, произошедшую с тобой в детстве',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Расскажи смешную историю, произошедшую с тобой в этом году',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'На кого из присутствующих похоже твое домашнее животное?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'На какого зверя похож игрок <N>?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты жил/а в средневековье, чем бы ты занимался/ась? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы наш мир был миром фэнтези, кем бы ты был/а?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы ты делал/а, если бы Джигурда был твоим дедом?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как бы ты обустроил/а свой личный остров?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что у тебя ассоциируется с любительской колбасой?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы ты сделал/а, если бы узнал/а, что твой сын - гей?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы ты сделал/а, если бы узнал/а, что твоя дочь - лесбиянка?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Хотел(а) бы ты быть говорящим котом? Если бы твое сознание и память остались бы прежними',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Расскажи что-то, что никому никогда не рассказывал(а)',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'В жопу раз, или вилкой в глаз?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'В честь кого из присутствующих ты бы назвал(а) своего сына/дочь? Назови хотя бы одного',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кого из присутствующих игроков вы взяли бы с собой на необитаемый остров?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Играешь ли ты в настольные игры? Назови свои любимые. Как часто выигрываешь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Когда вы в последний раз плакали?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Стали бы вы дружить со своим двойником? Почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'На что вам не хватает смелости?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Говорят, что в жизни нужно попробовать всё. Есть ли вещи, которые вы никогда не попробуете?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'на какой вопрос вам хотелось бы самому ответить, но вам его никогда не задают?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'На каком боку вы обычно спите ночью?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какие мечты детства вы воплотили в жизнь?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как вы относитесь к раннему браку?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Считаете ли вы правдой, что домашние животные похожи на своих хозяев?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'часто ли вы совершаете административные правонарушения?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'О чем бы вы говорили с Путиным?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если будет возможность без всяких препятствий поменять фамилию, какую бы вы выбрали? Почему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Книга, фильм, песня, с которыми, по-вашему, должен быть знаком каждый?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'С кем вы хотели бы встретиться на ринге, подраться?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы у вас был волшебный телефон, сняв трубку которого вы услышите бога, что бы вы сказали в первую очередь или спросили?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой сайт/приложение вы открываете утром самым первым?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как часто вы знакомитесь первыми?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Были ли у вас переломы?  Из-за чего?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы у Вас была возможность прожить жизнь, ни в чём себе не отказывая, но давалось на это 10 лет, вы бы согласились?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Твой любимый анекдот?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'смог(ла) бы ты за миллион долларов съесть какашку?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что общего между слоном и библиотекой?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть два стула. На одном - пики точёные, на втором - х%% д%%. На какой сами сядете, на какой мать посадите?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы вы были получеловек-полусосиска, с какой стороны вы были бы человеком, а с какой сосиской? Почему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Учёные нашли доступное средство, позволяющее людям не стареть. Тебе поручили решить вопрос с перенаселением. Твои идеи?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты пошла в лес пособирать грибочков, чтоб пожарить их с картошечкой, и со сметанкой всё это смачно умять. Но попадаешь в аномалию и переносишься в прошлое во времена королей, рыцарей и дам сердца. Чем займёшься? Чему ты можешь научить людей тех времён?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Дождались-таки. Наступил конец света, все счастливы (упал метеорит, нет электричества, пыль и осколки заволокли небо на долгие годы). Будет ли твоя нынешняя/будущая профессия полезна среди немногочисленной кучки выживших?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Есть такое животное/насекомое и прочая живность, которое вызывает у тебя уважение? А какое – презрение?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Стоит ли пытаться помочь человеку, который на твой взгляд выбрал неверный путь или это его выбор и не нужно вмешиваться (пока он сам не решит, что ему нужна помощь)? Это может быть близкий человек или просто прохожий.',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У тебя обнаружили уникальное заболевание аппендикса, и тебе осталось жить тысячу лет… Какие твои планы на это время? Или предпочтёшь вырезать его, потому что, например, не хочешь видеть, как один за одним уходят из жизни близкие тебе люди или ещё почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твоя версия появления человека на Земле?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Инопланетянина, неизвестно чем занимающегося на Земле, ищет правительство, чтобы допросить и исследовать. Ты приходишь домой и видишь, что это существо прячется у тебя под столом. Глазастое Нечто жестами просит тебя помочь ему вернуться на свою планету. Поможешь или сообщишь в службы?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ребёнок случайно окатил тебя брызгами из грязной лужи. Ну, как случайно.. ударил со всей силы по ней палкой, чтобы посмотреть, что будет (интересно же, ну!), а вышло вот так. Твоя реакция?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что должен попробовать/сделать в своей жизни каждый человек?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что выберешь: Скатерть Самобранку или Ковёр Самолёт?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты каким-то неведомым способом захватил(а) власть на планете. Теперь всё будет по-твоему. Все слушаются тебя и готовы исполнять твои распоряжения. Чего нам ждать от твоего правления?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'На что ты никогда ни за что не пойдёшь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Делаешь упражнения, зарядку? Бегаешь может быть? Или хотя бы рожицы строишь перед зеркалом?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Представь, ты очутился(ась) в фильме «Звёздные войны». Мастер Йода течение почуял силы в тебе великой. Но чью сторону ты займёшь – вот вопрос.',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Монарх из африканской страны загадал тридцатизначное число, пообещав угадавшему миллион евро. Ты угадал(а). Повезло так повезло! Хитрожопый правитель держит своё слово, но деньги на выигрыш решает собрать с подданных бедных крестьян. Заберёшь выигрыш? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты выиграл(а) путёвку на Мальдивы. Успешно сдав экзамены, собрав чемодан и пообещав всем друзьям привезти по магнитику, ты села в самолёт. Но удача закончилась, самолёт упал в море, ты очнулась на необитаемом острове. Какие твои навыки и знания помогут тебе продержаться? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'В экстремальных условиях при отсутствии пищи сможешь съесть гусениц, рекомендованных Биаром Гриллсом? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы у тебя было знамя, что было бы на нём изображено? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': '<F>Если бы ты была парнем и тебе нравилась девушка, что бы ты выдумала / совершила для неё, дабы выразить свои чувства, привлечь внимание, завоевать? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Вот уже третью неделю ты пробираешься сквозь джунгли, сплавляешься по рекам, искусанный(ая) насекомыми и изголодавший(ая). И вот, наконец, та самая гора, ты стоишь у подножья, и нужно лишь подняться наверх. Тебе осталось решить, какой вопрос ты задашь живущему на вершине величайшему мудрецу всех времён. Какой? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты всерьёз увлеклся(ась) магией, но что-то пошло не так и вместо того, чтобы наколдовать себе Ламборджини, ты превратился(ась) в кошку… Сознание у тебя осталось своё. Станешь ловить и есть мышей и птичек? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Тебе приснилось, что на другом конце планеты, вдали от твоего дома, в девяти шагах на юг от трёхсотлетнего дуба зарыт клад, который обеспечит тебе безбедную жизнь. При этом ты испытал(а) какое-то волшебное чувство, никогда прежде тебя не посещавшее. Проснувшись, отправишься на поиски своего сокровища? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Интересовались тем, кем были ваши предки (пра, прапра, прапрапра)? Пробовали составить своё семейное дерево? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Писали или рисовали что-нибудь на заборе, стене или на парте в школе? Может на дереве вырезали чего? В своём городе видели оригинальные надписи и рисунки?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'твои старики дружат с высокими технологиями? Были забавные случаи? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Бывают моменты, когда ты чувствуешь себя избранным(ой)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': ' У тебя есть примеры чуда в обычных, привычных вещах? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы можно было делиться своими счастьем, удачей, здоровьем и т.д., которые тебе были даны в ограниченном количестве на всю жизнь, отсыпал(а) бы этого добра кому-нибудь? Что могло бы побудить тебя на это? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Встречались когда-нибудь с цыганами? Были ли случаи какие с ними связанные? Как думаете вообще, что это за народ; есть ли у них религия, политические взгляды, паспорта, где работают? Или они только и делают, что воруют коней? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что нужно изобрести в наше время прежде всего? Вы сами изобретали что-нибудь? Начиная от собственного рецепта «борща с вареньем» и заканчивая тем, что никто другой даже в воображении не рисовал. ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Будучи влюблёнными совершали какие-нибудь глупости или подвиги, на которые в обычном состоянии никогда бы не отважились? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Говорят, у хорошего меча должно быть имя. А у вас есть качественная или дорогая вам вещь, которую вы удостоили именем? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Опишите дом своей мечты. Будет ли это одинокий дом вдали от цивилизации на берегу моря или в горах, или просторная квартира-студия на последнем этаже небоскрёба с выходом на крышу и видом на мегаполис. Что в нём должно быть: читальная комната с окном, выходящим на запад, чтобы, вечером сидя на подоконнике с книгой, можно было любоваться закатом; или это будет большой бассейн с прозрачной крышей. Из чего он сделан, какой формы, цвета – место, куда вам приятно вернуться. ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Сколько раз отжимаешься от пола? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какие люди пугают вас?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы Вы были деревом, то каким? И почему?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'кто твой любимый блоггер?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'твой любимый жанр музыки? какие фестивали/концерты посетил(а) или хочешь посетить?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы ты был(а) животным, чем бы ты занимался(ась)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что должно произойти такого, чтобы ты стал(а) вегетарианцем?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Веришь ли ты в карму?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Пляжи или горы?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Марвел или DC?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Человек-паук или железный человек?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'как думаешь, какой супергерой круче: человек-табуретка или человек-баклажан?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Восток или запад? азия или европа?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ПК или консоль? Uncharted или Tomb Rider?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты хочешь участвовать в стендапе?и почему?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Мог(ла) бы ты поцеловать взасос первого человека в друзьях в соцсети?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'закончи фразу: Я боюсь игрока <N>, потому что...',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'закончи фразу: Я люблю...',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Твой дом со всем твоим имуществом загорелся. После спасения близких у тебя есть время, чтобы вернуться в дом еще раз и спасти какую-то одну вещь. Что это за вещь и почему ты выбираешь ее?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'к тебе на улице подошел бездомный, вы разговорились, он оказался довольно умным и интересным собеседником. Дашь ли ты ему денег на еду, если да, то сколько?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Прежде чем сделать телефонный звонок, ты когда-нибудь репетируешь то, что собираешься сказать? Почему?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы у тебя была армия клонов, что бы ты с ними сделал(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебе поручено испечь самую вкусную пиццу в мире. Какие продукты ты используешь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'По дороге домой ты замечаешь, что кто-то следует за тобой. Твои действия?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Расскажи что случилось во сне, который ты хорошо помнишь.',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Опиши свое неудачное собеседование',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Опиши свою первую поездку за пределы родного города. Кто поехал с тобой? И куда? Что было знакомым, а что оказалось совсем другим? Было ли тебе страшновато (даже самую малость)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Поздравляем! У тебя в руках билет на Марс! Корабль отправляется через два дня. Пора собирать вещи! Что ты возьмёшь с собой?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что у тебя получается лучше всего? Печь блины? Решать задачки? Рассказывать истории о приключениях на Луне? Дай советы тем, кто хочет заняться тем же самым.',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть любимое слово? Какое? Что тебе нравиться: значение, звучание или то, как оно выглядит на странице?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какое твоё любимое блюдо? Кто готовит его лучше всех? С ним связаны какие-то воспоминания?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Родители уезжают на дачу на все выходные, а ты остаёшься в квартире в полном одиночестве. Что происходит?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что у тебя в карманах? Придумай забавные причины, почему эти вещи там оказались.',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Тебе случалось совершить хороший поступок и оставить его в тайне? Почему о нем нельзя было говорить? Эта тайна никому не повредила?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Вспомни самый грустный момент в своей жизни. Опиши чувства, своё состояние. Что помогло преодолеть грусть?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как изменится твоя жизнь, если однажды утром ты проснёшься собакой? Какую пищу ты будешь есть - собачью или обычную? Станешь ли гоняться за кошками?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Вспомни, как ты принял(а) решение, которое теперь кажется очень плохим. На кого оно повлияло больше - на тебя или на кого то другого? Что изменилось бы поступи ты иначе? Что осталось бы прежним?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты поступишь, оказавшись запертым в школе на всю ночь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы ты мог(ла) создать робота,что бы он умел делать? Как бы тебе помогал?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты предсказатель судеб. Предскажи будущее игроку <N>',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты можешь щёлкнуть пальцами и прожить один день из жизни любой исторической личности. Кем ты станешь? Тутанхамоном? Чингисханом? Клеопатрой?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты поступишь, если окажешься взаперти в незнакомой комнате?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Придумай новое слово. Что оно означает?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Опиши совершенный мир. Как он выглядит? Какие люди в нём живут?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Придумай совершенно новый продукт, который можно было бы съесть на завтрак.',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если можно было бы встретиться одним из страшных персонажей, кого бы ты выбрал(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Представь, что ты можешь стать размером с мышку. Куда ты побежишь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Песня, которая ассоциируется у тебя с летом?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой была бы твоя идеальная комната?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'опиши себя через 10 лет, как ты выглядишь, чем увлекаешься, кто находится рядом с тобой?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'если бы ты стал невидимым(ой) на целый день, как бы ты его провел(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'сделай лицо , словно ты злишься и посмотри так на каждого игрока',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'разыграй сценку, в которой ты спишь, и тебе снится дурной сон',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'назови самую странную игру, в которую ты когда-либо играл',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какой самый безумный поступок ты совершал(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что ты чувствуешь, когда ты в черном, а остальные в белом?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любимая звезда на небе?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Первое слово, которое пришло тебе в голову, на букву Ч?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Любимая стихия?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты любишь мокнуть?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Твои мысли, когда катаешься на карусели?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У тебя есть муза?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Где был самый красивый рассвет, который ты видел(а)? Закат?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что можешь делать изо дня в день, и это тебе не надоест?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Сможешь в одиночку прожить неделю?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'В какой позе спишь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты выбираешь или тебя выбирают?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'кухню какой страны ты предпочитаешь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой самый нелепый (смешной, запоминающийся) вопрос, который тебе когда-либо задавали?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой неодушевлённый предмет в тебе вызывает понимание и сочувствие?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Можешь ли ты собрать кубик-рубик?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Хотел(а) бы научиться серфингу?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Хотел(а) бы в реальной жизни иметь возможность переключаться от вида от первого лица к третьему и обратно? как в GTA',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты когда-нибудь следил/а за кем-нибудь? Если да, то за кем?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь выбрасывал(а) что-то из едущего автомобиля?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кто в этой комнате одет лучше всех?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой/какая ты, когда пьяный/ая: счастливый/ая, общительный/ая, любвеобильный/ая, грубый/ая, воинственный/ая, обидчивый/ая, глупый/ая, чувственный/ая, спокойный/ая и тихий/ая, или подлый/ая?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Каким было самое необычное место, где тебе довелось пописать?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если у каждого есть своя цена, то какова твоя?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты давал/а совет на тему Не повторяй моих ошибок кому-нибудь из младших, каким бы он был?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты был/а едой, то какой? Как другие бы тебя ели?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы сейчас перед тобой была любовь твоей жизни, что бы ты хотел/а, чтобы он/она сделал/а для тебя?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что является самым большим недостатком в том, чтобы быть представителем твоего пола?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что привлекает тебя больше всего в противоположном поле?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что могло бы заставить тебя восстановить отношения с бывшей/бывшим?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что в твоей жизни нравится тебе больше всего?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что было самой большой глупостью, которую ты совершил/а в нетрезвом состоянии?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что больше всего раздражает тебя в твоем/ей парне/девушке?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Чем бы ты питался/лась каждый день, если бы мог/ла себе позволить?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Хотел/а ли ты когда-нибудь купить наркотики, но не отваживался/лась на это?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь списывал/а на экзаменах?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты когда-нибудь просыпался/лась утром в мокрых трусах?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты когда-нибудь притворялся/лась пьяным/ой?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты когда-нибудь подавал/а в суд на другого человека?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь намеренно распространял/а ложные сплетни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Ты когда-нибудь курил/а через бульбулятор? Если да, расскажи об этом!',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты когда-нибудь курил/а травку?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты когда-нибудь воровал/а что-нибудь в школе или на работе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ты когда-нибудь воровал/а у соседей?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'как ты ищешь людей для знакомства?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты зарегистрирован/а на сайте знакомств? Или думал/а ли о регистрации?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Тебя когда-нибудь увольняли с работы? Почему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Тебя когда-нибудь гипнотизировали?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Сколько ты зарабатываешь?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'С кем бы ты хотел/а связать себя узами брака?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Принимал/а ли ты участие в протесте или бунте?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Называет ли твой лучший друг своим лучшим другом тебя?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'На что бы ты мог/ла пойти ради бутылки воды, если бы попал/а в пустыню и умирал/а от жажды?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой самый обидный розыгрыш ты придумал/а?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой самый безумный способ пикапа ты знаешь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Каково твое мнение о пространственно-временном континууме? Пространство пусто, не так ли?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какая еда была самой невкусной в твоей жизни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какая дурацкая песня нравится тебе больше всего?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как ты представляешь свою смерть?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Из-за какого поступка, совершенного в прошлом, ты мог бы сесть в тюрьму, если бы полиция узнала о нем?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Из-за какого недостатка партнера ты мог/ла бы разорвать отношения?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'За кого ты голосовал/а? Или за кого будешь голосовать?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы у тебя была возможность переродиться в одного из присутствующих в этой комнате, кого бы ты выбрал/а?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы ты мог/ла узнать один факт из прошлого, что бы выбрал/а?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты мог/ла узнать один факт из будущего, что бы выбрал/а?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты мог/ла изменить что-то одно в своих физических данных, что бы ты выбрал/а?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы твоя вторая половина набрала 45 кг, ты все еще любил/а бы е/его?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'В каком возрасте ты начал/а покупать выпивку самостоятельно? Каким образом ты это делал/а?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что ты хотел/а бы сделать в будущем, но не решаешься?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что было самым грубым, из того, что тебе когда-либо говорили?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Случалось ли когда-нибудь, чтобы ты не успел/а добежать до туалета?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'С кем из этой комнаты ты не хотел/а бы застрять в лифте?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Сколько у тебя настоящих друзей в соцсети?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Писал/а ли ты когда-нибудь в бассейне?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Насколько долгим было самое долгое время, когда ты не мылся/лась?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'На какого ведущего или актера ты хотел/а бы быть похожим?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Когда в последний раз ты читал/а за чужую переписку?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Когда в последний раз ты гуглил/а свое имя?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Когда в последний раз ты нервничал/а?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кем является последний человек, с которым ты подрался/лась?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какую самую обидную кличку ты дал/а человеку?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой случай в твоей жизни был самым страшным?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какой самый тяжкий грех ты совершил?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какой день был худшим в твоей жизни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Каким было твое последнее обещание? Ты его выполнил/а?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Каким был худший подарок, подаренный тобой?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Из кого в этой комнате получился бы самый интересный блогер?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если тебе бы пришлось провести вечность с одним из присутствующих в этой комнате, кого бы ты выбрал/а?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы у ты мог/ла родиться известной исторической личностью, кем бы ты был/а и почему?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты выиграл/а в лотерею, и нужно было бы отдать выигрыш кому-нибудь из присутствующих, кого бы ты выбрал/а и почему?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы тебе пришлось слушать лишь один жанр музыки до конца жизни, что бы это было?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы тебе пришлось слушать всего 3 песни до конца жизни, какие бы это были песни?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе нужно было выбрать между пением в хоре или ролью в пьесе, что бы ты выбрал/а?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы тебе нужно было выбрать исполнителя на роль себя в биографическом фильме, кого бы ты выбрал/а?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы в живых на Земле могли бы остаться только ты и еще один человек, кого бы ты выбрал/а?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Говорил/а ли ты когда-нибудь плохое о ком-то из присутствующих в этой комнате?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Говорил/а ли ты когда-нибудь вслух то, о чем думал/а, не осознавая того, что говоришь это вслух? Что это было?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Были ли когда-нибудь у твоих брата или сестры проблемы из-за тебя?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какое слово для вас самое любимое в произношении?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Ваше любимое телешоу из детства?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как выглядит спальня вашей мечты?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Какой напиток ты всегда заказываешь в кафе, ресторане и т.д.?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какое правило ты проповедуешь, но сам(а) не выполняешь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Какая у тебя любимая, неполезная еда, но ты ее все равно ешь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'У тебя есть крылатая фраза или слово?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть ли такой человек, с которым тебе не приятно общаться, но ты все равно это делаешь?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что необычное или странное ты не умеешь делать, но хочешь научится? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы у тебя была фабрика, то что бы ты производил(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты был(а) режиссером, то что бы снимал(а) ?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы ты изменил(а) в стране, будь ты президентом?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы ты был(а) доктором, то каким именно? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'С какими блогерами ты бы общался(ась), если бы была такая возможность?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кого бы ты кусал(а), если бы был(а) собакой?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы у тебя была возможно уехать куда-то, в какой город бы ты уехал(а) или осталась бы дома?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы ты делал(а) дома, будь ты домохозяйкой?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы ты был(а) волшебником, какое волшебство творил(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты был(а) злодеем, какое бы зло делал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Если бы ты нашел(ла) труп своего врага, что бы ты с ним сделал(а)? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Если бы ты получил(а) один миллион, то на что бы ты его потратил(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы ты был(а) животным, то каким именно? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы ты был(а) едой, то какой именно?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'А что вы делаете(ли) на паре/уроке, когда скучно?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какая кличка (была) у вас в школе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Вам нравится(лось) ходить в детский сад?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Есть ли у вас любимый урок?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Есть ли у вас нелюбимый урок?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'У вас есть(был) сосед по парте? Кто это?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Как часто вы опаздываете(ли) в школу?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Как вы учитесь(лись)? (отличник, хорошист или есть тройки)',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любите(ли) ли вы школу?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что Вы сегодня ели на завтрак? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Самое гадкое, что Вы когда-либо ели?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Какой запах нравится Вам, но не нравится окружающим?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ваш способ за одну минуту поднять себе настроение?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Сколько селфи делаешь в день?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Сколько подписчиков в твоем Инстаграме?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Используешь ли ты в жизни слова “LOL”, “OMG” и прочий интернет-сленг?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Ты расист?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Инстаграм, Твиттер или Фейсбук?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'На что тратишь больше всего времени?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Твой первый телефон?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кому чаще всего звонишь?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Какие фото ты делаешь на телефон? покажи',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Твои любимые мобильные приложения?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Покажи своё последнее сообщение',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Терял(а) ли ты когда-нибудь свой телефон?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Для чего чаще всего ты используешь телефон?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кто из играющих лучше танцует?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кто из играющих лучше поёт? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кто из играющих больше спит? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кто из играющих больше любит школу? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кто из играющих старше? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кто из играющих больше ест? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кто из играющих больше весит? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кто из играющих больше гуляет? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кто из играющих больше сидит в соцсетях? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кто из играющих больше любит животных? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кто из играющих больше пишет в твиттере? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кто из играющих больше выкладывает фоток в инстаграмм? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кто из играющих больше ходит по магазинам? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Кто из играющих больше фоткается? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Кто из играющих больше пьёт воды? ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Кто из играющих живёт в более чистой квартире? ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кто из играющих смотрит аниме? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Самая сумасшедшая вещь, которую ты когда-либо делал(а)?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Тебя привлекают люди противоположного пола постарше?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что ты выберешь: огромные деньги или друзей?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Представь, что сегодня…. Пятница! Тринадцатое! К тебе в дверь позвонила смерть. Что ты будешь делать, что скажешь?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'С кем ты мечтаешь поменяться внешностью? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Как и за что ты сможешь откровенно послать человека?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Сергей Дружко или лысый из браззерс?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Каким был худший подарок, подаренный тебе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Сколько зубов у акулы? Придумай оригинальный ответ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Зачем слону хвост? Придумай оригинальный ответ ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Почему цапля стоит на одной ноге? Придумай оригинальный ответ ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как слепить снегового деда? Придумай оригинальный ответ ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Целовали ли вы помидор? ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Зачем вам паспорт? Придумай оригинальную причину ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'что ты думаешь про игрока <N>?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что такое снег? Придумай оригинальный ответ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Кто такой морж? Придумай оригинальный ответ ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Почему цветут цветы? Придумай оригинальную причину ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Почему ёлка всегда зелёная и зимой и летом? Придумай оригинальную причину ',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Почему листья на деревьях желтеют? Придумай оригинальную причину ',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Назови 3 любимых фильма  ',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Вилка, ложка или нож? ',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Любишь ли ты рыбалку?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Помидор или огурец? Почему?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Если бы Джастин Бибер спросил тебя – нравятся ли тебе его песни – что бы ты ему ответил(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Если бы тебе пришлось надеть дырявый носок, это бы тебя парило?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Рaсскaзaть, встpeчa кaкoгo нoвoгo гoдa в студeнчeскиe гoды (в мoлoдoсти) вaм бoльшe всeгo зaпoмнилaсь.',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Как бы вы себя повели в одном душе с Путиным на подлодке?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Дарил(а) ли ты что-то из своих старых вещей кому-то на день рождения, выдавая этот подарок за абсолютно новый?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что ты скажешь, оказавшись перед Путиным?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты когда-нибудь специально громко пукал(а) в присутствии незнакомого человека?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-нибудь ел(а) корм для животных?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-нибудь смеялся над тем, как кто-то пукал?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'расскажи ситуацию, когда тебе было очень стыдно',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты любишь пукать в кровати и зарываться головой под одеяло?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты пукал(а) при своем партнере, что бы посмеяться?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Ты бы предпочел застрять в лифте с 3 мокрыми собаками или с 3 пердунами? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы ты предпочел(чла): сделать минет или съесть какашку? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Вы за или против увеличения груди? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы выбрали: какать бабочками или тошнить конфетти? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы выбрали: пукать каждые три минуты или рыгать каждые 30 секунд? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы выбрали: быть слепым или иметь член как у слона? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы выбрали: диарею на всю жизнь или лай собаки вместо человеческого голоса? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы выбрали: работать в табачном ларьке всю жизнь или проституткой 5 дней? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы выбрали: на протяжении 3 дней питаться листьями растений и цветов или 3 дня ходить в водолазном костюме? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы выбрали: лишиться своих гениталий или набрать 150 кг? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы выбрали: писаться на публике раз в неделю или раз в неделю обкакаться, пока никто не видит? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы выбрали: носить чужое грязное белье или пользоваться чужой зубной щеткой? Аргументируй свой ответ. Остальные показывают свое согласие с тобой пальцем вверх или вниз',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-либо признавался(ась) в любви по переписке, будучи абсолютно пьяным(ой)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты когда-либо засыпал(а) на работе/на паре/на уроке?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты когда-либо крал(а) что-либо в магазине?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'у тебя когда-либо была черная дыра в памяти после вечеринки?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-либо танцевал(а) на барной стойке?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты когда-либо расставался(лась) по переписке?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты считаешь себя симпатичней, чем игрок <N>?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-либо дрался(лась)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-либо участвовал(а) в пьяной драке?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты один ребенок в семье?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты оставался(ась) на второй год?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'у тебя есть братья/сестры, сколько?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'сколько стран ты посетил(а)? Топ-3 лучших и топ-3 худших',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'у кого из игроков самый скверный характер?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты закрываешь дверь, когда ходишь в туалет у себя дома?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-нибудь ехал(а) по встречке на круговом движении?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-нибудь не мылся(лась) больше 3 дней?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'из-за тебя кто-нибудь попадал(а) в больницу?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты втайне влюблен в человека из твоего окружения?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты считаешь, что до конца жизни ты будешь со своим нынешним партнером?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-нибудь придумывал(а) отмазку, чтобы не идти на встречу?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты моешь руки каждый раз, выходя из туалета?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты когда-либо отправлял свою кандидатуру на телевидение, чтобы участвовать в передаче/реалити шоу?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-нибудь крал(а) что-либо?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-нибудь работал(а) в другом городе?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты когда-нибудь брал(а) деньги у своего партнера(партнерши), не говоря ему(ей) об этом?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'тебя когда-нибудь арестовывала полиция?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-нибудь был(а) в обезьяннике?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-либо пил(а) в одиночку?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'последний фильм, который ты смотрел(а)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'каждый раз, когда ты созваниваешься со своей девушкой(своим парнем), ты говоришь "я тебя люблю"?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-нибудь крал(а) тележку из супермаркета?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'самая дебильная одежда, которую ты носил(а)?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты был(а) хоть раз наказан(а) за шалости в школе/университете?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'думаешь ли ты, что твоя(й) бывшая(ий), был лучшим союзом в твоей жизни?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-нибудь играл(а) более 4 часов подряд в видео игры?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'тебе снился сон, о котором стыдно рассказать кому-либо? расскажи',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты когда-нибудь, будучи пьяным в стельку, засыпал(а) в общественном транспорте?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'на этой неделе ты ссорился(лась) со своей девушкой/парнем?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты состоишь в отношениях? сколько?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты путешествовал(а) по странам мира? По каким?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты когда-нибудь носил(а) брекеты?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'сколько стоит твоя одежда?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'ты когда-нибудь жил(а) в другой стране?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'сколько стоит твой телефон?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты когда-нибудь называл(а) свою половинку именем своей(своего) бывшей(его)?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты когда-нибудь шантажировал(а) свою половинку?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'у тебя есть любимая политическая партия?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'ты когда-нибудь использовал(а) газеты не по назначению? Как?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'ты когда-нибудь говорил(а) человеку гадости прямо ему в лицо?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'ты когда-нибудь подносил(а) зажигалку к своей попе, когда пукал?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: Колу или Пепси?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: Макдоналдс или KFC?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: быть Дамблдором или Гендальфом?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: дождливый день или метель?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: жить на море или в горах?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: Звездные Войны или Звездный Путь?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: попасть в Рай или прожить вечность на земле?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: современную музыку или музыку прошлого?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: одеваться как в 80-х или стричься как в 80-х?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: мучиться от кошмаров всю ночь или увидеть призрака?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: уметь летать или плавать под водой?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: быть богатым или быть знаменитым?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: работать в Яндекс или Вконтакте?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: GTA или NFS?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: шашлык или люля-кебаб?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: иметь возможность путешествовать в будущее или в прошлое?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: иметь кнопку "вернуться назад" или "пауза" в своей жизни?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: увидеть русалку или единорога?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: скинуть половину своего веса или поправиться?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: знать все на свете или быть повелителем мира?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: читать мысли или внедрять свои в чужую голову?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: быть самым богатым человеком на земле или быть бессмертным?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: говорить на всех языках мира или разговаривать с животными?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: уметь играть на 15 инструментах или говорить на 15 языках?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: управлять стихиями или животными?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: прожить жизнь Гермионы Грейнджер или Бэллы из Сумерек?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: застрять на 5 часов в лифте или на подвесной канатной дороге?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: не видеть себя в зеркале или не иметь возможности мыться?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: избавиться от всех горе водителей или от очередей?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: застрять на необитаемом острове с 4 людьми, которых вы терпеть не можете или оказаться на нем в полном одиночестве?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: остаться без единого друга или никогда не пользоваться электроприборами?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: смотреть фильм без звука или слушать фильм и не видеть картинки?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: быть дебилом для всех вокруг или ничем не отличаться от других?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: кинуть жребий и выиграть миллиард или тебе гарантированно дают 500 тысяч?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: быть инвалидом на пенсии с 1 миллиардом или работать на работе мечты и зарабатывать 70 тысяч в месяц?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: иметь шикарный дом в непримечательном месте или наоборот?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: жить в мире без браков или без разводов?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: придумать новый закон или отменить один из существующих?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: больше никогда не попадать в затруднительные ситуации или зарабатывать на каждой такой ситуации 10 штук?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: никогда не нуждаться во сне и отдыхе или уметь двигать предметы силой мысли?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: на один год остаться без глаза или ходить на четвереньках?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: выпить дизеля или покурить пластик?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: пиво или вино?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: писать апельсиновым соком или иметь слюну со вкусом лимона?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли (на один день) : длинные волосы на подбородке или лобковые волосы на скулах?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: говорить только на японском или каждый день быть переодетым в пирата?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: отправиться в кругосветное путешествие или не иметь нужды какать?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: иметь вместо одной руки ногу или один глаз на лбу?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: иметь татуировку "Данила" на лбу или иметь нос на щеке?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: иметь протезы вместо двух рук или усыновить слепого?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: уметь ходить по радуге или говорить с дельфинами?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: сменить свою фамилию на Гитлер или никогда в жизни не иметь возможности есть шоколад?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: съесть живого таракана или быть лысым(лысой)?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: размозжить себе голову на велосипеде или поскользнувшись на банановой кожуре?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: иметь кривые зубы или глаза?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: взять домой маленького пингвина или обезьянку?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы предпочли: быть ниндзей или пиратом?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: быть глухим на одно ухо или иметь возможность пользоваться интернетом 1 час в неделю?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: уметь контролировать свои сны или их запоминать и визуализировать?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы предпочли: избавиться от пробок на дорогах или от очередей?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Следующие 5 лет вы бы предпочли быть в коме или парализованным?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'Что бы вы предпочли: быть очень умным инвалидом или абсолютно тупым, но здоровым?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'Что бы вы предпочли: чтобы на вас набросился лев или 100 бешеных кошек?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
    {
      'text': 'Что бы вы выбрали: жить в другой стране или переезжать из города в город каждые 6 месяцев?',
      'pack_id': 18,
      'pack_name': 'truth_simple1',
    },
    {
      'text': 'Что бы вы выбрали: провести 1 год в тюрьме или оказаться одному на планете?',
      'pack_id': 19,
      'pack_name': 'truth_simple2',
    },
    {
      'text': 'С кем бы вы снялись в кино: Мерлин Монро или Памела Андерсон?',
      'pack_id': 20,
      'pack_name': 'truth_simple3',
    },
    {
      'text': 'С кем бы вы снялись в кино: Джонни Дэпп или Киану Ривз?',
      'pack_id': 21,
      'pack_name': 'truth_simple4',
    },
  ],
  'truths_serious': [
    {
      'text': 'Если бы Вы могли вернуться в прошлое на одни сутки, какой день Вы бы выбрали для этого?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие эмоции у вас вызвал последний увиденный первый снег?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы вы стали невидимым, что бы вы сделали?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что делает вас счастливым?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Сколько времени Вам нужно, чтобы забыть нанесенную другом обиду?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Расскажите о самом длинном дне в Вашей жизни?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что бы Вы сделали в первую очередь, если бы выиграли миллион долларов?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Опишите, какой Вы видите свою жизнь через 20 лет?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Знакомитесь ли в дальних поездках с попутчиками?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какому занятию вы хотели бы больше уделять своего времени?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вам доводилось воровать что-либо в магазине?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что для тебя настоящая Любовь?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кто вам больше нравится: кошки или собаки? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое ваше самое любимое место для прогулки?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Знаете ли вы о каком-либо методе избавления от Интернет-зависимости?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'На кого из знаменитостей вы хотели бы походить? Чем?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'О чем вы больше всего сожалеете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В какой ситуации вы ощутили к себе самое плохое отношение?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как вы щекочете себе нервишки, повышая в крови адреналин?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'На ваш взгляд, какие три самых важных изобретения человечества?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Использовали ли вы на себе какие-либо методы нетрадиционной медицины? Каковы результаты?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы вы на 1 день стали президентом, что бы вы сделали?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Приходилось ли вам отдыхать на курорте отдельно от своего любимого человека?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваше коронное блюдо, от которого без ума все ваши гости?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вам труднее сказать человеку: что любите его или что не любите?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что вызывает у вас чувство ревности к любимому человеку?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что вам больше нравится: слушать или говорить?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Верите ли вы в чудеса? Если да, то что стало причиной этому?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Поддерживаете ли вы отношения с бывшими любимыми?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как вы считаете, от чего зависит достижение успеха в карьере?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваш самый смелый эксперимент со своей внешностью?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие способности вам хотелось бы развить в своем ребенке?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы пунктуальный человек или постоянно опаздываете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что навевает на вас скуку?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Легко ли вам первым начать знакомство?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Самый запоминающийся розыгрыш, который вам устроили?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие воспитательные уроки ваших родителей вы никогда не будете применять в воспитании собственных детей?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваш самый нелюбимый день недели?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Автомобиль вашей мечты?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая еда способна поднять вам настроение?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Сражаетесь ли вы за свою любовь или молча уходите с поля боя?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что для вас является действительно романтичным?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как вы боретесь с сонливостью?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Когда вы оказались без гроша в кармане, как вы раздобыли деньги?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой жизненный урок вы испытали на собственной шкуре?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'С каким талантом вы хотели бы родиться?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваше самое яркое воспоминание о своем дне рождения? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Когда дело доходит до любовных отношений, что больше всего у вас вызывает страх?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как вы одеваетесь, когда хотите покорить человека, которому симпатизируете?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Случалось ли, что ваши Интернет-знакомства перерастали в любовные отношения в реальной жизни?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Свидетелем какого исторического события вы хотели бы стать?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Обращаете ли вы внимание на мнения окружающих?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Когда вы понимаете, что вашим любовным отношениям пришел конец?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'В чем вы не можете себе отказать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'На что вам больше нравится смотреть: на восход или на закат? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Чем для вас являются деньги?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Напоминает ли вам кто-либо из ваших знакомых мультяшных персонажей? Кого и чем и именно?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваш любимый праздник?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что было самым трудным в вашей жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы вы на один день изменили свой пол, как бы вы прожили этот день?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'У вас есть комплексы? Как вы с ними боретесь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что вам позволяет чувствовать себя независимым?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'На ваш взгляд, чем полезно одиночества?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы составляете определенное мнение о человеке, судя по его внешнему виду или уже после общения с ним?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'По каким признакам вы понимаете, что влюбились?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваш сон, который снился вам несколько раз?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Когда вы попадаете в беду, кого зовете на помощь?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вам больше по душе: полная независимость или зависимость, но от любимого человека?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что вынуждает вас говорить неправду?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваша любимая цитата из фильма?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как бы вы отомстили человеку, которого больше всего ненавидите?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Каким качеством в людях вы больше всего восхищаетесь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы мыслитель или художник?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вам больше нравится давать или брать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как вы считаете, когда заканчивается молодость?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы вы могли выбрать себе любую работу, кем или где вы бы работали?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваша самая глупая и бесполезная вещь, на которую вы потратили кучу денег?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Чем вы гордитесь больше всего в жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы верите в судьбу, или считаете, что человек сам предопределяет свое будущее?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В чем заключается ваше самое большое разочарование в жизни?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы вы знали все языки мира, на каком именно языке вы бы говорили?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие текущие события в мире больше всего на вас влияют?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Самый худший совет, к которому вы когда-либо прислушались?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'О чем вы думаете, прежде чем заснуть?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Самое первое, что приходит вам в голову, когда вы просыпаетесь утром?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Шутки на какую тему не вызывают у вас смеха?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Звук, который вас больше всего раздражает?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваш самый любимый звук?Звук горящего камина в доме, или может звук природы в лесу?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что первое, на что вы обращаете внимание в противоположном поле?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'В какой ситуации вам очень хотелось уйти, но вы не сделали этого?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'С кем вам больше нравится проводить время и общаться: с теми, кто старше вас или теми, кто младше?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы у вас была возможность внести одно изменение на вашей работе, что бы вы сделали?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Расскажите о фильме, который действительно затронул Вас до глубины души и заставил задуматься?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой предмет, изучаемый в школе, оказался для вас самым бесполезным?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы хотели бы знать свое будущее? Если да, то как бы вы использовали это знание?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы азартный игрок или играете осторожно, останавливаясь в нужный момент?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вам больше нравятся места со скоплением людей или изолированные территории (помещения)? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что может вызвать у вас улыбку, даже если вам очень грустно?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вас характеризует и подчеркивает вашу индивидуальность?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой фильм вы посмотрели сто раз и готовы посмотреть еще столько же?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Есть такое слово, которое у вас неизменно вызывает смех?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Каким было ваше самое смелое решение в жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как вы опишете плохого семьянина?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'После фильмов ужасов, в каком психологическом состоянии вы находитесь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сколько дней вы можете прожить, не разговаривая?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'С кем вы в последний раз обменялись контактами?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вам нравится фантазировать на мрачные темы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'По какой причине любовь возникает с первого взгляда?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'По какой причине вы не общаетесь с кем-нибудь, с кем вы ранее дружили?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сравнивая свое настоящее и прошлое, что лучше?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какая смысловая разница между тем, чтобы иметь детей и тем, чтобы иметь потомство?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'С какими людьми вы можете вести себя недружелюбно?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой период времени вы может находиться в одиночестве?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что значит для вас слово «любовь»?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы волшебником было вам предложено выбрать богатство или любовь, что выберете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вам нравятся старые или новые вещи?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой человек внушает вам страх?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'С чем у вас ассоциируется слово «семья»?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы вы вернулись в свое прошлое, что вы изменили бы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое место на Земле можно назвать райским?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'как вы думаете, Отрицательный опыт в жизни людям необходим?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Можете ли Вы охарактеризовать себя одним словом?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Часто ли Вы задумываетесь о собственном здоровье?Что предпринимаете для его улучшения?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Занимаетесь ли Вы спортом?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'В какое время вам больше нравится бывать на природе?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Умеете ли Вы организовать праздник?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как Вы относитесь к клонированию? Хотели бы клонировать себя?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'У Вас скорее технический или гуманитарный склад мышления?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Хотели бы Вы стать президентом страны?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы Вы познакомились с президентом, какой вопрос Вы бы ему задали?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как определить что человек говорит неправду?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Нравится ли Вам зоопарки?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Умеете ли Вы хранить тайны? Чьи тайны вы сейчас храните?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как Вы относитесь к искусственному оплодотворению?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'В каком возрасте лучше всего рожать ребенка? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой, на Ваш взгляд, самый оптимальный возраст для создания семьи? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Доводилось ли Вам ударить человека? При каких обстоятельствах?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Смогли бы Вы доверить собственного ребенка няне?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы скорее сова или жаворонок? В какое время суток Вы наиболее трудоспособны?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Сколько часов в сутки Вам необходимо для сна?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Довольны ли Вы своей жизнью?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'На что во внешности человека Вы в первую очередь обращаете внимание?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что для Вас самое главное во внешности человека противоположенного пола?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Верите ли Вы гороскопам?Как часто читаете? ',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой праздник для Вас важнее: Рождество или Новый год?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Любите ли Вы смотреть мультфильмы? Если да, о какие?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что для Вас означает понятие «вечные ценности»?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы скорее отправитесь на морской курорт или на горнолыжный?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что Вы легче переносите: жару или холод?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как часто Вам хочется оказаться в совершенно другом месте?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Боитесь ли Вы летать на самолете? Как преодолеть эту боязнь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вам больше нравится работать в коллективе или дома?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Нравится ли Вам Ваша работа?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что Вы считаете своим самым большим достижением в жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Делали ли Вы когда-нибудь профессиональную фотосессию?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Любите ли Вы фотографироваться?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Задумайтесь и ответьте честно. При первом знакомстве Вы ищите в человеке что-то положительное или отрицательное?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Верите ли Вы в то, что добро всегда побеждает?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Согласитесь ли Вы сделать пластическую операцию, чтобы выглядеть моложе?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как Вы относитесь к пластической хирургии? Для женщин? Для мужчин?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Делали ли Вы хоть раз спа-процедуры?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что Вы предпочитаете: принять контрастный душ или понежиться в ванной?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Финансовая свобода – обязательная составляющая счастья?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': '5 составляющих счастья?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как по-вашему, может ли бедный человек быть счастливым?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Легко ли втянуть Вас в сомнительное предприятие, которое сулит хороший доход?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Случалось ли вам ввязываться в авантюры?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие цели вы перед собой ставите?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Можно ли Вас назвать целеустремленным человеком?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если шеф дает Вам задание, с которым Вы заведомо не справитесь, Вы все равно возьметесь за дело и добьетесь успеха любой ценой, или откажетесь, честно объяснив причину?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Легко ли Вам довериться малознакомому человеку?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как часто Вы употребляете алкогольные напитки?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если коллега рядом с вами жутко пахнет изо дня в день, Вы сообщите ему об этом в лицо или будете делать вид, что все в порядке?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Нравятся ли Вам паззлы?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как Вы относитесь к компьютерным играм?В какие играл(а)?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Склонны ли Вы учитывать мнение окружающих людей?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Согласны ли Вы переплатить за то, чтобы первым стать обладателем технической новинки?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как часто Вы обновляете домашнюю обстановку?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие продукты вы обычно покупаете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Хотели бы Вы вживую встретиться со своим любимым актером?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Есть ли у Вас родные братья или сестры? Если да, то близки ли Вы со своими братьями/сестрами?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как Вы считаете, сколько детей должно быть в полной семье?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой чай Вы предпочитаете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что для Вас важнее в автомобиле: внешний вид или технические характеристики?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какие магазины вам нравятся и склонны ли Вы совершать покупки в одном и том же магазине?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Можно ли Вас назвать меломаном?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Склонны ли Вы к экспериментам в еде?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Нравятся ли Вам старые советские фильмы? Если да, то какие?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сколько денег Вы тратите на подарки к Новому году?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как Вы предпочитаете отмечать Новый год: в шумной компании или в кругу семьи?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой Ваш самый любимый праздник?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Можно ли Вас назвать удачливым человеком?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Танцуете? Любите ходить на дискотеки?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как часто Вы позволяете себе посещать рестораны?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как Вы относитесь к фаст-фуду?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое блюдо Вы мечтаете попробовать?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какие блюда Вы ни за что не согласитесь попробовать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Кухня какой страны кажется Вам наиболее экзотической?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Согласитесь ли Вы съесть что-то живое? Или может быть у вас уже есть такой опыт?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое самое экзотическое блюдо Вам доводилось пробовать в жизни?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Любите ли Вы вкусно покушать? Что вкусного ели в последний раз?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как по-вашему, совместный бизнес может разрушить дружбу? Обоснуйте свою точку зрения.',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Со сколькими бывшими одноклассниками Вы поддерживаете отношения?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Помните ли Вы имена своих бывших одноклассников? Назовите пару человек.',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Стоит ли доводить знакомства через Интернет до реальных встреч? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Есть ли у Вас друзья, с которыми Вы познакомились в сети?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Любите ли Вы читать журналы? Если да, то какие и почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как Вы предпочитаете проводить свободное время?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Приходится ли Вам брать деньги в долг? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Приходилось ли вам играть на деньги? Если да, выигрывали или проигрывали? И при каких обстоятельствах?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие азартные игры вам нравятся? Как часто и при каких обстоятельствах вы в них играете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Приходилось ли вам признавать свою ошибку? Если да, легко ли Вам было признать свою неправоту?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'О чем вы спорили в последний раз?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что вы способны сделать на спор?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Были ли вы когда-нибудь шокированы чьим-либо внешним видом? Если да, опишите этот случай.',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Когда последний раз вы столкнулись с лицемерием? При каких обстоятельствах?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что вы думаете про комплименты?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Любители ли Вы рассказывать анекдоты в компании? Расскажите нам один анекдот.',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Можно ли сказать, что Вы – хороший рассказчик?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Умеете ли вы красиво излагать свои мысли?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как Вы относитесь к экстремальным видам спорта?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Отважитесь ли Вы на прыжок с парашютом? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Приходилось ли Вам проводить ночь на природе и спать просто под открытым небом? Какие обстоятельства этому способствовали?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Совершали ли Вы восхождения в горы? Если да, то что это за горы были?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'В незнакомой стране станете ли Вы тратить время на осмотр знаменитых достопримечательностей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'В какой город Вы хотели бы обязательно вернуться еще раз? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой город поразил Вас больше всего? Чем?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что Вы предпочитаете: урбанистический пейзаж или вид нетронутой природы?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой город является для Вас воплощение мечты? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Любите ли Вы путешествовать? Где были последний раз?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если к вам приходят гости, то как долго затягиваются ваши посиделки?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Любите ли Вы приглашать домой гостей? По какому поводу?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты употреблял(а) когда-нибудь наркотики?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'На что Вы скорее потратите деньги: на обновление домашней обстановки или на путешествие?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'На что Вы готовы пойти ради воплощения мечты?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'О чем вы мечтали в последнее время? Например, сегодня?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Можно ли назвать Вас терпеливым человеком? В чем это выражается?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если человек Вас подвел, станете ли Вы доверять ему снова? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Насколько часто друзья обращаются к Вам за помощью? Когда это было в последний раз?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Часто ли Вы даете обещания? Что последний раз пообещали?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Станете ли Вы выполнять обещание, данное в нетрезвом виде? Бывало такое с вами?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Можно ли сказать, что Вы дружелюбный человек? Если да, то как это проявляется?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Можно ли сказать, что Вы честолюбивы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Хотели бы Вы стать публичным человеком?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой политический деятель в нашей стране вызывает у Вас неподдельное восхищение?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какого политика 20 века можно назвать самым выдающимся?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Интересуетесь ли Вы политической жизнью страны?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой проступок нельзя простить любимому человеку?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какое преступление должно, по Вашему мнению, караться смертной казнью?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какое чувство Вы считаете самым низменным?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что способно вызвать у Вас острый приступ зависти?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Хотели бы Вы побывать в космосе? Если да, то где?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как часто Вам приходится принимать важные, ответственные решения на работе? Что от вас там зависит?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Можете ли Вы сказать, что не боитесь брать на себя ответственность? Когда в последний раз вам приходилось брать на себя ответственность?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы скорее выберете: отдых у бассейна на шезлонге с коктейлем или поход в горы с рюкзаком?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как часто Вы выбираетесь на природу? Когда вы были там в последний раз?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сможете ли Вы провести экскурсию по родному городу для приезжих?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Любите ли Вы свой город? Какое у вас любимое место в нем?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Сколько времени в день Вы тратите на разговоры по телефону?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как часто Вы меняете мобильный телефон? Какая у вас сейчас модель?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Доверяете ли Вы рекламе больше, если там снимается известный человек?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как часто выбирая товары, Вы полагаетесь на рекламу? Что на вас повлияло в последний раз?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Доверяете ли Вы врачам в вашей поликлинике?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как часто Вы позволяете себе «выпускать пар», избавляться от накопившихся негативных эмоций?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сколько времени в день Вы проводите в общественном транспорте?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сколько времени утром Вы тратите на сборы?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Можете ли Вы проснуться утром без кофе?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Можно ли сказать, что без телевизора Ваша жизнь вообще не возможна?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что для Вас вкуснее: шоколад или мороженное?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Случалось ли Вам забывать о важной встрече, а потом придумывать откровенное вранье в оправдание?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Можете ли Вы представить себе целую неделю жизни без мобильного телефона?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Случалось ли Вам заблудиться в лесу?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Умеете ли Вы ориентироваться на местности? Сможете найти правильную дорогу в незнакомом городе? А в лесу?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Знаете ли Вы хоть один иностранный язык?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Скольких известных дизайнеров Вы можете назвать?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как часто Вы обновляете свой гардероб?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Станете ли вы покупать вещь, которая Вам не очень нравится, если она «засветилась» на модных подиумах?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Есть ли в Вашем гардеробе вещи, которые Вы ни разу не надевали?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Следите ли Вы за модными тенденциями в одежде?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие цвета в одежде Вы предпочитаете?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Случается ли Вам совершать совершенно необдуманные, ненужные покупки?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Можно ли назвать Вас шопоголиком?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'В одежде для Вас важнее: качество ткани и внешний вид, удобство модели или бренд?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Приходилось ли Вам совершать покупки в кредит? Что покупали?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как часто Вы совершаете покупки через Интернет? Что купили в первый раз?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Разбираетесь ли Вы в искусстве? Сможете отличить картины Мане от картин Моне?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Готовы ли Вы вступиться за сотрудника, которого несправедливо ругает строгий начальник? Такое с вами бывало?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Готовы ли Вы еще раз пережить подростковый возраст?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Подвержены ли Вы классической осенней депрессии?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Когда Вам грустно, что Вы делаете?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Часто ли бывает такое, что Вам хочется закрыться в комнате и никого не видеть?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Хорошо ли у Вас развита интуиция?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Любите ли вы дарить подарки? Что бы вы подарили игроку <N>?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Когда Вы последний раз дарили кому-нибудь подарки просто так, без повода?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Способны ли Вы на неожиданные, импульсивные поступки?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Бывает ли у Вас такое чувство, что настоящая жизнь проходит мимо Вас?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Легко ли Вы краснеете от стеснения?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Бывает ли так, что Вы испытываете чувство неловкости за действия других людей?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой момент в прошедшем году Вы можете назвать самым радостным?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой момент в жизни Вы вспоминаете как самый светлый и радостный?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Приходилось ли Вам хоть раз в жизни прыгать от счастья под дождем?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Любите ли Вы сидеть перед окном, завернувшись в теплый плед с чашкой горячего чая и смотреть на заснеженную улицу?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вызывает в Вас больше радости: процесс дарения подарка или процесс его получения?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой подарок для Вас является самым желанным?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Скольким людям  Вы обычно готовите подарки на Новый год?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Без каких современных благ цивилизации Вы не сможете прожить и дня?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Без каких благ цивилизации, на Ваш взгляд, Вы вполне могли бы обойтись?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое открытие 20 века кажется Вам наиболее ценным?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как часто Вам приходится на работе отвечать на совершенно нелепые, на Ваш взгляд, вопросы?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Боитесь ли Вы стоматологов?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Доводилось ли Вам хоть раз в жизни приносить домой бездомных животных? И если да, то кого?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что Вы скорее прочитаете: книгу рецептов или справочник по диетологии?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Можете ли Вы решиться отформатировать жесткий диск прямо сейчас?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Хоть раз в жизни Вам доводилось кардинально менять цвет волос?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Есть ли в Вашей жизни человек, которому Вы можете рассказать абсолютно все?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Есть ли в Вашей жизни человек, у которого можно, при необходимости, одолжить 100 тысяч?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Делали ли Вы благотворительные пожертвования хоть раз в жизни?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что способно заставить Вас улыбнуться?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Сколько раз в день Вы улыбаетесь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как долго Вы способны таить обиду?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как вы считаете, кто из современных писателей будет читаем в следующем веке?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какую мелодию вы выбрали бы, чтобы проиллюстрировать ваши отношения с любимым человеком?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Сколько известных художников навскидку, прямо сейчас, вы вспомните?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваш друг просит выступить его поручителем в банке (он берет очень крупную сумму денег на много лет). Согласитесь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы выиграли туристическую путевку, и организаторы конкурса предложили вам выбрать место отдыха. Куда вы отправитесь?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы читали библию полностью или знакомы только с отрывками из нее?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как часто вы думаете о смерти?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сколько лет вы рассчитываете прожить?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы согласились бы отправиться осваивать новые земли (Сибирь, Дальний Восток), если бы вам выделили деньги на строительство жилья?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'На концерт какого певца (певицы, группы) вы обязательно сходили бы, если они гастролировали бы в вашем городе?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой фильм последний раз вы смотрели в кинотеатре?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Новинки кино вы смотрите в кинотеатре, или предпочитаете смотреть их дома, когда они выходят на дисках или появляются в торрентах?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы любите ходить в цирк? Когда вы были там в последний раз?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что, на ваш взгляд, является самым губительным для человечества?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Верили ли вы в конец света, который, по утверждению некоторых провидцев, должен был наступить в декабре 2012 года?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кто, на ваш взгляд, является самым выдающимся человеком за прошедшее столетие?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Стены вашей квартиры украшает ваш совместный с супругом (супругой) свадебный портрет?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Жена хочет посмотреть очередную серию любимого сериала, а на другом канале идет фильм, который вы давно хотели увидеть (в интернете и на дисках его по какой-то причине нет). Что вы сделаете: настоите на своем, уступите жене?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы принимаете участие в рекламных конкурсах (отправляете этикетки, регистрируетесь на сайте)?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'В чем заключается ваш самый большой опыт?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сколько раз за сегодняшний день вы сказали неправду, чуть-чуть приукрасили, немного исказили реальное положение вещей?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы часто обманываете окружающих? Кого последний раз обманули и в чем?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Сколько детей вы мечтали завести? Сколько их у вас сейчас?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'У вас появилась возможность заработать огромную сумму денег (такую, что обеспечит вас и ваших близких до конца жизни), но для этого надо пойти на мошенничество, причем о нем никто никогда, ни при каких условиях, не узнает, вы пойдете на это?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие сайты/приложения вы открываете каждый день?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какую книгу вы прочитали на прошлой неделе?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'У вас есть любимое дерево?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Где бы вы предпочли жить: в мегаполисе или деревне? Где живете?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы были свидетелем какого-нибудь необычного явления? Если «да», поделитесь с нами?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какое событие в мире за последнюю неделю (месяц, год) вас взволновало больше всего?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы смотрите новости? Предпочитаете всегда быть в курсе событий в мире? Или это вам совершенно безразлично?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы любите активный отдых? Когда вы катались на лыжах последний раз?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы азартный человек?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы читаете (будете читать) своим детям книги, которые вам читали в детстве?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой фильм у вас ассоциируется с вашим детством (вы любили смотреть в детстве)?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Под Новый год вы смотрите кинофильм «Иронию судьбы или с легким паром»? Вы можете сосчитать, сколько раз вы видели эту комедию за свою жизнь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы любите фантастические романы? Какой последний прочитали?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вам предстоит долгое пребывание в одиночестве. Какую книгу вы возьмете для чтения?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вам предложили возглавить политическую партию на ваш выбор. Какую вы выберете?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой вещью вы хотите обладать больше всего на свете?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваша семья выиграла путевку на зарубежный курорт. Но поехать может только один человек. Кто из членов вашей семьи станет этим счастливчиком? Готовы вы отпустить вашего супруга (супругу) одного (одну)? Или поедете сами?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы была такая возможность, в какое учебное заведение вы сейчас поступили бы? Какую специальность получили?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'С кем из однокурсников вы поддерживаете отношения?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы помните день, когда получали диплом об окончании высшего (среднего) учебного заведения?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваш сын говорит, что подал заявку на участие в экспедиции на Марс, на Землю добровольцы не вернутся, таково условие контракта. Что вы будете делать?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вам предложили отправиться в кругосветное путешествие на яхте. Согласитесь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Где вы хотели бы встретить Новый год, если бы вам предоставили возможность выбрать такое место?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваша жена (муж) заявляет, что поедет в отпуск без вас. Отпустите?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы согласились бы стать смотрителем необитаемого острова на целый год, оставив дома семью и друзей?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'У вас было когда-нибудь желание уйти в монастырь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваш совершеннолетний сын решил уйти в монастырь. Вы будете его отговаривать?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваша пятнадцатилетняя дочь говорит вам, что влюбилась и выходит замуж. Что вы будете делать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваш ребенок верит в Деда Мороза? Вы поддерживаете в нем эту веру или хотите как можно скорее разоблачить этот миф?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Когда вы перестали верить в Деда Мороза?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой фильм, который вы видели в детстве, вы хотели бы пересмотреть сейчас? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сколько стоит булка хлеба в ближайшем к вашему дому магазине?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Когда вы последний раз ходили на встречу выпускников в вашей школе?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'С кем из одноклассников вы поддерживаете отношения, не в «Одноклассниках.ru», а в реальной жизни?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как называется город, где родилась ваша мать? Ваш отец?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы помните имя и отчество своего прадедушки по материнской линии? По отцовской?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кому из ваших школьных учителей вы доверили бы обучение своего ребенка?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вам предлагают (бесплатно!) взять домой обезьянку, о которой вы мечтали все детство. Согласитесь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'У вас дома есть собака? Кошка? Рыбки?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Когда вы последний раз писали письмо своим родственникам?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какое событие вы считаете поворотным в вашей жизни? Согласились бы прожить так, чтобы оно не случалось?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Сбылось то, что вам нагадали в детстве?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваши сны сбываются?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваш первый урок. Какие впечатления он у вас оставил?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы Наташа Королева спросила вас, нравятся вам ее песни, вы ответили бы ей правду?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'С кем из современных шоуменов или актеров вы хотели бы пойти в ресторан?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как выглядела ваша первая воспитательница? Как ее звали?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Чем вы любите заниматься на даче?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как звали вашего первого домашнего любимца?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'На какой остров вы отправили бы своего начальника, будь у вас такая возможность?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Когда говорят «спорт», какая картинка возникает у вас перед глазами, что вы представляете?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'С каким цветом у вас ассоциируется школа?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какая мелодия у вас ассоциируется с вашей первой любовью?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой фильм вы не позволите смотреть своему ребенку?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какую книгу вы никогда не дадите читать своему ребенку?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'С чем у вас ассоциируется запах первого снега?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы у вас была такая возможность, какое имя вы себе выбрали? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы ведете дневник? По-старинке в тетради в клеточку или ЖЖ?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что для вас армия, школа мужества или пережиток прошлого? Нужна ли армия для женщин?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы пишите или писали когда-нибудь стихи?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы лидер? Лидером рождаются или становятся?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы верите в приметы? В какие?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы писали любовные письма? ',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы поддаетесь гипнозу? Приходилось ли вам становиться жертвой гипнотизера, например, цыганки с гаданием и т.д.?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы модный/модная или скорее консерватор?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы хороший друг? Почему вы так считаете?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Нужно ли умирающему больному говорить всю правду о его состоянии?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Я никогда не надену на себя… Что?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вас удивляет? Что вас удивило недавно?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Можно ли одалживать крупные суммы денег друзьям?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кто для вас самый большой авторитет?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы смотрите сериалы? Считаете ли вы время, потраченное на сериалы, потерянным временем?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'У вас есть чувство юмора? Почему вы так считаете? Вы смеетесь с чужих анекдотов или можете сами удачно пошутить?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы оптимист? Всегда ли для вас стакан наполовину полный, а в бабочке вы не видите гусеницу?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'После окончания школы-вуза вы продолжаете (продолжите) заниматься самообразованием? Как вы это делаете?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Могли бы вы по каким-то идейным соображениям объявить голодовку?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Мечтаете ли вы иногда о шапке-невидимке, или ковер-самолет был бы для вас предпочтительнее?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Хотели бы вы поменяться с кем-то телами и прожить чужую жизнь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'С какими своими плохими привычками вам не удается справиться?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Можно ли детей наказывать физически? Вас били ремнем?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что бы вы написали в письме, адресованному самому себе 10 лет назад? О чем бы хотели себя предупредить?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Можно ли дружить лишь переписываясь-перезваниваясь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Считаете ли Вы себя мудрым человеком? Мудрость и ум одно и то же?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Должны ли дети получать карманные деньги, или они должны их зарабатывать, например, хорошими отметками или выполнением домашних обязанностей?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Испытываешь ли ты чувство вины или стыда? За что?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Во сколько лет вы научились читать? Говорит ли ранняя способность читать о хороших умственных способностях?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Расставались ли вы с любимым? Какой самый худший способ сообщить о разрыве отношений?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что вы думаете про эвтаназию? Можно ли помогать уйти из жизни смертельно больному человеку?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Нужны ли развивающие методики для детей, или они отбирают у ребенка детство?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Лучший способ справиться со стрессом для вас это?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы любите праздновать свой день рождения? Какой для вас идеальный вариант отметить собственный юбилей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Папа вместо мамы уходит в декретный отпуск. Допустима ли такая ситуация в вашей семье?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Одно единственное желание золотой рыбке. Как оно будет звучать?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы смогли бы простить измену супруга? А предательство друга? Что нельзя прощать ни при каких условиях?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кто должен ухаживать за пожилыми родственниками? Не предательство ли это сдавать старую мать или отца в дом престарелых?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как вы относитесь к идее гостевого брака? Можно ли жить супругам на расстоянии?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кто вам ближе по духу - родственники или друзья?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Можно ли людям всегда говорить правду?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что для вас обозначает заповедь «Не воруй»? Считаете ли вы сокрытие налогов?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Феминизация, женское и мужское равноправие лично для вас благо или зло?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Влияет ли аристократическое происхождение на сущность человека?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Считаете ли вы аборт убийством?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Хотели бы вы родиться гением? Как вам кажется счастливые ли они люди?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Есть ли у вас семейная традиция? Какая?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Нужны ли в доме животные? Какие?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Сколько детей в семье должно быть в идеале? Завели бы вы 10 детей, если бы вам за каждого платили приличные деньги?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Любишь ли ты дождь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие ваши детские мечты так и не исполнились?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Чем бы вы занимались, если бы вам не нужно было зарабатывать деньги?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Были ли в вашей жизни события или встречи, после которых ваша жизнь кардинально изменилась, вы развернулись и пошли в кардинально противоположном направлении?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Зная, что вам осталось 3 последних месяца жизни, как бы вы провели отпущенное время?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если существует добрый, справедливый Бог, то почему столько зла кругом?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Легко ли Вам дается общение с представителями противоположного пола?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как Вы относитесь к сверхъестественному? Верите ли в необычные способности человека?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Почему ваши друзья рядом с вами? Что вас сближает?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваш самый крупный выигрыш в лотерею?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что первым приходит вам на ум, когда вы слышите слово "реальность"? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы следующий ужин был последним для вас, какое блюдо вы заказали бы?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как называется самая лучшая книга, которую вы когда-либо читали? Почему она вам так понравилась?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Кем вы видите себя через 50 лет?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что  самое красивое, что вы когда-либо видели?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой человек повлиял на вашу жизнь сильнее всего? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Когда и при каких обстоятельствах вы впервые попробовали крепкий алкоголь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой навык нужен для того, чтобы добиться успеха? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вы считаете самой большой проблемой, с которой сталкиваются люди вашего возраста?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что является наибольшей проблемой для России сейчас?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какое блюдо вы умеете готовить лучше всего? Как научились?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что сейчас в вашем холодильнике?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Когда и при каких обстоятельствах вы впервые попробовали пиво?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какими электронными гаджетами вы пользуетесь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что вам дается труднее всего?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как проходит ваше будничное утро?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Оглянитесь назад. Какое событие сделало вас таким, какой вы сейчас?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какую черту своего характера вы получили от родителей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Кто был вашим героем в детстве? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как вы изменились за последние 5-10 лет?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Кто является лучшим актером в Голливуде? Его лучшая роль?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Опишите себя с помощью трех слов',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сколько пар обуви у вас есть?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы вы могли оказаться в любой точке мира, то что это было бы за место?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие скрытые таланты есть в вас?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Брат или сестра? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие три вещи вы возьмете с собой на необитаемый остров?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вы любите делать летом?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что самое прекрасное в людях? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'В чем секрет интересной жизни?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Опишите тот первый раз, когда вы покинули отчий дом надолго?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вы делаете, если вам не спиться ночью?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что вы любите делать зимой?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как вы заработали свои первые деньги?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Кто был первым человеком, которого вы полюбили?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что в вашем понимании совершенная женщина?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие привычки других людей вас выводят из себя?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'С каким известным человеком вы хотели бы встретиться? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Назови одну вещь, которую о вас не знает никто',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'За какой свой поступок вы испытываете гордость?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Кто является лучшей актрисой в Голливуде? Ее лучшая роль?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы были когда-нибудь свидетелем чего-то паранормального?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что вы больше всего цените в жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вы будете делать, если вам дадут один миллион долларов, и скажут вам начать новую жизнь на новом месте, оставить в этой всех ваших друзей и семью?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Яблоко или груша? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что вашем понимании совершенный мужчина?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы вы рисовали картину мира, то какой цвет вы бы использовали? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вы любите делать больше всего на свете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что делает вас хорошим другом?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какое место в мир вы хотели бы посетить обязательно? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если в вашем доме пожар, какие три вещи вы спасете в первую очередь?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой подарок вы никогда не забудете?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': '3 самых счастливых дня в твоей жизни?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой свой талант вы не развиваете, а надо было бы? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что в последний раз довело вас до слез?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какое из животных лучше всего описывает вашу личность? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Самый дорогой подарок, который вы когда либо дарили?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какая комната для вас самая любимая в вашем доме?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы у вас была машина времени, в каком времени вы хотели бы оказаться? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы вам было позволено сломать все что угодно, что вы сломали бы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваша любимая музыкальная группа во времена учебы в школе? Что вам в них нравилось?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы вы были птицей, то какой?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что самое важное в вашей жизни сейчас?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Самая безумная вещь, которую вы когда-либо сделали?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если кто-то будет писать о вас книгу, то какое название у нее будет?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Есть ли у вас работа? Если да, то где вы работаете? Если нет, то где бы вы хотели работать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Любимая страна?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Каким вы будете в старости?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Продолжите фразу: я всегда хотел(а), чтобы…',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что является наиболее значительным событием для вас за последние три месяца? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какое самое большое расстояние вы проходили пешком за раз? При каких обстоятельствах?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'У вас есть фобии?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие качества вы цените в людях?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Безбедная жизнь для вас началась бы с месячного дохода в размере… Но что вы бы тратили эти деньги?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как ты относишься к рекламе? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как Вы считаете, что люди изобрели зря?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы вам достался миллион долларов, что вы сделали бы с ним?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как вы себя чувствуете, стоя на берегу океана?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Самая неловкая ситуация, в которую вы попадали?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Назовите пять самых важных событий в 20 веке, по вашему мнению',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Самая необычная еда, которую вы когда-либо ели?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какие книги вы любите читать и почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Любимая цитата?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ваше состояние духа в настоящий момент?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие исторические личности вызывают Вашу наибольшую антипатию?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'К чему Вы испытываете отвращение?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваши любимые имена?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ваше любимое блюдо, напиток?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваши любимые литературные женские персонажи?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Каковы Ваши любимые литературные персонажи?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'К каким порокам Вы чувствуете наибольшее снисхождение?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ваши любимые художники и композиторы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваши любимые поэты?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваши любимые писатели?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Где Вам хотелось бы жить?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если не собой, то кем Вам бы хотелось бы быть?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваш любимый цвет и цветок?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ваше представление несчастья?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваше представление о счастливых отношениях?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ваша главная черта?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваше любимое занятие?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Качества, которые Вы больше всего цените в женщине?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Качества, которые Вы больше всего цените в мужчине?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие качества Вы цените больше всего?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вспомните, какой подарок вам запомнился в детстве сильнее всего?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'От чего вы не можете отказаться?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'У вас есть личный девиз или кредо?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какое слово, на ваш взгляд, характеризует вас лучше всего? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Чем вы зарабатываете на жизнь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы вы могли свободно передвигаться по миру, куда бы вы направились завтра и почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что представляет собой ваш обычный день?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как Интернет повлиял на вашу жизнь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что является для вас самым трудным в вашей работе?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что бы вы сделали, выиграв миллион долларов?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Скажите что-нибудь такое о себе, о чем никто никогда не подумал бы.',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вспомните о неловком моменте в своей жизни',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Поделитесь воспоминаниями об одном из ваших дедушек или бабушек.',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Расскажите, что (бы) вы делали, потеряв работу',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как вы себе представляете романтический вечер?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Опишите ваше первое жилище или жизненный опыт вне дома родителей.',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Расскажите о времени, когда вам приходилось больше всего есть или пить.',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Расскажите о друге детства, который втягивал вас в неприятности.',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Каким делом вы больше всего любите зани­маться один?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Опишите самого страшного человека, кото­рого вам приходилось когда-либо встречать.',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой запах вызывает у вас особое воспоминание?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Расскажите о своей семье',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'У кого из кинозвезд вы хотели бы взять ин­тервью? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как вы определяете спелость дыни? арбуза?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое самое памятное совпадение случалось в вашей жизни или о котором вы слышали?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какая еда вам нравится больше всего?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая песня напоминает вам о каком-нибудь происшествии в вашей жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой политической позиции вы хотели бы придерживаться?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если вы одиноки, то вы одиноки по убеждению или так сложилось?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Опишите наряд, в котором вы ходили на последнюю вечеринку.',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой из ваших поступков был самым асоциальным?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кто был самым известным человеком, с которым вам приходилось встречаться?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Кто бы мог сыграть вас в фильме о вашей жизни? Почему именно этот человек?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Катание на горных лыжах — нелегкий вид спорта. Где вы любите кататься?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой из сюрпризов, которые вы готовили для кого-то и удачно преподнесли, был самым лучшим?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Назовите самый лучший сюрприз в вашей жизни',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Назовите место, в котором вы бывали и куда никогда бы не хотели вернуться.',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Каково происхождение вашей фамилии?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ваш любимый ресторан. Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Назовите фильм/книгу, который вы видели/ читали больше одного раза.',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Опишите школьного учителя, который остался в вашей памяти',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кто были ваши идолы/кумиры в детстве? Изменились ли они?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой марки была ваша самая первая машина?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Назовите несколько ваших семейных традиций, которые вам особенно нравятся.',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ваш любимый отдых? Чем он вам нравится?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вам приходилось жить в разных местах? Расскажите о том, которое вам понравилось больше всего.',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой возраст вы считаете лучшим? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что бы вы хотели вернуть в своей жизни из того, что у вас было раньше?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что за город, в котором вы выросли?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы вы узнали, что завтра умрете, о чем бы вы пожалели?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Назовите одну вещь, которую вам действитель­но хотелось бы иметь. И почему.',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы вы могли переиграть любой момент вашей жизни, что бы это было?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Чем вы больше всего любите заниматься в дожд­ливый день?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Расскажите о самом лучшем отдыхе в вашей жизни',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая у вас была самая лучшая работа? Какая самая худшая?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Чем этот год стал для вас? Он был хорошим для вас, или не очень?  Какие значительные события произошли с вами в этом году?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что означает ваше имя? Почему вас так назвали?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Можешь говорить на другом языке?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Где ты родился(ась)?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Где ты жил(а) в детстве?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какая была любимая игра дома и какая на улице?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'С кем ты проводил(а) большую часть своего времени?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой наиболее запоминающийся момент из детства?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Каким был твой самый большой страх в детстве (темноты, чудовищ и пр.)?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кем в детстве ты мечтал(а) быть? Это так сейчас? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая самая забавная вещь, случившаяся с тобой в детстве?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какая самая щекотливая ситуация, в которую ты попадал(а) в детстве?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Каковы знаменательные события детства, которые больше всего повлияли на тебя?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какое твое любимое воспоминание, связанное с мамой?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какое твое любимое воспоминание, связанное с папой?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой твой любимый школьный предмет и почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Кто твой любимый школьный учитель и почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой твой самый нелюбимый школьный предмет?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая у тебя была любимая игрушка?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кто был твоим(ей) лучшим другом (подругой)?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какую игрушку ты всегда хотел(а), но так и не получил(а)?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какие у тебя были самые лучшие летние каникулы?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какое животное более всего соответствует тебе?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы у тебя была возможность выбрать любую в мире работу, то какой бы она была?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что бы ты изменил(а) в прошлом, если бы была такая возможность?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы ты выиграл(а) в лотерею миллион долларов, куда бы потратил(а) деньги?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой мультипликационный персонаж наиболее близок тебе и почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Чему бы ты хотел(а) посвятить свою жизнь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы была возможность прямо сейчас избавиться от какой-нибудь привычки, от чего ты бы избавился(лась)?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы у тебя была одна магическая способность, какой бы она была?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какими тремя вещами ты больше всего в жизни гордишься?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какими тремя словами наиболее полно ты можешь описать себя?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что ты делаешь, когда тебе грустно?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что ты делаешь, когда чувствуешь злость или расстройство?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Относишься ли ты к какой-нибудь религии?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что больше всего привлекает в женщинах (мужчинах?)',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В чем для тебя различие между любовью и влюбленностью?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты считаешь, можно ли выражать свои чувства на людях? И до какой степени можно? (держаться за руки, поцелуи, обнимать друг друга...)?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ты веришь в Бога?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ты веришь в загробную жизнь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Есть ли жизнь за пределами Земли?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что ты думаешь по поводу абортов?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'До скольки лет дети должны жить вместе с родителями?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое твое отношение к геям и лесбиянкам?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты относишься к гаремам?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как ты относишься к разнице в возрасте между мужчиной и женщиной (разница более 10 лет)?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Достаточно ли для счастья только любви? И возможен ли "рай в шалаше"?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Должен ли мужчина присутствовать при рождении ребенка? ',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Может ли время вылечить любовные раны?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой он дом твоей мечты?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Машина твоей мечты?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Идеальные каникулы или выходные. Какие они?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Каким должен быть идеальный День Рождения?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая мечта всей твоей жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Три черты или свойства тебя, которые ты хотел(а) бы улучшить?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие пять вещей/дел ты бы хотел(а)?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты предпочитаешь жару или холод? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что тебя больше всего раздражает?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ты живешь сегодняшним днем или будущим?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Твое отношение к курению?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сплетни и слухи... нравятся / не нравятся?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сюрпризы ... нравятся / не нравятся?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Тихие и спокойные местечки... нравятся / не нравятся?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Шумные места... нравятся / не нравятся?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Амбиции... нравятся / не нравятся?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Соперничество... нравится / не нравится?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Преимущества мужчины в сексе?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Преимущества женщины в сексе?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кто ваш фаворит в Instagram? И наоборот? Или у вас нет Instagram? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Женщина была бы лучшим "правителем земли", чем мужчина?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Самый большой страх мужчины, по-вашему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Самый большой страх женщины, по-вашему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что всем мужчинам нравится слышать в свой адрес?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что всем женщинам нравится слышать в свой адрес?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Лучший довод, чтобы быть мужчиной?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Лучший довод, чтобы быть женщиной?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Самый большой минус быть мужчиной?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Самый большой минус быть женщиной?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы у тебя была возможность родиться второй раз и возможность выбрать свой пол, кем бы ты был(а)?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как ты представляешь себе идеальное свидание?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой твой любимый романтический жест или поступок?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Десять подарков, которые бы ты больше всего на свете хотел(а) получить?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как ты представляешь себе идеальный романтический подарок?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как ты представляешь себе идеальные романтические выходные или каникулы?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты считаешь себя романтичным(ой)?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'В какой момент у вас появилось желание провалиться сквозь землю?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ты веришь в родство душ и что у каждого человека есть своя половинка на этой земле?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Романтика - это важная часть взаимоотношений?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты думаешь, может ли настоящая Любовь победить все?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы помните в деталях ваше первое свидание? Ваши мысли в это время?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы помните ваш первый поцелуй? Что вы чувствовали и о чем думали?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы помните вашу первую ссору (вашу самую крупную ссору)? Что вы о ней думаете сейчас? Могла бы ли она повториться?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы помните самый потрясающий комплимент, который сказал вам ваш партнер?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие свойства характера и личности вам больше всего нравятся в вашем партнере?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что больше всего вы цените в том, что делает для вас ваш партнер?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что вы делали, чтобы привлечь внимание вашего партнера до того, как у вас начались серьезные взаимоотношения?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вам нравится, когда любимый вами человек делает...Что?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вам нравится, когда любимый вами человек называет вас...Как?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какая самая романтичная ситуация в твоей жизни?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как вы считаете, ваша жизнь стала предсказуемой?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что нужно делать, чтобы внести в жизнь разнообразие?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'хотите ли вы продолжать общение с игроком <N>?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Следует ли жить вдвоем до свадьбы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Следует ли всегда говорить правду, даже если она причиняет боль?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты относишься к браку?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ты веришь в брак на всю жизнь? Твое отношение к разводам?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Самая важная вещь во взаимоотношениях?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ты можешь свободно спросить своего партнера о чем хочешь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой должна быть роль жены в семье?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой должна быть роль мужа в семье?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если ты недоволен(льна) или рассержен(на) чем-то, как ты это демонстрируешь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если у тебя проблемы, ты об этом говоришь открыто или держишь в себе?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Тебе нравится рассказывать о своих чувствах?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что бы ты делал(а), если бы выяснилось, что любимый человек обманывает тебя?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'В каком случае возможен развод?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'По твоему, кто в семье должен распоряжаться деньгами?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кто должен воспитывать детей в семье?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как ты относишься к женщине, которая зарабатывает больше мужчины (достигла большего в карьере)?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как ты думаешь, стоит ли экономить?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Стоит ли иногда потранжирить деньги?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'От чего бы ты смог(ла) отказаться, чтобы сэкономить деньги?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что бы ты делал(а), если бы твой партнер оказался временно не способным зарабатывать деньги? А если бы долго не мог устроиться на работу?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'сколько детей хочешь? Какого пола? Как назвать?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как бы ты воспитывал(а) детей? Как твои родители или по-другому?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты бы наказывал(а) детей? Если да, то как и за что?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какова роль мамы в воспитании детей на ваш взгляд?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какова роль папы в воспитании детей на ваш взгляд?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какова возможна роль бабушки и дедушки в воспитании ваших детей?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Мужчина и женщина любят друг друга меньше после рождения ребенка? Как сохранить любовь спустя много лет?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как ты собираешься воспитывать своих детей? За что будешь наказывать?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Можно ли показывать любовь друг к другу на глазах у детей? Где граница?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как бы ты ответил(а) на вопрос ребенка: "Откуда берутся дети?"',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как сохранить романтику с партнером, когда у вас будут дети?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что бы ты рассказал(а) детям об алкоголе, курении и наркотиках?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как вы думаете, от кого должна исходить инициатива, от мужчины или от женщины? А как по поводу скрытой инициативы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'О чем ты любишь думать в свободное время?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какое качество в себе ты ценишь больше всего?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какое в тебе есть отрицательное качество?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какую черту характера в человеке ты считаешь самой благородной?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какую черту характера в человеке ты считаешь самой низменной?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты сожалеешь о чем-нибудь, что ты совершил(а) в прошлом?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы была возможность, согласился(ась) ли изменить события прошлого? Если да, то как по-новому ты бы себя повел(а)?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы ты писал(а) книгу о себе, какой у нее был бы заголовок?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы тебе пришлось провести целый день в одиночку, чем бы ты занялся(ась)?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Твоя самая худшая ситуация на работе?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Твоя самая лучшая ситуация на работе?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы ты смог(ла) изменить одну вещь в мире, что это за вещь была бы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что бы положительного ты бы добавил(а) в мир?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что бы отрицательного ты бы убрал(а) из мира?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что бы ты хотел(а) владеть собственной компанией или работать на кого-либо?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Насколько для тебя важна карьера?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Насколько для тебя важна семья?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты поднимаешь себе настроение, если чем-то расстроен(а)?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ты считаешь что твоя жизнь идет так, как тебе хотелось бы?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'На сколько бы ты оценил(а) свои достижения в жизни?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как ты себя чувствуешь, когда приходится говорить публично?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что ты думаешь о существующем правительстве в стране?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как ты думаешь, цель оправдывает средства?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой самый лучший сон тебе снился?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой самый страшный момент в жизни у тебя был?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты оцениваешь твое взаимоотношение с родителями?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ты согласен(на) с тем, как воспитывали тебя твои родители?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы у тебя была возможность родиться в другом городе, что это был бы за город?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой твой астрологический знак? Как ты думаешь, его описание подходит к тебе?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой твой самый любимый астрологический знак? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как ты воспринимаешь людей, как "потенциально добрых" или "потенциально плохих"?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ты экстраверт или интроверт?Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ты сангвиник, холерик, флегматик или меланхолик? (это типы личности :)',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты бы хотел(а) иметь много друзей или небольшой круг очень близких друзей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как тебе больше всего нравится проводить праздники?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кто в жизни на тебя повлиял больше всего?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой твой самый важный жизненный урок, который бы ты хотел, чтобы знали все?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы ты мог(ла) изменить свое имя, то на какое?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что ты больше всего ценишь в подарке?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': '10 моментов из автобиографии, наиболее полно описывающих твою личность?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Нравится ли тебе отвечать на вопросы психологических тестов? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы психиатр предложил вам "инъекцию сыворотки правды" путем записи на магнитофон ваших ответов на вопросы о вас самих, ваших подлинных чувствах, мотивах и желаниях, вы бы согласились? Не испытали бы вы двойственного чувства - отчасти любопытства, отчасти страха перед тем, что может обнаружиться в вас?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая эмоция, о которой тебе труднее всего признаться?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы оставалось жить один день, что бы ты сделал(а)? Какие твои чувства?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы оставалось жить один месяц, что бы ты сделал(а)? Какие твои чувства?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы оставалось жить один год, что бы ты сделал(а)? Какие твои чувства?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы существовала машина времени, в какое время ты отправился/ась бы?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Где ты хотел(а) бы оказаться через 5 лет?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Готов(а) ли ты вступить в брак с человеком другой национальности, религии или расы?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы твоя любовь предложила тебе только дружбу, ты бы согласилась?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Поменял(а) бы ты свою работу на более интересную, но менее оплачиваемую?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что ты будешь делать, если останешься последним человеком на Земле?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что портит людей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как интернет влияет на твою жизнь?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие твои планы на завтра?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что будешь делать в 70 лет?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты относишься к смерти?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как бы ты хотел(а) провести последний день своей жизни?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Чем ты готов(а) пожертвовать ради спасения другого человека?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ты бы рискнул(а) своей жизнью ради другого?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты относишься к бывшим заключенным?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ты бы смог (смогла) убить человека?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Злопамятный(ая) ли ты? Будешь ли мстить кому-то за что-то плохое?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ты бы смог(ла) простить предательство?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты веришь экстрасенсам?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Бывает ли так, что ты чувствуешь себя виноватым? Как искупляешь свою вину?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Легко ли для тебя просить прощение?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В чем смысл твоей жизни?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что для тебя жизнь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что для тебя счастье?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какое событие изменило тебя в наибольшей степени?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что выбираешь ты: решение проблемы или бег от нее?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как думаешь, ложь во благо – это правильно?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ради достижения какой цели можно переступить свои принципы?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кто для тебя самый близкий человек в этом мире?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Ты веришь в жизнь после смерти?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как часто ты мечтаешь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как думаешь, для чего человеку нужны ошибки?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как думаешь, можно ли найти выход из любой ситуации?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что выберешь: карьеру через постель или честную бедность?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как ты реагируешь на хамство людей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Цена есть у всего, во сколько ты оцениваешь себя?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как ты отреагируешь на измену?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Как ты относишься к изменам в браке?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если твой ребенок совершит преступление, ты отведешь его в полицию?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': '<M>Расскажешь ли ты другу о том, что его девушка  к тебе приставала?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'как ты относишься к религии?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Чего тебе не хватает для счастья?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Карьера или семья?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Много ли у тебя врагов?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Твои друзья предавали тебя?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что больнее пережить: измену девушки (парня) или предательство лучшего друга?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Твоя несбывшаяся мечта? ',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как ты считаешь, в каком месте обязательно должен побывать любой человек?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Расскажи про игрока <N>, как давно ты его знаешь, как произошло знакомство. Твое первое впечатление о нем',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что бы ты делал/а, если бы попал/а на необитаемый остров с игроками <N>, <M> и <F>?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы на тонущем корабле. У тебя есть возможность спасти одного человека, отдав ему спасательный жилет. Кому ты его отдашь, игроку <N> или <N>?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Ты нашел/а клад. Что ты сделаешь, заберешь его, не сказав никому, или сообщишь о находке?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что бы ты сделал/а, если бы узнал/а, что твои родители - не родные, а приемные? как бы дальше ты к ним относился/ась?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Расскажи свой самый страшный сон',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Расскажи свой самый странный сон',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Назови человека из присутствующих, которого ты считаешь своим лучшим другом',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Чего ты боишься? когда в последний раз испытывал/а страх?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Сколько денег тебе нужно для счастья?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'На что ты потратил/а бы 30 млн. рублей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Назови свою любимую книгу',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Расскажи, что или кто наибольшим образом повлиял на тебя?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Опиши свое любимое блюдо, поделись его рецептом',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Велосипед или пешая прогулка?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сноуборд или серфинг?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Завидуешь ли ты кому-нибудь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Кому первому вы сообщите какую-нибудь свою радостную новость?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если надо было бы выбирать между патриархатом и матриархатом, чтобы вы выбрали и почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Существует ли дружба между мужчиной и женщиной?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Насколько безвыходной должна быть ситуация, чтобы Вы нарушили закон?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы у вас было право на убийство, воспользовались ли бы вы им и если да, то против кого?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой самый интересный комплимент, который Вам в жизни делали?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Самый лучший, ценный совет, который вам дали? Кто это был?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Мотивируете ли вы себя? Если да, то каким образом?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Назовите три своих отрицательных качества',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'За что ты готов(а) просить прощения миллион раз? ',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'На что ты готов(а) пойти ради своего любимого человека?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Стал(а) бы ты общаться с человеком, который «обладает» нетрадиционной ориентацией?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'На что ты готов(а) пойти ради больших денег?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что тебя раздражает (бесит) в людях противоположного пола?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какого человека ты хочешь забыть и почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Ты бы смог(ла) убить человека?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Кого ты не можешь забыть и по какой причине?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': '<M>Ты бы сходил на свадьбу к своей бывшей девушке (жене)?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В каком деле ты являешься настоящим «чайником»?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Каким образом ты привык(ла) вычеркивать людей из личной жизни? ',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'опиши три самых замечательных дня из своей жизни, которые ты готов пережить повторно',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как Вы боретесь с депрессией? ',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Если бы Вы могли иметь любое животное в качестве своего домашнего питомца, то кого бы Вы выбрали и почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Если бы Вы могли лечить какую-нибудь болезнь, то что бы это было?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Если бы Вы были едой, то какой и почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Если бы Вы были цветом, то каким и почему? ',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Расскажи про то, как ты выдавливаешь зубную пасту',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой у тебя никнейм? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Говорите ли вы что-то такое, что обещали (родителям в детстве) никогда не говорить ',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Используя только одно слово, опиши первое впечатление от каждого игрока',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Есть что-то такое, что делают люди, находясь в пробке, что вас беспокоит?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какие книги ты собираешься прочитать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какая комната в твоем доме (квартире) лучше всего отражает твою личность? Почему?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как часто ты рисуешь? (в том числе и каракули на полях) Что ты рисуешь?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что вы делаете, чтобы быстрее заснуть? как боретесь с бессонницей?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что ты делаешь чаще: насвистываешь или напеваешь? ',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сколько дней вы смогли бы продержаться в одиночной камере? Как бы вы это сделали?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Сохраняете ли вы старые поздравительные открытки? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Насколько хорошо вы поете? оцените по десятибалльной шкале',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Когда вы дома, носите ли вы носки или тапочки?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие преимущества и недостатки вашего роста?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Опишите свой последний пикник',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы следите за различными акциями, распродажами, скидками и розыгрышами?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сколько автографов знаменитостей вы собрали?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Есть что-то, что вам стоит выбросить, но вы не можете? Расскажите',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как часто вы стрижетесь? Опишите вашу худшую прическу',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Каким образом вы занимаетесь обслуживанием своего автомобиля?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой ваш самый необычный ночной или утренний ритуал?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как вы избавляетесь от надоедливых телефонных звонков рекламных агентов?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вас когда-нибудь где-нибудь запирали? Расскажите',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Когда вы последний раз выступали на публике? Расскажите',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как часто ты болеешь?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что самое ценное, что вы уронили и сломали?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие аттракционы вы больше всего любите в парках развлечений?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что первое приходит на ум, когда вы слышите слово «веселье»?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Когда в последний раз вы танцевали? Оцените свои навыки по десятибалльной шкале',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какое самое опасное дикое животное вы трогали?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Сколько времени в день вы сидите за компьютером? Сколько из этого времени тратите на веб-серфинг?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое ваше лучшее произведение искусства? Опишите ',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой ваш самый озорной поступок?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Выключаете ли вы свет, когда выходите из комнаты?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Когда вы стоя разговариваете с кем-то, где находятся ваши руки? Продемонстрируйте',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы когда-нибудь покупали что-либо в магазине на диване? а в онлайн-магазине?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как часто вы покупаете лотерейные билеты?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Когда вы приходите куда-то, вы ведете себя тихо или стараетесь как-то обратить на себя внимание?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой твой любимый вид конфет?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Сколько раз в день вы смотрите на себя в зеркало?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Когда вы путешествуете, вы берете слишком мало или слишком мало вещей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'В какой позе вы обычно сидите, когда отдыхаете?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы когда-нибудь были участником какой-нибудь передачи?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие тренды в моде вам нравятся, а какие нет?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Знаете ли вы какие-нибудь фокусы? Можете сейчас продемонстрировать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Когда вы последний раз сидели на скамейке в парке более десяти минут? Опишите это событие.',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что самое возмутительное вы видели?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Опишите, как вы смеетесь, когда вам смешно',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Насколько важно для вас, чтобы люди правильно запоминали и произносили имена?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как вы обычно поздравляете людей, серьезно или с юмором?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как вы относитесь к медицинским процедурам?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Чем вы восхищаетесь больше всего в своем лучшем друге?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Опишите свой самый длинный отпуск',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Сколько часов вам нужно, чтобы выспаться?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Есть что-то такое, за что вы испытываете чувство вины, но продолжаете делать, потому что вам нравится?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Кто самый добродушный человек из тех, кого вы знаете?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Сколько у вас кредитных карт?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как часто вы едите с друзьями, никуда не спеша?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Кто самый забавный человек, которого вы знаете? Опишите его',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой звук сводит вас с ума?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какой звук усыпляет вас?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Кто самый умный человек, которого вы знаете?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как часто вы читаете новости?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В одном предложении, как бы вы описали своего лучшего друга?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как быстро вы обычно засыпаете?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какие предметы вы храните в багажнике своего авто?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие животные пугают вас больше всего? Почему?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какое средство для лечения простуды лучше всего подходит для вас?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Боишься ли ты щекотки?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что сводит вас с ума?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Есть что-то такое в вас, что вряд ли изменится, но вы бы этого очень хотели?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Вы обычно являетесь лидером или следуете за кем-то?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что в вас преобладает: ум или эмоции? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как часто вы опаздываете?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'В какой степени вы патриотичны? Как вы выражаете свой патриотизм?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какие привычки у вас есть?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Прокрастинируете ли вы и в каких ситуациях?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'В каком возрасте вы надеетесь уйти на пенсию? Объясните.',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Любите ли вы шопинг? Где вы больше всего любите закупаться?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Оцени по десятибалльной шкале твои навыки работы с компьютером',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Вы суеверны? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какое одно слово лучше всего описывает твою маму?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какое одно слово лучше всего описывает вашего отца?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Когда вы бываете застенчивыми?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Есть ли какая-то вещь, о продаже или потере которой вы жалеете? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что лучше: ваша краткосрочная или долгосрочная память?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы больше склонны «строить свою собственную империю» или «раскрывать потенциал других»? Объясните.',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что вы считаете само собой разумеющимся?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Как часто вы прерываете других, пока они говорят? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Насколько вы конкурентоспособны? Объясните',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Ты любишь риск?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Сладкая ложь или горькая правда? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Когда в последний раз вам хотелось кричать? почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что вдохновляет вас?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какие у вас особенности или странные привычки?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'На сколько процентов вы перфекционист?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'На что ты обычно тратишь свои деньги?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'У тебя есть аллергия на что-либо?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Насколько вы толерантны?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что вас смущает?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'В какое время дня вы чувствуете себя лучше всего?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'В какое время вы обычно просыпаетесь утром? Вы пробуждаетесь сами или вам нужен будильник?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой страх вы бы хотели преодолеть?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Что важнее: выглядеть хорошо или чувствовать себя хорошо?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Кому первому вы рассказываете что-то хорошее, что с вами произошло?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'К кому вы обращаетесь, когда в вашей жизни происходит что-то плохое?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'В каких ситуациях вы чувствуете себя некомфортно?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В каких ситуациях вы чувствуете себя наиболее комфортно?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Насколько вы хороши в мультизадачности?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Что вы делаете, когда хотите расслабиться?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Как вы прощаетесь с людьми? Что говорите?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'К кому вы обращаетесь, когда вам нужна помощь?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'При каких обстоятельствах вы не можете спать?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Как вы предпочитаете избегать конфликтов?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Насколько вы подвержены несчастным случаям? Опишите недавний инцидент',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какая у вас любимая марка мороженого и вкус?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что вы предпочитаете: городскую суету или спокойствие и безмятежность сельской жизни? ',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы предпочитаете работать и учиться в тихом месте?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы предпочитаете больше упражнять свое тело или свой ум?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Собака или кошка?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Что вы выберете для передвижения: самолет, поезд, лодку, автомобиль, лошадь или верблюда?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Насколько заранее вы предпочитаете планировать?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Вы путешественник или домосед?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Где ваше идеальное место для отдыха?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какое ваше любимое место за городом?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Вы предпочитаете тщательно обдумывать варианты или принимать решения быстро без лишних раздумий?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Что вы выберете: полетать на дельтаплане, прыжки с парашютом, роупджампинг или полет на воздушном шаре?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какой ваш любимый жанр литературы?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Каков ваш предпочтительный метод получения новостей?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Каков ваш любимый вопрос?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какое ваше любимое выражение?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Какая ваша любимая тема для обсуждения? Почему?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Когда вы куда-то летите, вы предпочитаете прибыть в аэропорт заблаговременно или попасть туда только в самый последний момент? Почему?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Какой гаджет из тех, которыми вы пользуетесь, нравится вам больше всего?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой самый любимый сувенир вы привезли из путешествий? Где вы его храните?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'В каком месте вы предпочитаете сидеть в кинотеатре?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Где вам больше всего нравилось наблюдать восход и закат солнца?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
    {
      'text': 'Пазлы, кроссворды или головоломки?',
      'pack_id': 28,
      'pack_name': 'truths_serious4',
    },
    {
      'text': 'Какой твой любимый аромат?',
      'pack_id': 25,
      'pack_name': 'truths_serious1',
    },
    {
      'text': 'Кто твой любимый комик?',
      'pack_id': 26,
      'pack_name': 'truths_serious2',
    },
    {
      'text': 'Какое у тебя самое драгоценное украшение?',
      'pack_id': 27,
      'pack_name': 'truths_serious3',
    },
  ],
};