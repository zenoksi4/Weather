const axios = require('axios')



const getWeather = async (req, res) => {
    try {


        res.status(200).json(
            {
                message: 'hi'
            })
        
    } catch (error) {
        res.status(500).json({ message: "Failed to get weather: " + error})
    }
}



module.exports = {
    getWeather
}