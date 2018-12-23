const levels = [
	//1
	{
		template: [
			"...............................O",
			"...............................O",
			"...........................P...0",
			"...............................O",
			"..............................##",
			".@.......................#######",
			".........................#######",
			"................B........#######",
			".........................#######",
			"........................########",
			"...................#############",
			"...............#################",
			"...............#################",
			"##.............#################",
			"###..........###################",
			"###......#######################",
			"####...#########################",
			"################################",
		],
		background: "sky",
		time: "day",
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
		time: "day",
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
		time: "day",
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
		time: "day",
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
		time: "day",
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
		time: "day",
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
		time: "day",
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
		time: "night",
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
				["It's the largest", "village this end", "of the roses."],
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
		texts: [
			[
				["h"],
			]
		]
	},
	//12
	{
		template: [
			"#####.......####################",
			"###...........##################",
			"##............##################",
			"..............##################",
			"...............###########....##",
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
			"B",
		],
		background: "sky",
	},
	//13
	{
		template: [
			"###..###########################",
			"##.....#########################",
			"##.........####...##############",
			"#...........##........###..#####",
			"#.......##...........1.##...####",
			".......####.................####",
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
	},
	//14
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
	},
	//15
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
	},
	//16
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
	},
	//17
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
			".............................t###",
			".............................####",
			".............................####",
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
					"on Twitter @asheepun."
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
			]
		]
	}
];

export default levels;
