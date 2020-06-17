export enum Cyan {
  n630 = '#00696B',
  n550 = '#007E85',
  n480 = '#00919E',
  n420 = '#00A3B2',
  n360 = '#00B5C6',
  n290 = '#00C8D6',
  n230 = '#31D7E3',
  n170 = '#7BE3EA',
  n110 = '#AFEEF2',
  n70 = '#D0F4F6',
}

export enum Green {
  n620 = '#007013',
  n550 = '#008424',
  n490 = '#009731',
  n410 = '#06AC3E',
  n360 = '#19BD47',
  n310 = '#4CC864',
  n240 = '#76D58E',
  n190 = '#9BDFA9',
  n120 = '#C3EBCB',
  n60 = '#DFF5E4',
  n30 = '#EFFAF2',
}

export enum Lime {
  n620 = '#6A6200',
  n550 = '#848700',
  n480 = '#838A00',
  n410 = '#919900',
  n350 = '#9EAE0F',
  n300 = '#ADBD32',
  n230 = '#BDCD47',
  n170 = '#D0DB7B',
  n120 = '#E0E59F',
  n70 = '#EEF1D0',
  n30 = '#F7F8E7',
}

export enum Orange {
  n620 = '#B1320B',
  n560 = '#C74609',
  n480 = '#D75F06',
  n410 = '#EF7015',
  n350 = '#F78922',
  n300 = '#FF991F',
  n230 = '#FFB54D',
  n170 = '#FFCA80',
  n100 = '#FFDFB3',
  n70 = '#FFEBCC',
  n40 = '#FFF3E0',
}

export enum Yellow {
  n200 = '#FFC400',
  n160 = '#FDD14C',
  n110 = '#FEE189',
  n70 = '#FEEEB8',
  n40 = '#FEF5D7',
}

export enum Red {
  n600 = '#CA181F',
  n560 = '#D82C11',
  n490 = '#EF4115',
  n440 = '#F75A47',
  n360 = '#FF7B5B',
  n300 = '#FF967C',
  n240 = '#FFAD99',
  n180 = '#FFC5B7',
  n140 = '#FFD2C8',
  n80 = '#FFE7E1',
  n40 = '##FFF3F0',
}

export enum Magenta {
  n620 = '#BE006E',
  n560 = '#D91275',
  n490 = '#F42A7E',
  n420 = '#F55B96',
  n350 = '#F57FAE',
  n300 = '#F694BF',
  n230 = '#F5B2CF',
  n180 = '#F8C4DB',
  n120 = '#F8D7E6',
  n80 = '#FCE5EF',
  n40 = '#FDF1F7',
}

export enum Blue {
  n810 = '#002882',
  n740 = '#003C96',
  n650 = '#1556BB',
  n530 = '#2375E1',
  n490 = '#1B81EE',
  n430 = '#1896F7',
  n370 = '#00AAFF',
  n290 = '#47C2FF',
  n230 = '#6FCFFF',
  n180 = '#92DBFF',
  n130 = '#B5E6FF',
  n90 = '#CCEEFF',
  n40 = '#E5F8FF',
}

export enum Purple {
  n620 = '#614FB6',
  n560 = '#7462BC',
  n490 = '#8677C1',
  n420 = '#978ACC',
  n350 = '#A99FD5',
  n290 = '#B9B0E1',
  n230 = '#C7C0E2',
  n170 = '#D6D0EC',
  n120 = '#E3DEF2',
  n80 = '#ECE8F5',
}

export enum Neutral {
  n1000 = '#000000',
  n820 = '#2D2F33',
  n710 = '#47494F',
  n630 = '#5C5F66',
  n560 = '#6E7178',
  n490 = '#7F828A',
  n420 = '#8F939B',
  n350 = '#A1A5AE',
  n290 = '#B1B5BD',
  n230 = '#C0C4CB',
  n170 = '#D1D4DA',
  n120 = '#DDE0E6',
  n70 = '#EBEEF2',
  n30 = '#F4F7FB',
  n0 = '#FFFFFF',
}

export const colors = {
  cyan: Cyan,
  green: Green,
  lime: Lime,
  orange: Orange,
  yellow: Yellow,
  red: Red,
  magenta: Magenta,
  blue: Blue,
  purple: Purple,
  neutral: Neutral,
};

export type Color =
  | Cyan
  | Green
  | Lime
  | Orange
  | Yellow
  | Red
  | Magenta
  | Blue
  | Purple
  | Neutral;

//todo delete or fix when design update
export enum Primary {
  active = colors.blue.n810,
  hover = colors.blue.n650,
  normal = colors.blue.n530,
}

//todo delete or fix when design update
export enum System {
  error = colors.red.n560,
  warning = colors.orange.n410,
  info = colors.yellow.n200,
  success = colors.green.n410,
}

export enum ThemeCyan {
  BondiBlue = colors.cyan.n420,
  IceCold = colors.cyan.n110,
  MintTulip = colors.cyan.n70,
}

export enum ThemeGreen {
  FunGreen = colors.green.n550,
  PigmentGreen = colors.green.n490,
  GreenHaze = colors.green.n410,
  WonderAlina = colors.green.n190,
  FringyFlower = colors.green.n120,
  Tara = colors.green.n60,
}

export enum ThemeLime {
  Olive = colors.lime.n480,
  Goldenrod = colors.lime.n170,
  Zombie = colors.lime.n120,
  TahunaSands = colors.lime.n70,
}

export enum ThemeOrange {
  Tawny = colors.orange.n480,
  Tango = colors.orange.n410,
  CarrotOrange = colors.orange.n350,
  Chardonnay = colors.orange.n170,
  Frangipani = colors.orange.n100,
  SandyBeach = colors.orange.n70,
}

export enum ThemeYellow {
  Amber = colors.yellow.n200,
  Denchik = colors.yellow.n160,
  Salomie = colors.yellow.n110,
  ColonialWhite = colors.yellow.n70,
}

export enum ThemeRed {
  Thunderbird = colors.red.n600,
  DavidRed = colors.red.n560,
  Pomegranate = colors.red.n490,
  BraveheartArtur = colors.red.n180,
  TuftBush = colors.red.n140,
  Pippin = colors.red.n80,
}

export enum ThemeMagenta {
  VioletRed = colors.magenta.n490,
  Julia = colors.magenta.n180,
  Cherub = colors.magenta.n120,
  WispPink = colors.magenta.n80,
}

export enum ThemeBlue {
  ResolutionBlue = colors.blue.n810,
  Denim = colors.blue.n650,
  Mariner = colors.blue.n530,
  Sinetsky = colors.blue.n180,
  FrenchPass = colors.blue.n130,
  Onahau = colors.blue.n90,
}

export enum ThemePurple {
  BlueViolet = colors.purple.n560,
  Snuff = colors.purple.n120,
  VioChalk = colors.purple.n80,
}

export enum ThemeNeutral {
  Black = colors.neutral.n1000,
  Shark = colors.neutral.n820,
  Abbey = colors.neutral.n710,
  MidGray = colors.neutral.n630,
  PaleSky = colors.neutral.n560,
  Raven = colors.neutral.n490,
  Manatee = colors.neutral.n420,
  GrayChateau = colors.neutral.n350,
  Bombay = colors.neutral.n290,
  FrenchGray = colors.neutral.n230,
  Mischka = colors.neutral.n170,
  Solitude = colors.neutral.n120,
  AthensGray = colors.neutral.n70,
  BlackSqueeze = colors.neutral.n30,
  White = colors.neutral.n0,
}

export const themeColors = {
  //todo delete or fix when design update
  primary: Primary,
  //todo delete or fix when design update
  system: System,
  //

  cyan: ThemeCyan,
  green: ThemeGreen,
  lime: ThemeLime,
  orange: ThemeOrange,
  yellow: ThemeYellow,
  red: ThemeRed,
  magenta: ThemeMagenta,
  blue: ThemeBlue,
  purple: ThemePurple,
  neutral: ThemeNeutral,
};

export type ThemeColor =
  //todo delete or fix when design update
  | Primary
  //todo delete or fix when design update
  | System
  | ThemeCyan
  | ThemeGreen
  | ThemeLime
  | ThemeOrange
  | ThemeYellow
  | ThemeRed
  | ThemeMagenta
  | ThemeBlue
  | ThemePurple
  | ThemeNeutral;
