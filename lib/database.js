const EnvVar = require('./mongodbenv');

// GET one value by key
const getEnv = async (key) => {
    try {
        const result = await EnvVar.findOne({ key });
        return result?.value || 'false';
    } catch (err) {
        console.error('Error getting environment variable:', err.message);
        throw err;
    }
};

// SET or UPDATE env value
const setEnv = async (key, value) => {
    try {
        await EnvVar.findOneAndUpdate(
            { key },
            { value },
            { upsert: true, new: true }
        );
        console.log(`✅ Updated ${key} = ${value}`);
    } catch (err) {
        console.error('Error updating environment variable:', err.message);
        throw err;
    }
};

// GET all envs
const readEnv = async () => {
    const envVars = await EnvVar.find({});
    const envObject = {};
    envVars.forEach((env) => {
        envObject[env.key] = env.value;
    });
    return envObject;
};

module.exports = {
    getEnv,
    setEnv,
    readEnv
};
