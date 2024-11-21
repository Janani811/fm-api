import {Router} from "express"

import controller from "./auth.controller"

const router = Router()

router.post("/login", controller.login)

router.post("/signup", controller.signUp)

export default router
