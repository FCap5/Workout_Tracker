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
      res.status(400).json(err);
      console.error(err);
      console.log(err);
    });
});

// put /api/workouts/:id - (add exercise) put new workout - returns: ?
router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((workoutInstance) => {
      res.json(workoutInstance);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
});
// post api/workouts - (create workout) create a new workout - takes all information from workout and saves to DB
//              -- return: success message
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((workoutInstance) => {
      console.log(workoutInstance);
      res.json(workoutInstance).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
});
// get /api/workouts/range - (getworkouts in range)
router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .limit(7)
    .then((workoutInstance) => {
      console.log(workoutInstance);
      res.json(workoutInstance);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
});
module.exports = router;
