export default (() => {
    let services = [];

    const register = (name, version, ip, port) => services[name + version] = `http://${ip}:${port}`;

    const getRegister = (name, version) => services[name + version] ? services[name + version] : null;

    const clearAll = () => services = [];

    const fetchAll = () => services;

    return {
        register: (name, version, ip, port) => register(name, version, ip, port),
        find: (name, version) => getRegister(name, version),
        fetchAll: () => fetchAll(),
        clearAll: () => clearAll()
    }
})();