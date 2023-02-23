let itv = null;

self.onmessage = (e) => {
    if (e.data.do === "Start") {
        itv = setInterval(() => {
            self.postMessage({
                time: new Date().toString(),
            });
        }, 1000);
        console.log("Start");
    } else if (e.data.do === "Stop") {
        clearInterval(itv);
        console.log("Stop");
    }
};
