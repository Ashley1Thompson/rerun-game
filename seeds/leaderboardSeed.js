
const { Stats } = require('../models');

const statisticdata = [
  {
    "id": "1",
    "userId": "4",
    "bestRun": "3:30",
    "username": "Ayush"
    
},
{
    "id": "2",
    "userId": "3",
    "bestRun": "3:00",
    "username": "Ashley"
    
},
{   "id": "3",
    "userId": "2",
    "bestRun": "2:30",
    "username": "Corbin"
    
},
{   "id": "4",
     "userId": "1",
    "bestRun": "1:30",
    "username": "Auggie"
    
}
];

const seedStatistics = () => Stats.bulkCreate(statisticdata);

module.exports = seedStatistics;
