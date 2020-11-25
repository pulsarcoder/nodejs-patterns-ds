import { expect } from 'chai';
import ServiceRegistry from './ServiceRegistry';

describe("service-registry - basic functionality", () => {
    beforeEach(() => {
        ServiceRegistry.register("service1", "1.0.0", "127.0.0.1", "3000");
        ServiceRegistry.register("service2", "1.0.0", "127.0.0.1", "3001");
        ServiceRegistry.register("service1", "1.1.0", "127.0.0.1", "3002");
        ServiceRegistry.register("service1", "1.2.0", "127.0.0.1", "3003");
    })
    afterEach(() => {
        ServiceRegistry.clearAll();
    })
    it("returns the service requested", () => {
        const actual = ServiceRegistry.find("service1", "1.0.0");
        expect(actual).not.null;
    })

    it("returns null if service not found", () => {
        const actual = ServiceRegistry.find("service3", "1.0.0");
        expect(actual).to.be.null;
    })

    it("gets all the services from registry", () => {
        
    })

    it("clears all the services in registry", () => {

    })
})