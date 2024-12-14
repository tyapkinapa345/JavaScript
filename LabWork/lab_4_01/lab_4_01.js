// Вариант № 16

// Задание №1
// Создайте интерактивную периодическую таблицу химических элементов. 

const elements = [
    { symbol: 'H', name: 'Водород', atomicNumber: 1, description: 'Легкий газ, используется в производстве аммиака.', group: 'Неметаллы', state: 'Газ', family: 'Другие неметаллы', period: 1, groupNumber: 1, line: 1 },
    { symbol: 'He', name: 'Гелий', atomicNumber: 2, description: 'Инертный газ, используется в воздушных шарах.', group: 'Неметаллы', state: 'Газ', family: 'Благородные газы', period: 1, groupNumber: 18, line: 1 },
    { symbol: 'Li', name: 'Литий', atomicNumber: 3, description: 'Используется в аккумуляторах.', group: 'Металлы', state: 'Твердое тело', family: 'Щелочные металлы', period: 2, groupNumber: 1, line: 2 },
    { symbol: 'Be', name: 'Бериллий', atomicNumber: 4, description: 'Используется в производстве сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Щёлочноземельные металлы', period: 2, groupNumber: 2, line: 2 },
    { symbol: 'B', name: 'Бор', atomicNumber: 5, description: 'Используется в производстве стекла и керамики.', group: 'Полуметаллы', state: 'Твердое тело', family: 'Полуметаллы — металлоиды', period: 2, groupNumber: 13, line: 2 },
    { symbol: 'C', name: 'Углерод', atomicNumber: 6, description: 'Основной элемент органической химии.', group: 'Неметаллы', state: 'Твердое тело', family: 'Другие неметаллы', period: 2, groupNumber: 14, line: 2 },
    { symbol: 'N', name: 'Азот', atomicNumber: 7, description: 'Составляет 78% атмосферы Земли.', group: 'Неметаллы', state: 'Газ', family: 'Другие неметаллы', period: 2, groupNumber: 15, line: 2 },
    { symbol: 'O', name: 'Кислород', atomicNumber: 8, description: 'Необходим для дыхания.', group: 'Неметаллы', state: 'Газ', family: 'Другие неметаллы', period: 2, groupNumber: 16, line: 2 },
    { symbol: 'F', name: 'Фтор', atomicNumber: 9, description: 'Используется в производстве фторсодержащих соединений.', group: 'Неметаллы', state: 'Газ', family: 'Галогены', period: 2, groupNumber: 17, line: 2 },
    { symbol: 'Ne', name: 'Неон', atomicNumber: 10, description: 'Используется в неоновых лампах.', group: 'Неметаллы', state: 'Газ', family: 'Благородные газы', period: 2, groupNumber: 18, line: 2 },
    { symbol: 'Na', name: 'Натрий', atomicNumber: 11, description: 'Используется в производстве стекла и мыла.', group: 'Металлы', state: 'Твердое тело', family: 'Щелочные металлы', period: 3, groupNumber: 1, line: 3 },
    { symbol: 'Mg', name: 'Магний', atomicNumber: 12, description: 'Используется в производстве легких сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Щёлочноземельные металлы', period: 3, groupNumber: 2, line: 3 },
    { symbol: 'Al', name: 'Алюминий', atomicNumber: 13, description: 'Используется в упаковке и строительстве.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 3, groupNumber: 13, line: 3 },
    { symbol: 'Si', name: 'Кремний', atomicNumber: 14, description: 'Основной компонент полупроводниковых устройств.', group: 'Металлы', state: 'Твердое тело', family: 'Полуметаллы — металлоиды', period: 3, groupNumber: 14, line: 3 },
    { symbol: 'P', name: 'Фосфор', atomicNumber: 15, description: 'Используется в производстве удобрений.', group: 'Неметаллы', state: 'Твердое тело', family: 'Другие неметаллы', period: 3, groupNumber: 15, line: 3 },
    { symbol: 'S', name: 'Сера', atomicNumber: 16, description: 'Используется в производстве серной кислоты.', group: 'Неметаллы', state: 'Твердое тело', family: 'Другие неметаллы', period: 3, groupNumber: 16, line: 3 },
    { symbol: 'Cl', name: 'Хлор', atomicNumber: 17, description: 'Используется в производстве дезинфицирующих средств.', group: 'Неметаллы', state: 'Газ', family: 'Галогены', period: 3, groupNumber: 17, line: 3 },
    { symbol: 'Ar', name: 'Аргон', atomicNumber: 18, description: 'Инертный газ, используется в лампах.', group: 'Неметаллы', state: 'Газ', family: 'Благородные газы', period: 3, groupNumber: 18, line: 3 },
    { symbol: 'K', name: 'Калий', atomicNumber: 19, description: 'Используется в удобрениях.', group: 'Металлы', state: 'Твердое тело', family: 'Щелочные металлы', period: 4, groupNumber: 1, line: 4 },
    { symbol: 'Ca', name: 'Кальций', atomicNumber: 20, description: 'Используется в строительстве и медицине.', group: 'Металлы', state: 'Твердое тело', family: 'Щёлочноземельные металлы', period: 4, groupNumber: 2, line: 4 },
    { symbol: 'Sc', name: 'Скандий', atomicNumber: 21, description: 'Используется в производстве легких сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 3, line: 4 },
    { symbol: 'Ti', name: 'Титан', atomicNumber: 22, description: 'Используется в аэрокосмической промышленности.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 4, line: 4 },
    { symbol: 'V', name: 'Ванадий', atomicNumber: 23, description: 'Используется в производстве сталей.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 5, line: 4 },
    { symbol: 'Cr', name: 'Хром', atomicNumber: 24, description: 'Используется в производстве нержавеющей стали.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 6, line: 4 },
    { symbol: 'Mn', name: 'Марганец', atomicNumber: 25, description: 'Используется в производстве сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 7, line: 4 },
    { symbol: 'Fe', name: 'Железо', atomicNumber: 26, description: 'Основной компонент стали.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 8, line: 4 },
    { symbol: 'Co', name: 'Кобальт', atomicNumber: 27, description: 'Используется в производстве магнитов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 9, line: 4 },
    { symbol: 'Ni', name: 'Никель', atomicNumber: 28, description: 'Используется в производстве нержавеющей стали.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 10, line: 4 },
    { symbol: 'Cu', name: 'Медь', atomicNumber: 29, description: 'Используется в проводах и электронике.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 11, line: 4 },
    { symbol: 'Zn', name: 'Цинк', atomicNumber: 30, description: 'Используется для защиты от коррозии.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 4, groupNumber: 12, line: 4 },
    { symbol: 'Ga', name: 'Галлий', atomicNumber: 31, description: 'Используется в полупроводниках.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 4, groupNumber: 13, line: 4 },
    { symbol: 'Ge', name: 'Германий', atomicNumber: 32, description: 'Используется в полупроводниках.', group: 'Полуметаллы', state: 'Твердое тело', family: 'Полуметаллы — металлоиды', period: 4, groupNumber: 14, line: 4 },
    { symbol: 'As', name: 'Мышьяк', atomicNumber: 33, description: 'Используется в производстве полупроводников.', group: 'Полуметаллы', state: 'Твердое тело', family: 'Полуметаллы — металлоиды', period: 4, groupNumber: 15, line: 4 },
    { symbol: 'Se', name: 'Селен', atomicNumber: 34, description: 'Используется в фотоэлементах.', group: 'Неметаллы', state: 'Твердое тело', family: 'Другие неметаллы', period: 4, groupNumber: 16, line: 4 },
    { symbol: 'Br', name: 'Бром', atomicNumber: 35, description: 'Используется в производстве огнетушителей.', group: 'Неметаллы', state: 'Жидкость', family: 'Галогены', period: 4, groupNumber: 17, line: 4 },
    { symbol: 'Kr', name: 'Криптон', atomicNumber: 36, description: 'Используется в специальных лампах.', group: 'Неметаллы', state: 'Газ', family: 'Благородные газы', period: 4, groupNumber: 18, line: 4 },
    { symbol: 'Rb', name: 'Рубидий', atomicNumber: 37, description: 'Используется в специальных стеклах.', group: 'Металлы', state: 'Твердое тело', family: 'Щелочные металлы', period: 5, groupNumber: 1, line: 5 },
    { symbol: 'Sr', name: 'Стронций', atomicNumber: 38, description: 'Используется в пиротехнике.', group: 'Металлы', state: 'Твердое тело', family: 'Щёлочноземельные металлы', period: 5, groupNumber: 2, line: 5 },
    { symbol: 'Y', name: 'Иттрий', atomicNumber: 39, description: 'Используется в производстве керамики.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 3, line: 5 },
    { symbol: 'Zr', name: 'Цирконий', atomicNumber: 40, description: 'Используется в ядерной энергетике.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 4, line: 5 },
    { symbol: 'Nb', name: 'Ниобий', atomicNumber: 41, description: 'Используется в производстве сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 5, line: 5 },
    { symbol: 'Mo', name: 'Молибден', atomicNumber: 42, description: 'Используется в производстве стали.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 6, line: 5 },    
    { symbol: 'Tc', name: 'Технеций', atomicNumber: 43, description: 'Используется в медицинских радионуклидных источниках.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 7, line: 5 },
    { symbol: 'Ru', name: 'Рутений', atomicNumber: 44, description: 'Используется в производстве электроники и ювелирных изделий.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 8, line: 5 },
    { symbol: 'Rh', name: 'Родий', atomicNumber: 45, description: 'Используется в катализаторах и ювелирных изделиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 9, line: 5 },
    { symbol: 'Pd', name: 'Палладий', atomicNumber: 46, description: 'Используется в катализаторах и ювелирных изделиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 10, line: 5 },
    { symbol: 'Ag', name: 'Серебро', atomicNumber: 47, description: 'Используется в ювелирных изделиях и электронике.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 11, line: 5 },
    { symbol: 'Cd', name: 'Кадмий', atomicNumber: 48, description: 'Используется в аккумуляторах и покрытиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 5, groupNumber: 12, line: 5 },
    { symbol: 'In', name: 'Индий', atomicNumber: 49, description: 'Используется в полупроводниках и сплавах.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 5, groupNumber: 13, line: 5 },
    { symbol: 'Sn', name: 'Олово', atomicNumber: 50, description: 'Используется в производстве сплавов и упаковки.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 5, groupNumber: 14, line: 5 },
    { symbol: 'Sb', name: 'Сурьма', atomicNumber: 51, description: 'Используется в производстве сплавов и полупроводников.', group: 'Полуметаллы', state: 'Твердое тело', family: 'Полуметаллы — металлоиды', period: 5, groupNumber: 15, line: 5 },
    { symbol: 'Te', name: 'Теллур', atomicNumber: 52, description: 'Используется в производстве сплавов и полупроводников.', group: 'Полуметаллы', state: 'Твердое тело', family: 'Другие неметаллы', period: 5, groupNumber: 16, line: 5 },
    { symbol: 'I', name: 'Йод', atomicNumber: 53, description: 'Используется в медицине и производстве дезинфицирующих средств.', group: 'Неметаллы', state: 'Твердое тело', family: 'Галогены', period: 5, groupNumber: 17, line: 5 },
    { symbol: 'Xe', name: 'Ксенон', atomicNumber: 54, description: 'Используется в специальных лампах и анестезии.', group: 'Неметаллы', state: 'Газ', family: 'Благородные газы', period: 5, groupNumber: 18, line: 5 },
    { symbol: 'Cs', name: 'Цезий', atomicNumber: 55, description: 'Используется в атомных часах и фотоэлементах.', group: 'Металлы', state: 'Твердое тело', family: 'Щелочные металлы', period: 6, groupNumber: 1, line: 6 },
    { symbol: 'Ba', name: 'Барий', atomicNumber: 56, description: 'Используется в производстве фейерверков и медицинских контрастных веществах.', group: 'Металлы', state: 'Твердое тело', family: 'Щёлочноземельные металлы', period: 6, groupNumber: 2, line: 6 },
    { symbol: 'Hf', name: 'Гафний', atomicNumber: 72, description: 'Используется в ядерной энергетике и производстве сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 4, line: 6 },
    { symbol: 'Ta', name: 'Тантал', atomicNumber: 73, description: 'Используется в производстве электроники и медицинских имплантов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 5, line: 6 },
    { symbol: 'W', name: 'Вольфрам', atomicNumber: 74, description: 'Используется в производстве ламп и инструментов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 6, line: 6 },
    { symbol: 'Re', name: 'Рений', atomicNumber: 75, description: 'Используется в производстве высокотемпературных сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 7, line: 6 },
    { symbol: 'Os', name: 'Осмий', atomicNumber: 76, description: 'Используется в производстве специальных сплавов и ювелирных изделий.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 8, line: 6 },
    { symbol: 'Ir', name: 'Иридий', atomicNumber: 77, description: 'Используется в производстве ювелирных изделий и катализаторов.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 9, line: 6 },
    { symbol: 'Pt', name: 'Платина', atomicNumber: 78, description: 'Используется в ювелирных изделиях и катализаторах.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 10, line: 6 },
    { symbol: 'Au', name: 'Золото', atomicNumber: 79, description: 'Используется в ювелирных изделиях и электронике.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 6, groupNumber: 11, line: 6 },
    { symbol: 'Hg', name: 'Ртуть', atomicNumber: 80, description: 'Используется в термометрах и электрических переключателях.', group: 'Металлы', state: 'Жидкость', family: 'Переходные металлы', period: 6, groupNumber: 12, line: 6 },
    { symbol: 'Tl', name: 'Таллий', atomicNumber: 81, description: 'Используется в производстве полупроводников и стекол.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 6, groupNumber: 13, line: 6 },
    { symbol: 'Pb', name: 'Свинец', atomicNumber: 82, description: 'Используется в аккумуляторах и защитных покрытиях.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 6, groupNumber: 14, line: 6 },
    { symbol: 'Bi', name: 'Висмут', atomicNumber: 83, description: 'Используется в сплавах и медицинских препаратах.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 6, groupNumber: 15, line: 6 },
    { symbol: 'Po', name: 'Полиний', atomicNumber: 84, description: 'Используется в радиационных источниках и исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Металлы', period: 6, groupNumber: 16, line: 6 },
    { symbol: 'At', name: 'Астат', atomicNumber: 85, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Неметаллы', state: 'Твердое тело', family: 'Галогены', period: 6, groupNumber: 17, line: 6 },
    { symbol: 'Rn', name: 'Радон', atomicNumber: 86, description: 'Используется в медицине и научных исследованиях, инертный газ.', group: 'Неметаллы', state: 'Газ', family: 'Благородные газы', period: 6, groupNumber: 18, line: 6 },
    { symbol: 'Fr', name: 'Франций', atomicNumber: 87, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Металлы', state: 'Твердое тело', family: 'Щелочные металлы', period: 7, groupNumber: 1, line: 7 },
    { symbol: 'Ra', name: 'Радий', atomicNumber: 88, description: 'Используется в медицине и радиационных источниках.', group: 'Металлы', state: 'Твердое тело', family: 'Щёлочноземельные металлы', period: 7, groupNumber: 2, line: 7 },
    { symbol: 'Rf', name: 'Рutherfordium', atomicNumber: 104, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 4, line: 7 },
    { symbol: 'Db', name: 'Дубний', atomicNumber: 105, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 5, line: 7 },
    { symbol: 'Sg', name: 'Сиборгий', atomicNumber: 106, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 6, line: 7 },
    { symbol: 'Bh', name: 'Борий', atomicNumber: 107, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 7, line: 7 },
    { symbol: 'Hs', name: 'Хассий', atomicNumber: 108, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 8, line: 7 },
    { symbol: 'Mt', name: 'Мейтнерий', atomicNumber: 109, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 9, line: 7 },
    { symbol: 'Ds', name: 'Дубний', atomicNumber: 110, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 10, line: 7 },
    { symbol: 'Rg', name: 'Рентгений', atomicNumber: 111, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Переходные металлы', period: 7, groupNumber: 11, line: 7 },
    { symbol: 'Cn', name: 'Коперниций', atomicNumber: 112, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 7, groupNumber: 12, line: 7 },
    { symbol: 'Nh', name: 'Нихоний', atomicNumber: 113, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 7, groupNumber: 13, line: 7 },
    { symbol: 'Fl', name: 'Флеровий', atomicNumber: 114, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 7, groupNumber: 14, line: 7 },
    { symbol: 'Mc', name: 'Московий', atomicNumber: 115, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 7, groupNumber: 15, line: 7 },
    { symbol: 'Lv', name: 'Ливерморий', atomicNumber: 116, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Постпереходные металлы', period: 7, groupNumber: 16, line: 7 },
    { symbol: 'Ts', name: 'Теннессин', atomicNumber: 117, description: 'Синтетический элемент, используется в научных исследованиях.', group: 'Неметаллы', state: 'Твердое тело', family: 'Галогены', period: 7, groupNumber: 17, line: 7 },
    { symbol: 'Og', name: 'Оганесон', atomicNumber: 118, description: 'Синтетический элемент, используется в научных исследованиях, инертный газ.', group: 'Неметаллы', state: 'Газ', family: 'Благородные газы', period: 7, groupNumber: 18, line: 7 },
    { symbol: 'La', name: 'Лантан', atomicNumber: 57, description: 'Используется в производстве стекол и керамики.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 3, line: 8 },
    { symbol: 'Ce', name: 'Церий', atomicNumber: 58, description: 'Используется в производстве полировочных порошков и катализаторов.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 4, line: 8 },
    { symbol: 'Pr', name: 'Празеодим', atomicNumber: 59, description: 'Используется в производстве магнитов и стекол.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 5, line: 8 },
    { symbol: 'Nd', name: 'Неодим', atomicNumber: 60, description: 'Используется в производстве сильных магнитов.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 6, line: 8 },
    { symbol: 'Pm', name: 'Прометий', atomicNumber: 61, description: 'Используется в радионуклидных источниках.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 7, line: 8 },
    { symbol: 'Sm', name: 'Самарий', atomicNumber: 62, description: 'Используется в производстве магнитов и ядерных реакторах.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 8, line: 8 },
    { symbol: 'Eu', name: 'Европий', atomicNumber: 63, description: 'Используется в производстве флуоресцентных ламп.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 9, line: 8 },
    { symbol: 'Gd', name: 'Гадолиний', atomicNumber: 64, description: 'Используется в ядерной медицине и магнитных резонансах.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 10, line: 8 },
    { symbol: 'Tb', name: 'Тербий', atomicNumber: 65, description: 'Используется в производстве магнитов и флуоресцентных материалов.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 11, line: 8 },
    { symbol: 'Dy', name: 'Диспрозий', atomicNumber: 66, description: 'Используется в производстве магнитов и лазеров.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 12, line: 8 },
    { symbol: 'Ho', name: 'Гольмий', atomicNumber: 67, description: 'Используется в производстве лазеров и магнитов.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 13, line: 8 },
    { symbol: 'Er', name: 'Эрбий', atomicNumber: 68, description: 'Используется в производстве оптоволоконных лазеров.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 14, line: 8 },
    { symbol: 'Tm', name: 'Тулий', atomicNumber: 69, description: 'Используется в производстве лазеров и медицинских приборов.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 15, line: 8 },
    { symbol: 'Yb', name: 'Иттербий', atomicNumber: 70, description: 'Используется в производстве лазеров и оптоволоконных технологий.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 16, line: 8 },
    { symbol: 'Lu', name: 'Лютеций', atomicNumber: 71, description: 'Используется в производстве специальных сплавов и катализаторов.', group: 'Металлы', state: 'Твердое тело', family: 'Редкоземельные металлы', period: 6, groupNumber: 17, line: 8 },
    { symbol: 'Ac', name: 'Актиний', atomicNumber: 89, description: 'Используется в ядерной энергетике и научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 3, line: 9 },
    { symbol: 'Th', name: 'Торий', atomicNumber: 90, description: 'Используется в ядерной энергетике и производстве сплавов.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 4, line: 9 },
    { symbol: 'Pa', name: 'Протактиний', atomicNumber: 91, description: 'Используется в ядерной энергетике и научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 5, line: 9 },
    { symbol: 'U', name: 'Уран', atomicNumber: 92, description: 'Используется в ядерной энергетике и производстве оружия.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 6, line: 9 },
    { symbol: 'Np', name: 'Нептуний', atomicNumber: 93, description: 'Используется в ядерной энергетике и научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 7, line: 9 },
    { symbol: 'Pu', name: 'Плутоний', atomicNumber: 94, description: 'Используется в ядерной энергетике и производстве оружия.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 8, line: 9 },
    { symbol: 'Am', name: 'Америций', atomicNumber: 95, description: 'Используется в радиационных источниках и научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 9, line: 9 },
    { symbol: 'Cm', name: 'Кюрий', atomicNumber: 96, description: 'Используется в ядерной энергетике и научных исследованиях.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 10, line: 9 },
    { symbol: 'Bk', name: 'Берклий', atomicNumber: 97, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 11, line: 9 },
    { symbol: 'Cf', name: 'Калифорний', atomicNumber: 98, description: 'Используется в научных исследованиях и радиационных источниках.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 12, line: 9 },
    { symbol: 'Es', name: 'Эйнштейний', atomicNumber: 99, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 13, line: 9 },
    { symbol: 'Fm', name: 'Фермий', atomicNumber: 100, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 14, line: 9 },
    { symbol: 'Md', name: 'Менделевий', atomicNumber: 101, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 15, line: 9 },
    { symbol: 'No', name: 'Нобелий', atomicNumber: 102, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 16, line: 9 },
    { symbol: 'Lr', name: 'Лоуренсий', atomicNumber: 103, description: 'Используется в научных исследованиях, радиоактивный элемент.', group: 'Металлы', state: 'Твердое тело', family: 'Актиниевые металлы', period: 7, groupNumber: 17, line: 9 }
];

const table = document.getElementById('periodic-table');

function getElementColor(state) {
    switch (state) {
        case "Газ":
            return "#8b8b8b"; // Светло-голубой для газов
        case "Жидкость":
            return "#f0c2af"; // Светло-красный для жидкостей
        case "Твердое тело":
            return "#b2ac88"; // Светло-зеленый для твердых тел
        default:
            return "#ffffff"; // Белый по умолчанию
    }
}

// Создание пустых ячеек для каждой строки
const maxGroupNumber = 18; // Максимальное количество групп
const maxPeriodNumber = Math.max(...elements.map(e => e.line)); // Максимальное количество периодов

for (let i = 0; i < maxPeriodNumber; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    
    for (let j = 0; j < maxGroupNumber; j++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'empty'; // Для пустых ячеек
        rowDiv.appendChild(emptyDiv);
    }
    
    table.appendChild(rowDiv);
}


// Позиционирование элементов по их группе и периоду
elements.forEach(element => {
    const div = document.createElement('div');
    div.className = 'element';
    div.style.backgroundColor = getElementColor(element.state);
    
    div.innerHTML = `<strong>${element.symbol}</strong><br>${element.atomicNumber}`;
    
    div.onclick = () => alert(`Латинское название: ${element.symbol} \nНомер элемента: ${element.atomicNumber} 
        \nЭлемент: ${element.name} \nИнформация: ${element.description} \nГруппа: ${element.group} \nСостояние: ${element.state}
        \nСемейство химического элемента: ${element.family} \nНомер периода: ${element.period} \nНомер группы: ${element.groupNumber}`);
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    
    tooltip.innerHTML = `
        <strong>${element.atomicNumber} ${element.name} (${element.symbol})</strong><br>
        Состояние:${element.state}<br>
    `;
    
    div.appendChild(tooltip);
    
    div.onmouseover = () => {
        tooltip.style.display = "block";
    };
    
    div.onmouseout = () => {
        tooltip.style.display = "none";
    };
    
    // Позиционирование элемента по его группе и периоду
    const rowIndex = element.line - 1; // Индекс строки (период)
    const colIndex = element.groupNumber - 1; // Индекс столбца (группа)
    
    const rowDiv = table.children[rowIndex];
    
    rowDiv.children[colIndex].replaceWith(div); // Заменяем пустую ячейку на элемент
});

// Добавление CSS для всплывающей подсказки
const style = document.createElement('style');
style.innerHTML = `
.element {
    position: relative;
}

.empty {
    width: 60px; /* Фиксированная ширина для пустых ячеек */
    height: 60px; /* Фиксированная высота для пустых ячеек */
    margin: 6px; /* Отступы между пустыми ячейками */
}

.tooltip {
    display: none; /* Скрыть по умолчанию */
    position: absolute; /* Позиционирование относительно родителя */
    background-color: #4e543e; /* Цвет фона */
    color: #f0ead6; /* Цвет текста */
    padding: 5px; /* Отступы */
    border-radius: 5px; /* Скругление углов */
    z-index: 10; /* Убедитесь, что подсказка выше других элементов */
}
`;
document.head.appendChild(style);
