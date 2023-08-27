const router = require('express').Router();

const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getThought).delete(deleteThought);

//router.route('/:thoughtId/reactions').post(addReaction)

//router.router('/:thoughId/reactions/:reactionId').delete(deleteReaction)

//.put(updateThought)

module.exports = router;