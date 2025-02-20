import vec, * as v 				from "/js/lib/vector.js";
import traitHolder, * as traits from "/js/lib/traits.js";
import box						from "/js/box.js";
import player					from "/js/player.js";
import {jumpingPoint, point}	from "/js/points.js";
import * as blues				from "/js/blue.js";
import * as reds				from "/js/reds.js";
import { thorn, thornImg  }		from "/js/thorn.js";
import lamp						from "/js/lamp.js";
import generateTileImg 			from "/js/generateTileImg.js";
import generateWallsImg			from "/js/generateWalls.js";
import generateShadowImg 		from "/js/generateShadowImg.js";
import generateVineImg			from "/js/generateVineImg.js";
import addClouds				from "/js/clouds.js";
import addBirds 				from "/js/bird.js";
import addFlowers				from "/js/flowers.js";
import dynamicShadow			from "/js/shadow.js";
import { door, doorButton }		from "/js/door.js";
import boss						from "/js/boss.js";

const generateLevel = ({ template, time, background, texts, shadow }, { world, world: { add, remove }, sprites, JSON, width, height }) => {
	let pos;
	const scl = 15;

	let textCounter = 0;

	add(tiles(generateTileImg(template, sprites, JSON["grass_tiles"])), "tiles", 8);

	add(tiles(generateVineImg(template, sprites)), "tiles", 1)

	add(thornImg(template), "tiles", 5);

	add(tiles(sprites["backgrounds/" + background], background), "background", 0, true);

	if(background === "sky") addClouds({ world, width });
	if(shadow) add(dynamicShadow(), "shadow", 20, true);

	//inintialize points array
	let x = {};
	add(x, "points", 0);
	remove(x);

	template.forEach((row, y) => strEach(row, (tile, x) => {
			pos = vec(scl * x, scl * y);

			if(tile === "@") add(player(pos.copy()), "player", 4, true);
			if(tile === "#"
			|| tile === "¤"
			|| tile === "%"
			|| tile === "&"
			|| tile === "/"
			|| tile === "(")
				add(obstacle(pos.copy()), "obstacles", 1);

			if(tile === ","
			||(tile !== "."
			&& tile !== "#"
			&& tile !== "¤"
			&& tile !== "%"
			&& tile !== "&")
			&& (y !== template.length-1 && template[y+1][x] === ","
			|| y !== 0 && template[y-1][x] === ",")){
				add(obstacle(pos.copy()), "blockers", 0);
			}

			if(tile === "B") add(box(pos.copy()), "box", 1, true);
			if(tile === "P") add(point(pos.copy()), "points", 3);
			if(tile === "p") add(jumpingPoint(pos.copy()), "points", 3);
			if(tile === "0") add(vec(pos.x + 15, pos.y), "pointTarget", 0, true);
			if(tile !== "#"
			&& tile !== "¤"
			&& tile !== "%"
			&& tile !== "&"
			&& tile !== "/"
			&& tile !== "("
			&& x === template[0].length-1) add(shine(pos.copy()), "shine", 10);

			if(tile === "b"){
				add(blues.bouncer(pos.copy(), texts[textCounter]), "blues", 3)
				textCounter++;
			}
			if(tile === "t"){
				add(blues.blue(pos.copy(), texts[textCounter]), "blues", 3);
				textCounter++;
			}
			if(tile === "d") add(blues.blueDoc(pos.copy()), "blues", 3)
			if(tile === "D") add(blues.blueDeathcounter(pos.copy()), "blues", 3);
			if(tile === "Y") add(blues.biologist(pos.copy()), "blues", 3);

			if(tile === "£") add(lamp(pos.copy()), "lamps", 6);

			if(tile === "µ") add(bookShelf(pos.copy()), "furniture", 1);

			if(tile === "=") add(sickBlue(pos.copy()), "blues", 1);

			if(tile === "{") add(blues.blueLock(vec(pos.x + 15, pos.y)), "obstacles", 1);

			if(tile === "[") add(tileObject(pos.copy(), "lab_shelf", vec(30, 15)), "furniture", 1);
			if(tile === "~") add(tileObject(pos.copy(), "lab_table", vec(45, 30)), "furniture", 1);
			if(tile === "U") add(tileObject(pos.copy(), "bird_cage", vec(30, 30)), "furniture", 1);

			if(tile === "x"
			|| (tile === "-"
			|| tile === "_"
			|| tile === "|"
			|| tile === "I"
			|| tile === "6"
			|| tile === "7")
			&& (template[y][x-1] === "x"
			|| template[y][x+1] === "x")) add(thorn(pos.copy(), template), "thorns", 5);

			//reds
			if(tile === "T") add(reds.blueTrans(pos.copy()), "reds", 5);
			if(tile === "1") add(reds.red(pos.copy()), "reds", 5);
			if(tile === "2") add(reds.jumper(pos.copy()), "reds", 5);
			if(tile === "3") add(reds.spawner(pos.copy()), "reds", 5);
			if(tile === "4") add(reds.giant(pos.copy()), "reds", 5);
			if(tile === "5") add(reds.smallJumper(pos.copy()), "reds", 5);
			if(tile === "6") add(reds.hunter(pos.copy()), "reds", 5);
			if(tile === "7") add(reds.redBird(pos.copy()), "reds", 5);

			if(tile === "W") add(boss(pos.copy()), "boss", 5, true);

			if(tile === "|") add(door(pos.copy(), 0), "obstacles", 2);
			if(tile === "I") add(door(pos.copy(), 1), "obstacles", 2)

			if(tile === "-") add(doorButton(pos.copy(), 0), "door_buttons", 2);
			if(tile === "_") add(doorButton(pos.copy(), 1), "door_buttons", 2);

	}));
	
	addBirds({ world, width, height });
	
	addFlowers(template, world);

	if(world.obstacles) world.obstacles = optimizeObstacles(world.obstacles);
	
	if(world.blockers) world.blockers = optimizeObstacles(world.blockers);

}

export const optimizeObstacles = (obstacles) => {
	for(let i = 0; i < obstacles.length; i++){
		const o1 = obstacles[i];

		for(let j = 0; j < obstacles.length; j++){
			const o2 = obstacles[j];

			if(o1.pos.x + o1.size.x === o2.pos.x && o1.pos.y === o2.pos.y && !o1.img && !o2.img){
				o1.size.x += o2.size.x;
				obstacles.splice(j, 1);
				j--;
			}
		}
	}

	for(let i = 0; i < obstacles.length; i++){
		const o1 = obstacles[i];
		
		for(let j = 0; j < obstacles.length; j++){
			const o2 = obstacles[j]
			if(o1.pos.y + o1.size.y === o2.pos.y && o1.pos.x === o2.pos.x && o1.size.x === o2.size.x && !o1.img && !o2.img){
				o1.size.y += o2.size.y;
				obstacles.splice(j, 1);
				j--;
			}
		}
	}

	return obstacles;
}

export const obstacle = (pos, size = vec(15, 15)) => {
	const that = traitHolder();

	traits.addEntityTrait({
		pos,
		size,
	})(that);

	return that;
}

export const tiles = (img, imgName) => {
	const that = traitHolder();

	that.img = img;
	that.imgName = imgName;

	that.draw = (ctx) => {
		ctx.drawImage(that.img, 0, 0, 15 * 32, 15 * 18);
	}

	return that;
}

export const tileObject = (pos, img, size = vec(15, 15)) => {
	const that = obstacle(pos, size);

	that.img = img;

	that.draw = (ctx, sprites) => {
		ctx.drawImage(sprites[that.img], that.pos.x, that.pos.y, that.size.x, that.size.y);
	}

	return that;
}

const bookShelf = (pos) => {
	const that = tileObject(pos, "bookshelf");

	that.size = vec(30, 45);

	return that;
}

const birdCage = (pos) => {
	const that = tileObject(pos, "bird_cage");

	that.size = vec(30, 30);

	return that;
}

const sickBlue = (pos) => {
	const that = traitHolder();

	traits.addEntityTrait({
		pos,
		size: vec(30, 15),
	})(that);

	traits.addSpriteTrait({
		img: "sick_blue",
		imgSize: that.size.copy(),
	})(that);

	traits.addFrameTrait({
		frames: "sick_blue_frames",
		delay: 60,
	})(that);

	return that;
}

const shine = (pos) => {
	const that = traitHolder();

	traits.addEntityTrait({
		pos,
		size: vec(15, 15),
	})(that);

	traits.addSpriteTrait({
		img: "shine",
		imgSize: that.size.copy(),
		alpha: 0,
	})(that);

	traits.addMoveTrait({
		velocity: vec(0.1, 0),
	})(that);

	that.checkLevelCleared = ({ levelCleared }) => {
		if(levelCleared && that.alpha < 1) that.alpha += 0.2;
	}

	that.initPos = that.pos.copy();
	that.hover = ({ levelCleared }) => {
		if(that.pos.x < that.initPos.x + 0.1 || that.pos.x > that.initPos.x + 6) that.velocity.x *= -1;
		if(!levelCleared) that.pos.x = that.initPos.x;
	}

	that.addMethods("checkLevelCleared", "hover");

	return that;
}

const strEach = (str, func) => {
	for(let i = 0; i < str.length; i++){
		func(str[i], i);
	}
}

export default generateLevel;
