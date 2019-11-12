import router from './router'
import { Route } from 'vue-router'
import { UserModule } from './store/modules/user'
import Axios from 'axios'


router.beforeEach(async(to: Route, from: Route, next: any) => {
  if (UserModule.token) {
    await UserModule.GetUserInfo()
    next()
  } else {
    next()
  }
})
