const router = require('express').Router()
const { getAllPosts, getOnePost, addPost, deletePost, updatePost } = require('../controllers/index')

const { validateJWT } = require('../middleware/auth')

router.get('/', (req, res) => {
    res.send("Test Home page")
})

router.get('/all', getAllPosts)
router.get('/:id', getOnePost)
router.post('/', validateJWT, addPost)
router.delete('/:id', validateJWT, deletePost)

router.put('/:id', validateJWT, updatePost)

module.exports = router