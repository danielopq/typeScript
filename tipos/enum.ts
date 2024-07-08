(()=>{
    enum audioLevel {
        min = 1,
        medium = 5,
        max = 10
    }

    let currentLevel = audioLevel.medium;

    console.log({currentLevel});
    console.log(audioLevel);
})()