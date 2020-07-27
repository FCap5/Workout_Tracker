const router = require('express').Router();
const Workout = require('../models/workout');

// router.post()

// get /api/workouts - get last workout -  returns: most recent workout
router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then((workoutInstance) => {
      res.json(workoutInstance);
    })
    .catch((err) => {
      res.status(400).json({ message: 'error' });
    });
});

// put /api/workouts/:id - (add exercise) put new workout - returns: ?
router.put('/api/workouts/:id', (req, res) => {});
// post api/workouts - (create workout) create a new workout - takes all information from workout and saves to DB
//              -- return: success message
// get /api/workouts/range - (getworkouts in range)

module.exports = router;
