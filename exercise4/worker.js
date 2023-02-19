let itv = null;

// function randomRgba() {
//     return (
//         "rgba(" +
//         Math.round(Math.random() * 255) +
//         "," +
//         Math.round(Math.random() * 255) +
//         "," +
//         Math.round(Math.random() * 255) +
//         "," +
//         Math.random().toFixed(1) +
//         ")"
//     );
// }

self.onmessage = (e) => {
    if (e.data.do === "Start") {
        itv = setInterval(() => {
            self.postMessage({
                time: new Date().toString(),
                // mybg: randomRgba(),
                // color: randomRgba(),
            });
        }, 1000);
        console.log("Start");
    } else if (e.data.do === "Stop") {
        clearInterval(itv);
        console.log("Stop");
    }
};
