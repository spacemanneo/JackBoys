let sel, box;
let 𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬;
let 𝐂𝐚𝐫𝐬;
let 𝙎𝙠𝙞𝙢𝙖𝙨𝙠𝙨;
let 𝐓𝐫𝐚𝐯𝐢𝐬;

let options = ["𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬", "𝐂𝐚𝐫𝐬", "𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬", "𝐓𝐫𝐚𝐯𝐢𝐬"];

let music = ["𝗝𝗮𝗰𝗸𝗕𝗼𝘆𝘀", "𝐇𝐢𝐠𝐡𝐞𝐬𝐭"];

function preload() {
  𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬 = createImg("car.jpg", "photo of 𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬");
  𝐂𝐚𝐫𝐬 = createImg("cars.png", "photo of 𝐂𝐚𝐫𝐬");
  𝐂𝐚𝐫𝐬.hide();
    𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬= createImg("skis.jpg", "photo of 𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬");
 𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬.hide();
  𝐓𝐫𝐚𝐯𝐢𝐬 = createImg("travis.jpg", "photo of 𝐓𝐫𝐚𝐯𝐢𝐬");
  𝐓𝐫𝐚𝐯𝐢𝐬.hide();
  
  𝐇𝐢𝐠𝐡𝐞𝐬𝐭 = createAudio("highest.mp3");
 𝗝𝗮𝗰𝗸𝗕𝗼𝘆𝘀 = createAudio("jackboys.mp3");
}

function setup() {
 { textAlign(CENTER);
  sel = createSelect();
  sel.position(25, 25);
  
  for(let i=0; i<options.length; i++)
    sel.option(options[i]);
  
  sel.selected('𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬');
  sel.changed(mySelectEvent);
}
  textAlign(CENTER);
  box = createSelect();
  box.position(130, 25);
  
  for(let i=0; i<music.length; i++)
    box.option(music[i]);
  
  box.selected('𝗝𝗮𝗰𝗸𝗕𝗼𝘆𝘀');
  box.changed(mySelectmusic);
  
}

function mySelectEvent() {
  let item = sel.value();
  
  if(item == "𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬") {
   𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬.position(0, 0);
    𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬.show();
  } else {
    𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝𝐬.hide();
  }
  if(item == "𝐂𝐚𝐫𝐬") {
    𝐂𝐚𝐫𝐬.position(0, 0);
    𝐂𝐚𝐫𝐬.show();
  } else {
    𝐂𝐚𝐫𝐬.hide();
  }
  if(item == "𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬") {
   𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬.position(0, 0);
    𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬.show();
  } else {
    𝐒𝐤𝐢𝐦𝐚𝐬𝐤𝐬.hide();
  }
   if(item == "𝐓𝐫𝐚𝐯𝐢𝐬") {
    𝐓𝐫𝐚𝐯𝐢𝐬.position(0, 0);
    𝐓𝐫𝐚𝐯𝐢𝐬.show();
  } else {
   𝐓𝐫𝐚𝐯𝐢𝐬.hide();
  }
}
  
  function mySelectmusic() {
    let song = box.value();
    if(song == "𝗝𝗮𝗰𝗸𝗕𝗼𝘆𝘀") {
      𝗝𝗮𝗰𝗸𝗕𝗼𝘆𝘀.play();
    }else {
   𝗝𝗮𝗰𝗸𝗕𝗼𝘆𝘀.stop();
  }
     if(song == "𝐇𝐢𝐠𝐡𝐞𝐬𝐭") {
      𝐇𝐢𝐠𝐡𝐞𝐬𝐭.play();
    }else {
   𝐇𝐢𝐠𝐡𝐞𝐬𝐭.stop();
  }
  }