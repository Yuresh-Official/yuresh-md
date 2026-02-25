 const fs = require('fs')
const path = require('path')

// settings.json file path එක - අවශ්‍ය නම් වෙනස් කරන්න
const settingsPath = path.join(__dirname, '../settings.json')

let cache = null

const get_set = () => {
    if (cache) return cache

    try {
        const rawData = fs.readFileSync(settingsPath)
        cache = JSON.parse(rawData)
        return cache
    } catch (err) {
        console.error('⚠️ get_set error:', err)
        return {}
    }
}

module.exports = { get_set }
