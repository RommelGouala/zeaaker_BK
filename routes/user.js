const router = require('express').Router()
const { getAllUsers, getOneUser, addUser, deleteUser, loginUser, updateUser } = require('../controllers/user')

const { validateJWT } = require('../middleware/auth')

router.get('/', (req, res) => {
    res.send("Test User page")
})

router.get('/all', getAllUsers)
router.get('/:id', validateJWT, getOneUser)
router.post('/login', loginUser)
router.post('/', addUser)
router.delete('/:id', deleteUser)

router.put('/:id', validateJWT, updateUser)

module.exports = router