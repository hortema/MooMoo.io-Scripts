

// ==UserScript==
// @name         Moomoo.io | !JavMod! | hack
// @namespace    !Jav^~^!'
// @version      1.6
// @description  *Auto monkey tail remover *Auto-tankgear (Q) For fastheal (G) For Spike + BoostPad, (N) For 1 Windmills, (O) For 5 Windmills, (H) For Turrets (F) For BoostPad, (V) For Spike (P) For 4 Walls, (M) for Active/Unactive Auto Hat  and (M) For 4 Spikes, (T) for Active/Unactive AutoHeal [Apple/Cookie/Cheese]
// @author       Nuro
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @grant        GM_addStyle
// @require      https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==

try {
document.getElementById("moomooio_728x90_home").style.display = "none";
    $("#moomooio_728x90_home").parent().css({display: "none"});
} catch (e) {
  console.log("error removing ad");
}


var accessories = [{
		id: 12,
		name: "Snowball",
		price: 0e3,
		scale: 105,
		xOff: 18,
		desc: "no effect"
	}, {
		id: 9,
		name: "Tree Cape",
		price: 0e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 10,
		name: "Stone Cape",
		price: 1e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 3,
		name: "Cookie Cape",
		price: 500,
		scale: 90,
		desc: "no effect"
	}, {
		id: 8,
		name: "Cow Cape",
		price: 0e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 11,
		name: "Monkey Tail",
		price: 0e3,
		scale: 97,
		xOff: 25,
		desc: "Super speed but reduced damage",
		spdMult: 1.35,
		dmgMultO: .2
	}, {
		id: 17,
		name: "Apple Basket",
		price: 0e3,
		scale: 80,
		xOff: 12,
		desc: "slowly regenerates health over time",
		healthRegen: 1
	}, {
		id: 6,
		name: "Winter Cape",
		price: 3e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 4,
		name: "Skull Cape",
		price: 4e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 5,
		name: "Dash Cape",
		price: 5e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 2,
		name: "Dragon Cape",
		price: 6e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 1,
		name: "Super Cape",
		price: 8e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 7,
		name: "Troll Cape",
		price: 8e3,
		scale: 90,
		desc: "no effect"
	}, {
		id: 14,
		name: "Thorns",
		price: 1e4,
		scale: 115,
		xOff: 20,
		desc: "no effect"
	}, {
		id: 15,
		name: "Blockades",
		price: 1e4,
		scale: 95,
		xOff: 15,
		desc: "no effect"
	}, {
		id: 20,
		name: "Devils Tail",
		price: 1e4,
		scale: 95,
		xOff: 20,
		desc: "no effect"
	}, {
		id: 16,
		name: "Sawblade",
		price: 12e3,
		scale: 90,
		spin: !0,
		xOff: 0,
		desc: "deal damage to players that damage you",
		dmg: .15
	}, {
		id: 13,
		name: "Angel Wings",
		price: 15e3,
		scale: 138,
		xOff: 22,
		desc: "slowly regenerates health over time",
		healthRegen: 3
	}, {
		id: 19,
		name: "Shadow Wings",
		price: 0e3,
		scale: 138,
		xOff: 22,
		desc: "increased movement speed",
		spdMult: 1.1
	}, {
		id: 18,
		name: "Blood Wings",
		price: 2e4,
		scale: 178,
		xOff: 26,
		desc: "restores health when you deal damage",
		healD: .2
	}, {
		id: 21,
		name: "Corrupt X Wings",
		price: 2e4,
		scale: 178,
		xOff: 26,
		desc: "deal damage to players that damage you",
		dmg: .25
	}]


var hats = hats = [{
		id: 45,
		name: "Shame!",
		dontSell: !0,
		price: 0,
		scale: 120,
		desc: "hacks are for losers"
	}, {
		id: 51,
		name: "Moo Cap",
		price: 0,
		scale: 120,
		desc: "coolest mooer around"
	}, {
		id: 50,
		name: "Apple Cap",
		price: 0,
		scale: 120,
		desc: "apple farms remembers"
	}, {
		id: 28,
		name: "Moo Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 29,
		name: "Pig Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 30,
		name: "Fluff Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 36,
		name: "Pandou Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 37,
		name: "Bear Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 38,
		name: "Monkey Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 44,
		name: "Polar Head",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 35,
		name: "Fez Hat",
		price: 0,
		scale: 120,
		desc: "no effect"
	}, {
		id: 42,
		name: "Enigma Hat",
		price: 0,
		scale: 120,
		desc: "join the enigma army"
	}, {
		id: 43,
		name: "Blitz Hat",
		price: 0,
		scale: 120,
		desc: "hey everybody i'm blitz"
	}, {
		id: 49,
		name: "Bob XIII Hat",
		price: 0,
		scale: 120,
		desc: "like and subscribe"
	}, {
		id: 8,
		name: "Bummle Hat",
		price: 100,
		scale: 120,
		desc: "no effect"
	}, {
		id: 2,
		name: "Straw Hat",
		price: 500,
		scale: 120,
		desc: "no effect"
	}, {
		id: 15,
		name: "Winter Cap",
		price: 200,
		scale: 120,
		desc: "allows you to move at normal speed in snow",
		coldM: 1
	}, {
		id: 5,
		name: "Cowboy Hat",
		price: 1e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 4,
		name: "Ranger Hat",
		price: 2e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 18,
		name: "Explorer Hat",
		price: 2e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 31,
		name: "Flipper Hat",
		price: 500,
		scale: 120,
		desc: "have more control while in water",
		watrImm: !0
	}, {
		id: 1,
		name: "Marksman Cap",
		price: 3e3,
		scale: 120,
		desc: "increases arrow speed and range",
		aMlt: 1.3
	}, {
		id: 10,
		name: "Bush Gear",
		price: 3e3,
		scale: 160,
		desc: "allows you to disguise yourself as a bush"
	}, {
		id: 48,
		name: "Halo",
		price: 3e3,
		scale: 120,
		desc: "no effect"
	}, {
		id: 6,
		name: "Soldier Helmet",
		price: 0e3,
		scale: 120,
		desc: "reduces damage taken but slows movement",
		spdMult: .94,
		dmgMult: .75
	}, {
		id: 23,
		name: "Anti Venom Gear",
		price: 4e3,
		scale: 120,
		desc: "makes you immune to poison",
		poisonRes: 1
	}, {
		id: 13,
		name: "Medic Gear",
		price: 5e3,
		scale: 110,
		desc: "slowly regenerates health over time",
		healthRegen: 3
	}, {
		id: 9,
		name: "Miners Helmet",
		price: 5e3,
		scale: 120,
		desc: "earn 1 extra gold per resource",
		extraGold: 1
	}, {
		id: 32,
		name: "Musketeer Hat",
		price: 5e3,
		scale: 120,
		desc: "reduces cost of projectiles",
		projCost: .5
	}, {
		id: 7,
		name: "Bull Helmet",
		price: 0e3,
		scale: 120,
		desc: "increases damage done but drains health",
		healthRegen: -5,
		dmgMultO: 1.5,
		spdMult: .96
	}, {
		id: 22,
		name: "Emp Helmet",
		price: 0e3,
		scale: 120,
		desc: "turrets won't attack but you move slower",
		antiTurret: 1,
		spdMult: .7
	}, {
		id: 12,
		name: "Booster Hat",
		price: 0e3,
		scale: 120,
		desc: "increases your movement speed",
		spdMult: 1.16
	}, {
		id: 26,
		name: "Barbarian Armor",
		price: 8e3,
		scale: 120,
		desc: "knocks back enemies that attack you",
		dmgK: .6
	}, {
		id: 21,
		name: "Plague Mask",
		price: 1e4,
		scale: 120,
		desc: "melee attacks deal poison damage",
		poisonDmg: 5,
		poisonTime: 6
	}, {
		id: 46,
		name: "Bull Mask",
		price: 1e4,
		scale: 120,
		desc: "bulls won't target you unless you attack them",
		bullRepel: 1
	}, {
		id: 14,
		name: "Windmill Hat",
		topSprite: !0,
		price: 1e4,
		scale: 120,
		desc: "generates points while worn",
		pps: 1.5
	}, {
		id: 11,
		name: "Spike Gear",
		topSprite: !0,
		price: 1e4,
		scale: 120,
		desc: "deal damage to players that damage you",
		dmg: .45
	}, {
		id: 53,
		name: "Turret Gear",
		topSprite: !0,
		price: 0e4,
		scale: 120,
		desc: "you become a walking turret",
		turret: {
			proj: 1,
			range: 700,
			rate: 2500
		},
		spdMult: .5
	}, {
		id: 20,
		name: "Samurai Armor",
		price: 12e3,
		scale: 120,
		desc: "increased attack speed and fire rate",
		atkSpd: .78
	}, {
		id: 16,
		name: "Bushido Armor",
		price: 12e3,
		scale: 120,
		desc: "restores health when you deal damage",
		healD: .4
	}, {
		id: 27,
		name: "Scavenger Gear",
		price: 15e3,
		scale: 120,
		desc: "earn double points for each kill",
		kScrM: 2
	}, {
		id: 40,
		name: "Tank Gear",
		price: 0e3,
		scale: 120,
		desc: "increased damage to buildings but slower movement",
		spdMult: .3,
		bDmg: 3.3
	}, {
		id: 52,
		name: "Thief Gear",
		price: 15e3,
		scale: 120,
		desc: "steal half of a players gold when you kill them",
		goldSteal: .5
	}]


var objects = [{
		id: 0,
		name: "food",
		layer: 0
	}, {
		id: 1,
		name: "walls",
		place: !0,
		limit: 30,
		layer: 0
	}, {
		id: 2,
		name: "spikes",
		place: !0,
		limit: 15,
		layer: 0
	}, {
		id: 3,
		name: "mill",
		place: !0,
		limit: 7,
		layer: 1
	}, {
		id: 4,
		name: "mine",
		place: !0,
		limit: 1,
		layer: 0
	}, {
		id: 5,
		name: "trap",
		place: !0,
		limit: 6,
		layer: -1
	}, {
		id: 6,
		name: "booster",
		place: !0,
		limit: 12,
		layer: -1
	}, {
		id: 7,
		name: "turret",
		place: !0,
		limit: 2,
		layer: 1
	}, {
		id: 8,
		name: "watchtower",
		place: !0,
		limit: 12,
		layer: 1
	}, {
		id: 9,
		name: "buff",
		place: !0,
		limit: 4,
		layer: -1
	}, {
		id: 10,
		name: "spawn",
		place: !0,
		limit: 1,
		layer: -1
	}, {
		id: 11,
		name: "sapling",
		place: !0,
		limit: 2,
		layer: 0
	}, {
		id: 12,
		name: "blocker",
		place: !0,
		limit: 3,
		layer: -1
	}, {
		id: 13,
		name: "teleporter",
		place: !0,
		limit: 1,
		layer: -1
	}]

    var weapons = [{
		id: 0,
		type: 0,
		name: "tool hammer",
		desc: "tool for gathering all resources",
		src: "hammer_1",
		length: 140,
		width: 140,
		xOff: -3,
		yOff: 18,
		dmg: 25,
		range: 65,
		gather: 1,
		speed: 300
	}, {
		id: 1,
		type: 0,
		age: 2,
		name: "hand axe",
		desc: "gathers resources at a higher rate",
		src: "axe_1",
		length: 140,
		width: 140,
		xOff: 3,
		yOff: 24,
		dmg: 30,
		spdMult: 1,
		range: 70,
		gather: 2,
		speed: 400
	}, {
		id: 2,
		type: 0,
		age: 8,
		pre: 1,
		name: "great axe",
		desc: "deal more damage and gather more resources",
		src: "great_axe_1",
		length: 140,
		width: 140,
		xOff: -8,
		yOff: 25,
		dmg: 35,
		spdMult: 1,
		range: 75,
		gather: 4,
		speed: 400
	}, {
		id: 3,
		type: 0,
		age: 2,
		name: "short sword",
		desc: "increased attack power but slower move speed",
		src: "sword_1",
		iPad: 1.3,
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 46,
		dmg: 35,
		spdMult: .85,
		range: 110,
		gather: 1,
		speed: 300
	}, {
		id: 4,
		type: 0,
		age: 8,
		pre: 3,
		name: "katana",
		desc: "greater range and damage",
		src: "samurai_1",
		iPad: 1.3,
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 59,
		dmg: 90,
		spdMult: .8,
		range: 118,
		gather: 1,
		speed: 300
	}, {
		id: 5,
		type: 0,
		age: 2,
		name: "polearm",
		desc: "long range melee weapon",
		src: "spear_1",
		iPad: 1.3,
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 53,
		dmg: 90,
		knock: .2,
		spdMult: .82,
		range: 142,
		gather: 1,
		speed: 700
	}, {
		id: 6,
		type: 0,
		age: 2,
		name: "bat",
		desc: "fast long range melee weapon",
		src: "bat_1",
		iPad: 1.3,
		length: 110,
		width: 180,
		xOff: -8,
		yOff: 53,
		dmg: 20,
		knock: .7,
		range: 110,
		gather: 1,
		speed: 300
	}, {
		id: 7,
		type: 0,
		age: 2,
		name: "daggers",
		desc: "really fast short range weapon",
		src: "dagger_1",
		iPad: .8,
		length: 110,
		width: 110,
		xOff: 18,
		yOff: 0,
		dmg: 20,
		knock: .1,
		range: 65,
		gather: 1,
		hitSlow: .1,
		spdMult: 1.13,
		speed: 100
	}, {
		id: 8,
		type: 0,
		age: 2,
		name: "stick",
		desc: "great for gathering but very weak",
		src: "stick_1",
		length: 140,
		width: 140,
		xOff: 3,
		yOff: 24,
		dmg: 1,
		spdMult: 1,
		range: 70,
		gather: 7,
		speed: 400
	}, {
		id: 9,
		type: 1,
		age: 6,
		name: "hunting bow",
		desc: "bow used for ranged combat and hunting",
		src: "bow_1",
		req: ["wood", 4],
		length: 120,
		width: 120,
		xOff: -6,
		yOff: 0,
		projectile: 0,
		spdMult: .75,
		speed: 600
	}, {
		id: 10,
		type: 1,
		age: 6,
		name: "great hammer",
		desc: "hammer used for destroying structures",
		src: "great_hammer_1",
		length: 140,
		width: 140,
		xOff: -9,
		yOff: 25,
		dmg: 50,
		spdMult: .88,
		range: 75,
		sDmg: 7.5,
		gather: 1,
		speed: 400
	}, {
		id: 11,
		type: 1,
		age: 6,
		name: "wooden shield",
		desc: "blocks projectiles and reduces melee damage",
		src: "shield_1",
		length: 120,
		width: 120,
		shield: .2,
		xOff: 6,
		yOff: 0,
		spdMult: .7
	}, {
		id: 12,
		type: 1,
		age: 8,
		pre: 9,
		name: "crossbow",
		desc: "deals more damage and has greater range",
		src: "crossbow_1",
		req: ["wood", 5],
		aboveHand: !0,
		armS: .75,
		length: 120,
		width: 120,
		xOff: -4,
		yOff: 0,
		projectile: 2,
		spdMult: .7,
		speed: 700
	}, {
		id: 13,
		type: 1,
		age: 9,
		pre: 12,
		name: "repeater crossbow",
		desc: "high firerate crossbow with reduced damage",
		src: "crossbow_2",
		req: ["wood", 10],
		aboveHand: !0,
		armS: .75,
		length: 120,
		width: 120,
		xOff: -4,
		yOff: 0,
		projectile: 3,
		spdMult: .7,
		speed: 300
	}, {
		id: 14,
		type: 1,
		age: 6,
		name: "mc grabby",
		desc: "steals resources from enemies",
		src: "grab_1",
		length: 130,
		width: 210,
		xOff: -8,
		yOff: 53,
		dmg: 0,
		steal: 250,
		knock: .2,
		spdMult: 1.05,
		range: 125,
		gather: 0,
		speed: 700
	}, {
		id: 15,
		type: 1,
		age: 9,
		pre: 12,
		name: "musket",
		desc: "slow firerate but high damage and range",
		src: "musket_1",
		req: ["stone", 10],
		aboveHand: !0,
		rec: .35,
		armS: .6,
		hndS: .3,
		hndD: 1.6,
		length: 205,
		width: 205,
		xOff: 25,
		yOff: 0,
		projectile: 5,
		hideProjectile: !0,
		spdMult: .6,
		speed: 1500
	}]

var activeObjects = [{
		name: "apple",
		desc: "restores 20 health when consumed",
		req: ["food", 10],
		consume: function (e) {
			return e.changeHealth(20, e)
		},
		scale: 22,
		holdOffset: 15
	}, {
		age: 3,
		name: "cookie",
		desc: "restores 40 health when consumed",
		req: ["food", 15],
		consume: function (e) {
			return e.changeHealth(40, e)
		},
		scale: 27,
		holdOffset: 15
	}, {
		age: 7,
		name: "pizza",
		desc: "restores 30 health and another 50 over 5 seconds",
		req: ["food", 30],
		consume: function (e) {
			return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
		},
		scale: 27,
		holdOffset: 15
	}, {
		name: "wood wall",
		desc: "provides protection for your village",
		req: ["wood", 10],
		projDmg: !0,
		health: 380,
		scale: 50,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 3,
		name: "stone wall",
		desc: "provides improved protection for your village",
		req: ["stone", 25],
		health: 900,
		scale: 50,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		pre: 1,
		name: "castle wall",
		desc: "provides powerful protection for your village",
		req: ["stone", 35],
		health: 1500,
		scale: 52,
		holdOffset: 20,
		placeOffset: -5
	}, {
		name: "spikes",
		desc: "damages enemies when they touch them",
		req: ["wood", 20, "stone", 5],
		health: 400,
		dmg: 20,
		scale: 49,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		age: 5,
		name: "greater spikes",
		desc: "damages enemies when they touch them",
		req: ["wood", 30, "stone", 10],
		health: 500,
		dmg: 35,
		scale: 52,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		age: 9,
		pre: 1,
		name: "poison spikes",
		desc: "poisons enemies when they touch them",
		req: ["wood", 35, "stone", 15],
		health: 600,
		dmg: 30,
		pDmg: 5,
		scale: 52,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		age: 9,
		pre: 2,
		name: "spinning spikes",
		desc: "damages enemies when they touch them",
		req: ["wood", 30, "stone", 20],
		health: 500,
		dmg: 45,
		turnSpeed: .003,
		scale: 52,
		spritePadding: -23,
		holdOffset: 8,
		placeOffset: -5
	}, {
		name: "windmill",
		desc: "generates gold over time",
		req: ["wood", 50, "stone", 10],
		health: 400,
		pps: 1,
		turnSpeed: .0016,
		spritePadding: 25,
		iconLineMult: 12,
		scale: 45,
		holdOffset: 20,
		placeOffset: 5
	}, {
		age: 5,
		pre: 1,
		name: "faster windmill",
		desc: "generates more gold over time",
		req: ["wood", 60, "stone", 20],
		health: 500,
		pps: 1.5,
		turnSpeed: .0025,
		spritePadding: 25,
		iconLineMult: 12,
		scale: 47,
		holdOffset: 20,
		placeOffset: 5
	}, {
		age: 8,
		pre: 1,
		name: "power mill",
		desc: "generates more gold over time",
		req: ["wood", 100, "stone", 50],
		health: 800,
		pps: 2,
		turnSpeed: .005,
		spritePadding: 25,
		iconLineMult: 12,
		scale: 47,
		holdOffset: 20,
		placeOffset: 5
	}, {
		age: 5,
		type: 2,
		name: "mine",
		desc: "allows you to mine stone",
		req: ["wood", 20, "stone", 100],
		iconLineMult: 12,
		scale: 65,
		holdOffset: 20,
		placeOffset: 0
	}, {
		age: 5,
		type: 0,
		name: "sapling",
		desc: "allows you to farm wood",
		req: ["wood", 150],
		iconLineMult: 12,
		colDiv: .5,
		scale: 110,
		holdOffset: 50,
		placeOffset: -15
	}, {
		age: 4,
		name: "pit trap",
		desc: "pit that traps enemies if they walk over it",
		req: ["wood", 30, "stone", 30],
		trap: !0,
		ignoreCollision: !0,
		hideFromEnemy: !0,
		health: 500,
		colDiv: .2,
		scale: 50,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 4,
		name: "boost pad",
		desc: "provides boost when stepped on",
		req: ["stone", 20, "wood", 5],
		ignoreCollision: !0,
		boostSpeed: 1.5,
		health: 150,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		doUpdate: !0,
		name: "turret",
		desc: "defensive structure that shoots at enemies",
		req: ["wood", 200, "stone", 150],
		health: 800,
		projectile: 1,
		shootRange: 700,
		shootRate: 2200,
		scale: 43,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		name: "platform",
		desc: "platform to shoot over walls and cross over water",
		req: ["wood", 20],
		ignoreCollision: !0,
		zIndex: 1,
		health: 300,
		scale: 43,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		name: "healing pad",
		desc: "standing on it will slowly heal you",
		req: ["wood", 30, "food", 10],
		ignoreCollision: !0,
		healCol: 15,
		health: 400,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 9,
		name: "spawn pad",
		desc: "you will spawn here when you die but it will dissapear",
		req: ["wood", 100, "stone", 100],
		health: 400,
		ignoreCollision: !0,
		spawnPoint: !0,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		name: "blocker",
		desc: "blocks building in radius",
		req: ["wood", 30, "stone", 25],
		ignoreCollision: !0,
		blocker: 300,
		health: 400,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}, {
		age: 7,
		name: "teleporter",
		desc: "teleports you to a random point on the map",
		req: ["wood", 60, "stone", 60],
		ignoreCollision: !0,
		teleport: !0,
		health: 200,
		colDiv: .7,
		scale: 45,
		holdOffset: 20,
		placeOffset: -5
	}];



window.onbeforeunload = null;

let mouseX;
let mouseY;

let width;
let height;

setInterval(() => {
   if(clanToggle == 1) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
    }
    doNewSend(["testing", [6]]);
}, 200);

setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);

setInterval(() => {
    if(autoaim == false) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("Tried. - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("Tried. - Acc")
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);

function normal() {
    hat(normalHat);
    acc(normalAcc);
}

function aim(x, y){
     var cvs = document.getElementById("gameCanvas");
     cvs.dispatchEvent(new MouseEvent("mousemove", {
         clientX: x,
         clientY: y

     }));
}

let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");

var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var instaSpeed = 400;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = true;
var tick = 1;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
var msgpack5 = msgpack;
var boostDir;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};

let healSpeed = 60;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 1;

document.msgpack = msgpack;
function n(){
     this.buffer = new Uint8Array([0]);
     this.buffer.__proto__ = new Uint8Array;
     this.type = 0;
}

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){

    if (!ws){
        document.ws = this;

        ws = this;
        console.info("WS SET");
        console.log(ws);
        socketFound(this);
    }
    let x = new Uint8Array(m);
    let y = Array.from(x);
    let j = [146, 161, 50, 145, 203];
    if (y.every((x,i) => j[i]==x)){
       console.log(y);
    }
    this.oldSend(m);
    /*if (Array.from(x).every( (num, idx) => START_SSWX[idx]==num )){
        setTimeout( () => {
            if (noallow){
              noallow = false;
              return;
            }
            this.oldSend(m);

        }, 10);
    } else {
    this.oldSend(m);
    }*/

    //console.info(x);
    let x_arr_SSX = Array.from(x);
    //console.log(x_arr_SSX);
    if (x_arr_SSX.length === 6 && autobull){
         if (x_arr_SSX.every( (num, idx) => START_SSWX[idx]==num )){
             console.info("started swing");
             IN_PROCESS = true;
             this.oldSend(bullHelmet2("on"));
             this.oldSend(bullHelmet2("mOff"));
             document.dns(["13c", [0, switchToAccessory, 1]])
         } else if (x_arr_SSX.every( (num, idx) => END_SSWX[idx]==num ) ){
             console.info("ended swing");
             this.oldSend(bullHelmet2("off"));
             this.oldSend(bullHelmet2("mOn"));
             document.dns(["13c", [0, currentAccessory, 1]])
             IN_PROCESS = false;
         }
    }


    /*let usageArray = Array.from(new Uint8Array(m));
    if (usageArray.length == 45){
        if (usageArray[16] == 0 || usageArray[16] == 1) foodInHand = false;
        console.info(`Food in hand: null{foodInHand}`);

    };*/

    let realData = {}
    let realInfo = msgpack5.decode(x);
    if (realInfo[1] instanceof Array){
    realData.data = [realInfo[0], ...realInfo[1]]
    } else {
        realData.data = realInfo
    }
    //console.log(realData)
    //console.info("sent");
    //console.info(realData.data);
    if (realData.data[0] == "ch"){
       lastWords = realData.data[1];


    }
     if(realData.data[0]!="2")  {
         // console.info("HERE3");
       // console.info(realData.data[0])
      console.info(realData.data);
         // console.log(x);
    if (realData.data[0]=="3"){
         //console.info(realData.data[1]);
         /*console.info(new Uint8Array(m));
         if(typeof realData.data[1] != "number" && !nval){
             nval = realData.data[1];
             document.n = nval;
             console.info("SET NVAL to");
             console.info(nval);


         }*/
        /*console.info(typeof realData.data[2]);
        console.info(realData.data[2].buffer);
        goodData = realData.data;
        console.info(goodData);
        console.info(["5", 0, nval]);
        document.n = goodData[2];
        document.nval = nval*/
    }
     }
    //console.info(new Date().getTime());
    // console.log(realData.data[0]);
    if (realData.data[0]=="s"){
      console.info("user respawned");
       for (var elem of Object.values(allMooMooObjects)){
           console.info(elem);
          elem.style.opacity = 1;
        }
       justDied = false;
    } else if (realData.data[0]=="13c"){
        console.info("In Hat Part");
        console.info(realData);
        console.info(IN_PROCESS);
        console.info(realData.data.length == 4)
        console.info("test");
        if (!IN_PROCESS && realData.data.length == 4 && realData.data[3]==0 &&realData.data[1]==0){
            currentHat = realData.data[2];
            console.info("Changed hat to " + currentHat);

        } else if (!IN_PROCESS && realData.data.length == 4 && realData.data[3]==1 &&realData.data[1]==0){
            currentAccessory = realData.data[2];
            console.info("Changed accessory to " + currentAccessory);
        } else if (realData.data.length == 4 && realData.data[3] == 0 && realData.data[1]==1){
        	let hatID = realData.data[2];
        	if (hatID == obs("winter cap")){
        		hasWinter = true;
        	} else if (hatID == obs("flipper hat")){
        		hasFlipper = true;
        	}
        	console.log("BOUGHT HAT");
        }

    } else if (realData.data[0]=="2"){
      MYANGLE = realData.data[1];
        //console.log("ANGLE");

    } else if (realData.data[0]=="5") {
       //console.info("hai");
        //console.info(new Uint8Array(m));
        //console.info(realData.data);
    }
};

const START_SSWX = [146, 161, 99, 146, 1, 192]
var noallow = false;
const END_SSWX = [146, 161, 99, 146, 0, 192];

var justDied = false;
var hasWinter = false;
var hasFlipper = false;
var MYANGLE = 0;
var IN_PROCESS = false;
var autobull = true;
var allMooMooObjects = {};

function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}

function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
      data = temp;
    }
    let item = data[0];
    if(!data) {return};

    if(item === "io-init") {
            let cvs = document.getElementById("gameCanvas");
            width = cvs.clientWidth;
            height = cvs.clientHeight;
            $(window).resize(function() {
                width = cvs.clientWidth;
                height = cvs.clientHeight;
            });
            cvs.addEventListener("mousemove", e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        }

    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
    }

    if (item == "33") {
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }

    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }

    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 11
                }
            };
        }
    }
    if(isEnemyNear == false && autoaim == true) {
        normalAcc = 11;
        if (myPlayer.y < 2400){
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            normalHat = 31;
        } else {
	        normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
    if(item == "h" && data[1] == myPlayer.id) {
        if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
            setTimeout( () => {
                place(foodType, null);
            }, healSpeed);

        }
    }
    update();
}


function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}

function acc(id) {
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, id, 1]]);
}

function hat(id) {
    doNewSend(["13c", [0, id, 0]]);
}


function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}

function boostSpike() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}


var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };


}

const healer = repeater(81, () => {place(foodType)}, 0);
const boostPlacer = repeater(70, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);

var allContainers = [accessories, hats, objects, weapons, activeObjects];
function obs(objName){
    for (let container of allContainers){
       for (let obj of container){
           if (obj.name.toLowerCase() == objName.toLowerCase()){
             return obj.id;
           }
       }
    }

    return -1;

}

function bullHelmet2(status){
    console.info(status);
    var dataTemplate = {"data":[], "options":{"compress":true}, "nsp": "/", "type": 2};
    if (!status.includes("m")){
        if (!status.includes(`a`)){
        dataTemplate["data"] = ["13c", [0, status == "on" ? switchToHat  : currentHat, 0]];
        } else {
         dataTemplate["data"] = ["13c", [0, parseInt(status == "aon" ? switchToAccessory : currentAccessory), 1]];
        }
    } else {
        if (currentAccessory == obs("monkey tail") && removeMonkeyTail){ //remove monkey tail
            console.info("HERE2");
            dataTemplate["data"] = ["13c", [0, status == "mOn" ? obs("monkey tail") : 0, 1]];
        } else {
             console.info("HERE");
             dataTemplate["data"] = ["13c", [0, currentAccessory, 1]];
        }
    }
    console.info(dataTemplate["data"]);
    let encoded = encodeSEND(dataTemplate["data"]);
    return encoded;
}

function encodeSEND(json){
    let OC = msgpack5.encode(json);
    var aAdd =  Array.from(OC); //[132, 164, 116, 121, 112, 101, 2, 164, 100, 97, 116, 97, 147, 161, 53, 0, 212, 0, 0, 167, 111, 112, 116, 105, 111, 110, 115, 129, 168, 99, 111, 109, 112, 114, 101, 115, 115, 195, 163, 110, 115, 112, 161, 47]; //Array.from(OC);
    return new Uint8Array(aAdd).buffer;
}

var switchToAccessory = obs("blood wings");
var currentHat = 0;
var currentAccessory = 0;
var removeMonkeyTail = true;
var monkeyTail = obs("monkey tail");
var switchToHat = obs("Tank Gear");
var invalidHats = [obs("shame!")]
console.log(invalidHats);

document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);

    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
             let angle = myPlayer.dir + toRad(i * 72);
             place(millType, angle)
        }
    }
    if (e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(wallType, angle)
        }
    }
    if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(spikeType, angle)
        }
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }

    if (e.keyCode == 77 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(15);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(31);
        } else {
	        hat(12);
        }
        acc(11);
    }

    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 11, 1]]);
            autoaim = false;
        }, instaSpeed);
    }


    if(e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }

    if(e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF | Hat: OFF"
            } else {
                document.title = "Heal: OFF | Hat: ON"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON | Hat: OFF"
            } else {
                document.title = "Heal: ON | Hat: ON"
            }
        }
    }
    if(e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["5", [secondary, true]]);
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["6", [12]]);
        }, 300);

        setTimeout( () => {
            doNewSend(["6", [15]]);
        }, 300);

        setTimeout( () => {
            doNewSend(["c", [0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["5", [primary, true]]);
            autoaim = true;
        }, 300);
    }

    if(e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [4]]);
    }

    if(e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
    }
    if(e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
    }
    if(e.keyCode == 66 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF | Hat: OFF"
            } else {
                document.title = "Heal: OFF | Hat: ON"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON | Hat: OFF"
            } else {
                document.title = "Heal: ON | Hat: ON"
            }
        }
    }
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }
})


function isElementVisible(e) {
    return (e.offsetParent !== null);
}


function toRad(angle) {
    return angle * 0.01745329251;
}

function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}


document.title = "Heal: ON | Hat: ON"

function update() {
    for (let i=0;i<9;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            primary = i;
        }
    }

    for (let i=9;i<16;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            secondary = i;
        }
    }

    for (let i=16;i<19;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            foodType = i - 16;
        }
    }

    for (let i=19;i<22;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            wallType = i - 16;
        }
    }

    for (let i=22;i<26;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spikeType = i - 16;
        }
    }

    for (let i=26;i<29;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            millType = i - 16;
        }
    }

    for (let i=29;i<31;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            mineType = i - 16;
        }
    }

    for (let i=31;i<33;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            boostType = i - 16;
        }
    }

    for (let i=33;i<39;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString())) && i != 36){
            turretType = i - 16;
        }
    }

    spawnpadType = 36;
}
