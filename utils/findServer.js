const fs = require('fs') 
const fetch = require('node-fetch')
const AbortController = require('abort-controller')

async function getOnlineServer(url, priority){
    const controller = new AbortController();
    
    let timeout = setTimeout(
    () => { controller.abort(); },
        5000
    );
    try{
                    
        let serverResponse = await fetch(url, { signal: controller.signal, method: "GET"})
            
        if(serverResponse){
            if(Number(serverResponse.status) >= 200 && Number(serverResponse.status) <= 299){
                return {url:url, priority: priority}
            }
        }    
    }catch(err){

    }finally{
        clearTimeout(timeout)
    }
}

async function findServer(servers){
    return new Promise(async (resolve, reject) => {
            
            let onlineServers = []
    
            try{
                for(let i = 0; i < servers.length; i++){
                    onlineServers.push(getOnlineServer(servers[i].url, servers[i].priority))                 
                }
    
                let serverResolvedPromises = await Promise.all(onlineServers)
    
                let filteredOnlineServers = serverResolvedPromises.filter(resolvedValue => resolvedValue !== undefined)
                
                if(filteredOnlineServers.length > 0){
                    let sortedOnlineServers = filteredOnlineServers.sort((a, b) => Number(a.priority) - Number(b.priority))
                    
                    resolve(sortedOnlineServers[0].url)
                }else{
                    reject('There are no available servers at the moment.')
                }
    
            }catch(err){
                
            }
        })
    
}

module.exports = findServer