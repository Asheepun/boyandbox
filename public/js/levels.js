/*

@: player

B: box

P: point

#: grass
¤: planks 
{: blue door

O: exit
0: exit (point target)

b: blue (jumper)
t: blue (talker)
d: doctor
=: sick blue
T: trans blue
D: death counter

£: lamp
µ: bookshelf

1: bouncer
2: jumper
3: spawner
4: giant
5: smallJumper

*/

const levels = [
	//1
	{
		template: [
			"...............................O",
			"...............................O",
			"...........................P...0",
			"...............................O",
			"..............................##",
			".........................#######",
			".........................#######",
			"................B........#######",
			".........................#######",
			"........................########",
			"...................#############",
			"...............#################",
			".@.............#################",
			"##.............#################",
			"###..........###################",
			"###......#######################",
			"####...#########################",
			"################################",
		],
		background: "sky",
		music: "the-beginning",
	},
	//2
	{
		template: [
			"...............................O",
			"...............................O",
			"..............P................O",
			"@..............................0",
			"...............................O",
			"#...........#####.............##",
			"###.......#########....B....####",
			"###.......#########.........####",
			"##........#########.........####",
			"##.........########..........###",
			"##..........#######..........###",
			"###.........#####.............##",
			"###..........##...............##",
			"###...........................##",
			"####..........................##",
			"####.........................###",
			"######......###..............###",
			"#################...........####",
		],
		background: "sky",
		music: "the-beginning",
	},
	//3
	{
		template: [
			"..............................##",
			"...............................#",
			"...................P...........#",
			"@..............................#",
			"##............................##",
			"####.............#####......####",
			"####....B......#################",
			"####.........###################",
			"###..........##########....#####",
			"###.............#####........###",
			"##.............................O",
			"##.............................O",
			"##.............................0",
			"#..............................O",
			"#..............................O",
			"#........##...................##",
			"##......#####................###",
			"##......#####................###",
		],
		background: "sky",
		music: "the-beginning",
	},
	//4
	{
		template: [
			"###............................O",
			"##.............................O",
			"##.............................0",
			"##.............................O",
			"##............................##",
			"##...........................###",
			"#............................###",
			"#............................###",
			"#.............................##",
			"#.............P...............##",
			"..............................##",
			"..............................##",
			"...............................#",
			"...............................#",
			"@.....B........................#",
			"##.............................#",
			"##.............................#",
			"###............................#",
		],
		background: "sky",
		music: "the-beginning",
	},
	//5
	{
		template: [
			"............................####",
			"..............................##",
			"..............................{O",
			"@.............................{0",
			"#.............................{O",
			"##............................{O",
			"##.........................#####",
			"#.........................######",
			"#.......................########",
			"........................########",
			"........................########",
			".................P......########",
			"........................########",
			".......................#########",
			".......................#########",
			"..............B.....b..#########",
			"...................#############",
			".................###############",
		],
		background: "sky",
		music: "the-beginning",
		texts: [
			[
				["I can't jump", "this High!"],
				["Will you help me", "get back to my", "village?"]
			],
			[
				["Test"]
			]
		]
	},
	//6
	{
		template: [
			"###.........######.........#####",
			"##...........####............###",
			".............####............###",
			".............####.............##",
			".............###..............##",
			"@............###..............{O",
			"###...........##..............{0",
			"#####.........##..............{O",
			"#####.........##..............{O",
			"#####.........##.............###",
			"####........................####",
			"####.....P..................####",
			"####...............B........####",
			"###.............##...........###",
			"###..........b..##............##",
			"##...........#####............##",
			"##.........#######.............#",
			"##......##########.............#",
		],
		background: "sky",
		music: "the-beginning",
		texts: [
			[
				["Thank you for", "helping me", "this far."],
				["I can't cross ", "this gap!"],
			],
		],
	},
	//7
	{
		template: [
			"#.........................¤¤¤¤¤¤",
			"#...........................¤¤¤¤",
			"#............................¤¤¤",
			"#.............................{O",
			"#.............................{0",
			"..............................{O",
			"..............................{O",
			"............................###¤",
			"............P..............####¤",
			"@..........................#####",
			"##.........................#####",
			"##..........................####",
			"##.......B........##.........###",
			"##................##.........###",
			"##b...##.........###..........##",
			"###...##.........####.........##",
			"########.........####..........#",
			"#########.......#####..........#",
		],
		background: "sky",
		music: "the-beginning",
		texts: [
			[
				["We're almost", "there!"],
				["Just a little", "longer!"]
			],
		]
	},
	//8
	{
		template: [
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤....£..................£....¤¤",
			"...............................O",
			"..................µ............0",
			"...............................O",
			"@..t..................t........O",
			"¤¤¤¤......¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤.....¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤.......¤¤¤¤...¤¤¤.....¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤......¤¤.....£.......¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤....................¤¤¤¤",
			"¤¤..¤¤¤¤¤¤...............P...¤¤¤¤",
			"¤¤....¤¤¤¤¤¤.................¤¤¤¤",
			"¤¤¤....¤¤¤¤¤¤................¤¤¤¤",
			"¤¤¤.....¤¤¤¤¤¤¤¤¤.......t...¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤B",
		],
		background: "planks",
		music: "east-village",
		texts: [
			[
				["Thank you for", "helping me!"],
				["I'm very gratefull."],
			],
			[
				["Haven't seen you", "here before."],
				["It's nice seeing", "some new faces."],
			],
			[
				["Welcome to", "Blue's Town!"],
				["It's the furtest", "west village in", "the world!"],
				//["It's the largest", "village this end", "of the roses."],
			]
		]
	},
	//9
	{
		template: [
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤.............¤¤¤¤....¤¤¤¤...¤¤",
			"........................¤¤.....O",
			"........................£......0",
			"...............................O",
			"@................t.............O",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤......¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤.....¤¤¤¤¤",
			"¤¤¤¤¤.........¤¤¤¤¤........¤¤¤¤¤¤",
			"¤¤¤............¤¤.........¤¤¤¤¤¤¤",
			"¤¤¤.............£........¤¤¤¤¤¤¤¤",
			"¤¤........P............¤¤¤¤¤¤¤¤¤¤",
			"¤¤.............µ......¤¤¤¤¤..¤¤¤¤",
			"¤¤...................¤¤¤¤....¤¤¤¤",
			"¤¤¤..d=............¤¤¤¤¤...¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤B",
		],
		background: "planks",
		music: "east-village",
		texts: [
			[
				["The others have", "been feeling", "sick lately."],
				["We don't know", "what could have", "caused it."],
			],
		]
	},
	//10
	{
		template: [
			"¤¤¤¤¤¤....................######",
			"¤¤¤¤¤¤......................####",
			"¤¤¤.........................####",
			".£...........................###",
			".............................###",
			"..............................##",
			"@..t...........P..............##",
			"¤¤¤¤¤........................###",
			"¤¤¤¤¤........................###",
			"¤¤##......B...................##",
			"¤¤##...........................O",
			"¤¤##...........................0",
			"¤###...........................O",
			"¤####..........................O",
			"¤####.........................##",
			"¤####........................###",
			"#####........................###",
			"######......................####",
		],
		background: "sky",
		texts: [
			[
				["Be carefull."],
			]
		]
	},
	//11
	{
		template: [
			"####.....................#######",
			"###.........................####",
			"###...........................##",
			"###............................O",
			"###............................0",
			"##.............................O",
			"##.............................O",
			"##......................########",
			"#....................###########",
			"#....................###########",
			"......................##########",
			"........................##...###",
			"..............................##",
			"@................##........P..##",
			"###..............##...........##",
			"####....B.......#####...T....###",
			"####...........#################",
			"####.........###################",
		],
		background: "sky",
		music: "enemies",
		texts: [
			[
				["h"],
			]
		]
	},
	//12
	{
		template: [
			"#####.......#####################B",
			"###...........###################",
			"##............###################",
			"..............###################",
			"...............###########....###",
			"...............######..........O",
			"@..............#####...........0",
			"##..............####..P........O",
			"###.............####....2......O",
			"###...............###........###",
			"###...............######...#####",
			"##................######..######",
			"##..............2..##.....######",
			"##............##..........######",
			"#............####......#########",
			"#............###################",
			"#............###################",
			"#.............##################",
			"#.............##################",
		],
		background: "sky",
		music: "enemies",
	},
	//13
	{
		template: [
			"#################################B",
			"#################################.",
			"#################################",
			"#################################",
			"#################################",
			"...##############################",
			"......#######################..O",
			"........##....##############...0",
			"@.........5....#############...O",
			"#####..........#############.###",
			"#############.....5.########.###",
			"#############.........######.###",
			"##############...............###",
			"####################....########",
			"####################....########",
			"####################....########",
			"####################.....#######",
			"####################.....#######",
		],
		background: "sky",
		music: "enemies",
	},
	//14
	{
		template: [
			"###..###########################",
			"##.....#########################",
			"##.........#####################",
			"#...........##........###..#####",
			"#.......##...........1.##...####",
			"#......####.................####",
			".......##################2..####",
			".......##################..#####",
			"@......####....###.........#####",
			"#.....####.P1..##........#######",
			"#..B..#####........##..#########",
			"#.....###############..#########",
			"#.....###############..#########",
			"#.....####...#######....#####..O",
			"#....####..P..##...............0",
			"#....####..........1...........O",
			"#....#####...####..............O",
			"#....###########################",
		],
		background: "sky",
		music: "enemies",
	},
	//15
	{
		template: [
			"######......................####",
			"####.........................###",
			"###..........................###",
			"###.............P............###",
			"###............2.............###",
			"##............................##",
			"##.............##.............##",
			"##.............##.............##",
			"##.............##.............##",
			"##............................##",
			"#..............................#",
			"#..............................O",
			"#..............................0",
			"...............................O",
			"...............................O",
			"......B......................###",
			"@...........................####",
			"###.........................####",
		],
		background: "sky",
		music: "enemies",
	},
	//16
	{
		template: [
			"################################",
			"################################",
			"################################",
			"################################",
			"#########.....######....########",
			"#####..........####.........####",
			"###...........................##",
			"##............................##",
			"##............................##",
			"#.............................##",
			"#..............................#",
			"...............................#",
			".....................2P........#",
			".............................3.0",
			"@..........3P.......####.......O",
			"###................######....####",
			"####.......##......######....####B",
			"####......###......######....####",
		],
		background: "sky",
		music: "enemies",
	},
	//17
	{
		template: [
			"##############.................O",
			"#####...######...P.............0",
			"####......###4.................O",
			"###........##..................O",
			"###........##................###",
			"###.......................######",
			"##......................########",
			"##......................########",
			"##.........................#####",
			"##...........................###",
			"#.............................##",
			"#.............................##",
			"#..............................#",
			".............................3P.",
			"@................3..............",
			"###....B......................##",
			"####........###########......###",
			"####......#############......###",
		],
		background: "sky",
		music: "enemies",
	},
	//20
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.",
			"%%%.,,,,,,,...........,,,,,,,%%%%B",
			"....,,,,,,,...........,,,,,,,,.O",
			".....,,,,,,...........,,,,,,,,.0",
			".....,,,,,,...........,,,,,,,..O",
			"@....,,,,,,............,,,,,,..O",
			"%%%%.,,,,,.............,,,,,,%%%",
			"%%%%.,,,,,............,,,,,,,%%%",
			"%%%%.,,,,,............,,,,,,,%%%",
			"%%%%%,,,,,...........,,,,,,,,,%%",
			"%%%%%,,,,,...........,,,,,,,,,%%",
			"%%%%%,,,,,...........,,,,,,,,,%%",
			"%%%%%,,,,,,.......P..,,,,,,,,,%%",
			"%%%%%,,,,,,..........,,,,,,,,.%%",
			"%%%%%,,,,,%%%%%.......,,,,,,,..%",
			"%%%%%,,,,,%%%%%%%%%%%.,,,,,,,..%",
			"%%%%%,,,,,%%%%%%%%%%%.,,,,,,,..%",
		],
		background: "planks",
	},
	//21
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%......,,,,,,,,.%%%%%%%%%%%%%%",
			".........,,,,,,,,.%%%%%%%%%%%%%%",
			".........,,,,,,,,,%%%%%%%%%%%%%%",
			".........,,,,,,,,,%%%%%%%%%%%%%%",
			"@...%%%%.,,,,,,,,,%%%%%%%%%%%%%%",
			"%B%%%%%%,,,,,,,,,,,%%%%%%..%%%%%",
			"%.%%%%%%,,,,,,,,,,,%%%%%....%%%%",
			"%.%%%%%%,,,,,,,,,,,.......t.%%%%",
			"%.%%%%%%,,,,,,,,,,,....%%%%%%%%%",
			"%.%%%%%,,,,,,,,,,,,%%..%%%%%%%%%",
			"%..%%%%,,,,,,,,,,,.%%..%%%.....O",
			"%...%%%,,,,,,,,,,,...........3.0",
			"%1P.%%.,,,,,,,,,,...P..........O",
			"%......,,,,,,,,,,...........%%%%",
			"%%%%%%%,,,,,,,,,,.%%%%%%%%%%%%%%",
			"%%%%%%%,,,,,,,,,,.%%%%%%%%%%%%%%",
		],
		background: "planks",
		texts: [
			[
				["Sshhh!"],
				[
					"I've been hiding",
					"here for weeks!",
				]
			],
		],
	},
	//22
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.B",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%...........O",
			"%%%%%%%%%%%%%%%%%%.............0",
			"%%%%%%%%%%%%%%%%...............O",
			"%%%...%%%%%%%%%............%%%%%",
			"%%%.P.......%%%........%%%%%%%%%",
			"%%%.......6............%%%%%%%%%",
			"%%%%%%%%%..................%%%%%",
			"%%%%%%%%%%%%%%%%%%%%.......%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%...%%%",
			"......%%%%%%%%%%%%%%%%%%%%...%%%",
			"...............%%%%%%........%%%",
			"@..........................%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
		],
		background: "planks",
	},
	/*
	//18
	{
		template: [
			"...........................#####",
			".............................###",
			"..............................##",
			"@..............................O",
			"##.............................0",
			"###............................O",
			"###....B..................3....O",
			"###..........................###",
			"###.....................########",
			"##..................############",
			"##..................############",
			"##...................###########",
			"##.....................##.....##",
			"##.................P...........#",
			"#.....................##.......#",
			"#....................#####.t.###",
			"#....................###########",
			"#....................###########",
		],
		background: "sky",
		texts: [
			[
				["Who are you?!"],
			]
		]
	},
	*/
	
	//last level
	{
		template: [
			"...........................######P",
			".............................####B",
			".............................####",
			"@.............................###",
			"##............................###",
			"###...........................###",
			"###............................##",
			"##..............t..............##",
			"..............####.............##",
			".............######............##",
			".............######..........t.##",
			"..............####...........####",
			".............................####",
			"..............................###",
			"..............................###",
			".................D...........t###",
			"...............####......t...####",
			"..............######....##...####",
		],
		background: "sky",
		texts: [
			[
				[
					"Thank you for playing",
					"the demo of BoyandBox!",
					"",
					"The rest of the game is",
					"currently being developed.",
					"Follow the game's progress",
					"on Twitter @asheepun.",
				]
			],
			[
				[
					"Work in",
					"progress",
					"...",
				]
			],
			[
				[
					"In",
					"developement."
				]
			],
			[
				[
					"Credits",
					"Programming, music & art",
					"Gustav Almstrom",
					"",
					"Sound Effects",
					"Fridolf Tofft Glans",
					"& Gustav Almstrom"
				]
			],
		]
	}
];

export default levels;
