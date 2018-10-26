import vec, * as v 		 		from "/js/lib/vector.js";
import traitHolder, * as traits from "/js/lib/traits.js";
import * as text				from "/js/lib/text.js";
import * as loaders 	 		from "/js/lib/assets.js";
import createCanvas 	 		from "/js/lib/canvas.js";
import gameWorld 		 		from "/js/lib/gameWorld.js";
import keys						from "/js/lib/keys.js";
import generateLevel			from "/js/generateLevel.js";
import addClouds				from "/js/clouds.js";
import player					from "/js/player.js";
import flower					from "/js/flower.js";
import * as helpers				from "/js/helpers.js";
import addBirds 				from "/js/bird.js";
import levels					from "/js/levels.js";
import drawImage 				from "/js/generateTileImg.js";

Promise.all([
	createCanvas(15 * 32, 15 * 18),
	loaders.loadSprites(
		"boy",
		"box",
		"background",
		"tiles/grass_tiles",
		"level_1/tiles",
		"level_2/tiles",
		"level_3/tiles",
		"dust",
		"cloud",
		"point",
		"shine",
		"blue",
		"blue_bird",
		"flower_1",
	),
	loaders.loadAudio(
		1,
		"boy_jump",
		"bj2",
		"boy_land",
		"pickup_point",
		"level_cleared",
	),
	loaders.loadJSON(
		"boy_frames",
		"blue_frames",
		"blue_bird_frames",
		"grass_tiles",
	),
]).then(([ { c, ctx, width, height, pointer }, sprites, audio, JSON ]) => {
	
	const GAME = {
		c,
		ctx,
		width,
		height,
		pointer,
		sprites,
		audio,
		JSON,
		levels,
		world: gameWorld(),
		states: [
		
		],
		state: undefined,
		context: vec(0, 0),
		currentLevel: 0,
	};

	GAME.keys = keys(
		"a",
		"d",
		"w",
		" ",
	);

	GAME.tiles;

	GAME.states.setupLevel = () => {

		GAME.world.clearAll();
	
		generateLevel(GAME.levels[GAME.currentLevel], GAME.world);

		addClouds(GAME);
		
		addBirds(GAME);

		if(GAME.currentLevel === 0) GAME.world.add(helpers.boxText(vec(125, 50)), "text", 3);

		GAME.levelCleared = false;

		GAME.fade = 1;

		GAME.tiles = "level_" + (GAME.currentLevel + 1) + "/tiles";

		boxOriginPos = GAME.world.box.pos.copy();

		GAME.state = GAME.states.level;

	}

	let boxTextFade = 0;
	let fadeInText = false;
	let boxOriginPos;

	GAME.states.level = () => {

		if(GAME.keys.a.down)
			GAME.world.player.dir = -1;
		if(GAME.keys.d.down) 
			GAME.world.player.dir = 1;
		if(GAME.keys.a.down && GAME.keys.d.down || !GAME.keys.a.down && !GAME.keys.d.down)
			GAME.world.player.dir = 0;
		if(GAME.keys.w.down || GAME.keys[" "].down) GAME.world.player.jump(GAME);
		if(!GAME.keys.w.down && !GAME.keys[" "].down) GAME.world.player.stopJump();

		GAME.world.update(GAME);

		GAME.fade -= 0.02;
		if(GAME.fade < 0) GAME.fade = 0;

		if(GAME.world.points.length <= 0){
			if(!GAME.levelCleared) GAME.audio.play("level_cleared");
			GAME.levelCleared = true;
		}

		ctx.save();
		ctx.scale(c.scale, c.scale);
		ctx.translate(GAME.context.x, GAME.context.y);
		ctx.drawImage(GAME.sprites.background, 0, 0, GAME.width, GAME.height);

		GAME.world.draw(ctx, GAME.sprites);
		//ctx.drawImage(GAME.sprites[GAME.tiles], 0, 0, GAME.width, GAME.height);

		ctx.globalAlpha = GAME.fade;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, GAME.width, GAME.height);
		ctx.globalAlpha = 0.1;

		ctx.fillStyle = "black";
		//ctx.fillRect(0, 0, GAME.width, GAME.height);

		ctx.globalAlpha = 1;

		//handleScreenShake
		GAME.context = v.mul(GAME.context, 0.5);

		ctx.restore();

	}

	let afterFadeState;
	GAME.states.fadeOutState = () => {
		GAME.fade += 0.05;
		if(GAME.fade > 0.5) GAME.fade += 0.05;
		if(GAME.fade > 1){
			GAME.fade = 1;
			GAME.state = GAME.states[afterFadeState];
		}
		ctx.globalAlpha = GAME.fade;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, GAME.c.width, GAME.c.height);
		ctx.globalAlpha = 1;
	}

	GAME.fadeOut = (state) => {
		afterFadeState = state;
		GAME.state = GAME.states.fadeOutState;
	}

	GAME.state = GAME.states.setupLevel;

	const timeScl = (1/60)*1000;
	let lastTime = 0;
	let accTime = 0;

	const loop = (time = 0) => {
		accTime += time - lastTime;
		lastTime = time;
		while(accTime > timeScl){
			GAME.state(GAME);

			GAME.keys.update();
			GAME.pointer.update();

			accTime -= timeScl;
		}
		requestAnimationFrame(loop);
	}
	
//	loop();
	
	const img = drawImage(GAME.levels[GAME.currentLevel], GAME.sprites["tiles/grass_tiles"], GAME.JSON["grass_tiles"]);

	ctx.drawImage(img, 0, 0)

});
