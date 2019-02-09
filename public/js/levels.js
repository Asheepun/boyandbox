/*

@: player

B: box

P: point

#: grass
¤: planks 
%: infected planks
&: infected grass

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

,: vines

1: bouncer
2: jumper
3: spawner
4: giant
5: smallJumper
6: hunter
7: redBird

*/

const levels = [
	
	//grass

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

	//Blues Town

	//8
	{
		template: [
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤....£..................£....¤¤",
			"...............................O",
			"..................µ............0B",
			"...............................O",
			"@..t..................t........O",
			"¤¤¤¤......¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤.....¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤.......¤¤¤¤...¤¤¤.....¤¤¤¤",
			"¤¤¤¤¤¤¤¤......¤¤.....£.......¤¤¤",
			"¤¤¤¤¤¤¤¤¤....................¤¤¤",
			"¤¤..¤¤¤¤¤¤...............P...¤¤¤",
			"¤¤....¤¤¤¤¤¤.................¤¤¤",
			"¤¤¤....¤¤¤¤¤¤................¤¤¤",
			"¤¤¤.....¤¤¤¤¤¤¤¤¤.......t...¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
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
			"...............................OB",
			"@................t.............O",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤......¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤.....¤¤¤¤",
			"¤¤¤¤¤.........¤¤¤¤¤........¤¤¤¤¤",
			"¤¤¤............¤¤.........¤¤¤¤¤¤",
			"¤¤¤.............£........¤¤¤¤¤¤¤",
			"¤¤........P............¤¤¤¤¤¤¤¤¤",
			"¤¤.............µ......¤¤¤¤¤..¤¤¤",
			"¤¤...................¤¤¤¤....¤¤¤",
			"¤¤¤..d=............¤¤¤¤¤...¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
			"¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤",
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

	//red grass

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
			"#####.......####################",
			"###...........##################",
			"##............##################",
			"..............##################",
			"...............###########....##",
			"...............######..........O",
			"@..............#####...........0",
			"##..............####..P........OB",
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
			"################################",
			"################################",
			"################################",
			"################################",
			"################################",
			"...#############################",
			"......#######################..O",
			"........##....##############...0",
			"@.........5....#############...OB",
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
			"@..........3P.......####.......OB",
			"###................######....###",
			"####.......##......######....###",
			"####......###......######....###",
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
			".............................3P#",
			"@................3.............#",
			"###....B......................##",
			"####........###########......###",
			"####......#############......###",
		],
		background: "sky",
		music: "enemies",
	},
	//18
	{
		template: [
			"...........................%%%%%",
			".............................%%%",
			"..............................%%",
			"@..............................O",
			"##.............................0",
			"###..........................3.O",
			"###....B.......................O",
			"###..........................%%%",
			"###.....................#####%%%",
			"##..................##########%%",
			"##..................###########%",
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
				[
					"I wouldn't go there",
					"if I were you.",
				],
				[
					"That place has been",
					"overrun for weeks."
				],
			]
		]
	},

	//infected town

	//19
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%.........................,,,%%",
			"............................,,,O",
			"..................µ.........,,,0B",
			".............................,,O",
			"@............................,.O",
			"%%%%......%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%.....%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%.......%%%%...........%%%%",
			"%%%%%%%%......%%.............%%%",
			"%%%%%%%%%....................%%%",
			"%%..%%%%%%...............P...%%%",
			"%%....%%%%%%.................%%%",
			"%%%....%%%%%%................%%%",
			"%%%.....%%%%%%%%%...........%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
		],
		background: "planks",
		shadow: true,
	},
	//20
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%.,,,,,,,...........,,,,,,,%%%",
			"....,,,,,,,...........,,,,,,,,.O",
			".....,,,,,,...........,,,,,,,,.0B",
			".....,,,,,,...........,,,,,,,..O",
			"@....,,,,,,............,,,,,,..O",
			"%%%%.,,,,,.............,,,,,,%%%",
			"%%%%.,,,,,............,,,,,,,%%%",
			"%%%%.,,,,,............,,,,,,,%%%",
			"%%%%%,,,,,...........,,,,,,,,,%%",
			"%%%%%,,,,,...........,,,,,,,,,%%",
			"%%%%%,,,,,..P........,,,,,,,,,%%",
			"%%%%%,,,,,,..........,,,,,,,,,%%",
			"%%%%%,,,,,,..........,,,,,,,,.%%",
			"%%%%%,,,,,%%%%%.......,,,,,,,..%",
			"%%%%%,,,,,%%%%%%%%%%%.,,,,,,,..%",
			"%%%%%,,,,,%%%%%%%%%%%.,,,,,,,..%",
		],
		background: "planks",
		shadow: true,
	},
	//21
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%......%%%%%%%%%%%%%.......%%%",
			"...........%%%%%%%%%%..........O",
			"...........,%%%,,%%,,..........0B",
			"...........,%%,,,%%,,1.........O",
			"@..........,,,,P,,,,,..........O",
			"%%%......%%,,,,,,,,,,%%......%%%",
			"%%%.....%%%,,,,,,,,,,%%%.....%%%",
			"%%%.....%%%%%%%%%%%%%%%%.....%%%",
			"%%.......%%%%%%%%%%%%%%.......%%",
			"%%........%%%......%%%%.......%%",
			"%%........%%........%%........%%",
			"%%........%%........%%........%%",
			"%%%.......%%........%%........%%",
			"%%%.......%%........%%.......%%%",
			"%%%.......%%%......%%%.......%%%",
			"%%%......%%%%......%%%%.....%%%%",
		],
		background: "planks",
		shadow: true,
	},
	//22
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%..,,,,,,,,,%%%%%%%%%%%%%%",
			"%%%......,,,,,,,,,%%%%%%%%%%%%%%",
			".........,,,,,,,,,%%%%%%%%%%%%%%",
			".........,,,,,,,,,%%%%%%%%%%%%%%",
			"@...%%%%.,,,,,,,,,%%%%%%%%%%%%%%",
			"%.%%%%%%,,,,,,,,,,,%%%%%%%%%%%%%",
			"%.%%%%%%,,,,,,,,,,,%%%%%%%%%%%%%",
			"%.%%%%%%,,,,,,,,,,,..%%%%%%%%%%%",
			"%.%%%%%%,,,,,,,,,,,....%%%%%%%%%",
			"%..%%%%,,,,,,,,,,,,%%..%%%%%%%%%",
			"%..%%%%,,,,,,,,,,,.%%..%%%.....O",
			"%...%%%,,,,,,,,,,,...........3.0",
			"%1P.%%.,,,,,,,,,,...P..........OB",
			"%......,,,,,,,,,,............%%%",
			"%%%%%%%,,,,,,,,,,.%%%%%%%%%%%%%%",
			"%%%%%%%,,,,,,,,,,.%%%%%%%%%%%%%%",
		],
		background: "planks",
		shadow: true,
	},
	//23
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%...........O",
			"%%%%%%%%%%%%%%%%%%.............0B",
			"%%%%%%%%%%%%%%%%...............O",
			"%%%...%%%%%%%%%............%%%%%",
			"%%%.P.......%%%........%%%%%%%%%",
			"%%%...............6....%%%%%%%%%",
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
		shadow: true,
	},
	//24
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%.......%%%%%%%%%%%%%%%%%%%%%%",
			"..........%%%%%%%%%%%%%%.....%%%",
			"..........................P6.%%%",
			"@............................%%%",
			"%%%%%....%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%....%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%,,,,%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%,,,,,%%%%%%............%%%%",
			"%%%%,,,,,,%%%%...............%%%",
			"%%%%,,,,,,%%%%...............%%%",
			"%%%%,,,,%%%%%%.................O",
			"%%%%%%,,%%%%%..................0",
			"%%%%%%,,,,,%%..................OB",
			"%%%%%%,,,,,,...................O",
			"%%%%%%%%%%%%%................%%%",
			"%%%%%%%%%%%%%................%%%",
		],
		background: "planks",
		shadow: true,
	},
	//25
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%...........................%%%",
			"%%...%%........................O",
			"%....%%........................0",
			"%....%%........................OB",
			"%....%%%.......................O",
			"%....%%%.....................%%%",
			"%6...%%%.....................%%%",
			"%....%%......................%%%",
			"%....%%.......................%%",
			"%%%..%%.......................%%",
			"%%%..%%.......................%%",
			".%%..%%..P....................%%",
			".....%%.......................%%",
			"@....%%.......................%%",
			"%%%%%%%%%%%%..................%%",
			"%%%%%%%%%%%%..................%%",
		],
		background: "planks",
		shadow: true,
	},
	//26
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%........%%%%.......%%%%...%%%",
			"............%%%........%%%.....O",
			".............|..........I......0.B",
			".............|..........I......O",
			"@............|.....P....I......O",
			"%%%..........|..........I.....%%",
			"%%%.........%%%........%%%....%%",
			"%%%.........%%%%%%%%%%%%%%%%%%%%",
			"%%..........%%%%%%%%%%%%%%%%%%%%",
			"%%.....-.....%%%%............%%%",
			"%%....%%%....%%................%",
			"%%....%%%....%%..............3.%",
			"%%...........%%._..............%",
			"%%...........%%%%%..........%%%%",
			"%%...........%%%%%..........%%%%",
			"%%...........%%%%...........%%%%",
		],
		background: "planks",
		shadow: true,
	},
	//27
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%.......%%%%%%%%%%%%%...%%%%%%",
			"............%%%%%%%%%%......%%%%",
			".............%%%%%%%%........|.O",
			"........................2....|.0B",
			"@....%%2...%%.1.P..%%........|.O",
			"%%%..%%....%%......%%%.......|.O",
			"%%%..%%%%%.%%%%%%%%%%%......%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
			"%%%............%%%%%..........%%",
			"%..............,,,,............%",
			"%6.............,,,,,...........%",
			"%...............,,,,.........-.%",
			"%%%%...........%%%%,.........%%%",
			"%%%%...........%%%%,.........%%%",
			"%%%.............%%%...........%%",
		],
		background: "planks",
		shadow: true,
	},
	//28
	{
		template: [
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&",
			"%%%%%...|....%%%%...%%%%%%%%%&&&",
			"%%%.....|.............%%%%%%%&&&",
			"........|.............%%%%%%%&&&",
			"........|.............%%%%%%%&&&",
			".......%%%............%%%%%%%%&&",
			"@....-.%%%..........._%%%%%%%%&&",
			"%%%%%%%%%.........t.%%%%%%%%%%&&",
			"%%%%%%%%%.......%%%%%%%%%%%%%%&&",
			"%%%%%%%......P..%%%%%%%%%%%%%%&&",
			"%%%%%.................%%%%%%%%&&",
			"%%%%%...................I..%%,,O",
			"%%%%%.......%%%%........I...,,,0B",
			"%%%%%.t=....%%%%...t....I....,,O",
			"%%%%%%%%%%%%%%%%%%%%....I....&&&",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&",
			"%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&",
		],
		background: "planks",
		shadow: true,
		texts: [
			[
				[
					"We've been",
					"hiding here for",
					"weeks now.",
				],
				[
					"We've managed to",
					"keep the most badly",
					"infected out.",
				],
			],
			[
				[
					"This is all the",
					"making of the old",
					"biologist."
				],
				[
					"His lab lies at the",
					"eastern end of",
					"the world.",
				]
			],
			[
				[
					"Someone needs to",
					"do something about",
					"all of this!",
				]
			],
		]
	},

	//infected grass

	//29
	{
		template: [
			"&&&&.......................&&&&&",
			"&&&&.........................&&&",
			"&&&&.........................&&&",
			"&&&&.........................&&&",
			"&&&....P......................&&",
			"&&&..........&&6..............&&",
			"&&&.........&&&...............&&",
			"&&&&&.....&&&&&&.............&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&..&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&...&&",
			"&&&,,,,...,,,,,,,,.,,,,,,......O",
			"&&,,,,,,..,,,,,,,..,,,,,,......0",
			"..,,,,,,...,,,,,,...,,,,,......OB",
			"...,,,,,.3.,,,,,,2..,,,,,....&&&",
			"@..,,,,,...,,,,,,...,,,,,,...&&&",
			"&&&,,,,,&&&,,,,,,&&.,,,,,,...&&&",
			"&&&,,,,,&&&,,,,,,&&,,,,,,,..&&&&",
			"&&&,,,,,&&&,,,,,,&&,,,,,,,&&&&&&",
		],
		background: "sky",
	},
	//30
	{
		template: [
			"&&&&........................&&&&",
			"&&&&.........................&&&",
			"&&&..........................&&&",
			"&&&..........................&&&",
			"&&&..........................&&&",
			"&&.........P.......2..........&&",
			"&&............................&&",
			"&&............................&&",
			"&&............................&&",
			"&&,,,,,,,,,,,,,,,,,,,,,,2,,,,,,O",
			",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0",
			",,,,,,,2,,,,,,,,,,,,,,,,&&,,,,.OB",
			"@,,,,,,,,,,,,,,,,,,,,,,,&&,,,&&&",
			"&&&,,,,,,,,,,,2,,,,&&,,,&&,,,&&&",
			"&&&,,,,&&,,,,,,,,,,&&,,,&&,,,&&&",
			"&&&,,,,&&,,,,,&&,,,&&,,,&&,,,,&&",
			"&&,,,,,&&,,,,,&&,,,&&,,,,,,,,,&&",
			"&&,,,,,&&,,,,,&&,,,&&,,,,,,,,&&&",
		],
		background: "sky",
	},
	//31
	{
		template: [
			"&&&&......&&&&&..............&&&",
			"&&&........&&&&..............&&&",
			"&&&........&&&...............&&&",
			"&&&.........&&.........7......&&",
			"&&&.........&&................&&",
			"&&..........7.................&&",
			"&&.............................O",
			"&&.....................P.......0",
			"&&.............................OB",
			"...............................O",
			"..............................&&",
			"@.............................&&",
			"&&&...........................&&",
			"&&&........&&&...............&&&",
			"&&&........&&&...............&&&",
			"&&........&&&&...............&&&",
			"&&........&&&&&.............&&&&",
			"&&........&&&&&.............&&&&",
		],
		background: "sky",
	},
	//32
	{
		template: [
			"&&&............&&&&&&.....&&&&&&",
			"&&&.............&&&&&.......&&&&",
			"&&&.......7.....&&&&&........&&&",
			"&&..............&&&&.........&&&",
			"&&..............&&&&.........&&&",
			"&&...............&&&..........&&",
			".................&&&..........&&",
			"..........P......&&...........&&",
			".................&&............OB.",
			"@.................|............0",
			"&&................|............O",
			"&&................|............O",
			"&&.....&&,,,&&....|..........&&&",
			"&&&...&&&,,,&&...&&..........&&&",
			"&&&&&&&&&,,,&&&..&&..........&&&",
			"&&&&&&&&&,-,&&&&&&&.........&&&&",
			"&&&&&&&&&&&&&&&&&&&.........&&&&",
			"&&&&&&&&&&&&&&&&&&.........&&&&&",
		],
		background: "sky",
	},
	//33
	{
		template: [
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
			".....&&&&&&&&&&........7.......O",
			".......&&&&&.........7.........0B",
			"............7..................O",
			"@................P.............O",
			"&&...........................&&&",
			"&&..........................&&&&",
			"&&..........................&&&&",
			"&&&.........................&&&&",
			"&&&&&.....................&&&&&&",
			"&&&&&....................&&&&&&&",
		],
		background: "sky",
	},
	//34
	{
		template: [
			"&&&&&&&&&&&&&&..............&&&&",
			"&&&&&&&&&&...................&&&",
			"&&&&&&&......................&&&",
			"&&&&&........................&&&",
			"&&&..........................&&&",
			"&&&...........................&&",
			"&&............................&&",
			"&&............................&&",
			"...............................O",
			".........P.....................0B",
			"...............................O",
			"@..............................O",
			"&&............................&&",
			"&&............................&&",
			"&&&...........................&&",
			"&&&..........................&&&",
			"&&&..........................&&&",
			"&&&&.........................&&&",
		],
		background: "sky",
	},
	//35
	{
		template: [
			"&&&&........................&&&&",
			"&&&..........................&&&",
			"&&&..........................&&&",
			"&&&............................O",
			"&&&............................0B",
			"&&.............................O",
			"&&............................pO",
			"&&...........................&&&",
			".............................&&&",
			".............................&&&",
			"..............................&&",
			"@.......................&&&&&&&&",
			"&&......................&&&&&&&&",
			"&&..........................&&&&",
			"&&............................&&",
			"&&............................&&",
			"&&&................&&&&&......&&",
			"&&&..............&&&&&&&&....&&&",
		],
		background: "sky",
	},
	//36
	{
		template: [
			"&&&.........................&&&&",
			"&&&..........................&&&",
			"&&...........................&&&",
			"...............................O",
			"...............................0B",
			"...............................O",
			"@..............................O",
			"&&&..........................&&&",
			"&&&.........................p&&&",
			"&&&..................,,&&&&&&&&&",
			"&&...................,,&&&&&&&&&",
			"&&...................,,&&&&&&&&&",
			"&&..................,,,,&&&&&&&&",
			"&&..................,,,,&&&&&&&&",
			"&...................,,,,&&&&&&&&",
			"&...................,,,,,&&&&&&&",
			"&..................,,,,,,&&&&&&&",
			"&&.................,,,,,,&&&&&&&",
		],
		background: "sky",
	},
	//37
	{
		template: [
			"&&&......&&&&&&&.............&&&",
			"&&........&&&&&&..............&&",
			"&&........&&&&&................&",
			"..........&&&&&................&",
			"...........&&&&................O",
			"...........&&&&................0B",
			"@..........&&&.................O",
			"&&&........&&&.................O",
			"&&&.........&&................&&",
			"&&&.........&&...............p&&",
			"&&..........7........,,&&&&&&&&&",
			"&&...................,,&&&&&&&&&",
			"&&...................,,&&&&&&&&&",
			"&&..........P.......,,,,&&&&&&&&",
			"&...................,,,,&&&&&&&&",
			"&...................,,,,&&&&&&&&",
			"&...................,,,,,&&&&&&&",
			"&...................,,,,,&&&&&&&",
		],
		background: "sky",
	},
	//38
	{
		template: [
			"&&&&&.......................&&&&",
			"&&&..........................&&&",
			"&&...........................&&&",
			"&&............................&&",
			"..............................&&",
			".............................&&&",
			"............................&&&&",
			"@...........................&&&&",
			"&&&&........................|..O.",
			"&&&&........................|..0B",
			"&&&&....-...................|..O",
			"&&&&...&&&................,,|.pO",
			"&&&&...&&&................,,&&&&",
			"&&&....&&&................,,&&&&",
			"&&&....&&&...............,,,&&&&",
			"&&&....&&&...............,,,,&&&",
			"&&&....&&&...............,,,,&&&",
			"&&&....&&&..............,,,,,&&&",
		],
		background: "sky",
	},
	//39
	{
		template: [
			"&&&&&&&.........7............&&&",
			"&&&&&........................&&&",
			"&&&&.........................&&&",
			"&..|......,,..................&&",
			"&.p|......,,,.................&&",
			"&&&&......,,,.................&&",
			"&&&&......&&,,.......&&&......&&",
			"&&,,,,,,,,&&,,,,,,,,,&&&......&&",
			"..,,,,,,,,,,,,,,,,,,,,,,,......&",
			"..,,,,,,,,2,,,,,,,,,,,,,,......&",
			"...,,,,,,,,,,,,,,,,,,,,,,......O",
			"@..,,,,,,,,,,,,,,,,,,,,,,......0B.",
			"&&&&,,,,,,,,,,,,,,,,,,,-,......O",
			"&&&&,,,,,,&&,,,,2,,,,,&&&......O",
			"&&&&,,,,,,&&,,,,,,,,,,&&&.....&&",
			"&&&,,,,,,,&&,,,,&&,,,,&&&.....&&",
			"&&&,,,,,,,&&,,,,&&,,,,&&&.....&&",
			"&&&,,,,,,,&&,,,,&&,,,,&&&....&&&",
		],
		background: "sky",
	},
	//40
	{
		template: [
			"&&&&........................&&&&",
			"&&&&.........................&&&",
			"&&&..........................&&&",
			"&&&..........................&&&",
			"&&&...........................&&",
			"&&&...........................&&",
			"&&&...........................&&",
			"&&............................&&",
			"&&............................&&",
			"&&.............................O",
			"...............................0B",
			"...............................O",
			"...............................O",
			"@.............................&&",
			"&&............................&&",
			"&&...........................&&&",
			"&&&..........................&&&",
			"&&&..........................&&&",
		],
		background: "sky",
	},

	//laboratory
	
	//41
	{
		template: [
			"&&&&......................//////",
			"&&&&......................./////",
			"&&&......................../////",
			"&&&.........................////",
			"&&&.........................////",
			"&&&.........................////",
			"&&...........................///",
			"&&............................|O",
			"&&............................|0B",
			"..............................|O",
			"..............................|O",
			"...............-............////",
			"@.............&&&...........////",
			"&&&...........&&&...........////",
			"&&&...........&&&............///",
			"&&&...........&&&............///",
			"&&............&&&............///",
			"&&............&&&............///",
		],
		background: "sky",
	},
	//42
	{
		template: [
			"////////////////////////////////",
			"////////////////////////////////",
			"////////////////////////////////",
			"//////..........xx........./////",
			"////.........................///",
			"////......[..................///",
			"///...........................//",
			".......................[......//",
			"...............................O",
			"..................P............0B",
			"@..............................O",
			"////...........................O",
			"////.............xxxx.......////",
			"////..........~.x////x......////",
			"////...........x.////x......////",
			"////.........////////........///",
			"////........./////////.......///",
			"////........//////////.......///",
		],
		background: "lab",
		shadow: true,
	},

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
