const fetch = require('node-fetch');
const findServer = require('./findServer')

describe('findServer function', () => {
    const servers = [
        {
            url: "https://something10.com",
            priority: 10
        },
        {
            url: "https://something1.com",
            priority: 1
        },
    ]
    
    it('will call fetch equal to number of servers', async () => {
        fetch.mockResponse(JSON.stringify({message:'something'}), {status:200});
        await findServer(servers);
        expect(fetch).toBeCalled()
        expect(fetch).toBeCalledTimes(2)
    })

    it('throws error if there are no online servers available', async () => {
        fetch.mockResponse(JSON.stringify({message:'something'}), {status:100});
        try {
            await findServer(servers)
        } catch (e) {
            expect(e).toBe("There are no available servers at the moment.");
        }
    })
    
    it('throws error if fetch timed out', async () => {
        jest.setTimeout(10000)
        try {
            fetch.mockResponse(
            () =>
            new Promise(resolve => setTimeout(() => resolve({ body: 'ok' , status:200}), 5100))
            )
            await findServer(servers)
        } catch (e) {
            expect(e).toBe("There are no available servers at the moment.");
        }
    })

    it('returns a url string when supplied with at least one server that is online in data array, if more than one gets url from first with lowest priority', async () => {
        fetch.mockResponse(JSON.stringify({message:'something'}), {status:200});
        let serverUrl = await findServer(servers);
        expect(serverUrl).toBe('https://something1.com')
    })
})