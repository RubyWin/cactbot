// Requires resources/regexes.js

 var gDbSpellNames = {
  0xbe: 'Physick',
  0x1d94: 'Protect',

  // O1S
  7901: "Blaze",
  7894: "Breath Wing",
  7891: "Charybdis",
  7902: "Clamp",
  7896: "Downburst",
  7889: "Levinbolt",
  7892: "Roar",
  7900: "The Classical Elements",
  7887: "Twin Bolt",

  // O2S
  9054: "-100 Gs",
  9057: "Antilight",
  9071: "Death's Gaze",
  9076: "Earthquake",
  9047: "Epicenter",
  9073: "Evilsphere",
  9059: "Gravitational Manipulation",
  9074: "Gravitational Wave",
  9050: "Maniacal Probe",

  // O3S
  8939: "Critical Hit",
  8940: 'Spellblade Fire III',
  8941: 'Spellblade Blizzard III',
  8942: 'Spellblade Thunder III',
  8943: "Spellblade Holy",
  8946: "Pole Shift",
  8948: 'Haste',
  8949: 'Haste III',
  8950: 'Dimensional Wave',
  8951: "Ribbit",
  8952: "Squelch",
  8953: 'Oink',
  8954: 'Mindjack',
  8955: 'Place Token',
  8956: 'Place Dark Token',
  8960: 'The Playing Field',
  8961: 'The Game',
  8964: 'Panel Swap',
  8966: "The Queen's Waltz (Clock)",
  8968: "The Queen's Waltz (Tether)",
  8977: 'White Wind',
  8970: "The Queen's Waltz (Crystal)",
  8974: "The Queen's Waltz (Book)",

  // O4S-1
  9204: "Dualcast",
  9205: "Fire III",
  9207: "Blizzard III",
  9209: "Thunder III",
  9211: "Fire III (Stop)",
  9212: "Blizzard III (Move)",
  9213: "Thunder III (AOE)",
  9214: "Vacuum Wave",
  9215: "White Hole",
  9220: "Meteor",
  9222: "Black Hole",
  9224: "The Decisive Battle",

  // O4S-2
  9241: "Aero III",
  9239: "Almagest",
  9251: "Charybdis",
  9246: "Delta Attack",
  9244: "Double Attack",
  9242: "Earth Shaker",
  9248: "Emptiness",
  9230: "Flood Of Naught (Inner)",
  9231: "Flood Of Naught (Outer)",
  9233: "Flood Of Naught (Purple Blue)",
  9234: "Flood Of Naught (Blue Purple)",
  9238: "Flood Of Naught (Charge)",
  9259: "Grand Cross Alpha",
  9260: "Grand Cross Delta",
  9261: "Grand Cross Omega",
  9247: "Light And Darkness",
  9252: "Meteor",
  9258: "The Final Battle",
  9245: "Vacuum Wave",
}

document.addEventListener("onLogEvent", function(e) {
  // The format for FFXIV plugin-injected lines. These lines have different
  // ids than the game provided lines for abilities for some reason.
  // "{time} {logtype}:ability:Person starts using Thing on Person."
  var kReAbilitySpellStart = Regexes.Parse('\y{TimeStamp} \y{LogType}:(\y{AbilityCode}):\y{Name} starts using (\y{Name}) on \y{Name}\.');

  for (var i = 0; i < e.detail.logs.length; i++) {
    var log = e.detail.logs[i];

    var r = log.match(kReAbilitySpellStart);
    if (r != null) {
      var code = parseInt(r[1], 16);
      var name = r[2];
      if (!(code in gDbSpellNames)) {
        gDbSpellNames[code] = name;
      }
    }
  }
});