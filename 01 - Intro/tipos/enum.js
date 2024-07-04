"use strict";
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 1] = "min";
        audioLevel[audioLevel["medium"] = 5] = "medium";
        audioLevel[audioLevel["max"] = 10] = "max";
    })(audioLevel || (audioLevel = {}));
    let currentLevel = audioLevel.medium;
    console.log({ currentLevel });
    console.log(audioLevel);
})();
