const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Thom", "Johnny", "Ed", "Colin","Philip"],       // Names
    ["http://portalternativo.com/wp-content/uploads/2015/01/Thom-Yorke.jpg", // Images
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jonny_Greenwood_in_Geneva_(2015).jpg/175px-Jonny_Greenwood_in_Geneva_(2015).jpg", 
   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ed-obrien2006-05Radiohead.jpg/1920px-Ed-obrien2006-05Radiohead.jpg",
   "https://en.wikipedia.org/wiki/File:CGreenwood2006-06Radiohead.jpg",
   "https://en.wikipedia.org/wiki/File:Phil_Selway.jpg"],
    [400, 300, 300, 250, 250],                    // HP values
    [80, 100, 110, 120, 120],                       // Attack damage values
        "Muse",
    "https://i.imgur.com/PorG01d.jpeg",
    10000, //hp
    50, //attack
  );
  await gameContract.deployed();
   console.log("Contract deployed to:", gameContract.address);
  
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();