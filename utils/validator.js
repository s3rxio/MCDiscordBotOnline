module.exports = async (config) => {
    // Check type of config
    if(typeof config !== "object") throw new Error("Config must be a object");
    
    // Check config structure.
    if(typeof config.BOTS !== "object") throw new Error("Config > BOTS must be a object");
    
    
    // Check BOTS configuration.
    if(!Array.isArray(config["BOTS"]["servers"])) throw new TypeError("globalPrefix must be a string");

    // If servers check all
    config["BOTS"]["servers"].forEach(server => {
        if (typeof server.IP !== "string") throw new TypeError(`SERVER WITH ${server.PORT} > PORT must be a string`);
        if(typeof server.TOKEN !== "string") throw new TypeError(`SERVER WITH ${server.TOKEN} > TOKEN must be a string`);
    })
}